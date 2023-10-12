import { ApplicationConfig } from '@angular/core';
import { Router, provideRouter } from '@angular/router';
import { appRoutes } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes)
  ]
};
