<h1 align="center">Githab-profile-app</h1>

<p align="center">
    <img src='https://img.shields.io/badge/React-17.0.1-blue'>
    <img src='https://img.shields.io/badge/JavaScript-88.7%25-yellow'>
    <img src='https://img.shields.io/badge/SCSS-10.7%25-ff69b4'>
    <img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103" >
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat">
</p>

## [Demo github-profile-app](https://github-profile-app.vercel.app/)

## Description

<p>
An application for displaying information about a GitHub (https://github.com) user and a list of his repositories.
</p>

## Stack

- ReactJS
- React Hooks
- React Pagination
- Axios
- SCSS

## Functionality

- The page has a search box for entering the username of the user.
- When you enter username and press Enter, requests are made to the GitHub API. When receiving responses from the server, the user's data and a list of his repositories are displayed.
- When you click on the username of a user, his profile opens in a new tab.
- When you click on the name of the repository, its page should open in a new tab.
- Shows a separate page (empty state) if the user has no repositories.
- Shows a separate page (empty state) if the user with username does not exist.
- Implemented page-by-page browsing of repositories.

## Project setup

```
git clone https://github.com/andrelaptenok/github-profile-app.git
npm install
npm run build
npm start
```
