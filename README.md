# Video Game API

![Alt text](./img/screenshot.png)

### [github.com/evRook/API-Project](https://github.com/evRook/API-Project)

<br/>

## About:

<p>
This is a simple API built with express and mongoose for current and past video games.
</p>

<br/>

## Setup:
- Fork and clone this repository
- cd into the Video-Games-API directory:
``` 
$ cd Video-Games-API 
```
- Install dependencies:
``` 
$ npm install express
$ npm install mongoose
$ npm install swagger-ui-express -S 
$ npm install swagger-jsdoc 
```
- Seed the data:
```
$ node lib/db/seed.js
```
- Launch server: 
```
$ node lib/app.js
```
<br/>

## API Navigation:

#### Server will be running on [Localhost:3000](http://localhost:3000/)

<br/>

### READ

| Method | Request | Path |
| --- | --- | --- |
| GET | Documentation | ```/``` |
| GET | All Games | ```/allgames``` |
| GET | All Games by Name | ```/allgames/name/{name}``` |
| GET | All Games by ID | ```/allgames/id/{id}``` |
| GET | All Atari Games | ```/atari```
| GET | Atari Games by Name | ```/atari/name/{name}``` |
| GET | Atari Games by ID | ```/atari/id/{id}``` |
| GET | All Nintendo Games | ```/nintendo```
| GET | Nintendo Games by Name | ```/nintendo/name/{name}``` |
| GET | Nintendo Games by ID | ```/nintendo/id/{id}``` |
| GET | All Playstation 1 Games | ```/ps1```
| GET | Playstation 1 Games by Name | ```/ps1/name/{name}``` |
| GET | Playstation 1 Games by ID | ```/ps1/id/{id}``` |
| GET | All Playstation 2 Games | ```/ps2```
| GET | Playstation 2 Games by Name | ```/ps2/name/{name}``` |
| GET | Playstation 2 Games by ID | ```/ps2/id/{id}``` |
| GET | All Playstation 4 Games | ```/ps4```
| GET | Playstation 4 Games by Name | ```/ps4/name/{name}``` |
| GET | Playstation 4 Games by ID | ```/ps4/id/{id}``` |
| GET | All Xbox Games | ```/xbox```
| GET | Xbox Games by Name | ```/xbox/name/{name}``` |
| GET | Xbox Games by ID | ```/xbox/id/{id}``` |

<br/>

### CREATE

| Method | Request | Path |
| --- | --- | --- |
| POST | Create New Entry in All Games | ```/allgames``` |
| POST | Create New Entry in Atari | ```/atari``` |
| POST | Create New Entry in Nintendo | ```/nintendo``` |
| POST | Create New Entry in PS1 | ```/ps1``` |
| POST | Create New Entry in PS2 | ```/ps2``` |
| POST | Create New Entry in PS4 | ```/ps4``` |
| POST | Create New Entry in Xbox | ```/xbox``` |

<br/>

### UPDATE 

| Method | Request | Path |
| --- | --- | --- |
| PUT | Update Entry in All Games | ```/allgames/{id}``` |
| PUT | Update Entry in Atari | ```/atari/{id}``` |
| PUT | Update Entry in Nintendo | ```/nintendo/{id}``` |
| PUT | Update Entry in PS1 | ```/ps1/{id}``` |
| PUT | Update Entry in PS2 | ```/ps2/{id}``` |
| PUT | Update New Entry in PS4 | ```/ps4/{id}``` |
| PUT | Update New Entry in Xbox | ```/xbox/{id}``` |

<br/>

### DELETE

| Method | Request | Path |
| --- | --- | --- |
| DELETE | Delete Entry in All Games | ```/allgames/{id}``` |
| DELETE | Delete Entry in Atari | ```/atari/{id}``` |
| DELETE | Delete Entry in Nintendo | ```/nintendo/{id}``` |
| DELETE | Delete Entry in PS1 | ```/ps1/{id}``` |
| DELETE | Delete Entry in PS2 | ```/ps2/{id}``` |
| DELETE | Delete New Entry in PS4 | ```/ps4/{id}``` |
| DELETE | Delete New Entry in Xbox | ```/xbox/{id}``` |

<br/>

## Later Additions:
- More Game data
- User Authentication

<br/>

## Built With:

![image](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
<br/>

![image](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) 
<br/>

![image](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
<br/>

![image](https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white)


<br/>

## Acknowledgements:

- [Badges4](https://github.com/alexandresanlim/Badges4-README.md-Profile)

<br/>

## Contributions

- [Source Code](https://github.com/evRook/API-Project)
    - Fork and clone this repository
    - Create a branch (`git checkout -b <your branch name here>`)
    - Commit your changes
    - Push to the branch
    - Create a new Pull Request
- [Issue Tracker](https://github.com/evRook/API-Project/issues)

