import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileCompComponent } from './profile-comp/profile-comp.component';
import { AboutCompComponent } from './about-comp/about-comp.component';
import { SectionCompComponent } from './section-comp/section-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCompComponent,
    AboutCompComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
        { path: 'about', component: AboutCompComponent },
        { path: 'profile', component: ProfileCompComponent },
        { path: 'data', component: SectionCompComponent },
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
