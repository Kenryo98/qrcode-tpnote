import { Component } from '@angular/core';
import { QrcodeService } from '../services/qrcode.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  contents: string[] = [];

  constructor(private qrcodeApi: QrcodeService) {}

  ngOnInit() {
    //this.qrcodeApi.scan();
  }


  scan() {
    let res = this.qrcodeApi.scan();
    //console.log(this.qrcodeApi.scan());
    this.contents = res;
  }
}
