import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JeneverComponent } from './jenever.component';

describe('JeneverComponent', () => {
  let component: JeneverComponent;
  let fixture: ComponentFixture<JeneverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JeneverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JeneverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
