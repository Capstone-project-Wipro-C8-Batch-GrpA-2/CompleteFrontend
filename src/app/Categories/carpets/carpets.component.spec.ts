import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { CarpetsComponent } from './carpets.component';

describe('CarpetsComponent', () => {
  let component: CarpetsComponent;
  let fixture: ComponentFixture<CarpetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarpetsComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarpetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
