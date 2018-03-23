import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';
import { Photo } from '../models/photo';

@Component({
  selector: 'photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnDestroy {

  private sub: any;
  items: Photo[];
  index: number;

  constructor(
    private route: ActivatedRoute,
    private photosService: PhotosService
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.loadPhotos(params['id'], params['index']);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadPhotos(id:number, index: number) {
    this.index = index;
    this.photosService.getPhotos()
      .subscribe(
        (items) => {
          console.log(items);
          this.items = items
          .filter(item => item.albumId == id)
          .sort(function (a, b) {
            if (a.id > b.id) {
              return -1;
            }
            if (a.id < b.id) {
              return 1;
            }
            return 0;
          });
        },
        err => console.log(err)
      );
  }

}
