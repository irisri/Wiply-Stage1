import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSquarComponent } from './game-squar.component';

describe('GameSquarComponent', () => {
  let component: GameSquarComponent;
  let fixture: ComponentFixture<GameSquarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameSquarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSquarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
