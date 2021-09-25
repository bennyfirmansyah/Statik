import { Component } from '@angular/core';
import { NavController, IonicPage, ViewController, NavParams, LoadingController } from 'ionic-angular';
import { Publikasi } from '../../providers/publikasi';

@IonicPage()
@Component({
  selector: 'page-pubDetil',
  templateUrl: 'pubDetil.html'
})

export class PubDetilPage {
  allPublication1:any =[];
  tanggal:string;
  bulan:string;
  tahun:string;  
  //listDomain1:any =[];
  //listDomain1:any[]=[];
  constructor(public navCtrl: NavController,  public navParams: NavParams, 
    public viewCtrl:ViewController, public publicationList1: Publikasi, public loadingController:LoadingController) {
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
		  this.publicationList1.getDetilPublikasi(this.navParams.get('pub_id'))
		.subscribe((publicationListData1:any) => {
		  this.allPublication1= publicationListData1.data;
		  allPublicationLoadingController.dismiss();
		  })    
	  console.log('ionViewDidLoad PubDetilPage');
  }
  
  goToLink(url: string){
    window.open(url, "_blank");
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

	getTanggalIndonesia(inputTanggal:string){
		this.tanggal=inputTanggal.substr(8);
		this.bulan=this.getBulanIndonesia(inputTanggal.substr(5,2));
		this.tahun=inputTanggal.substr(0,4);
		return this.tanggal+" "+this.bulan+" "+this.tahun;
	}

	public getBulanIndonesia(inputBulan:string){
		if (inputBulan=="01"){
			return "Januari";
		} else if (inputBulan=="02"){
			return "Februari";
		} else if (inputBulan=="03"){
			return "Maret";
		} else if (inputBulan=="04"){
			return "April";
		} else if (inputBulan=="05"){
			return "Mei";
		} else if (inputBulan=="06"){
			return "Juni";
		} else if (inputBulan=="07"){
			return "Juli";
		} else if (inputBulan=="08"){
			return "Agustus";
		} else if (inputBulan=="09"){
			return "September";
		} else if (inputBulan=="10"){
			return "Oktober";
		} else if (inputBulan=="11"){
			return "November";
		} 
		else if (inputBulan=="12"){
			return "Desember";
		}
	}

}
