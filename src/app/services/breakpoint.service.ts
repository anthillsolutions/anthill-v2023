import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { distinctUntilChanged, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointService {

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  public isDesktopView(): Observable<boolean> {
    return this.breakpointObserver.observe(['(min-width: 768px)']).pipe(
      map((result) => result.matches),
      distinctUntilChanged()
    );
  }
}
