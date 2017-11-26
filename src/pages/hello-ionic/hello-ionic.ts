import { Component } from '@angular/core';
import { isEqual } from 'lodash';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html',
})
export class HelloIonicPage {

  posts = [];

  constructor() {}

  ionViewDidLoad() {
    this.posts = [
      {
        description: 'Trying out digital painting',
        image: 'https://image.flaticon.com/icons/svg/607/607621.svg'
      },
      {
        description: 'Trying out digital painting',
        image: 'https://image.flaticon.com/icons/svg/139/139252.svg'
      },
      {
        description: 'Trying out digital painting',
        image: 'https://image.flaticon.com/icons/svg/119/119073.svg'
      },
      {
        description: 'Trying out digital painting',
        image: 'https://image.flaticon.com/icons/svg/139/139168.svg'
      },
      {
        description: 'Trying out digital painting',
        image: 'https://image.flaticon.com/icons/svg/119/119073.svg'
      },
      {
        description: 'Trying out digital painting',
        image: 'https://image.flaticon.com/icons/svg/139/139168.svg'
      }
    ];
  }

}
