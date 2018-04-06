import {Component, OnInit} from '@angular/core';
import {MarvelRepositoryService} from '../../services/marvel-characters.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Component({
  templateUrl: './marvel-characters.component.html'
})
export class MarvelCharactersComponent implements   OnInit {

  generatedHash = '';
  characters: any[] = [];
  filterName = '';

  constructor(private characterService: MarvelRepositoryService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  refreshHash() {
    this.generatedHash = this.characterService.getHash(this.characterService.getTimeString());
  }

  getCharacters() {
    this.characterService.getCharactersStartingWith(this.filterName)
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
