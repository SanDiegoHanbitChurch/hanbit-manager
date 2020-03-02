# Hanbit Manager

provides various administrative functions for San Diego Hanbit Church.

## Tools/Environments used
* [React](https://reactjs.org/)
* [Material UI](https://material-ui.com/)
* [Google firebase](https://firebase.google.com/)
  * firestore - database
  * authentication - oAuth
  * functions - search
  * hosting
    * DEV - [hanbit-manager-dev](https://console.firebase.google.com/u/0/project/hanbit-manager-dev/overview)
    * LIVE - [hanbit-manager-live](https://console.firebase.google.com/u/0/project/hanbit-manager-live/overview)
  * storage (coming soon!)
  * analytics (coming soon!)
* [Algolia](https://www.algolia.com/) - search

## Setup

1. Install NVM
2. Use node 10 as default version
3. Clone this repo
4. Install `firebase-tools`: `npm install -g firebase-tools` 
5. Install package dependencies: `npm install`
6. Start the app: `npm run start`

## Deployment

3. `npm run dev`
