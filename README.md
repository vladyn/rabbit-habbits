# Rabbit Habits

A React Native starter built with Expo SDK 57 and TypeScript. The current screen is a dark movie-list mockup with three fictional titles and local poster artwork. Habit creation, reminders, and progress tracking are not implemented yet.

## Requirements

- Node.js 22.13 or newer and npm
- An Android emulator, iOS simulator on macOS, or a device with Expo Go

## Run locally

```sh
npm ci
npm start
```

Scan the QR code shown by Expo to open the app on a device. To launch a simulator directly, run `npm run ios` or `npm run android`. Follow the [Expo environment setup guide](https://docs.expo.dev/get-started/set-up-your-environment/) if a simulator is not installed. Expo manages the native project; generated `ios/` and `android/` folders are ignored by Git.

## Project layout

| Path | Purpose |
| --- | --- |
| `App.tsx` | Dark movie-list screen and styles |
| `src/data/movies.ts` | Mock movie records |
| `assets/movies/` | Local poster artwork for the mock list |
| `index.ts` | Registers the root component with Expo |
| `app.json` | App name and Expo configuration |
| `__tests__/App.test.tsx` | Welcome-screen component test |
| `AGENTS.md`, `.metaswarm/` | Contributor and Metaswarm guidance |

Place new feature modules under `src/` and keep related tests beside the code or in `__tests__/`. Add images and icons under `assets/` when needed.

## Checks

```sh
npm run typecheck
npm test
npm run test:coverage
```

`typecheck` checks the Expo app with TypeScript strict mode. Jest and React Native Testing Library run the component test. Coverage must meet the 100% threshold in `.coverage-thresholds.json`; update Jest's `collectCoverageFrom` in `package.json` as application files are added.

## Metaswarm workflow

This repository includes a Metaswarm project profile and agent instructions in `AGENTS.md`. Use those instructions when planning and reviewing changes. Keep this README current as the app grows.
