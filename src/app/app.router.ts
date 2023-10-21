import { ModuleWithProviders } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router'; 
import { FooterComponent } from './footer/footer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { NavComComponent } from './nav-com/nav-com.component';
import { RegisterComponent } from './register/register.component';
import { MernComponent } from './mern/mern.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { MeanComponent } from './mean/mean.component';
import { FullStackComponent } from './full-stack/full-stack.component';
import { JavaComponent } from './java/java.component';
import { CplusplusComponent } from './cplusplus/cplusplus.component';
import { PythonComponent } from './python/python.component';
import { RestUserComponent } from './rest-user/rest-user.component';

export const router: Routes = [
    { path: '', redirectTo: 'app-root', pathMatch: 'full' }, //default page
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    {path: 'contact', component: ContactComponent},
    {path: 'footer', component:FooterComponent},
    {path:'gallery', component:GalleryComponent},
    {path:'header',component:HeaderComponent},
    {path:'nav-com',component:NavComComponent},
    {path:'image:slider',component:ImagesliderComponent},
    {path:'register',component:RegisterComponent},
    {path:'mern',component:MernComponent},
    {path:'mean',component:MeanComponent},
    {path:'full-stack',component:FullStackComponent},
    {path:'java',component:JavaComponent},
    {path:'c++',component:CplusplusComponent},
    {path:'python',component:PythonComponent},
    {path:'rest-user',component:RestUserComponent}

];

export const routes = RouterModule.forRoot(router);