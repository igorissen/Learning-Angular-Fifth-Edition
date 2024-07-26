import {InjectionToken} from "@angular/core";

export type AppSettings = {
  apiUrl: string,
  title: string,
  version: string,
}

export const appSettings: AppSettings = {
  apiUrl: 'https://fakestoreapi.com',
  title: 'My e-shop',
  version: '1.0',
}

export const APP_SETTINGS = new InjectionToken<AppSettings>('app.settings');
