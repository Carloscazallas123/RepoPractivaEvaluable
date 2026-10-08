import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonItem, IonLabel, IonList,IonListHeader, IonButton  } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonItem, IonLabel, IonList,IonListHeader, IonButton ]
})
export class Tab2Page {

  constructor() {}
  irDetalles(){
    window.location.href = "/tabs/detalle";
  }

  trabajos = [
    ["1)","El león de Nemea", "Matar a un feroz león cuya piel era invulnerable a las armas y usar su manto como protección"],
    ["2)","La hidra de Lerna", "Destruir al monstruo acuático de múltiples cabezas que se multiplicaban al cortarlas"],
    ["3)","La cierva de Cerinea", "Capturar viva a la veloz cierva de cuernos de oro consagrada a Artemisa"],
    ["4)","El jabalí de Erimanto", "Atrapar vivo al enorme y destructivo jabalí que aterrorizaba Arcadia"],
    ["5)","Los establos de Augías", "Limpiar en un solo día una descomunal cantidad de estiércol desviando el curso de los ríos"],
    ["6)","Las aves del Estínfalo", "Espantar y cazar a las aves con plumas de bronce y aliento pestilente del lago Estínfalo"],
    ["7)","El toro de Creta", "Capturar al imponente toro furioso enviado por Poseidón a la isla de Creta"],
    ["8)","Las yeguas de Diomedes", "Robar las yeguas carnívoras del rey tracio Diomedes"],
    ["9)","El cinturón de Hipólita", "Obtener el cinturón mágico de la reina de las Amazonas"],
    ["10)","El ganado de Gerión", "Viajar hasta los confines del mundo (actual Cádiz) para robar los toros rojos del gigante Gerión"],
    ["11)","Las manzanas de oro del jardín de las Hespérides", "Sustraer los frutos mágicos ayudándose del titán Atlas"],
    ["12)","Capturar al perro Cerbero", "Descender al Inframundo y dominar sin armas al monstruoso can de tres cabezas"],
    ["13)","Curiosidad 1", "Hercules seguia muy a pie las enseñanzas griegas con su sobrino Yolao"],
    ["14)","Curiosidad 2", "Al perecer, Zeus le recompenso con la mano de una de sus mas queridas Hijas / ninfas"]
]

}