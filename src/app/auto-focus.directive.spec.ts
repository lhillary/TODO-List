import { AutoFocusDirective } from './auto-focus.directive';
import { elementEnd } from '@angular/core/src/render3';

describe('AutoFocusDirective', () => {
  it('should create an instance', () => {
    const directive = new AutoFocusDirective();
    expect(directive).toBeTruthy();
  });
});
