import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';
import { of, from } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { TestService } from '../core/services/test.service';

@Component({
  selector: 'app-life-cycle-hooks',
  templateUrl: './life-cycle-hooks.component.html',
  styleUrls: ['./life-cycle-hooks.component.css']
})
export class LifeCycleHooksComponent implements
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {

  constructor(
    private _testService: TestService,
  ) { }

  ngOnInit() {
    console.log('ngOnInit');
    this._testService.getRecipe().pipe(
      switchMap((sourse) => {
        return from([sourse.location]);
      }),
      switchMap((sourse) => {
        return from([sourse.name]);
      })
    ).subscribe((data) => {
      console.log(data);
    });
    of({ id: 1, users: [2, 2] }).pipe(
      switchMap(({ id, users }) => {
        console.log(id);
        console.log(users);
        return of([1, 2, 3]);
      })
    ).subscribe((data) => {
      console.log(data);
    });



  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(changes);
    console.log('ngOnChanges');
  }
  ngDoCheck(): void {
    // Called every time that the input properties of a component or a directive are
    // checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('ngDoCheck');

  }
  ngAfterContentInit(): void {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    console.log('ngAfterContentInit');

  }
  ngAfterContentChecked(): void {
    // Called after every check of the component's or directive's content.
    // Add 'implements AfterContentChecked' to the class.
    console.log('ngAfterContentChecked');

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('ngAfterViewInit');

  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('ngAfterViewChecked');

  }
  ngOnDestroy() {
    // this.renderer.removeClass(document.body, this.currentPage + '-dashboard');
    console.log('ngOnDestroy');

  }
}
