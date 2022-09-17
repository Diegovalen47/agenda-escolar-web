import React from 'react'
import ReactDOM from 'react-dom/client'
import AppConfig from './App'
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter> {/* Necesario para las rutas de la app */}
      <AppConfig />
    </BrowserRouter>
  </React.StrictMode>
)
