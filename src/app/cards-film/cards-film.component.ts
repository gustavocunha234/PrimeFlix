import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'primeflix-cards-film',
  templateUrl: './cards-film.component.html',
  styleUrls: ['./cards-film.component.scss']
})
export class CardsFilmComponent implements OnInit {

  cards = [{

    nome: 'shark',
    descricao: 'A liga de heróis que irá salvar o mundo.',
    img: '../../assets/img/ligadajustica.png'
  },
  
  {
    nome: 'shark',
    descricao: 'Um grupo de ilusionistas encanta o público com suas mágicas e também rouba bancos.',
    img: '../../assets/img/truquedemestre.png'
  },

  {
    nome: 'shark',
    descricao: 'A vila mais amada do Brasil com os personagens mais amados.',
    img: '../../assets/img/chaves.png'
  }
]

Card = [{

  nome: 'shark',
  descricao: 'Dois clássicos do cinema se encontram em uma luta épica.',
  img: '../../assets/img/king.png'
},

{
  nome: 'shark',
  descricao: 'Um aluno é desafiado a entender códigos nazistas, incluindo o "Enigma", que criptógrafos acreditavam ser inquebrável.',
  img: '../../assets/img/jogodaimitacao.png'
},

{
  nome: 'shark',
  descricao: 'Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas.',
  img: '../../assets/img/asbranquelas.png'
}
]



  constructor() { }

  ngOnInit(): void {
  }

}
