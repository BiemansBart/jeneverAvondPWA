import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeneverlistComponent } from './jeneverlist.component';

describe('JeneverlistComponent', () => {
  let component: JeneverlistComponent;
  let fixture: ComponentFixture<JeneverlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeneverlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeneverlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
