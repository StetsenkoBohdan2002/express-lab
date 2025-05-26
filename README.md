# Express Library

This project is a Node.js application designed to manage a library system. It includes models for authors, books, book instances, and genres, allowing for a structured approach to handling library data.

## Project Structure

- **models/**: Contains the data models for the application.
  - **author.js**: Model for authors.
  - **book.js**: Model for books.
  - **bookinstance.js**: Model for instances of books.
  - **genre.js**: Model for genres.
- **app.js**: The main application file that initializes the server and routes.
- **populatedb.js**: A script to populate the database with initial data.
- **package.json**: Contains project metadata and dependencies.

## Installation

To install the necessary dependencies, run:

```
npm install
```

## Usage

To start the application, use the following command:

```
node app.js
```

## License

This project is licensed under the MIT License.