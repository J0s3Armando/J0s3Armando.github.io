import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faAt} from '@fortawesome/free-solid-svg-icons';
import { PageinfoService } from 'src/app/services/pageinfo.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit 
{
  projectIcon = faArrowRight;
  githubIcon = faGithub;
  mailIcon = faAt;
  constructor(public pageService: PageinfoService) { }

  ngOnInit(): void {
  }

}
