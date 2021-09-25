import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BRS {
  tanggal:string;
  bulan:string;
  tahun:string;
  keyTahun: any;
  private apiKey = '790ab00650e59132961637e651ba47fb';
  private apiUrl = 'https://webapi.bps.go.id/v1/api/list/model/pressrelease/lang/ind/domain/1300/page/';
  private apiDetil = 'https://webapi.bps.go.id/v1/api/view/domain/1300/model/pressrelease/lang/ind/id/';
  //private apiSearch = 'https://webapi.bps.go.id/v1/api/list/model/publication/lang/ind/domain/1300/keyword/';
  
  constructor(public http: HttpClient) {
    console.log('Running BRS Provider');
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

  getData(page:any) {
    return this.http.get(this.apiUrl+""+page+"/key/"+this.apiKey+"/")
                    .do(res=>console.log(res))
                    .map(res=>res);
  }

  getDetilBRS(id) {
    return this.http.get(this.apiDetil+""+id+"/key/"+this.apiKey+"/")
                    .do(res=>console.log(res))
                    .map(res=>res);
  }

  searchBRS(searchStr:string,page:any){
    return this.http.get(this.apiUrl+""+page+"/keyword/"+searchStr+"/key/"+this.apiKey+"/")
                    .do(res=>console.log(res))
                    .map(res=>res);
  }

  filterBRS(keyTahun:any,page:any){
    return this.http.get(this.apiUrl+""+page+"/year/"+keyTahun+"/key/"+this.apiKey+"/")
                    .do(res=>console.log(res))
                    .map(res=>res);
  }  

  filterSearchBRS(searchStr:string,keyTahun:any,page:any){
    return this.http.get(this.apiUrl+""+page+"/year/"+keyTahun+"/keyword/"+searchStr+"/key/"+this.apiKey+"/")
                    .do(res=>console.log(res))
                    .map(res=>res);	  
  }

}
