import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PageInfo } from '../interfaces/page-info';

@Injectable({
  providedIn: 'root'
})
export class PageinfoService 
{
  pageInfo: PageInfo = {};
           isLoading = true;

  constructor( private http: HttpClient ) 
  { 
    this.getInfoPage();
  }

  getInfoPage()
  {
    this.http.get('assets/data/pageInfo.json').subscribe((data:PageInfo)=>
    {
      this.pageInfo  = data;
      this.isLoading = false;
    });
  }
}
