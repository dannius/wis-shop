import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class WishCartService implements OnInit {

  private readonly WISHES = 'wish-list';
  private _wishIds = new BehaviorSubject<number[]>(this.fetch());

  ngOnInit(): void {
    this._wishIds
    .asObservable()
    .subscribe((ids) => {
      if (ids !== null) {
        this.write(ids);
      }
    });
  }

  public get wishIds(): number[] {
    return this._wishIds.getValue();
  }

  public fetch(): number[] {
    const ids = localStorage.getItem(this.WISHES);
    return ids === null || ids === undefined || ids === '' ?
            [] : ids.split(',').map((id) => +id);
  }

  public write(ids: number[]) {
    localStorage.setItem(this.WISHES, ids.join(','));
  }

  public updateWithId(id: number): Observable<boolean> {
    const draftIds = this.wishIds || [];
    const existedWishId = draftIds.find((idInList) => idInList === id);

    if (existedWishId) {
      return Observable.of(false);
    } else {
      draftIds.push(id);
      this.write(draftIds);
      this._wishIds.next(draftIds);
      return Observable.of(true);
    }
  }

  public removeId(id: number): Observable<boolean> {
    const draftIds = this.wishIds || [];
    draftIds.splice(draftIds.indexOf(id), 1);

    this.write(draftIds);
    this._wishIds.next(draftIds);
    return Observable.of(true);
  }

  public wishIdsObservable() {
    return this._wishIds.asObservable();
  }

  public clear() {
    localStorage.setItem(this.WISHES, null);
  }
}
