import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlPdfComponent } from './html-pdf.component';

describe('HtmlPdfComponent', () => {
  let component: HtmlPdfComponent;
  let fixture: ComponentFixture<HtmlPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
