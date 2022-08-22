import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './navbar/about/about.component';
import { GitComponent } from './navbar/git/git.component';
import { SvnComponent } from './navbar/svn/svn.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { GitvenComponent } from './navbar/gitven/gitven.component';
import { SvnvenComponent } from './navbar/svnven/svnven.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GitComponent,
    SvnComponent,
    ContactComponent,
    GitvenComponent,
    SvnvenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
