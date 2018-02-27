import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "firstname": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "name": "Burt Bear",
        "profilePic": "assets/img/speakers/bear.jpg",
        "about": "Cardiologo."
      },
      {
        "name": "Charlie Cheetah",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Urologo."
      },
      {
        "name": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Internista."
      },
      {
        "name": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Internista."
      },
      {
        "name": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Cirujano."
      },
      {
        "name": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Epidemiologo."
      },
      {
        "name": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Medico General."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
