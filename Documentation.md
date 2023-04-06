# Documentation

## Database Structure

The database is compromised of two tables. One is for the found anaimals, and the other is for the lost animals. 

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

