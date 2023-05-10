import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild } from '@angular/core';
import { elementAt } from 'rxjs';
import { TimerHandle } from 'rxjs/internal/scheduler/timerHandle';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css'],
})
export class ProjectCardComponent {
  @Input() project: any;
  @ViewChild('percentageBar')
  percentageBar!: ElementRef;
  animation!: Animation;

  glowBar(color: string) {
    const percentageBar = this.percentageBar.nativeElement as HTMLElement;
    const rgbColor = this.hexToRgb(color);

    percentageBar.childNodes.forEach(element => {

      if (element.nodeName == 'DIV') {
        let barPiece = element as HTMLDivElement;

        barPiece.childNodes.forEach(element => {

          if (element.nodeName == 'SPAN') {
            let colorBar = element as HTMLSpanElement;

            if (colorBar.style.boxShadow != 'unset')
              colorBar.style.boxShadow = 'unset';

            if (colorBar.style.backgroundColor == rgbColor) {
              console.log('here');

              if (this.animation != undefined)
                this.animation.cancel();

              this.animation = colorBar.animate([
                {
                  boxShadow: '0px 0px 20px 5px ' + rgbColor,
                },
                {
                  boxShadow: '0px 0px 10px 0px ' + rgbColor,
                },
                {
                  boxShadow: '0px 0px 20px 5px ' + rgbColor,
                },
              ],
              {
                duration: 1000,
                iterations: 4,
              });
            }
          }
        });
      }
    });
  }


  hexToRgb(hex: string): string {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 'rgb(' + [parseInt(result[1], 16).toString(), parseInt(result[2], 16).toString(), parseInt(result[3], 16).toString()].join(', ') + ')' : '';
  }
}
