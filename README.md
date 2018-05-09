# React x Apollo x GitHub API v4 Example

React and Apollo client example with GitHub GraphQL API

## Config
1. Create your GitHub personal access token in accordance with [this guide]( https://developer.github.com/v4/guides/forming-calls/#authenticating-with-graphql).

1. Set your token to `config.js`
```bash
$ sed s/xxxx/<YOUR_ACCESS_TOKEN>/ src/config.default.js > src/config.js
```

## Raunch
```bash
$ yarn start
```