import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';

const appRoutes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'album/:id/:index', component: PhotosComponent },
  { path: '', redirectTo: '/albums', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
