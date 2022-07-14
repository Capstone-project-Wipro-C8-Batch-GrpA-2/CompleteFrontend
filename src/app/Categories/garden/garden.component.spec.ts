import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { GardenComponent } from './garden.component';

describe('GardenComponent', () => {
  let component: GardenComponent;
  let fixture: ComponentFixture<GardenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GardenComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GardenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
