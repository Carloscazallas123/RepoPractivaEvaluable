import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonRouterLink } from '@ionic/angular';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonLabel, IonIcon, IonTabButton, IonTabBar, IonTabs, IonApp, IonRouterOutlet, IonIcon, RouterLinkActive, IonRouterLink],
})
export class AppComponent {
  constructor() {}
}
