import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/models/house';
import { HousesService } from 'src/app/services/houses.service';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {

  data : House[] = [];

  // Référencer le service
  constructor(private service: HousesService) {
  }

  ngOnInit(): void {
   this.service.getHouses().subscribe
   ( {
      next:  reponse => this.data = reponse,
      error:  erreur => console.log( "Attention, il y a eu l'erreur :"+ erreur)
      }
      );
  }
}
