import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class MarvelCharactersService {
  characterUrl = 'https://gateway.marvel.com:443/v1/public/characters';  // URL to web api
  apiKey = environment.apiKey;
  privateKey = environment.privateKey;


  constructor(private http: HttpClient) {
  }

  getCharacters(term: string): Observable<any> {

    return this.http.get<any>(this.getUrl(term));
  }

  getUrl(term: string) {
    const ts = this.getTs();
    return this.characterUrl + '?nameStartsWith=' + term + '&ts=' + ts + '&apikey=' + this.apiKey + '&hash=' + this.getHash(ts);
  }

  getTs() {
    return Date.now().toString();
  }


  getHash(ts: string): string {
    const tmpHash = ts + this.privateKey + this.apiKey;
    return Md5.hashStr(tmpHash).toString();
  }
}
