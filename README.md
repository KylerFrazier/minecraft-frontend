# Minecraft Server Frontend

## Production (in progress)

The production app is available at [http://minecraft.KaiNoSekai.com](http://minecraft.KaiNoSekai.com). Production builds are automatically deployed with merges to the `main` branch in GitHub.

## Developement

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
