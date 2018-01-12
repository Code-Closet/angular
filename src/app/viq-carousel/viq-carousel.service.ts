import { Injectable } from '@angular/core';

@Injectable()
export class ViqCarouselService {

    getCarouselData(): any {
        return dummy_data;
    }
}

const dummy_data = [
    {
      id : 1,
      name : 'Copper'
    },
    {
      id : 2,
      name : 'Silver'
    },
    {
      id : 3,
      name : 'Gold'
    },
    {
      id : 4,
      name : 'Titanium'
    },
    {
      id : 5,
      name : 'Oganesson'
    },
    {
      id : 6,
      name : 'Francium'
    },
    {
      id : 7,
      name : 'Moscovium'
    },
    {
      id : 8,
      name : 'Beryllium'
    },
    {
      id : 9,
      name : 'lithium aluminum tri(butoxy)hydride'
    },
    {
        id : 10,
        name : 'Formylbenzoic acid'
      },
      {
        id : 11,
        name : 'Para-nitrobenzophenone'
      },
      {
        id : 12,
        name : 'Isovalcroyl chloride'
      }
];
