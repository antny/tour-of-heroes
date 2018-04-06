import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../environments/environment';


@Injectable()
export class MarvelRepositoryService {
  characterUrl = 'https://gateway.marvel.com:443/v1/public/characters';
  comicUrl = 'https://gateway.marvel.com:443/v1/public/comics';
  apiKey = environment.apiKey;
  privateKey = environment.privateKey;


  constructor(private http: HttpClient) {
  }

  getCharactersStartingWith(term: string): Observable<any> {
    const ts = this.getTimeString();
    const url =  this.characterUrl + '?nameStartsWith=' + term + '&ts=' + ts + '&apikey=' + this.apiKey + '&hash=' + this.getHash(ts);

    return this.http.get<any>(url);
  }

  getComicsStartingFrom(year: number): Observable<any> {
    const ts = this.getTimeString();
    const url =  this.comicUrl + '?format=comic&formatType=comic&hasDigitalIssue=true&orderBy=onsaleDate&limit=20&startYear=' + year + '&ts=' + ts + '&apikey=' + this.apiKey + '&hash=' + this.getHash(ts);

    return this.http.get<any>(url);
  }


  getTimeString(): string {
    return Date.now().toString();
  }

  getHash(ts: string): string {
    const tmpHash = ts + this.privateKey + this.apiKey;
    return Md5.hashStr(tmpHash).toString();
  }


}
