import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { CoursesComponent } from './Pages/courses/courses.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"courses",component:CoursesComponent}
];
