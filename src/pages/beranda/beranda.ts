import { Component } from '@angular/core';
import { NavController,LoadingController,ModalController} from 'ionic-angular';
import { Beranda } from '../../providers/beranda';
import sanitizeHtml from 'sanitize-html';

@Component({
  selector: 'page-beranda',
  templateUrl: 'beranda.html'
})
export class BerandaPage {
	allIndicator:any =[];
	listDomain:any =[];
	indicator:any[]=[];
	page = 1;
    pages: any;

  constructor(public navCtrl: NavController, public loadingController:LoadingController, 
		        public modalCtrl:ModalController, public indicatorList: Beranda) {
                let allIndicatorLoadingController = this.loadingController.create({
					content: `<div class="custom-spinner-container">
								<div class="custom-spinner-box"></div>
							</div>`,
					spinner: 'crescent',
					cssClass: 'transparent',
					duration: 3000
                });
                allIndicatorLoadingController.present();  
                this.indicatorList.getDataIndikatorStrategis(this.page).subscribe((indicatorListData:any) => {
                allIndicatorLoadingController.dismiss();
                this.allIndicator= indicatorListData.data;
				this.pages=this.allIndicator[0].pages;
                this.listDomain=this.allIndicator[1];
                })                
  }

  ionViewDidLoad(){
	var re = /<div align="justify">/gi; 
	var str = '<div align="justify"><ul><li>Pada bulan Mei 2021, Sumatera Barat (gabungan 2 kota) mengalami inflasi sebesar 0,19 persen atau terjadi kenaikan IHK dari 105,37 pada bulan April 2021 menjadi 105,57 pada bulan Mei 2021. <br></li><li>Laju tahun kalender Sumatera Barat (gabungan 2 kota) sampai bulan Mei 2021 mengalami inflasi sebesar 0,24 persen dan tingkat inflasi tahun ke tahun atau Mei 2021 terhadap Mei 2020 tercatat sebesar 1,74 persen. Angka ini terbentuk dari gabungan 2 kota IHK di Sumatera Barat, yaitu Kota Padang dan Kota Bukittinggi. <br></li><li>Pada bulan Mei 2021, Kota Padang mengalami inflasi sebesar 0,19 persen, sedangkan di Kota Bukittinggi terjadi inflasi sebesar 0,26 persen</li></ul></div><br>';
	var newstr = str.replace(re, ""); 
	console.log(newstr)
    console.log('Running Beranda Page');
  }

  doInfinite(infiniteScroll) {
	  console.log('Begin async operation, infiniteScroll');
	  this.page = this.page+1;
	  console.log('Halaman'+this.page);
	  setTimeout(() => {
		if(this.page<=this.pages){
			this.indicatorList.getDataIndikatorStrategis(this.page).subscribe((indicatorListData:any) => {
			for (let pub of indicatorListData.data[1]) {
				this.listDomain.push(pub)
			}
			});
		}else {
			alert('No more data is available.');
		}
		console.log('Async operation has ended, infiniteScroll');
		infiniteScroll.complete();
	  }, 1000)
	}

}
