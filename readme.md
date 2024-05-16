## Building Styles

This project uses Tailwind CSS for styling. To build the styles, follow these steps:

1. **Install Dependencies:** Run `npm install` to install the necessary dependencies.

2. **Build Styles:** 
    ```bash
    npm run styles:css
    ```
Remember to run `npm run styles:css` every time you make changes to styles

## Database Configuration and Seeding

This application uses PostgreSQL for data storage and Knex.js for database migrations. Follow these steps to configure your database and populate it with initial data:

1. **Set up your database:** Use the following commands to set up your database:

    ```sql
    CREATE DATABASE your_database_name;
    CREATE USER your_username WITH PASSWORD 'your_password';
    GRANT ALL PRIVILEGES ON DATABASE your_database_name TO your_username;
    ```

    Replace `your_database_name` and `your_username` with the appropriate values for your PostgreSQL setup.

2. **Configure your environment variables:** Copy the `.env.example` file to a new file named `.env` and replace the placeholders with your actual database information:

    ```plaintext
    DATABASE_URL=your_database_url
    DATABASE_USER=your_database_user_name
    DATABASE_PASSWORD=your_database_password
    DATABASE_NAME=your_database_name
    ```

3. **Install Knex.js and the PostgreSQL driver:** Run the following command in your terminal:

    ```bash
    npm install knex pg
    ```

4. **Initialize Knex.js:** Run the following command in your terminal:

    ```bash
    npx knex init
    ```

    This will create a new `knexfile.js` in your project root. Configure it to use your database.

5. **Run migrations:** Navigate to the directory containing the `knexfile.js` file and use the `knex` command to run migrations:

    ```bash
    npx knex migrate:latest
    ```

    This will create the necessary tables in your database.

6. **Verify the data:** After executing the migrations, you can verify that the tables have been created by querying the database using SQL commands or a database client.

9. **Run the seed:** Run the following command in your terminal to apply the seed:

    ```bash
    npx knex seed:run
    ```

    This will populate your database with the data defined in your seed file.

10. **Verify the data:** After executing the seed, you can verify that the data has been inserted by querying the database using SQL commands or a database client.

That's it! Your database is now configured and ready for use.

## Running the Server

To start the server, navigate to the project directory in your terminal and run the following command:

```bash
npm run start  
```

