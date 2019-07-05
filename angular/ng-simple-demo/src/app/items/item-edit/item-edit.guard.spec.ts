import { TestBed, async, inject } from '@angular/core/testing';

import { ItemEditGuard } from './item-edit.guard';

describe('ItemEditGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemEditGuard]
    });
  });

  it('should ...', inject([ItemEditGuard], (guard: ItemEditGuard) => {
    expect(guard).toBeTruthy();
  }));
});
