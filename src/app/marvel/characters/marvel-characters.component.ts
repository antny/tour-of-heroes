import {Component, OnInit} from '@angular/core';
import {MarvelCharactersService} from '../../services/marvel-characters.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  templateUrl: './marvel-characters.component.html'
})
export class MarvelCharactersComponent implements OnInit {

  generatedHash = '';
  generatedUrl = '';
  characters: any[] = [];
  filterName = '';

  constructor(private characterService: MarvelCharactersService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  refreshHash() {
    this.generatedHash = this.characterService.getHash(this.characterService.getTs());
  }

  getCharacters() {
    this.generatedUrl = this.characterService.getUrl(this.filterName);

    this.characterService.getCharacters(this.filterName)
      .subscribe((result) => {
          this.characters = result.data.results;

          if (this.characters.length === 0) {
            console.log('No characters found');
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log(`Client-side error occured: ${err.message}`);
          } else {
            console.log(`Server-side error occured: ${err.message}`);
          }
        });


  }

}
