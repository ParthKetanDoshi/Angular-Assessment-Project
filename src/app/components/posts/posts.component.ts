import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() userid: number;

  constructor() { }

  ngOnInit(): void {
    console.log(this.userid);
  }

}
