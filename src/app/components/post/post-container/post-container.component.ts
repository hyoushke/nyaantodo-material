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

 //public todos$:Observable<IPost[]>;
 public posts: IPost[];

 public child: string;
 public counter: number;
 public message: string;
 public navigation: string;
 public toaster: string;
 public isLoading: boolean = false;

 public todoContainerMessage: string;

 public todo_data = null;
 public todo_action = null;
 public todo_notification = null;
 public todo_sidebar = null;
 public todo_summary = null;


 constructor(private _postService: PostService ) { }

 ngOnInit(): void {
    console.log('I have been Initialize');
    this.getPosts();
    this._postService.postsSource.subscribe(posts => this.posts = posts);

 }

 getPosts(): void {
   this._postService.getPosts().subscribe(posts => this.posts = posts);

 }


 recieveNavigationEvent($event): void{

   this.isLoading = true;
   this.navigation = 'TDO_LOADING';

   setTimeout( ()=>{

     this.child = 'Todo Navigation';
     this.navigation = $event.navigation;
     this.counter = $event.counter;
     this.message = $event.message;
     this.toaster = 'Toasted Notification';
     this.isLoading = false;


   }, 2000);

 }

 recieveTodoFormEvent($event): void{
   this.child = 'Todo Form';
   this.navigation = $event.navigation;
   this.counter = $event.counter;
   this.message = $event.message;
   this.toaster = 'Toasted Notification';

   alert('New Todo Successfully Created');

   this.navigation = 'TDO_LIST';
   this.getPosts();
 }

 recieveTodoReactiveFormEvent($event): void{
   this.child = 'Todo Reactive Form';
   this.navigation = $event.navigation;
   this.counter = $event.counter;
   this.message = $event.message;
   this.toaster = 'Toasted Notification';

   alert('New Todo Reactive Successfully Created');

   this.navigation = 'TDO_LIST';
   this.getPosts();
 }

 recieveTodoReactiveFormv2Event($event): void{
   this.child = 'Todo Reactive v2 Form';
   this.navigation = $event.navigation;
   this.counter = $event.counter;
   this.message = $event.message;
   this.toaster = 'Toasted Notification';

   alert('New Todo Reactive Successfully Created');

   this.navigation = 'TDO_LIST';
   this.getPosts();
 }

}
