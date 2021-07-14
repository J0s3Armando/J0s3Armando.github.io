import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { PageInfo } from '../interfaces/page-info';
import { Projects } from '../interfaces/projects';

@Injectable({
  providedIn: 'root'
})
export class PageinfoService 
{
  pageInfo: PageInfo = {};
           isLoading = true;
  projects: Projects[]=[];

  constructor( private http: HttpClient ) 
  { 
    this.getInfoPage();
  }

  getInfoPage()
  {
    this.http.get('https://portafolio-85133-default-rtdb.firebaseio.com/profile.json').subscribe((data:PageInfo)=>
    {
      this.pageInfo  = data;
      this.isLoading = false;
    });
  }
}
