// src/app/app.config.ts
// Configuración principal de la aplicación Angular 17

import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // MUY IMPORTANTE: Esto activa HttpClient en toda la app
    // Sin esto, el servicio no puede hacer peticiones HTTP
    provideHttpClient()
  ]
};
