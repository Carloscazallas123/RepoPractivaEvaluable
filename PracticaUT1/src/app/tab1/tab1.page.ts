import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton,IonImg } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardContent,IonButton,IonImg ],
})
export class Tab1Page {

  iralawiki(){
    window.location.href = "https://es.wikipedia.org/wiki/Hercules";
  }

  constructor() {
    
  }
}
