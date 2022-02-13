
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search : any = '';
  items: any;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
  searchRes(search : string){
    this.dataService.getDashboardData(search).subscribe(data=>{
      this.dataService.profileSubject.next(data);
     // console.log(data);
    
    
    
    });
  }
}
