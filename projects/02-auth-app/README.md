# Authentication App Project

A complete authentication app demonstrating user login and registration.

## Features

- User registration
- Login functionality
- JWT token management
- Protected routes
- User profile screen
- Logout functionality

## Getting Started

```bash
npm install
npx react-native run-android
# or
npx react-native run-ios
```

## Technologies Used

- React Native
- React Navigation
- Axios for API calls
- AsyncStorage
- JWT Authentication

## Backend

This project expects a backend API with:
- POST /api/auth/register
- POST /api/auth/login
- GET /api/auth/profile (protected)
- POST /api/auth/logout
