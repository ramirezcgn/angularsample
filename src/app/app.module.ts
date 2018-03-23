import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ClarityModule } from "clarity-angular";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { PhotosService } from './photos.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ClarityModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  providers: [
    PhotosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
