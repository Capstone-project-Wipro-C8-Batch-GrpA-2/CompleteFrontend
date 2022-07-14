import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { BedsComponent } from './beds.component';

describe('BedsComponent', () => {
  let component: BedsComponent;
  let fixture: ComponentFixture<BedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BedsComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
