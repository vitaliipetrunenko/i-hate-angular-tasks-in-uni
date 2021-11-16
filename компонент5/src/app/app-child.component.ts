import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.scss'],
})
export class MyComponent implements OnChanges {
  @Input() someInput: any[] = [];


  // min: number = Number.MIN_SAFE_INTEGER;
  // max: number = Number.MAX_SAFE_INTEGER;

  

  ngOnChanges() {
    // this.min = Math.min(...this.someInput);
    // this.max = Math.max(...this.someInput);
    console.log(this.someInput);
  }

  


}
