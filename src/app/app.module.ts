import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameTableComponent } from './components/game-table/game-table.component';
import { GameSquarComponent } from './components/game-squar/game-squar.component';

@NgModule({
  declarations: [AppComponent, GameTableComponent, GameSquarComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
