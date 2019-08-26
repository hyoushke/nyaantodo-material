import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post-navigation',
  templateUrl: './post-navigation.component.html',
  styleUrls: ['./post-navigation.component.scss']
})
export class PostNavigationComponent implements OnInit {

  public message = '';
  public counter: number = 0;

  @Output() navigationEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClickNavigateItem(postNavigation: string){

    const data = {message: 'broadcast from navigation child',
                counter: this.counter,
                navigation: postNavigation };
    this.counter++;
    this.navigationEvent.emit(data);

  }


}
