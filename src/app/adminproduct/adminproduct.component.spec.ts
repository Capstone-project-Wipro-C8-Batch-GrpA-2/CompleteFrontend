import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { AdminproductComponent } from './adminproduct.component';

describe('AdminproductComponent', () => {
  let component: AdminproductComponent;
  let fixture: ComponentFixture<AdminproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproductComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
