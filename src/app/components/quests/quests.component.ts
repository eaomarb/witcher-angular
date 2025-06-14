import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/json/data.json';

@Component({
  selector: 'app-quests',
  templateUrl: './quests.component.html',
  styleUrls: ['./quests.component.scss']
})
export class QuestsComponent implements OnInit {
  datos: any;

  constructor() { }

  ngOnInit(): void {
    this.datos = (data as any).default;
    console.log(this.datos);
  }

}
