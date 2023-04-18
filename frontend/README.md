# Get Started

### `npm i`
Installs dependencies from package.json

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

# Contributing

### Structure of `/src`

`/pages` - all pages of react app

`/components` - all components

`/api` - backend communication

`/helpers` - reusable helper functions

`/static` - all static data (config, content variables, styles)


### Git
Before making changes, run `git pull` to grab most recent project version

If pulling from a new (remote) branch, run `git fetch`. This grabs all new branches from the remote (origin)

Push all commits to the `front-end` branch

```git add *
git checkout frontend
git commit -m "your commit message"
git push origin front-end
```

For larger changes, push to another branch and create a pull-request describing the features implemented (best practice)
```git add *
git checkout -b new-branch-name
git commit -m "your commit message"
git push origin new-branch-name
```

Commit often!!!

### Dependencies
Add all dependencies that are used to the `package.json` file. This will install the new dependencies for everyone.

If you don't, I will know. **And I will come for you.**

To save a dependency on install, add the `-S` flag to `npm i`. 

### Helpful Resources
VSCode Extensions for React - https://www.syncfusion.com/blogs/post/7-vs-code-extensions-for-react-developers.aspx

React Hooks - https://reactjs.org/docs/hooks-intro.html

MaterialUI Library - https://mui.com/

API Requests - https://mehdiouss.medium.com/how-to-use-async-await-with-the-fetch-api-in-javascript-97cdcca7abbc

Routing - https://reactrouter.com/en/main
