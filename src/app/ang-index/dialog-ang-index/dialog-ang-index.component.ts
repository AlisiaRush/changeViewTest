import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-ang-index',
  templateUrl: './dialog-ang-index.component.html',
  styleUrls: ['./dialog-ang-index.component.css']
})
export class DialogAngIndexComponent implements OnInit {



definitions = [
  {name: "aot", content: "Ahead of Time"},
]

  constructor() { }

  ngOnInit() {
  }

}
