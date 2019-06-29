import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule} from '@angular/fire/database';


const firebaseConfig = {
  apiKey: "AIzaSyAinWPOUnXZPi2oF1B9buPRHmzjpZpFIEQ",
  authDomain: "resto-demo-d57dd.firebaseapp.com",
  databaseURL: "https://resto-demo-d57dd.firebaseio.com",
  projectId: "resto-demo-d57dd",
  storageBucket: "",
  messagingSenderId: "1049406043690",
  appId: "1:1049406043690:web:e570e1b96ac6b402"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp( firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
