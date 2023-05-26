import { Component, Input, EventEmitter, Output, OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit  {

  @Input('img') postImg = ''

  @Output() imgSelected = new EventEmitter<string>();

  constructor(){
    console.log('constructor() is called', this.postImg);
  }

  ngOnInit(){
    console.log('ngOnInit() Called');
  }

  ngDoCheck(){
    console.log('ngDoCheck() Called');
  }

  ngOnChanges(){
    console.log('ngOnChanges() Called');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked() Called');
  }

  ngAfterContentInit(){
    console.log('ngAfterContentInit() Called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked() Called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit() Called');
  }

}
