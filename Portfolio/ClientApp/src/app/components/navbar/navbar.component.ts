import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: 'navbar.component.html',
  styleUrls: [ 'navbar.component.css' ]
})
export class NavBarComponent implements AfterViewInit {
  @ViewChild('dropDownNav') dropDownNav!: ElementRef;


  ngAfterViewInit(): void {
    (this.dropDownNav.nativeElement as HTMLDivElement).style.display = 'none';
  }

  closeNav(dropDownNav: HTMLDivElement) {
    dropDownNav.style.display = 'none';
  }

  toggleNav(dropDownNav: HTMLDivElement) {
    if (dropDownNav.style.display == 'none') {
      dropDownNav.style.display = 'flex';
      dropDownNav.style.padding = '0';
      const navHeight = dropDownNav.clientHeight;
      dropDownNav.style.height = '0';
      dropDownNav.animate([
        {
          height: 0,
          padding: '10px'
        },
        {
          height: navHeight + 'px',
          padding: '10px'
        }
      ],
        {
          duration: 200,
          easing: 'ease'
        });
      dropDownNav.style.height = navHeight + 'px';
      dropDownNav.style.padding = '10px';
    }
    else {
      dropDownNav.style.display = 'none';
    }
  }
}
