# 4A00EZ61-3001 Backend-kehitys - Todo-applikaatio

## Ryhmä 04 - Toni Salminen, Aleksi Hietala

## Backend for todo-application

### Features

- Add/edit task
- Delete task/tasks
- Add folder
- Delete folder/folders
- Data validation + error codes

## Install instructions

clone backend repo to folder you or your choise

```
git clone https://github.com/Apluri/todoBackend.git
```

navigate inside backend folder

```
CD todoBackend
```

download node_modules (must be inside the cloned repo)

```
npm install
```

run program

```
node index
```

## Database setup

- > STEP 1: Login to your SQL database
- > STEP 2: copy and paste "db_create.sql" code into your SQL database
- > FILES NEEDED : database/db_create.sql
- > OPTIONAL (test values): database/db_testvalues.sql

## connection configuration

- > STEP 1: Navigate to database/config.js
- > STEP 2: Remove comment tags from process.env
- > STEP 3: Replace dummy values with your SQL login values
  > \*/

### After all these you should be able use your local todoBackend
