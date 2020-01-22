import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit , OnDestroy {
  
  appareils: any[];
  appareilsSubscription: Subscription;
  
   
    lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });

     constructor( private appareilService : AppareilService) {}
     
     
  ngOnInit() {
    this.appareilsSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
      );
      this.appareilService.emitAppareilsSubject();
  }
  
  onAllumer() { 
    this.appareilService.switchOnAll();
  }
  
  onEteindre() {
    if(confirm("Voulez vous totu éteindre ?")) {
      this.appareilService.switchOffAll();
      } else {
        return null;
      }
    } 
    
    ngOnDestroy(){
      this.appareilsSubscription.unsubscribe();
    }
  }