import { animate, state, style, transition, trigger, AnimationEvent, keyframes } from '@angular/animations';
import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

const ANIMATION_TIME = '.25s'

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations: [
    trigger('directionCurrent', [
      state('initial', style({})),
      state('right', style({})),
      state('left', style({})),
      state('temp', style({})),
      transition('initial => right', animate(ANIMATION_TIME, keyframes([
        style({
          transform: 'translate3d(0, 0px, 110px) scale(1.1)',
        }),
        style({ transform: 'translate3d(30%, 0px, -30px) scale(1.075)' }),
        style({
          transform: 'translate3d(60%, 0px, -130px)',
          scale: '1',
          boxShadow: '0px 0px 10px gray'
        })
      ]))),
      transition('initial => left', animate(ANIMATION_TIME, keyframes([
        style({
          transform: 'translate3d(0, 0px, 110px) scale(1.1)',
        }),
        style({ transform: 'translate3d(-30%, 0px, -30px) scale(1.075)' }),
        style({
          transform: 'translate3d(-60%, 0px, -130px)',
          scale: '1',
          boxShadow: '0px 0px 10px gray'
        })
      ]))),
      transition('left => temp', animate(ANIMATION_TIME, keyframes([
        style({
          transform: 'translate3d(-60%, 0px, 0px)',
          scale: '1',
          boxShadow: '0px 0px 10px gray'
        }),
        style({
          transform: 'translate3d(-60%, 0px, 0px)',
          scale: '1',
          boxShadow: '0px 0px 10px gray'
        })
      ]))),
      transition('right => temp', animate(ANIMATION_TIME, keyframes([
        style({
          transform: 'translate3d(60%, 0px, 0px)',
          scale: '1',
          boxShadow: '0px 0px 10px gray',
          zIndex: '1'
        }),
        style({
          transform: 'translate3d(60%, 0px, 0px)',
          scale: '1',
          boxShadow: '0px 0px 10px gray',
          zIndex: '1'
        })
      ]))),
      transition('* => initial', animate('0s')),
    ]),
    trigger('directionNext', [
      state('initial', style({})),
      transition('initial => left', animate(ANIMATION_TIME, keyframes([
        style({
          transform: 'translate3d(0%, 0px, 0px)',
          zIndex: '2'
        }),
        style({
          transform: 'translate3d(-30%, 0px, 0px) scale(1.06)',
          zIndex: '2'
        }),
        style({
          transform: 'translate3d(-55%, 0px, 0px)',
          scale: '1.1',
          zIndex: '2'
        }),
      ]))),
      transition('initial => right', animate(ANIMATION_TIME, keyframes([
        style({
          transform: 'translate3d(-120%, 0px, 0px)',
        }),
      ]))),
    ]),
    trigger('directionPrevious', [
      state('initial', style({})),
      transition('initial => left', animate(ANIMATION_TIME, keyframes([
        style({
          transform: 'translate3d(120%, 0px, 0px)',
        }),
      ]))),
      transition('initial => right', animate(ANIMATION_TIME, keyframes([
        style({
          transform: 'translate3d(0%, 0px, 0px)',
          zIndex: '2'
        }),
        style({
          transform: 'translate3d(30%, 0px, 0px) scale(1.06)',
          zIndex: '2'
        }),
        style({
          transform: 'translate3d(55%, 0px, 0px)',
          scale: '1.1',
          zIndex: '2'
        }),
      ]))),
    ])
  ]
})
export class CarouselComponent implements OnInit {
  @Input() favProjects: any;
  currentCardId: number = 0;
  previousCard: any;
  currentCard: any;
  nextCard: any;
  directionPrevious: string = 'initial';
  directionCurrent: string = 'initial';
  directionNext: string = 'initial';
  isAnimating: boolean = false;

  ngOnInit(): void {
    this.previousCard = this.favProjects[this.favProjects.length - 1];
    this.currentCard = this.favProjects[0];
    this.nextCard = this.favProjects[1];
    this.currentCardId = 0;
  }

  isDisabled(): boolean {
    return this.isAnimating;
  }

  moveCards(direction: string) {
    this.directionCurrent = direction;
  }

  moveCardCurrentStart(event: AnimationEvent) {
    this.isAnimating = true;
  }

  moveCardCurrentDone(event: AnimationEvent) {
    if (event.fromState == 'initial' && event.toState == 'left') {
      if (this.currentCardId == this.favProjects.length - 1) {
        this.currentCardId = 0;

        this.previousCard = this.favProjects[this.currentCardId + 1];
      }
      else if (this.currentCardId == this.favProjects.length - 2) {
        this.currentCardId++;

        this.previousCard = this.favProjects[0];
      }
      else {
        this.currentCardId++;

        this.previousCard = this.favProjects[this.currentCardId + 1];
      }
    }
    else if (event.fromState == 'left' && event.toState == 'temp') {
      if (this.currentCardId == 0) {
        this.previousCard = this.favProjects[this.favProjects.length - 1];
        this.currentCard = this.favProjects[this.currentCardId];
        this.nextCard = this.favProjects[this.currentCardId + 1];
      }
      else if (this.currentCardId == this.favProjects.length - 1) {
        this.previousCard = this.favProjects[this.favProjects.length - 2];
        this.currentCard = this.favProjects[this.currentCardId];
        this.nextCard = this.favProjects[0];
      }
      else {
        this.previousCard = this.favProjects[this.currentCardId - 1];
        this.currentCard = this.favProjects[this.currentCardId]
        this.nextCard = this.favProjects[this.currentCardId + 1];
      }
    }
    else if (event.fromState == 'initial' && event.toState == 'right') {
      if (this.currentCardId == 0) {
        this.currentCardId = this.favProjects.length - 1;

        this.nextCard = this.favProjects[this.currentCardId - 1];
      }
      else if (this.currentCardId == 1) {
        this.currentCardId--;

        this.nextCard = this.favProjects[this.favProjects.length - 1];
      }
      else {
        this.currentCardId--;

        this.nextCard = this.favProjects[this.currentCardId - 1];
      }
    }
    else if (event.fromState == 'right' && event.toState == 'temp') {
      if (this.currentCardId == this.favProjects.length - 1) {
        this.previousCard = this.favProjects[this.currentCardId - 1];
        this.currentCard = this.favProjects[this.currentCardId];
        this.nextCard = this.favProjects[0];
      }
      else if (this.currentCardId == 0) {
        this.previousCard = this.favProjects[this.favProjects.length - 1];
        this.currentCard = this.favProjects[this.currentCardId];
        this.nextCard = this.favProjects[this.currentCardId + 1];
      }
      else {
        this.previousCard = this.favProjects[this.currentCardId - 1];
        this.currentCard = this.favProjects[this.currentCardId]
        this.nextCard = this.favProjects[this.currentCardId + 1];
      }
    }


    if (event.fromState == 'initial' && event.toState == 'left') {
      this.directionNext = 'left';
      this.directionCurrent = 'temp';
      this.directionPrevious = 'left';
    }
    else if (event.fromState == 'initial' && event.toState == 'right') {
      this.directionNext = 'right';
      this.directionCurrent = 'temp';
      this.directionPrevious = 'right';
    }
    else {
      this.directionNext = 'initial';
      this.directionCurrent = 'initial';
      this.directionPrevious = 'initial';
      this.isAnimating = false;
    }
  }
}
