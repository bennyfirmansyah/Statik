import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController, NavParams, LoadingController } from 'ionic-angular';
import { BRS } from '../../providers/brs';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * Generated class for the BrsdetilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-brsdetil',
  templateUrl: 'brsdetil.html',
})
export class BrsdetilPage {

  allPublication1:any =[];
  tanggal:string;
  bulan:string;
  tahun:string;  
  html:any;
  constructor(public navCtrl: NavController,  public navParams: NavParams, 
    public viewCtrl:ViewController, public publicationList1: BRS, public loadingController:LoadingController,private sanitizer: DomSanitizer) {
  }

  ionViewDidLoad() {
	let allPublicationLoadingController = this.loadingController.create({
		content: `<div class="custom-spinner-container">
					<div class="custom-spinner-box"></div>
				</div>`,
		spinner: 'crescent',
		cssClass: 'transparent',
		duration: 3000
	});	  
	allPublicationLoadingController.present();
		  this.publicationList1.getDetilBRS(this.navParams.get('brs_id'))
		.subscribe((publicationListData1:any) => {
		  this.allPublication1= publicationListData1.data;
		  allPublicationLoadingController.dismiss();
		  })    
	  console.log('ionViewDidLoad PubDetilPage OK'+this.allPublication1.title);
  }
  
  goToLink(url: string){
    window.open(url, "_blank");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
