import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateservComponent } from './updateserv.component';

describe('UpdateservComponent', () => {
  let component: UpdateservComponent;
  let fixture: ComponentFixture<UpdateservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateservComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
