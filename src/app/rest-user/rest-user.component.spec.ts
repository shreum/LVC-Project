import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestUserComponent } from './rest-user.component';

describe('RestUserComponent', () => {
  let component: RestUserComponent;
  let fixture: ComponentFixture<RestUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestUserComponent]
    });
    fixture = TestBed.createComponent(RestUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
