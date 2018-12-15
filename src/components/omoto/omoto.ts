import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { WelcomePage } from '../../pages/welcome/welcome';
import { ThankYouPage } from '../../pages/thank-you/thank-you';
import { SuggestionsPage } from '../../pages/suggestions/suggestions';
import { RecommendPage } from '../../pages/recommend/recommend';
import { OptionPage } from '../../pages/option/option';

@Component({
  selector: 'omoto',
  templateUrl: 'omoto.html'
})
export class OmotoComponent {
  
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
    
  }
  gotoWelcome(){
    this.navCtrl.push(WelcomePage);
  }
  gotoThankyou(){
    this.navCtrl.push(ThankYouPage);
  }
  gotoSuggestions(){
    this.navCtrl.push(SuggestionsPage);
  }
  gotoRecommend(){
    this.navCtrl.push(RecommendPage);
  }
  gotoOption(){
    this.navCtrl.push(OptionPage);
  }
}
