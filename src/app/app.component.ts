import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor( private http: Http) {}
  title = 'itshare';
url = 'https://jsonplaceholder.typicode.com/posts';
posts: any[];
// get posts
ngOnInit() {
this.http.get(this.url).subscribe(result => {
  this.posts = result.json();
});

}
CreatePost(Input: HTMLInputElement) {
 let post = {title : Input.value, id: '' };
 this.http.post(this.url, JSON.stringify(post))
 .subscribe(response => {
   this.posts.splice(0, 0 , post);
 });
}
}
