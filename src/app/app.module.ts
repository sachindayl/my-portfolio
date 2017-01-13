import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ResponsiveModule } from 'ng2-responsive';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { ResumeComponent } from './components/resume/resume.component';
import { WorkComponent } from './components/work/work.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'app-resume', component: ResumeComponent },
  { path: 'app-about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ResumeComponent,
    WorkComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    CommonModule,
    ResponsiveModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
