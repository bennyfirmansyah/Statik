import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component'; 

import { BerandaPage } from '../pages/beranda/beranda';
import { LainnyaPage } from '../pages/lainnya/lainnya';
import { PublikasiPage } from '../pages/publikasi/publikasi';
import { TabsPage } from '../pages/tabs/tabs';
import { BrsPage } from '../pages/brs/brs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Publikasi } from '../providers/publikasi';
import { Beranda } from '../providers/beranda';
import { BRS } from '../providers/brs';

@NgModule({
  declarations: [
    MyApp,
    BerandaPage,
    PublikasiPage,
    LainnyaPage,
    BrsPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BerandaPage,
    PublikasiPage,
    LainnyaPage,
    BrsPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Publikasi,
    BRS,
    Beranda
  ]
})
export class AppModule {}
