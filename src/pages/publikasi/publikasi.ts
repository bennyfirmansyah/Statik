import { Component } from '@angular/core';
import { NavController,LoadingController,ModalController} from 'ionic-angular';
import { Publikasi } from '../../providers/publikasi';

@Component({
  selector: 'page-publikasi',
  templateUrl: 'publikasi.html'
})

export class PublikasiPage {  
	allPublication:any =[];
	listDomain:any =[];
	pub:any[]=[];
	page = 1;
	pages: any;
	keyword: string = '';
	keyTahun: any;
	getSelectedValue: string='';
	lengthArray: any;
	someItems = [{'id': '', 'value':'Semua'},
				{'id': 2000, 'value':'2000'},
				{'id': 2007, 'value':'2007'},
				{'id': 2008, 'value':'2008'},
				{'id': 2009, 'value':'2009'},
				{'id': 2010, 'value':'2010'},
				{'id': 2011, 'value':'2011'},
				{'id': 2012, 'value':'2012'},
				{'id': 2013, 'value':'2013'},
				{'id': 2014, 'value':'2014'},
				{'id': 2015, 'value':'2015'},
				{'id': 2016, 'value':'2016'},
				{'id': 2017, 'value':'2017'},
				{'id': 2018, 'value':'2018'},
				{'id': 2019, 'value':'2019'},
				{'id': 2020, 'value':'2020'},
				{'id': 2021, 'value':'2021'}];
    
	constructor(public navCtrl: NavController, public loadingController:LoadingController, 
		public modalCtrl:ModalController, public publicationList: Publikasi) {
	}

	ionViewDidLoad(){
		console.log('ionViewDidLoad PublikasiPage');
		let allIndicatorLoadingController = this.loadingController.create({
			content: `<div class="custom-spinner-container">
			  		  <div class="custom-spinner-box"></div>
				     </div>`,
			spinner: 'crescent',
			cssClass: 'transparent',
			duration: 3000
		});
		allIndicatorLoadingController.present();  
		this.publicationList.getData(this.page).subscribe((publicationListData:any) => {
			allIndicatorLoadingController.dismiss();
			this.allPublication= publicationListData.data;
			this.pages=this.allPublication[0].pages;
			this.listDomain=this.allPublication[1];
			console.log('Total Halaman : '+this.pages);
		  })		
	}

	getOuterName(event){
		console.log(this.getSelectedValue);
		this.keyTahun=this.getSelectedValue;
		console.log(event);
		let allIndicatorLoadingController = this.loadingController.create({
			content: `<div class="custom-spinner-container">
			  		  <div class="custom-spinner-box"></div>
				     </div>`,
			spinner: 'crescent',
			cssClass: 'transparent',
			duration: 3000
		});
		allIndicatorLoadingController.present(); 
		if(this.getSelectedValue!=""){   //Jika filter tahun tidak kosong
			if(this.keyword!=""){ //Jika keyword tidak kosong
				this.publicationList.filterSearchPublikasi(this.keyword,this.keyTahun,this.page).subscribe((publicationListData:any) => {
					this.allPublication= publicationListData.data;
					if(this.allPublication.length>0){
						allIndicatorLoadingController.dismiss();
						this.pages=this.allPublication[0].pages;
						this.listDomain=this.allPublication[1];
						console.log('Total Halaman : '+this.pages);
					}
				})	
			}else{ //Jika keyword kosong
				this.publicationList.filterPublikasi(this.keyTahun,this.page).subscribe((publicationListData:any) => {
					this.allPublication= publicationListData.data;
					if(this.allPublication.length>0){		
						allIndicatorLoadingController.dismiss();	
						this.pages=this.allPublication[0].pages;
						this.listDomain=this.allPublication[1];
						console.log('Total Halaman : '+this.pages);
						console.log('Panjang Array : '+this.allPublication.length);
					}
				})					
			}
		} else{ //Jika filter tahun kosong
			if(this.keyword!=""){ //Jika keyword tidak kosong
				this.publicationList.searchPublikasi(this.keyword,this.page).subscribe((publicationListData:any) => {
					this.allPublication= publicationListData.data;
					if(this.allPublication.length>0){
						allIndicatorLoadingController.dismiss();
						this.pages=this.allPublication[0].pages;
						this.listDomain=this.allPublication[1];
						console.log('Total Halaman : '+this.pages);
					}
				})	
			}else{ //Jika keyword kosong
				this.publicationList.getData(this.page).subscribe((publicationListData:any) => {
					allIndicatorLoadingController.dismiss();
					this.allPublication= publicationListData.data;
					this.pages=this.allPublication[0].pages;
					this.listDomain=this.allPublication[1];
					console.log('Total Halaman : '+this.pages);
				})					
			}
		}	
		console.log('Keyword : '+this.keyword);
		console.log('Filter Tahun : '+this.keyTahun);	
	}

