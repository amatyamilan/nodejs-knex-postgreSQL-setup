# copy .env.examplt to .env in root of you directory
```
setup the env as required
```

### To install dependencies
```
npm install
```

### To run application
```
npm run serve
```



# Can be run with docker,
# you don't have to install node and npm with this
```
only setup docker and docker-compose on you machine
```

### To build container
```
docker build -t ali-express:latest .
```

### To run application
```
docker-compose up
```

### To run any command inside docker container
```
docker exec -it app sh
```
