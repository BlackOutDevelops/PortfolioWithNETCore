import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = this.dataService.projects;
  favProjects = this.dataService.favoriteProjects;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
}
