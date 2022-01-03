# Minecraft Server Frontend

This project is for the frontend of the [http://minecraft.KaiNoSekai.com](http://minecraft.KaiNoSekai.com) website. It allows verified users to create, run, stop, and modify their minecraft servers. 

# Development

## Prerequisites
Install all of the prerequisites that you haven't installed before.
* Install [Docker](https://docs.docker.com/get-docker/).
* Install Yarn (recommended but not required).
  * Install [NPM/Node](https://nodejs.org/en/)
  * In a terminal, run: `npm install --global yarn`
  * Run `yarn add react-router-dom`
* Install [Git](https://gitforwindows.org/) (generally only needed for Windows devices).
* Clone this repository: `git clone https://github.com/KylerFrazier/minecraft-website`.
* Install the package dependencies with `yarn install`.

## Production (in progress)

The production app is available at [http://minecraft.KaiNoSekai.com](http://minecraft.KaiNoSekai.com). Production builds are automatically deployed with merges to the `main` branch in GitHub.

## Local Development

Run the app in developement mode with audomatic reloads. Viewable on [http://localhost:3000](http://localhost:3000).
```
yarn start
```

Run the app locally as a production build  with docker. Viewable on [http://localhost:8080](http://localhost:3000).

```
docker-compose build
docker-compose up
```

## Testing

Launch the test runner in interactive watch mode.
```
yarn test
```
