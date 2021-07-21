import { Component, OnInit } from '@angular/core';
import { PageinfoService } from 'src/app/services/pageinfo.service';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit 
{
  githubIcon = faGithub;
  mailIcon = faEnvelope;
  downloadIcon = faDownload;
  constructor(public pageInfoService: PageinfoService) 
  {

  }

  ngOnInit(): void {
  }

}
