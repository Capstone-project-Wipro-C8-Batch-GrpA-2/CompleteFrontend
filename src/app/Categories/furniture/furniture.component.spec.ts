import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { FurnitureComponent } from './furniture.component';

describe('FurnitureComponent', () => {
  let component: FurnitureComponent;
  let fixture: ComponentFixture<FurnitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnitureComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FurnitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
