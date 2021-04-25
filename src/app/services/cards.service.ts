import { Injectable } from '@angular/core';
import {Cardfilm} from '../models/card-filme.model'
/*
@Injectable({
  providedIn: 'root'
})
*/


@Injectable()
export class CardsService {

  public cards: Cardfilm[] = [{

    descricao: 'A liga de heróis que irá salvar o mundo.',
    imgPath: '../../assets/img/ligadajustica.png'
  },
  
  {
    descricao: 'Um grupo de ilusionistas encanta o público com suas mágicas e também rouba bancos.',
    imgPath: '../../assets/img/truquedemestre.png'
  },

  {
    descricao: 'A vila mais amada do Brasil com os personagens mais amados.',
    imgPath: '../../assets/img/chaves.png'
  }
]

public Card: Cardfilm[] = [{

  descricao: 'Dois clássicos do cinema se encontram em uma luta épica.',
  imgPath: '../../assets/img/king.png'
},

{

  descricao: 'Um aluno é desafiado a entender códigos nazistas, incluindo o "Enigma", que criptógrafos acreditavam ser inquebrável.',
  imgPath: '../../assets/img/jogodaimitacao.png'
},

{
  descricao: 'Dois irmãos agentes do FBI, Marcus e Kevin Copeland, acidentalmente evitam que bandidos sejam presos em uma apreensão de drogas.',
  imgPath: '../../assets/img/asbranquelas.png'
}
]


  constructor() { }

  public getcards(): Cardfilm[]{
    return this.cards;
  }

  public getCard(): Cardfilm[]{
    return this.Card;
  }

}
