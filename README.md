# File Sharing App - tenatica-ui

A file sharing application that allows one user to share a file with another user.

## Getting started

The app is easy to startup. In development mode, open the `tenatica-ui` root directory and run the following `bash` command.

```bash
    yarn dev
```

Alternatively, if you favour `npm` or do not have `yarn` installed already, use:

```bash
    npm run dev
```

> If everything went well, open the app on `http://localhost:3000`

**NOTE:** It is assumed that you already have [nodejs](https://nodejs.org/) installed on your machine. You can download it [here](https://nodejs.org/).

## Deployment

The app can be deployed to production by various methods. For simplicity, we deploy to vercel.

The application is avalable in production at [here](tenatica-ui.vercel.app).

## Features

`/auth/signup` User Create an account with Email and Password only. They are dirrectly logged in upon successful signup.

`/auth/reset` User can change their password if the forgot or feel the password has been leaked.

`/auth/login` User sigin to the app. The signin is handled by firebase authentication. Information about the user is then stored to the database.

`/files` Displays list of all file shared with little information. User can click on each file to explore more information about the file.

`/files/:fileId` User can see all information about a file; including whom it is being shared with.

`/` This is a page where user can share files with another user.
