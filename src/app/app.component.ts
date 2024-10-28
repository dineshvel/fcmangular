import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './firebase.service';
import { NotificationPayload } from '@firebase/messaging';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  notifications: NotificationPayload[] = [];
  tokenn:string='';
  constructor(private firebase: FirebaseService, private swUpdate: SwUpdate) { }

  ngOnInit() {
    this.firebase.notifications.subscribe((payload: NotificationPayload) => {
      if(payload.body) this.notifications.push(payload);
    });
   // console.log(this.swUpdate.checkForUpdate());
  }
  onButtonClick() {
  // let token= this.firebase.getFcmToken();
  this.tokenn=this.firebase.tokenn;
   alert(this.firebase.tokenn);
  
  }
}
