import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'projects',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css'],
  animations: [
    trigger('animation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('.3s', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('.3s', style({ opacity: 0 }))
      ]),
    ]),
    trigger('modalAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        query('.modal-content', style({ opacity: 0, transform: 'scale(0.1)' })),
        group([
          animate('200ms ease-out', style({ opacity: 1 })),
          query('.modal-content', animate('300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)',
            style({ opacity: 1, transform: 'scale(1)' }))),
        ]),
      ]),
      transition(':leave', [
        group([
          animate('180ms ease-in', style({ opacity: 0 })),
          query('.modal-content', animate('150ms ease-in',
            style({ opacity: 0, transform: 'scale(0.1)' }))),
        ]),
      ]),
    ]),
  ]
})
export class ProjectsComponent {
  allPossibleLanguages = this.dataService.allPossibleLanguages;
  filter: any;
  animate: any;
  projects = this.dataService.projects;
  hardwareProjects = this.dataService.hardwareProjects;
  softwareProjects = this.dataService.softwareProjects;
  professionalProjects = this.dataService.professionalProjects;
  favProjects = this.dataService.favoriteProjects;

  get sortedLanguages(): string[] {
    return Array.from(this.allPossibleLanguages).sort();
  }

  modalProject: any = null;
  modalOriginX = '50%';
  modalOriginY = '50%';

  openModal(project: any, event: MouseEvent) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const modalWidth = Math.min(700, vw * 0.9);
    const modalLeft = (vw - modalWidth) / 2;
    const modalTop = vh * 0.1;
    this.modalOriginX = (event.clientX - modalLeft) + 'px';
    this.modalOriginY = (event.clientY - modalTop) + 'px';
    this.modalProject = project;
  }

  closeModal() {
    this.modalProject = null;
  }

  constructor(private dataService: DataService) { }

  updateGrid(selection: string) {
    if (selection == 'All')
      this.filter = this.allPossibleLanguages;
    else
      this.filter = new Set<string>([selection]);
  }
}
