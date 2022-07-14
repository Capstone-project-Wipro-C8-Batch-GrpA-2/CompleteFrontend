import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

import { FileuploadComponent } from './fileupload.component';

describe('FileuploadComponent', () => {
  let component: FileuploadComponent;
  let fixture: ComponentFixture<FileuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileuploadComponent ],
      imports:[HttpClientTestingModule,AppRoutingModule,FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
