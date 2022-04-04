## This is the PC Showcase App!

We are currently using the MERN stack.
- MongoDB - Document Database
- Express(.js) - Node.js web framework
- React(.js) - A client-side JavaScript Framework
- Node(.js) - The premier JavaScript Web Server

This application is split into two parts.

Part 1: Mock API
This is our backend for our application. This handles requests coming in and going out to communicate with our database. This is section of the database can be accesed at https://pc-showcase-backend.herokuapp.com/builds. Having /builds for the url is to access the builds being saved. This is it's own repository being hosted on Heroku. 

Part 2: User-Facing application
This is our front-end which is meant to handle api responses when going through the CRUD proccess. This is built in react so the information is handled "dynamically". This can be access at https://pc-showcase-app.herokuapp.com/. There isn't much to it other than the basic functions of a CRUD app.

MVP has been hit but there isn't much personality to the website. There is a ton of functionality that can be added later.

These include:
- Proper error handling. 
- Styling the landing page to showcase popular builds.
- Taking into account the ratings that people give the builds.
- Having accounts to claim builds a user has completed.
- Hosting images in cloudinary.
- Signing in and signing out.
- Implementing React Router to "navigate" to different pages.
- Search function for different builds and/or users.
