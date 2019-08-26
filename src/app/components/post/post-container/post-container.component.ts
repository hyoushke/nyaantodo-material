import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post/post.service';
import { IPost } from 'src/app/models/post.interface';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

 public posts: IPost[];

 public child: string;
 public counter: number;
 public message: string;
 public navigation: string;
 public toaster: string;
 public isLoading: boolean = false;

 public todoContainerMessage: string;

 public post_data = null;
 public post_action = null;
 public post_notification = null;
 public post_sidebar = null;
 public post_summary = null;


 constructor(private _postService: PostService ) { }

 ngOnInit(): void {
    console.log('I have been Initialize');
    this.getPosts();
    this._postService.postsSource.subscribe(posts => this.posts = posts);

 }

 getPosts(): void {
   this._postService.getPosts().subscribe(posts => this.posts = posts);

 }


 recieveNavigationEvent($event): void {

   this.isLoading = true;
   this.navigation = 'POS_LOADING';

   setTimeout( () => {

     this.child = 'Post Navigation';
     this.navigation = $event.navigation;
     this.counter = $event.counter;
     this.message = $event.message;
     this.toaster = 'Toasted Notification';
     this.isLoading = false;


   }, 2000);

 }

 recievePostFormEvent($event): void {
   this.child = 'Post Form';
   this.navigation = $event.navigation;
   this.counter = $event.counter;
   this.message = $event.message;
   this.toaster = 'Toasted Notification';

   alert('New Post Successfully Created');

   this.navigation = 'POS_LIST';
   this.getPosts();
 }

}
