# NodeJS pnpm Template

## Dependencies

| Name        | Version   | Package Type | Use                     |
| ----------- | --------- | ------------ | ----------------------- |
| node        | ^20.11.1  | x            | runtime                 |
| pnpm        | ^8.15.3   | x            | build tool              |
| typescript  | ^5.3.3    | -            | dependency              |
| @types/node | ^20.11.19 | D            | NodeJS Types            |
| ts-node     | ^10.9.2   | D            | node-typescript runtime |
| nodemon     | ^3.0.3    | D            | hot reload tool         |

## How to

1. Run `pnpm i` to setup node_modules
1. Run `pnpm build` to build to the `dist/` folder
1. Run `pnpm start` to run the `src/index.ts` file using `ts-node`
1. Run `pnpm run dev` to start `nodemon` running the project using `ts-node` to watch for `*.ts` file changes
