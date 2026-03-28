import { CommonModule, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [NgSwitch, NgSwitchCase, NgSwitchDefault,CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent implements OnInit {
  count:number = 0;
  addCount(){
    this.count++;
  }
  reasons:string[]=[
    'This is developed and maintained by Google',
    'This framework is built on top of Typescript',
    'This is the popular framework among front end developers',
    'This is easier to learn and use'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
