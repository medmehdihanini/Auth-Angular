import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichageServComponent } from './affichage-serv.component';

describe('AffichageServComponent', () => {
  let component: AffichageServComponent;
  let fixture: ComponentFixture<AffichageServComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichageServComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffichageServComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
