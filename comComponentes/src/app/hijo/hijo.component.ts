import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input('nom') nombre: string;
  @Output() info: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  enviarInfo(){
    this.info.emit('Patxiiiii');
  }

}
