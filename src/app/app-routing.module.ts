import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './navbar/about/about.component';
import { ContactComponent } from './navbar/contact/contact.component';
import { GitComponent } from './navbar/git/git.component';
import { SvnComponent } from './navbar/svn/svn.component';
import { HomeComponent } from './home/home.component';
import { GitvenComponent } from './navbar/gitven/gitven.component';
import { SvnvenComponent } from './navbar/svnven/svnven.component';


const routes: Routes = [
  
  
  { path: 'about', component:AboutComponent},
  { path: 'contact', component:ContactComponent},
  { path: 'git', component:GitComponent},
  { path: 'svn', component:SvnComponent},
  { path: 'home', component: HomeComponent},
  { path: 'gitven', component: GitvenComponent},
  { path: 'svnven', component: SvnvenComponent},


  // Redirecciones de App
  { path: 'app/home', redirectTo: 'home', pathMatch: 'full'},
  { path: 'app/about', redirectTo: 'about', pathMatch: 'full'},
  { path: 'app/contact', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'app/git', redirectTo: 'git', pathMatch: 'full'},
  { path: 'app/svn', redirectTo: 'svn', pathMatch: 'full'},
  { path: 'app/gitven', redirectTo: 'gitven', pathMatch: 'full'},
  { path: 'app/svnven', redirectTo: 'svnven', pathMatch: 'full'},

  // Redirecciones de Home
  { path: 'home/home', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home/about', redirectTo: 'about', pathMatch: 'full'},
  { path: 'home/contact', redirectTo: 'contact', pathMatch: 'full'},
  { path: 'home/git', redirectTo: 'git', pathMatch: 'full'},
  { path: 'home/svn', redirectTo: 'svn', pathMatch: 'full'},
  { path: 'home/gitven', redirectTo: 'gitven', pathMatch: 'full'},
  { path: 'home/svnven', redirectTo: 'svnven', pathMatch: 'full'},
  { path: 'home/app', redirectTo: 'app', pathMatch: 'full'},

// Redirecciones de About
{ path: 'about/home', redirectTo: 'home', pathMatch: 'full'},
{ path: 'about/about', redirectTo: 'about', pathMatch: 'full'},
{ path: 'about/contact', redirectTo: 'contact', pathMatch: 'full'},
{ path: 'about/git', redirectTo: 'git', pathMatch: 'full'},
{ path: 'about/svn', redirectTo: 'svn', pathMatch: 'full'},
{ path: 'about/gitven', redirectTo: 'gitven', pathMatch: 'full'},
{ path: 'about/svnven', redirectTo: 'svnven', pathMatch: 'full'},
{ path: 'about/app', redirectTo: 'app', pathMatch: 'full'},

// Redirecciones de Contact
{ path: 'contact/home', redirectTo: 'home', pathMatch: 'full'},
{ path: 'contact/about', redirectTo: 'about', pathMatch: 'full'},
{ path: 'contact/contact', redirectTo: 'contact', pathMatch: 'full'},
{ path: 'contact/git', redirectTo: 'git', pathMatch: 'full'},
{ path: 'contact/svn', redirectTo: 'svn', pathMatch: 'full'},
{ path: 'contact/gitven', redirectTo: 'gitven', pathMatch: 'full'},
{ path: 'contact/svnven', redirectTo: 'svnven', pathMatch: 'full'},
{ path: 'contact/app', redirectTo: 'app', pathMatch: 'full'},

// Redirecciones de Git
{ path: 'git/home', redirectTo: 'home', pathMatch: 'full'},
{ path: 'git/about', redirectTo: 'about', pathMatch: 'full'},
{ path: 'git/contact', redirectTo: 'contact', pathMatch: 'full'},
{ path: 'git/git', redirectTo: 'git', pathMatch: 'full'},
{ path: 'git/svn', redirectTo: 'svn', pathMatch: 'full'},
{ path: 'git/gitven', redirectTo: 'gitven', pathMatch: 'full'},
{ path: 'git/svnven', redirectTo: 'svnven', pathMatch: 'full'},
{ path: 'git/app', redirectTo: 'app', pathMatch: 'full'},

// Redirecciones de SVN
{ path: 'svn/home', redirectTo: 'home', pathMatch: 'full'},
{ path: 'svn/about', redirectTo: 'about', pathMatch: 'full'},
{ path: 'svn/contact', redirectTo: 'contact', pathMatch: 'full'},
{ path: 'svn/git', redirectTo: 'git', pathMatch: 'full'},
{ path: 'svn/svn', redirectTo: 'svn', pathMatch: 'full'},
{ path: 'svn/gitven', redirectTo: 'gitven', pathMatch: 'full'},
{ path: 'svn/svnven', redirectTo: 'svnven', pathMatch: 'full'},
{ path: 'svn/app', redirectTo: 'app', pathMatch: 'full'},

// Redirecciones de Gitven
{ path: 'gitven/home', redirectTo: 'home', pathMatch: 'full'},
{ path: 'gitven/about', redirectTo: 'about', pathMatch: 'full'},
{ path: 'gitven/contact', redirectTo: 'contact', pathMatch: 'full'},
{ path: 'gitven/git', redirectTo: 'git', pathMatch: 'full'},
{ path: 'gitven/svn', redirectTo: 'svn', pathMatch: 'full'},
{ path: 'gitven/gitven', redirectTo: 'gitven', pathMatch: 'full'},
{ path: 'gitven/svnven', redirectTo: 'svnven', pathMatch: 'full'},
{ path: 'gitven/app', redirectTo: 'app', pathMatch: 'full'},

// Redirecciones de SVNven
{ path: 'svnven/home', redirectTo: 'home', pathMatch: 'full'},
{ path: 'svnven/about', redirectTo: 'about', pathMatch: 'full'},
{ path: 'svnven/contact', redirectTo: 'contact', pathMatch: 'full'},
{ path: 'svnven/git', redirectTo: 'git', pathMatch: 'full'},
{ path: 'svnven/svn', redirectTo: 'svn', pathMatch: 'full'},
{ path: 'svnven/gitven', redirectTo: 'gitven', pathMatch: 'full'},
{ path: 'svnven/svnven', redirectTo: 'svnven', pathMatch: 'full'},
{ path: 'svnven/app', redirectTo: 'app', pathMatch: 'full'},


];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
