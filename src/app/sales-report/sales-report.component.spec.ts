import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesReportComponent } from './sales-report.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
describe('SalesReportComponent', () => {
  let component: SalesReportComponent;
  let fixture: ComponentFixture<SalesReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesReportComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule,FormsModule]
      
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