	searchPublikasi(event) {
		// set val to the value of the searchbar
		this.keyword = this.keyword;
		console.log(event);
		let allIndicatorLoadingController = this.loadingController.create({
			content: `<div class="custom-spinner-container">
			  		  <div class="custom-spinner-box"></div>
				     </div>`,
			spinner: 'crescent',
			cssClass: 'transparent',
			duration: 3000
		});
		allIndicatorLoadingController.present(); 	
		if(this.keyword!=""){  //Jika keyword tidak kosong
			if(this.getSelectedValue!=""){ //Jika filter tahun tidak kosong
				this.publicationList.filterSearchPublikasi(this.keyword,this.keyTahun,this.page).subscribe((publicationListData:any) => {
					this.allPublication= publicationListData.data;
					if(this.allPublication.length>0){		
						allIndicatorLoadingController.dismiss();
						this.pages=this.allPublication[0].pages;
						this.listDomain=this.allPublication[1];
						console.log('Total Halaman : '+this.pages);
						console.log('Panjang Array : '+this.allPublication.length);
					}
				})
			}else{ //Jika filter tahun kosong
				this.publicationList.searchPublikasi(this.keyword,this.page).subscribe((publicationListData:any) => {
					this.allPublication= publicationListData.data;
					if(this.allPublication.length>0){
						allIndicatorLoadingController.dismiss();
						this.pages=this.allPublication[0].pages;
						this.listDomain=this.allPublication[1];
						console.log('Total Halaman : '+this.pages);
					}
				})						
			}
		} else{ //Jika keyword kosong
			if(this.getSelectedValue!=""){ //Jika filter tahun tidak kosong
				this.publicationList.filterPublikasi(this.keyTahun,this.page).subscribe((publicationListData:any) => {
					this.allPublication= publicationListData.data;
					if(this.allPublication.length>0){		
						allIndicatorLoadingController.dismiss();	
						this.pages=this.allPublication[0].pages;
						this.listDomain=this.allPublication[1];
						console.log('Total Halaman : '+this.pages);
						console.log('Panjang Array : '+this.allPublication.length);
					}
				})		
			}else{ //Jika filter tahun kosong
				this.publicationList.getData(this.page).subscribe((publicationListData:any) => {
					allIndicatorLoadingController.dismiss();
					this.allPublication= publicationListData.data;
					this.pages=this.allPublication[0].pages;
					this.listDomain=this.allPublication[1];
					console.log('Total Halaman : '+this.pages);
				})					
			}
		} 
		console.log('Keyword : '+this.keyword);
		console.log('Filter Tahun : '+this.keyTahun);	
	}
	
	doInfinite(infiniteScroll) {
	    console.log('Begin async operation');
		this.page = this.page+1;
		console.log('Halaman'+this.page);
		setTimeout(() => {
			if(this.page<=this.pages){
				this.publicationList.getData(this.page).subscribe((publicationListData:any) => {
					for (let pub of publicationListData.data[1]) {
					this.listDomain.push(pub)
					}
				});
			} else {
				alert('No more data is available.');
			}
			console.log('Async operation has ended');
			infiniteScroll.complete();
		}, 1000)
	}

	launchPubDetailsPage(pub){
		//Use the Modal Contoller to launch the movie details page and pass the movie object for the movie chosen by the User
		let pubModal = this.modalCtrl.create('PubDetilPage', pub);
		pubModal.present();
	}

	launchSearchModal(){
		//uses the modal controller to launch the search modal
		let modal = this.modalCtrl.create('SearchPage');
		modal.present();
	}	

	showTanggalIndonesia(inputTanggal:string){
		inputTanggal=this.publicationList.getTanggalIndonesia(inputTanggal);
		return inputTanggal;
	}	
}
