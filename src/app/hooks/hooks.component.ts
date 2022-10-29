import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck ,AfterContentInit,AfterContentChecked,
AfterViewInit,AfterViewChecked,OnDestroy{

  constructor() { }
  ngOnDestroy(): void {
console.log("ngOnDestroy") 
 }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngDoCheck(): void {
    console.log("ngDocheck");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
   console.log("ngOnchanges");
  }

  ngOnInit(): void {
    console.log("ngOnInit");
  }

}
