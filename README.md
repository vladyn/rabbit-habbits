# Rabbit Habits

A minimal React Native starter built with Expo and TypeScript.

## Get started

Use Node.js 22.13 or newer, then run:

```sh
npm install
npm start
```

In the Expo terminal, choose iOS, Android, or a device running Expo Go. Run `npm run ios` or `npm run android` to open a simulator directly. The app uses Expo's managed workflow, so native `ios/` and `android/` directories are generated only if needed.

## Checks

```sh
npm run typecheck
npm test
npm run test:coverage
```

The starter screen is in `App.tsx`; its smoke test is in `__tests__/App.test.tsx`. `index.ts` registers the app entry point.
