import { Injectable } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  contents = [];

  constructor(private barcodeScanner: BarcodeScanner) { }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      let tmp = {
        'text': barcodeData.text,
        'scannedAt': new Date()
      }
      this.contents.push(tmp);
      console.log(this.contents);
      
     }).catch(err => {
         console.log('Error', err);
     });
     return this.contents;
  }

}
