import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
    name: 'html'
})

export class HtmlPipe implements PipeTransform {

  //Add DomSanitizer to the constructor
    constructor(private sanitizer: DomSanitizer){}
    transform(html) {
      //An html content returned here, converting the value
        //return this.sanitizer.bypassSecurityTrustHtml(html);
        var re = /<div align="justify">/gi; 
        var newstr = html.replace(re, ""); 
        return this.sanitizer.bypassSecurityTrustHtml(newstr);
    }
}