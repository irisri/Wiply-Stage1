import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { SQUARS } from '../../db';

@Injectable({
  providedIn: 'root',
})
export class SquarService {
  constructor() {}

  public getSquars(): Observable<any[]> {
    return of(SQUARS);
  }

  public getRandomColor(id: number): void {
    let _squars = [];
    this.getSquars().subscribe((squars) => (_squars = squars));
    const colorList = this._getColorList(_squars);
    let color = this._generateRandomColor(colorList);
    const indexes = this._getSquarById(id, _squars);
    let squar = _squars[indexes[0]][indexes[1]];
    squar.color = color;
  }

  private _getColorList(squars: any[]): string[] {
    let colors = [];
    let allSquars = [];
    squars.forEach((row) => {
      row.forEach((squar) => allSquars.push(squar));
    });
    allSquars.forEach((squar) => {
      colors.push(squar.color);
    });

    return colors;
  }

  private _generateRandomColor(colors: string[]) {
    var letters = '0123456789abcdef';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    if (colors.indexOf(color) === -1) return color;
    else return this._chuckIfDouble(colors, color);
  }

  private _chuckIfDouble(colors: string[], color: string): string {
    if (colors.indexOf(color) !== -1) return color;
    else this._chuckIfDouble(colors, color);
  }

  private _getSquarById(id: number, squars: any[]): any[] {
    let indexes = [];
    if (id <= 3) {
      let row = squars[0];
      indexes.push(
        0,
        row.findIndex((squar) => squar.id === id)
      );
    } else if (id <= 6) {
      let row = squars[1];
      indexes.push(
        1,
        row.findIndex((squar) => squar.id === id)
      );
    } else {
      let row = squars[2];
      indexes.push(
        2,
        row.findIndex((squar) => squar.id === id)
      );
    }
    return indexes;
  }
}
