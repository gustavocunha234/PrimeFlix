import { Component, OnInit } from '@angular/core';
import { Cardfilm } from '../models/card-filme.model';

import {CardsService} from './../services/cards.service';

@Component({
  selector: 'primeflix-cards-film',
  templateUrl: './cards-film.component.html',
  styleUrls: ['./cards-film.component.scss']
})
export class CardsFilmComponent implements OnInit {

  public cards: Cardfilm[] = [];
  public Card:Cardfilm[] = [];


  constructor(private cardsService: CardsService) { }

  ngOnInit(): void {
    this.cards = this.cardsService.getcards();
    this.Card = this.cardsService.getCard();
  }

}
