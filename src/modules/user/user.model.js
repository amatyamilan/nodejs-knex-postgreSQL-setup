const moment = require('moment')
const knex = require('../../config/database.config');
const { nearbyUsersInKM } = require('../../config/app.config')

const tableName = 'Users';

const getRecentLoggedInUsers = () => {
  const to = moment.utc().format();
  const from = moment.utc().subtract(2, 'hours').format();

  return knex(tableName).where('onlineStatus', '=', true).andWhereBetween('updatedAt',[from, to]);
}

const getNearbyUsers = (latitude, longitude) => {
  const haversine = `(
    6371 * acos(
        cos(radians(${latitude}))
        * cos(radians(cast(latitude AS DOUBLE PRECISION)))
        * cos(radians(cast(longitude AS DOUBLE PRECISION)) - radians(${longitude}))
        + sin(radians(${latitude})) * sin(radians(cast(latitude AS DOUBLE PRECISION)))
    )
  )`;

  const nearbyUsers = knex('UserProfiles').select(knex.raw(`${haversine} as distance, "userId"`));
  const nearbyUsersDetails = knex(nearbyUsers.as('UserProfiles'))
                             .join(tableName, 'Users.id', '=', 'UserProfiles.userId')
                             .where('distance', '<=', nearbyUsersInKM)
                             .orderBy('name');

  return nearbyUsersDetails;
}

const getRecentRegisteredUsers = () => {
  const to = moment.utc().format();
  const from = moment.utc().subtract(24, 'hours').format();

  return knex(tableName).andWhereBetween('createdAt',[from, to]);
}

const getSearchResult = (filters) => {

  const userProfilesQueryBuilder = knex("UserProfiles").select('userId');

  const { minAge, maxAge, minHeight, maxHeight, relationshipStatusId, bodyTypeId, networth} = filters

  if (minHeight || maxHeight) {
    if (minHeight && maxHeight) {
      userProfilesQueryBuilder.andWhereBetween('height', [minHeight, maxHeight]);
    }else{
      userProfilesQueryBuilder.andWhere('height',minHeight ? '>=' : '<=', minHeight || maxHeight);
    }
    
  }

  if (relationshipStatusId) {
    userProfilesQueryBuilder.andWhere('relationshipStatusId', '=', relationshipStatusId);
  }

  if (bodyTypeId) {
    userProfilesQueryBuilder.andWhere('bodyTypeId', '=', bodyTypeId);
  }

  if (networth) {
    userProfilesQueryBuilder.andWhere('netWorth', '=', networth);
  }

  const usersQueryBuilder = knex(userProfilesQueryBuilder.as('UserProfiles'))
                          .join(tableName, 'Users.id', '=', 'UserProfiles.userId')
                          .orderBy('name');

  // EXTRACT(YEAR FROM age(cast("birthDate" as date))) as age
  if (minAge || maxAge) {
    if (minAge && maxAge) {
      usersQueryBuilder.andWhere(knex.raw(`EXTRACT(YEAR FROM age(cast("birthDate" as date))) between ${minAge} and ${maxAge}`));
    }else{

      usersQueryBuilder.andWhere(knex.raw(`EXTRACT(YEAR FROM age(cast("birthDate" as date))) ${minAge ? '>=' : '<+'} ${minAge || maxAge}`));
    }

  }


  return usersQueryBuilder;
}

module.exports = {
  getRecentLoggedInUsers, getRecentRegisteredUsers, getNearbyUsers, getSearchResult
}