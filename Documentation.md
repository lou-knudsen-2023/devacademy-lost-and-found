# Documentation

## Purpose

The purpose of this app is to post found and losts animals, so that they can reconnect with their owners.

## Team

Our team involved Shadae, Emily, Jen, Lou, Ado, Andrew, Sacha, and Jordan. 
We all had specific roles and content we worked on.

Shadae had the role of Vibes Manager, and worked on the documentation and the front end. 
Emily worked on both the front end and the back end.
Jen had the role of Product Owner, and worked on deployment and the front end.
Lou worked on the front end.
Ado had the role of Front End Lead and so, worked on the front end.
Andrew had the role of Git Watcher and worked on the back end.
Sacha had the role of Scrum Master and worked on the front end.
Jordan had the role of Back End Lead and so, worked on the back end.

## Database Structure

The database is compromised of two tables. One is for the found animals, and the other is for the lost animals. 

### Found

The found table stores the animals that users have found. This contains the following columns:
- table.increments('id').primary()
- table.string('species')
- table.string('photo')
- table.string('user_id')
- table.string('user_name')
- table.string('user_contact')

### Lost

The lost table stores the animals that users have lost. THis contains the following columns:
- table.increments('id').primary()
- table.string('name')
- table.string('species')
- table.string('photo')
- table.string('user_id')
- table.string('user_name')
- table.string('user_contact')

## API Routes

## 