import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { AngularFireModule } from '@angular/fire/compat'; 

const firebaseConfig = {
  "projectId": "relivetheshowsite",
  "appId": "1:628040606676:web:8028c17d97203eb3e76c41",
  "storageBucket": "relivetheshowsite.appspot.com",
  "apiKey": "AIzaSyBJZozmvj1vSnK_37mYj9rT9IzgFJ3rSJU",
  "authDomain": "relivetheshowsite.firebaseapp.com",
  "messagingSenderId": "628040606676",
  "measurementId": "G-WJ2WS1W74H"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    // importProvidersFrom(provideFirebaseApp(() => initializeApp(firebaseConfig))),
    importProvidersFrom(provideAuth(() => getAuth())),
  
    importProvidersFrom(AngularFireModule.initializeApp(firebaseConfig)), 
  ]
};
