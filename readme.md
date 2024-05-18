### How to run the application

## Install Dependencies

Before running the server, you need to install the necessary dependencies. Navigate to the project directory in your terminal and run the following command:

```bash
  npm install
```

## Building Styles
```bash
  npm run styles:css
```
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
    APP_PORT=your_app_port
    ```

3. **Run migrations:**

    ```bash
    npx knex migrate:latest
    ```

    This will create the necessary tables in your database.

4. **Run the seed:** Run the following command in your terminal to apply the seed:

    ```bash
    npx knex seed:run
    ```

    This will populate your database with the data defined in your seed file.

## Running the Server

To start the server, navigate to the project directory in your terminal and run the following command:

```bash
npm run start  
```

## Fetching Events

This application uses a node-cron job to fetch events from the [PredictHq](https://control.predicthq.com/) API every day at 23:59. The cron job is scheduled to run in the background and fetches new events.
