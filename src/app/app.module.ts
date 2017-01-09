import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ResumeComponent } from './resume/resume.component';

const appRoutes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'app-resume', component: ResumeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ResumeComponent
  ],
  imports: [
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
