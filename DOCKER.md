Add a .dockerignore:
### `node_modules`

Build and tag the Docker image:
### `$ docker build -t <app_name>:dev .`

Then, spin up the container once the build is done:
### `$ docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm <app_name>:dev`

Using the production Dockerfile, build and tag the Docker image:
### `$ docker build -f Dockerfile-prod -t <app_name>:prod .`
Spin up the container:
### `$ docker run -it -p 80:80 --rm <app_name>:prod`