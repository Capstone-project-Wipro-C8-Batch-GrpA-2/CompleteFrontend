import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { AdmindiscountComponent } from './admindiscount.component';

describe('AdmindiscountComponent', () => {
  let component: AdmindiscountComponent;
  let fixture: ComponentFixture<AdmindiscountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmindiscountComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmindiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
