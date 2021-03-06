# Hanbit Manager

provides various administrative functions for [San Diego Hanbit Church](http://sdhanbit.org).

## Tools/Environments used
* [React](https://reactjs.org/)
* [Material UI](https://material-ui.com/)
* [Google firebase](https://firebase.google.com/)
  * firestore - database
  * authentication - oAuth
  * functions - data synchronization from firestore to algolia
  * hosting
    * DEV - [hanbit-manager-dev](https://console.firebase.google.com/u/0/project/hanbit-manager-dev/overview)
    * LIVE - [hanbit-manager-live](https://console.firebase.google.com/u/0/project/hanbit-manager-live/overview)
  * storage (coming soon!)
  * analytics (coming soon!)
* [Algolia](https://www.algolia.com/) - search
* [CircleCI](https://circleci.com/) - CI (CD coming soon!)
* Environments
  * [DEV](https://hanbit-manager.dev.firebaseapps.com/)
  * [Live](https://manage.sdhanbit.org)

## Setup

1. Obtain `.env.dev` from [@sangyum](https://github.com/orgs/SanDiegoHanbitChurch/people/sangyum)
2. Install NVM
3. Use node 10 as default version
4. Clone this repo
5. Install `firebase-tools`: `npm install -g firebase-tools` 
6. Install package dependencies: `npm install`
7. Start the app: `npm run start`

## Deployment

* DEV - `npm run dev`
* Live - `npm run live`
