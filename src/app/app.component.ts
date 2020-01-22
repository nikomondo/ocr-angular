import { Component , OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  
  seconds: number;
  counterSubscription: Subscription;
  
  title = 'ocr-angular';
  
  ngOnInit() {
    const counter= Observable.interval(1000);
    
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.seconds = value;
      },
      (error) => {
        console.log("error :" + error);
      },
      () => {
        console.log("observable complert")
      }
      );
      }
      
      ngOnDestroy() {
        this.counterSubscription.unsubscribe();
      }
  }
  

