import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ColorCardComponent } from './color-card.component';

describe('ColorCardComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        ColorCardComponent
      ],
    }).compileComponents();
  }));

  it('should create the colorCard', () => {
    const fixture = TestBed.createComponent(ColorCardComponent);
    const colorCard = fixture.debugElement.componentInstance;
    expect(colorCard).toBeTruthy();
  });
});
