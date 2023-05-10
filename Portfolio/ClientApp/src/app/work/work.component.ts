import { keyframes } from '@angular/animations';
import { AfterViewChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'work',
  templateUrl: 'work.component.html',
  styleUrls: ['work.component.css']
})
export class WorkComponent implements AfterViewInit {
  @ViewChild('projectOneContent') pOneContent!: ElementRef;
  @ViewChild('projectTwoContent') pTwoContent!: ElementRef;
  @ViewChild('mainContent') mainContent!: ElementRef;
  houseOneBeforeImageLocations = this.dataService.houseOneBeforeImageLocations;
  houseOneAfterImageLocations = this.dataService.houseOneAfterImageLocations;
  houseTwoBeforeImageLocations = this.dataService.houseTwoBeforeImageLocations;
  houseTwoAfterImageLocations = this.dataService.houseTwoAfterImageLocations;

  constructor(private dataService: DataService) { };

  ngAfterViewInit(): void {
    this.hideContent(this.pOneContent.nativeElement as HTMLDivElement);
    this.hideContent(this.pTwoContent.nativeElement as HTMLDivElement);
    this.hideContent(this.mainContent.nativeElement as HTMLDivElement);
  }

  hideContent(element: HTMLDivElement) {
    element.style.marginBottom = 'unset';
    element.style.padding = 'unset';
    element.style.visibility = 'hidden';
    element.style.height = '0';
  }

  toggleContent(element: HTMLDivElement) {
    let elementHeight = 0;

    element.childNodes.forEach(child => {
      let parElement = child as HTMLParagraphElement;
      elementHeight += parElement.clientHeight + 32;
      console.log(parElement.style.marginBottom);
    });

    console.log(elementHeight);

    if (element.style.visibility == 'visible') {
      element.style.overflow = 'clip';
      element.animate([
        {
          height: elementHeight + 'px',
          overflow: 'clip'
        },
        {
          offset: .7,
          height: '0px',
          overflow: 'clip'
        },
      ],
        {
          duration: 200,
          delay: 0,
        });
      setTimeout(() => {
        element.style.visibility = 'hidden'
        element.style.marginBottom = 'unset';
        element.style.padding = 'unset';
      }, 100);
      element.style.height = '0px';
      element.style.overflow = 'unset';
    }
    else {
      element.style.visibility = 'visible';
      element.style.height = '0';
      element.style.overflow = 'clip';
      element.animate([
        {
          height: '0px',
          overflow: 'clip'
        },
        {
          offset: .7,
          overflow: 'clip'
        },
      ],
        {
          duration: 200,
          delay: 0,
      });
      element.style.height = elementHeight + 'px';
      element.style.marginBottom = '15px';
      element.style.padding = '15px';
      element.style.overflow = 'unset';
    }
  }
}
