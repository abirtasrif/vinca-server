# Vinca Server

## Introduction

Vinca is a serene oasis that invites you to escape the chaos of everyday life and indulge in a range of personalized services, including massages, facials, body treatments, nail care, hair styling, and wellness rituals. comprehensive beauty package booking and exploration platform that allows users to register, sign-in and book beauty packages.

## Features

- Will be added soon

## Technologies

- Express.js
- Node.js
- MongoDB
- Mongoose
- TypeScript
- JSON Web Tokens (JWT) for authentication

## Models

### User

| Field    | Type               |
| -------- | ------------------ |
| Name     | String             |
| Email    | String             |
| Password | String             |
| photoUrl | String             |
| Role     | Enum [user, admin] |

## API Routes

| SL No. | HTTP Verb | Endpoint            | Description                 | Permission |
| ------ | --------- | ------------------- | --------------------------- | ---------- |
| 1      | POST      | /api/users/register | Register user               | Public     |
| 2      | POST      | /api/users/login    | Login existing user         | Public     |
| 3      | GET       | /api/users          | Get all users               | Admin      |
| 4      | GET       | /api/users/:id      | Get a specific user         | User       |
| 5      | PUT       | /api/users/:id      | Update specific user's info | User       |
| 6      | DELETE    | /api/users/:id      | Delete specific user        | User       |

More Will be updated soon

## Installation

1. Clone this repository.
2. Create an `.env` file with the following variables:
   - `MONGO_URI` (Your MongoDB connection URI)
   - `JWT_SECRET` (A secret key for JWT token generation)
3. Run `yarn` to install project dependencies.
4. Start the development server with `yarn dev`.

## Conclusion

Welcome to Vinca, where tranquility meets transformation. Our serene oasis invites you to escape the chaos of everyday life and indulge in a range of personalized services, including massages, facials, body treatments, nail care, hair styling, and wellness rituals.
