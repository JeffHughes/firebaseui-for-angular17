import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { firebase, firebaseui, FirebaseUIModule } from 'firebaseui-angular';
 
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
 
 
const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    {
      scopes: [
        'public_profile',
        'email',
        'user_likes',
        'user_friends'
      ],
      customParameters: {
        'auth_type': 'reauthenticate'
      },
      provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID
    },
    firebase.auth.TwitterAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
    },
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
  ],
  tosUrl: '<your-tos-link>',
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
  signInSuccessUrl: '/home' // Replace '<your-success-redirect-url>' with the actual URL
};
 
const routes: Routes = [
  { path: '', component: AuthComponent }
];

@NgModule({
  declarations: [ AuthComponent],
  imports: [
    CommonModule, 
  
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    RouterModule.forChild(routes) 
  ],
   
})
export class AuthModule { }
