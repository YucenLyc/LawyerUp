# LawyerUp

LawyerUp is an LHL final project that helps lawyers and clients to connect with each other. Our objective with this project was to make a platform that makes finding lawyers an easier process.

There are two types of users on LawyerUp: lawyer user and client user.

The blow video clip shows the functionality provided for the client users:

https://user-images.githubusercontent.com/72534921/129591579-bf6fa110-2281-4645-8383-c700ded7a3e3.mov

Client user could add their cases to the app for lawyer users to view and possibly get in touch with them if they are interested in the case.

The client user could also search for a lawyer who specialize in the field of law their case is invovled in. After reaching to the lawyer's profile page, they have the option of messaging the lawyer and ask for assistance.

After reaching to an agreement, if a lawyer decides to take the client's case, the client could assign the case to that lawyer and let the system know that they are no longer searching for a lawyer for that case.

https://user-images.githubusercontent.com/72534921/129595250-42e412b4-84bb-4ca0-879d-c1a835c3cc4b.mov

Lawyer user could search for clients/cases through law field. A business lawyer could go the business law field to view all the open cases for business law. 
If the lawyer is interested in the case, they could take the initiative and message the client to offer their service. 

## Project Setup
1. go into react folder and install dependancies with npm install.
2. go into express folder and install dependancies with npm install.
3. go into vagrant, psql and create database using "psql -U development"
4. create database called "lawyer_up"
5. run "npm start" on the react folder
6. run "npm start" on the express folder
7. go to "localhost:8001/api/debug/reset" to seed the database.
8. the react server should run at localhost:8000.

## Tech Stacks
* React
* Node.js
* Express.js
* Axios
* PostgreSQL
* Websocket