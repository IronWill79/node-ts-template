# NodeJS pnpm Template

## Dependencies

| Name | Version | Type |
| --- | --- | --- |
| node | ^20.11.1 | runtime |
| pnpm | ^8.15.3 | build tool |
| typescript | ^5.3.3 | dependency |
| @types/node | ^20.11.19 | dev dependency |

## How to

1. Run `pnpm i` to setup node_modules
1. Run `pnpm build` to build to the `dist/` folder
1. Run `pnpm start` to run the `dist/index.js` file
  - Note. The above fails if the Typescript hasn't been built to `dist/`