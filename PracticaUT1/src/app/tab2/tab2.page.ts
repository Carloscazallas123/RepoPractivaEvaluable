import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonLabel, IonList,IonListHeader  } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonItem, IonLabel, IonList,IonListHeader ]
})
export class Tab2Page {

  constructor() {}

  trabajos = [
    ["El león de Nemea", "Matar a un feroz león cuya piel era invulnerable a las armas y usar su manto como protección"],
    ["La hidra de Lerna", "Destruir al monstruo acuático de múltiples cabezas que se multiplicaban al cortarlas"],
    ["La cierva de Cerinea", "Capturar viva a la veloz cierva de cuernos de oro consagrada a Artemisa"],
    ["El jabalí de Erimanto", "Atrapar vivo al enorme y destructivo jabalí que aterrorizaba Arcadia"],
    ["Los establos de Augías", "Limpiar en un solo día una descomunal cantidad de estiércol desviando el curso de los ríos"],
    ["Las aves del Estínfalo", "Espantar y cazar a las aves con plumas de bronce y aliento pestilente del lago Estínfalo"],
    ["El toro de Creta", "Capturar al imponente toro furioso enviado por Poseidón a la isla de Creta"],
    ["Las yeguas de Diomedes", "Robar las yeguas carnívoras del rey tracio Diomedes"],
    ["El cinturón de Hipólita", "Obtener el cinturón mágico de la reina de las Amazonas"],
    ["El ganado de Gerión", "Viajar hasta los confines del mundo (actual Cádiz) para robar los toros rojos del gigante Gerión"],
    ["Las manzanas de oro del jardín de las Hespérides", "Sustraer los frutos mágicos ayudándose del titán Atlas"],
    ["Capturar al perro Cerbero", "Descender al Inframundo y dominar sin armas al monstruoso can de tres cabezas"]
]

}