import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(
    private _commonService: CommonService
  ) {}

ngOnInit(): void {
  this.getForcast()
}  

getForcast = ()=>{
    this._commonService.getApi("").subscribe((res:any) =>{
        console.log(res);
    })
}
}
