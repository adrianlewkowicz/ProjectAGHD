import { ScrollSpyDirective } from './_models/scrol-spy.directive';
import { BlogService } from './_services/blog.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JobComponent } from './job/job.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';

@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      AboutComponent,
      JobComponent,
      BlogComponent,
      ContactComponent,
      TeamComponent,
      ScrollSpyDirective
   ],
   imports: [
      BrowserModule,
      MDBBootstrapModule.forRoot(),
      RouterModule.forRoot(appRoutes),
   ],
   providers: [
      BlogService,
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
