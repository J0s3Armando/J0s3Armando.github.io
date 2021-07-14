import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProjectService 
{
  projects: any[]=[];
  isLoading = true;
  constructor(private http: HttpClient) 
  {
    this.getProjects();
  }

  getProjects()
  {
    this.http.get('https://portafolio-85133-default-rtdb.firebaseio.com/projects.json').subscribe((resp:any)=>{
      this.projects = resp;
      this.isLoading = false;
    });
  }
  
}
