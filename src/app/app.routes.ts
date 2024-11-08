import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CoursesComponent } from './Pages/courses/courses.component';
import { ContactComponent } from './Pages/contact/contact.component';
import { AboutComponent } from './Pages/about/about.component';
import { ServicesComponent } from './Pages/services/services.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"courses",component:CoursesComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    {path:"services",component:ServicesComponent}

];
