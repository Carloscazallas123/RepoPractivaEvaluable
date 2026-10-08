import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton,IonImg } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton,IonImg ]
})
export class DetallePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  irTab2(){
    window.location.href = "/tabs/tab2";
  }

  titulo = "SABIAS QUE..."
  detalle = "Hercules tubo tantos hijos que se decia que con ellos podia haber hecho toda una formacion de guerra griega cuando aun esta vivo... y cuando no los habia asesinado."

}
