import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,  IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonButton} from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonButton]
})
export class Tab4Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  iralawiki(){
    window.location.href = "https://es.wikipedia.org/wiki/Hercules";
  }

  nombre = "Daniel Calzado Baos"
  curso = "DAM 2º"
  modulo = "Aplicaciones multiplataforma"
  tematica = "Hercules"

}
