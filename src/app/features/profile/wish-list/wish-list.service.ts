import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WishList} from "../../../core/models/wish-list.model";


@Injectable({
  providedIn: 'root'
})
export class WishListService {
  private apiUrl = 'http://localhost:9010/api/WishList';

  constructor(private http: HttpClient) {
  }//localhost:9010/
  //TODO: Need to fix Not recommended hence I need to start using Guid to begin with.
  private tempId = 100;

  createWishList(data: WishList): Observable<WishList> {
    data.wishListID = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<WishList>(this.apiUrl, data);
  }

  getWishList(): Observable<WishList[]> {
    return this.http.get<WishList[]>(this.apiUrl);
  }

  getWishListById(id: number): Observable<WishList> {
    return this.http.get<WishList>(`${this.apiUrl}/${id}`);
  }


  updateWishList(id: number, data: WishList): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  public deleteWishList(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
