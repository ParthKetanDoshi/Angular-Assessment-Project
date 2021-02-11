import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  @Input() userid: number;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.userid);
  }

}
