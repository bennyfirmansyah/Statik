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
export class Beranda {
  private apiUrl = 'https://webapi.bps.go.id/v1/api/list/model/indicators/lang/ind/domain/1300/page/';
  private apiKey = '790ab00650e59132961637e651ba47fb';

  constructor(public http: HttpClient) {
    console.log('Running Beranda Provider');
  }

  getDataIndikatorStrategis(page:any){
    return this.http.get(this.apiUrl+""+page+"/key/"+this.apiKey+"/")
                    .do(res=>console.log(res))
                    .map(res=>res);
  }

}
