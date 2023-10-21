import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ImagesliderComponent } from './imageslider/imageslider.component';
import { NavComComponent } from './nav-com/nav-com.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MeanComponent } from './mean/mean.component';
import { MernComponent } from './mern/mern.component';
import { FullStackComponent } from './full-stack/full-stack.component';
import { JavaComponent } from './java/java.component';
import { CplusplusComponent } from './cplusplus/cplusplus.component';
import { PythonComponent } from './python/python.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    HeaderComponent,
    FooterComponent,
    ImagesliderComponent,
    NavComComponent,
    ContactComponent,
    RegisterComponent,
    GalleryComponent,
    MeanComponent,
    MernComponent,
    FullStackComponent,
    JavaComponent,
    CplusplusComponent,
    PythonComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
