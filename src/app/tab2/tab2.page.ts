import { Component } from '@angular/core';
import { Tab1Page } from '../tab1/tab1.page';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  weather: any;
  constructor(
    private _commonService: CommonService,
    
    ) {
      
      this.weather = this._commonService.weather;
    console.log(this.weather);
    

  }

}
