// Vercel serverless function wrapper for Express app
import type { VercelRequest, VercelResponse } from '@vercel/node';
import express, { type Express } from 'express';
import { registerRoutes } from '../server/routes';

let app: Express | null = null;

async function getApp(): Promise<Express> {
  if (app) {
    return app;
  }

  app = express();
  
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  await registerRoutes(app);

  // Error handler
  app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    // Ensure Content-Type is set to JSON and match the format used by contact route
    res.status(status).json({ success: false, error: message });
  });

  return app;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const expressApp = await getApp();
  return expressApp(req, res);
}

