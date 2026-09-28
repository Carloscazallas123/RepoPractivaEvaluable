import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent, IonButton,IonImg } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonCard, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonCardHeader,IonCardTitle,IonCardSubtitle,IonButton,IonImg]
})
export class Tab3Page {

  Dioses = [ 'Hera','Atenea','Hermes','Helios'];
  Humanos = [ 'Molorco','Euristeo', 'Admete'];
  

  constructor() {}
}
