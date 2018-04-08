import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';




declare var google: any;



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

@ViewChild('map') mapRef:ElementRef;



 constructor(public navCtrl: NavController) {
  }

  ionViewDidLoad() {
    this.showMap();
  }

//Objeto do marcador
addMarker(position,map,icon) {
  		return new google.maps.Marker({

  			position,
			map,
			icon

  		});
  	}





  showMap(){

	// Define os ícones para os marcadores
	const icon = 'https://maps.google.com/mapfiles/kml/shapes/parking_lot_maps.png';

	// Define um ponto no mapa
  	const location = new google.maps.LatLng('-25.363','131.044');
	
	  
	// Define o ponto inicial + o zoom
  	const options = {
  	center: location,
	  zoom:10
	  
  	};

  	
	  // Cria o Mapa
  	const map = new google.maps.Map(this.mapRef.nativeElement,options);
	  //Adiciona os marcadores
  	this.addMarker(location,map,icon);
  	

  }

  


}
