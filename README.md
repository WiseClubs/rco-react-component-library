Node v15.0.1
NPM 6.14.8
Eslint v8.9.0

Started with
> npm init

Installed necessary tools to created components
> npm install react typescript @types/react --save-dev

Created the following file structure
.
├── src
│   ├── components
|   │   ├── Button
|   |   │   ├── Button.tsx
|   |   │   └── index.ts
|   │   └── index.ts
│   └── index.ts
├── package.json
└── package-lock.json

IDE VSCode 
Installed editor config plugin
Generated .editorconfig

> npm install -g eslint
> eslint --init
Config
✔ How would you like to use ESLint? · style
✔ What type of modules does your project use? · esm
✔ Which framework does your project use? · react
✔ Does your project use TypeScript? · No / Yes
✔ Where does your code run? · browser
✔ How would you like to define a style for your project? · guide
✔ Which style guide do you want to follow? · airbnb
✔ What format do you want your config file to be in? · JSON

> npm install --save-dev eslint-plugin-import

Adding Typescript
> npx tsc --init

Adding Rollup
> npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript @rollup/plugin-commonjs rollup-plugin-dts --save-dev

> touch ~/.npmrc

> vim ~/.npmrc
registry=https://registry.npmjs.org/
@YOUR_GITHUB_USERNAME:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_AUTH_TOKEN

Build on local
> npm run rollup

Publish on github
npm publish

Create new app 
> npx create-react-app rco-react-app --template typescript
> npm install @wiseclubs/rco-react-component-library@latest
> import { Button } from '@wiseclubs/rco-react-component-library'