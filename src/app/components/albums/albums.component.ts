import { Component, Input, OnInit } from '@angular/core';
import { AlbumfetchService } from "./service/albumfetch.service";

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input() userid: number;
  albumData: any;

  constructor(private fetchedAlbumData: AlbumfetchService) { 
    this.fetchedAlbumData.getData().subscribe(
      fetchedAlbumData => {
        // console.log(fetchedAlbumData)
        this.albumData=fetchedAlbumData
      }
    )
  }

  ngOnInit(): void {
    // console.log(this.userid);
  }

}
