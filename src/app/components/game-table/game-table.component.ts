import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SquarService } from '../../services/squarService/squar.service';

@Component({
  selector: 'game-table',
  templateUrl: './game-table.component.html',
  styleUrls: ['./game-table.component.css'],
})
export class GameTableComponent implements OnInit {
  squars: any[];
  constructor(private squarService: SquarService) {}

  ngOnInit(): void {
    this.getSquars();
  }

  getSquars(): void {
    this.squarService.getSquars().subscribe((squars) => (this.squars = squars));
  }

  onChangeRandomColor(id: number, ev: any): void {
    ev.stopPropagation();
    this.squarService.getRandomColor(id);
  }
}
