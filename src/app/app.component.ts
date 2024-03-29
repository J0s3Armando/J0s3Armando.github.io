import { Component } from '@angular/core';
import { PageinfoService } from './services/pageinfo.service';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(private pageInfoService: PageinfoService, private projectsService: ProjectService) 
  {
    
  }
}
