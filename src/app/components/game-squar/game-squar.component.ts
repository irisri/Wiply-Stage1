import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-squar',
  templateUrl: './game-squar.component.html',
  styleUrls: ['./game-squar.component.css'],
})
export class GameSquarComponent implements OnInit {
  constructor() {}

  @Input() id: number;
  @Input() color: string;

  ngOnInit(): void {}
}
