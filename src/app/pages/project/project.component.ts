import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit 
{

  constructor( public projectService: ProjectService ) 
  {
  }

  ngOnInit(): void 
  {

  }

}
