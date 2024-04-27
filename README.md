

# Writr-Blog Application

This is a user-friendly blog posting application that simplifies content creation and publishing. The application has secure user authentication, an intuitive interface, and a responsive layout. It is built using Hono, Cloudflare, React.js, TypeScript, Tailwind CSS, and Vite.

## Features
- User Authentication
- Intuitive Interface
- Responsive Layout

## Installation Steps

1. Clone the repository:
    ```bash
    git clone https://github.com/royaals/writr-blogs.git
    ```

2. Navigate to the frontend directory and install the dependencies:
    ```bash
    cd frontend
    npm install
    ```
3. Navigate to the backend directory and install the dependencies:
    ```bash
    cd backend
    npm install
    
    ```
4. Rename `.env.example` to `.env` and `wrangler.toml.example` to `wrangler.toml` in the backend folder and update the following values:

    - `DATABASE_URL`: This should be your PostgreSQL database URL. For example, if you're using Docker, it would look something like this: `postgresql://postgres:mysecretpassword@localhost:5432/postgres`. If you're using a PostgreSQL provider like Neon.tech, Supabase, Aiven, etc., use the URL they provide.

5. Edit `wrangler.toml` with the correct Prisma Accelerate connection pool URL.

6. Run Prisma migrations. This command will apply the database schema changes:
    ```bash
    npx prisma migrate dev --name init
    ```

7. Generate the Prisma client. This command will generate the Prisma client code:
    ```bash
    npx prisma generate
    ```

8. Rename `.env.example` to `.env` and update the following values:

    - `VITE_REACT_APP_BACKEND_URL`: `your-backend-url`


9. Start the backend server:
    ```bash
    cd backend
    npm run dev
    ```
10. Start the frontend server:
    ```bash
    cd frontend
    npm run dev
    ```