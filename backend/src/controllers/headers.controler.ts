import { Response } from "express";

// headers que pueden ser necesarios llamar en los controladores
// para luego conectar con el frontend
export function setHeaders(res: Response): void {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'application/json'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', 'true'); // If needed
  res.setHeader('Accept', 'application/json'); // If needed
}