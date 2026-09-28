import { Component } from '@angular/core';
import { IonHeader, IonLabel, IonItem, IonToolbar, IonTitle, IonContent, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent, IonButton,IonImg } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonItem, IonLabel, IonCard, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonCardHeader,IonCardTitle,IonCardSubtitle,IonButton,IonImg]
})
export class Tab3Page {

  Personajes = [ 'Hera','Atenea','Hermes','Helios','Molorco','Euristeo'];

  rutas = [ 
  './../../assets/img/Hera.png',
  './../../assets/img/Atenea.png',
  './../../assets/img/Hermes.png',
  './../../assets/img/Helios.png',
  './../../assets/img/Molorco.png',
  './../../assets/img/Euristeo.png',
  ]

  descripciones = [
  'Diosa del matrimonio y reina de los dioses. Esposa de Zeus y enemiga de Hércules.',
  'Diosa de la sabiduría, la estrategia y la guerra justa. Ayuda a Hercules.',
  'Mensajero de los dioses, dios del comercio y los viajeros. Destaca por su gran velocidad.',
  'Dios del Sol, que recorre el cielo cada día conduciendo su carro solar.',
  'Humilde campesino que acogió a Hércules antes de enfrentarse al león de Nemea.',
  'Rey de Micenas que ordenó a Hércules realizar sus famosos doce trabajos.',
  ]

  personajes: { nombre: string; ruta: string; descripcion: string }[] = [];


  constructor() {
    this.personajes = this.Personajes.map((nombre, i) => ({
    nombre,
    ruta: this.rutas[i],
    descripcion: this.descripciones[i]
    }));
  }
}
