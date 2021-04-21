import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
  
    let color: string;
  
    switch (type) {
      case 'Feu':
        color = 'fire-type lighten-1';
        break;
      case 'Eau':
        color = 'water-type  lighten-1';
        break;
      case 'Plante':
        color = 'plant-type lighten-1';
        break;
      case 'Insecte':
        color = 'insect-type lighten-1';
        break;
      case 'Normal':
        color = 'normal-type lighten-3';
        break;
      case 'Vol':
        color = 'flight-type lighten-3';
        break;
      case 'Poison':
        color = 'poison-type accent-1';
        break;
      case 'Fée':
        color = 'fairy-type lighten-4';
        break;
      case 'Psy':
        color = 'shrink-type lighten-1';
        break;
      case 'Electrik':
        color = 'electrik-type accent-1';
        break;
      case 'Combat':
        color = 'fight-type lighten-1';
        break;
        case 'Acier':
        color = 'steel-type lighten-1';
        break;
        case 'Dragon':
        color = 'dragon-type lighten-1';
        break;
        case 'Sol':
        color = 'ground-type lighten-1';
        break;
        case 'Ténèbres':
        color = 'darkness-type lighten-1';
        break;
        case 'Glace':
        color = 'iceCream-type lighten-1';
        break;
        case 'Roche':
        color = 'rock-type lighten-1';
        break;
        case 'Spectre':
          color = 'spectrum-type lighten-1';
          break;
      default:
        color = 'grey';
        break;
    }
  
    return 'chip ' + color;
  
  }

}
