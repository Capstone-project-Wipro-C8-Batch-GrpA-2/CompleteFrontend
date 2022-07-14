import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { UsersessionComponent } from './usersession.component';

describe('UsersessionComponent', () => {
  let component: UsersessionComponent;
  let fixture: ComponentFixture<UsersessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersessionComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
