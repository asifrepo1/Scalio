import { Component, DoCheck, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit,DoCheck {
  profiles :any = [];
  profileList: any;
  p: number = 1;
  errMsg : string ='';
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
  ngDoCheck(){
 
    this.dataService.profileSubject.subscribe(data=>{
      this.profileList = data['items'];
      this.profileList.sort((a : any,b : any) => (a.login > b.login) ? 1 : ((b.login > a.login) ? -1 : 0));
    } );

    this.dataService.http404.subscribe(data=>{
      this.errMsg = data;
    });
    console.log(this.profileList);
  }
  

  sortByLogin(){
    this.profileList.sort((a : any,b : any) => (a.login > b.login) ? 1 : ((b.login > a.login) ? -1 : 0));
  }
  sortByType(){
    this.profileList.sort((a : any,b : any) => (a.type > b.type) ? 1 : ((b.type > a.type) ? -1 : 0));
  }
  sortByUrl(){
    this.profileList.sort((a : any,b : any) => (a.avatar_url > b.avatar_url) ? 1 : ((b.avatar_url > a.avatar_url) ? -1 : 0));
  }
}
