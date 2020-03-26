import { Component, OnInit, OnChanges, SimpleChanges, Input, InputDecorator } from '@angular/core';

@Component({
  selector: 'app-life-cycle-changes',
  templateUrl: './life-cycle-changes.component.html',
  styleUrls: ['./life-cycle-changes.component.css']
})
export class LifeCycleChangesComponent implements OnInit, OnChanges {
  @Input() testPropsName: string;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInitChild');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(changes);
    console.log('ngOnChanges');
  }
}
