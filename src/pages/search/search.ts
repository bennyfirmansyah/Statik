import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, LoadingController } from 'ionic-angular'; //import the modal and view controllers
import { Publikasi } from '../../providers/publikasi';


/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage(

)
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  //create an empty array to hold the results of the search
	allPublication:any =[];
	listDomain:any =[];
	pub:any[]=[];
  page = 1;
  keyword: string = '';
  
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public publicationList: Publikasi, 
              public modalCtrl:ModalController, public viewCtrl:ViewController, public loadingController:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
    let allPublicationLoadingController = this.loadingController.create({
			content: ""
		});
    allPublicationLoadingController.present();
    if(this.page>0){
			allPublicationLoadingController.dismiss();
		}
  }

	showTanggalIndonesia(inputTanggal:string){
		inputTanggal=this.publicationList.getTanggalIndonesia(inputTanggal);
		return inputTanggal;
  }
  
  searchPublikasi(ev: any,keyword) {
    // set val to the value of the searchbar
    this.keyword = keyword;
    console.log('Keyword : '+this.keyword+' Halaman : '+this.page);
    let allPublicationLoadingController = this.loadingController.create({
			content: ""
		});
    allPublicationLoadingController.present();
    this.publicationList.searchPublikasi(this.keyword,this.page).subscribe((publicationListData:any) => {
			this.allPublication= publicationListData.data;
      this.listDomain=this.allPublication[1];
      allPublicationLoadingController.dismiss();
    })
  }

	doInfinite(infiniteScroll) {
	  console.log('Begin async operation');
    this.page = this.page+1;
    // set val to the value of the searchbar
    console.log('Keyword : '+this.keyword+' Halaman : '+this.page);
	  setTimeout(() => {
      this.publicationList.searchPublikasi(this.keyword,this.page).subscribe((publicationListData:any) => {
        for (let pub of publicationListData.data[1]) {
        this.listDomain.push(pub)
        }
      });
      console.log('Async operation has ended');
      infiniteScroll.complete();
	  }, 1000)
  }
  
	launchPubDetailsPage(pub){
		//Use the Modal Contoller to launch the movie details page and pass the movie object for the movie chosen by the User
		let pubModal = this.modalCtrl.create('PubDetilPage', pub);
		pubModal.present();
	}

  dismiss() {
    //closes the search modal and returns to the homepage
    this.viewCtrl.dismiss();
  }


}
