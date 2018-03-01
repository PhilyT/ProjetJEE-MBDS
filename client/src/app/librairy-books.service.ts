import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {DateFormatter} from '@angular/common/src/pipes/deprecated/intl';

@Injectable()
export class LibrairyBooksService {

  constructor(private http: Http) {

  }

  getBooksOfLibrairy(librairyId) {
    const url = 'http://localhost:8081/tpwsrest/biblio/' + librairyId + '/books';
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.get(url, options).map((response: Response) => response.json());
  }
  getBookOfLibrairy(librairyId, bookId) {
    const url = 'http://localhost:8081/tpwsrest/biblio/' + librairyId + '/book?book.id=' + bookId;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.get(url, options).map((response: Response) => response.json());
  }
  putBookOfLibrairy(book, idLibrairy) {
    // const dateArray = book.releaseDate.split('/');
    // console.log(dateArray);
    // const dateIso = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]).toISOString();
    book.releaseDate = book.releaseDate.replace('T', ' ');
    book.releaseDate = book.releaseDate.replace('Z', '.000');
    const url = 'http://localhost:8081/tpwsrest/biblio/' + idLibrairy + '/book?book.id=' + book.id
                + '&name=' + book.name + '&releaseDate=' + book.releaseDate + '&isbn=' + book.isbn + '&author=' + book.author;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({headers: headers});
    return this.http.put(url, {}, options).map((response: Response) => response.json());
  }
  addBookToLibrary(idLibrairy, book) {
    book.releaseDate = book.releaseDate.replace('T', ' ');
    book.releaseDate = book.releaseDate.replace('Z', '.000');
    const url = 'http://localhost:8081/tpwsrest/biblio/' + idLibrairy + '/book?book.id=' + book.id + '&name=' + book.name + '&releaseDate=' + book.releaseDate + '&isbn=' + book.isbn + '&author=' + book.author;
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const options = new RequestOptions({ headers: headers });
    return this.http.post(url, book, options).map((response: Response) => response.json());
  }
}
