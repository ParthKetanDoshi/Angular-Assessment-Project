import { Component, Input, OnInit } from '@angular/core';
import { PostfetchService } from "./service/postfetch.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() userid: number;
  data: any;

  constructor(private postData: PostfetchService) { 
    this.postData.getData().subscribe(
      postData => {
        console.log(postData)
        this.data=postData
      }
    )
  }

  ngOnInit(): void {
    // console.log(this.userid);
  }

}
