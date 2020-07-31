import { Component, OnChanges, SimpleChanges, OnInit } from '@angular/core';


@Component({
  selector: 'ng7chunk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,OnChanges{
  title = 'ng7chunk';
  ngOnInit(): void {
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  
}
