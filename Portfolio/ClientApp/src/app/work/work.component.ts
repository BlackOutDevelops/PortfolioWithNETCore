import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('measureProcessingContent') measureProcessingContent!: ElementRef;
  @ViewChild('automationToolsContent') automationToolsContent!: ElementRef;
  @ViewChild('webAppsContent') webAppsContent!: ElementRef;

  constructor(private dataService: DataService) { };

  ngAfterViewInit(): void {
    this.hideContent(this.pOneContent.nativeElement as HTMLDivElement);
    this.hideContent(this.pTwoContent.nativeElement as HTMLDivElement);
    this.hideContent(this.mainContent.nativeElement as HTMLDivElement);
    this.hideContent(this.measureProcessingContent.nativeElement as HTMLDivElement);
    this.hideContent(this.automationToolsContent.nativeElement as HTMLDivElement);
    this.hideContent(this.webAppsContent.nativeElement as HTMLDivElement);
  }

  hideContent(element: HTMLDivElement) {
    element.style.marginBottom = '0';
    element.style.padding = '0';
    element.style.visibility = 'hidden';
    element.style.height = '0';
  }

  toggleContent(element: HTMLDivElement) {
    // Use scrollHeight for responsive content height
    let elementHeight = element.scrollHeight + 16; // Add a bit of extra padding for animation
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
        element.style.visibility = 'hidden';
        element.style.marginBottom = '0';
        element.style.padding = '0';
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
      element.style.paddingBottom = '15px';
      element.style.paddingLeft = '15px';
      element.style.paddingRight = '15px';
      element.style.paddingTop = '10px';
      element.style.overflow = 'unset';
      setTimeout(() => element.style.height = 'auto', 200);
    }
  }
}
