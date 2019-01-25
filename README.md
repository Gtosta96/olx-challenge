This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Author Decisions and Motivations
---
Although some restrictions were imposed on the test description, I took the liberty to take some personal decisions based on my code style/thoughts that I think aggregates value to the final product.

In the next sections I explain which tools/libraries the project uses and why:

#### 1. Create React App
I'm using CREA in order to skip the configuration step and fast-forward to the development.
This is very valuable, since the less time the team spends on configurations, more time they have to focus on deliverables.

#### 2. Typescript
Typescript is a powerful superset which aggregates high value to the code, increasing readability, maintenance, and enhancing the development speed over time. Although it adds certain complexity, Typescript features are all optional, so that, the team can turn them on gradually.

Bellow some benefits from typescript:
 - Auto Imports / Auto Resolvers
 - Intelisense
 - Type checking - objects / components / etc.
 - Easy refactory
 - High Customizable (Toggle Features)

> **Why** Typescript over flow?
Typescript has a large community, twice as flow in Github stars, and a way better integration with VSCode, which is the most used editor in the day this doc is written. Typescript is also used by default by Angular applications.

#### 3. Tests
CREA provides Jest out of the box, Alongside it, The application uses `React-Test-Renderer` to test React components.

##### Coverage
![tests](https://user-images.githubusercontent.com/11162653/51035752-27e15c80-1592-11e9-87e7-b41db502bc32.jpg)
...

## Enhancements
---

[ ] Improve UI/UX
[ ] Use shallow render to test components
[ ] Implement feedback to Table component when no data is got from the API

## Available Scripts
---
Inside the project directory, you can run:

**App Start**

```shell-script
npm install
npm run start
```

**Tests**
```shell-script
npm run test
npm run test -- coverage
```

**Build**
```shell-script
npm run build
```
---

Many Thanks, 
Gabriel Tosta, gabrieltosta3@gmail.com
