import { Routes } from '@angular/router';
import { HomePage } from './+pages/home-page/home-page';
import { AboutPage } from './+pages/about-page/about-page';
import { ContactPage } from './+pages/contact-page/contact-page';
import { ErorPage } from './+pages/eror-page/eror-page';


export const routes: Routes = [
    {path:'home',component:HomePage},
    {path:'about',component:AboutPage},
    {path:'contact',component:ContactPage},
    {path:'eror',component:ErorPage},
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'**',redirectTo:'/eror'}

];

