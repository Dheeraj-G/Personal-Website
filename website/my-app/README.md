# Personal Portfolio Website

This is a modern portfolio website built with Vite, React, and Express, deployed on Vercel.

## Structure

- `client/` - React frontend application
- `server/` - Express backend server
- `api/` - Vercel serverless function wrapper
- `shared/` - Shared TypeScript schemas

## Environment Variables

For the contact form to work, you need to set these environment variables in your Vercel project settings:

- `RESEND_API_KEY` - Your Resend API key
- `RESEND_FROM_EMAIL` - The email address to send from (must be verified in Resend)

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

This project is configured for Vercel deployment. The `vercel.json` file handles:
- Building the frontend with Vite
- Setting up the Express server as a serverless function
- Routing API requests to `/api`
- Serving static files from `dist/public`

## Features

- Modern, responsive design
- Contact form with email sending via Resend
- Personal photo and resume link
- Social media links (GitHub, LinkedIn, Email)

