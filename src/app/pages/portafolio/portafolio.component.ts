import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute } from "@angular/router";
import { Projects } from 'src/app/interfaces/projects';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit 
{
  //icons
  viewIcon = faArrowRight;
  //variables
  project: Projects = {};
  isLoading = true;
  constructor( private projectService: ProjectService, private activeRoute: ActivatedRoute ) 
  {

  }

  ngOnInit(): void 
  {
    this.activeRoute.params.subscribe((param)=>{
      this.projectService.getProjectById(param['id']).subscribe((resp: Projects)=>{
          this.project   = resp;
          this.isLoading = false;
          console.log(resp);
      });
    });
  }

}
