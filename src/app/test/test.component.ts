import { Component, OnInit } from '@angular/core';
import { MyService } from '../my.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  constructor(private myService: MyService) { }
  ngOnInit() { }
  toDoEvent() {
    this.myService.toDo('Hello customer service');

  }
}
