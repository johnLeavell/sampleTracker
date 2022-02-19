# Sample Tracker

[Sample Tracker] is an efficient way to manage, organize, and collect infield waste water samples.

## Objective of the Project

Create a central location for receiving and managing the infield waste water sample collection that will significantly reduce the manual effort required.  Improve, automate, and centralize communiucaiton with Lab Professionals and other parties informed of the proccess and cut donwn the human error issues.


## What Technologies are being used in this project?

The back end application is using a MERN stack (MongoDb, Express, React, Node). The back end application is using [Express](https://expressjs.com/) Framework. The frontend application is using the [React](https://reactjs.org/) framework and several other third party libraries, bootstrapped via the [create-react-app](https://github.com/facebook/create-react-app) tool.[MongoDb](https://www.mongodb.com/) is the database for the application.

## Getting Started

In order to get the applicatino up and running, you will need ot install the following:

* NodeJS
* MongoDb

### Installing NodeJS

Install a version of NodeJS that starts with `14.16` (e.g. `14.16.0`).

You should be able to find installation instructions for your particular platform here:

https://nodejs.org/en/download/package-manager/

### Installing MongoDB

MongoDB is our database. You will need to have MongoDB installed on your computer [MongoDB](https://www.mongodb.com/try/download/community)or you can use MongoDB Atlas and manage your data in the cloud[MongoDB Atlas](https://docs.atlas.mongodb.com/getting-started/)

## Dependencies & Start Back End

Start in the root of the project and open the api directory

```
cd api
npm install
```

[mongoose](https://mongoosejs.com/docs/guide.html) is the ODM. This is the preferred way of  communicating with the database, so the tools providee should be leveraged to help you build models and schemas.

### Start Front End

We will now start the frontend. Open up a new tab in the terminal and execute the following commands.

```
  cd ..
  cd app
  npm install
  npm start
```

If you navigate to `http://localhost:3000/` you should see the home page!

### Set Up Environment Variables

- Set Up Environment Variables with DotENV Package [DotENV](https://www.npmjs.com/package/dotenv)

```
  cd packages
  cd api
  touch .env
```

- Add your tokens, MongoUrl, API credentials, and other secrets here they will be ignored by git.