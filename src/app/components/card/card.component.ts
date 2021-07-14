import { Component, Input, OnInit } from '@angular/core';
import { Projects } from 'src/app/interfaces/projects';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit 
{

  @Input() project!: Projects;
  
  constructor() { }

  ngOnInit(): void {
  }

}
