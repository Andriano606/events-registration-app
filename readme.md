## Building Styles

This project uses Tailwind CSS for styling. To build the styles, follow these steps:

1. **Install Dependencies:** Run `npm install` to install the necessary dependencies.

2. **Build Styles:** 
    ```bash
    npm run styles:css
    ```
Remember to run `npm run styles:css` every time you make changes to styles

## Database Configuration and Seeding

This application uses PostgreSQL for data storage. Follow these steps to configure your database and populate it with initial data:

1. **Set up your database:** Use the following commands to set up your database:

    ```sql
    CREATE DATABASE your_database_name;
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

3. **Run the seed script:** Navigate to the directory containing the `seeds.sql` file and use the `psql` command to connect to your PostgreSQL database and run the seed script:

    ```bash
    cd /path/to/your/project/database
    psql -U your_username -d your_database_name -h localhost -p 5432
    \i seeds.sql
    ```

    This will execute the SQL commands in the `seeds.sql` file, populating your database with initial data.

4. **Verify the data:** After executing the script, you can verify that the data has been inserted into the `events` table by querying the table using SQL commands or a database client.

That's it! Your database is now configured and populated with initial data.

## Running the Server

To start the server, navigate to the project directory in your terminal and run the following command:

```bash
node app.js
```

