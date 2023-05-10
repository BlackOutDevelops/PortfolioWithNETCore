import { animate, state, style, transition, trigger, AnimationEvent, sequence } from '@angular/animations';
import { Dir } from '@angular/cdk/bidi';
import { AfterContentChecked, AfterContentInit, AfterViewInit, AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild, OnChanges, DoCheck } from '@angular/core';
import { last, Observable, Subscriber, timeout, timer } from 'rxjs';
import { TimerHandle } from 'rxjs/internal/scheduler/timerHandle';

@Component({
  selector: 'house-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css'],
  animations: [
    trigger('direction', [
      state('initial', style({
        transform: 'translateX(0)'
      })),
      state('left', style({
        transform: 'translateX(100%)'
      })),
      state('right', style({
        transform: 'translateX(-100%)'
      })),
      transition('initial => *', animate('.2s')),
      transition('* => initial', animate('0s'))
    ])
  ],
})
export class SlideshowComponent implements OnInit {
  @Input() images: any;
  @Input() title: any;
  @ViewChild('mainImage') mainImage!: ElementRef;
  previousImage!: string;
  currentImage!: string;
  nextImage!: string;
  direction: string = 'initial';
  indexCount: number = 0;
  isAnimating: boolean = false;
  scale!: string;

  ngOnInit(): void {
    this.previousImage = '../../..' + this.images[this.images.length-1].url;
    this.currentImage = '../../..' + this.images[0].url;
    this.nextImage = '../../..' + this.images[1].url;
  }

  updateScale() {
    try {
      this.scale = 'scale(calc(' + (this.mainImage.nativeElement as HTMLImageElement).clientWidth + ' / 500))';
    }
    catch (e) {
      console.log('Error: ' + e);
    }
  }

  move(direction: string) {
    this.direction = direction;

    if (direction == 'left')
      this.indexCount--;
    else 
      this.indexCount++;
  }

  leftButtonCheck(): boolean {
    return this.isAnimating || this.indexCount == 0;
  }

  rightButtonCheck(): boolean {
    return this.isAnimating || this.indexCount == this.images.length - 1;
  }

  imageAnimationStart(event: AnimationEvent) {
    this.isAnimating = true;
  }

  imageAnimationDone(event: AnimationEvent) {
    if (this.indexCount == 0) {
      this.currentImage = '../../..' + this.images[this.indexCount].url;
      this.nextImage = '../../..' + this.images[this.indexCount + 1].url;
    }
    else if (this.indexCount == this.images.length - 1) {
      this.previousImage = '../../..' + this.images[this.indexCount - 1].url;
      this.currentImage = '../../..' + this.images[this.indexCount].url;
    }
    else {
      this.previousImage = '../../..' + this.images[this.indexCount - 1].url;
      this.currentImage = '../../..' + this.images[this.indexCount].url;
      this.nextImage = '../../..' + this.images[this.indexCount + 1].url;
    }

    this.direction = 'initial';
    this.isAnimating = false;
  }
}
