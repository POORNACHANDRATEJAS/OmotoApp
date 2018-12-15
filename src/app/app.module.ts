import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { OmotoComponent } from '../components/omoto/omoto';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePageModule } from '../pages/welcome/welcome.module';
import { ThankYouPageModule } from '../pages/thank-you/thank-you.module';
import { SuggestionsPageModule } from '../pages/suggestions/suggestions.module';
import { RecommendPageModule } from '../pages/recommend/recommend.module';
import { OptionPageModule } from '../pages/option/option.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OmotoComponent 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    WelcomePageModule,
    ThankYouPageModule,
    SuggestionsPageModule,
    RecommendPageModule,
    OptionPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OmotoComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
