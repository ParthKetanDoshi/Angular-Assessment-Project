import { Component, Input, OnInit } from '@angular/core';
import { AlbumfetchService } from "./service/albumfetch.service";
import { PhotofetchService } from './service/photofetch.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input() userid: number;
  albumData: any;
  photoData:any;

  constructor(private fetchedAlbumData: AlbumfetchService,
    private fetchedPhotoData: PhotofetchService) { 
    this.fetchedAlbumData.getData().subscribe(
      fetchedAlbumData => {
        // console.log(fetchedAlbumData)
        this.albumData=fetchedAlbumData
      }
    )
    this.fetchedPhotoData.getData().subscribe(
      fetchedPhotoData => {
        // console.log(fetchedPhotoData)
        this.photoData=fetchedPhotoData
      }
    )
  }

  ngOnInit(): void {
    // console.log(this.userid);
  }

}
