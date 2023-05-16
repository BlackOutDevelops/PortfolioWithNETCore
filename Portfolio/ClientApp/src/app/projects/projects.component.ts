import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { MAT_OPTION_PARENT_COMPONENT } from '@angular/material/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css'],
  animations: [
    trigger('animation', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('.3s',
          style({
            opacity: 1
          }))
      ]),
      transition(':leave', [
        style({
          opacity: 1
        }),
        animate('.3s',
          style({
            opacity: 0
          }))
      ]),
    ]),
  ]
})
export class ProjectsComponent {
  allPossibleLanguages = this.dataService.allPossibleLanguages;
  filter: any;
  animate: any;
  projects = this.dataService.projects;
  favProjects = this.dataService.favoriteProjects;

  constructor(private dataService: DataService) { }

  updateGrid(selection: string) {
    this.filter = new Set<string>();

    setTimeout(() => {
      if (selection == 'All')
        this.filter = this.allPossibleLanguages;
      else
        this.filter = new Set<string>([selection])
    }, 290);
  }
}
