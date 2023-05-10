import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/navbar/navbar.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ProjectsComponent,
    WorkComponent,
    ContactMeComponent,
    ProjectCardComponent,
    CarouselComponent,
    SlideshowComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatChipsModule,
    MatRippleModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', component: HomeComponent },
      { path: 'projects', component: ProjectsComponent },
      { path: 'work', component: WorkComponent },
      { path: 'contact-me', component: ContactMeComponent }
    ], { scrollPositionRestoration: 'enabled' }),
    BrowserAnimationsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
