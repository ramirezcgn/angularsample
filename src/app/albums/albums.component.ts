import { Component, OnInit } from '@angular/core';
import { PhotosService } from '../photos.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  items:Photo[];

  constructor(private photosService: PhotosService) {
  }

  ngOnInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.photosService.getPhotos()
      .subscribe(
        (items) => {
          this.items = items.sort(function (a, b) {
            if (a.albumId > b.albumId) {
              return -1;
            }
            if (a.albumId < b.albumId) {
              return 1;
            }
            return 0;
          });
        },
        err => console.log(err)
      );
  }
}
