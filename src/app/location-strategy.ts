import { HashLocationStrategy, LocationStrategy } from '@angular/common';

export function provideLocationStrategy() {
  return { provide: LocationStrategy, useClass: HashLocationStrategy };
}

