import {Component, OnInit} from '@angular/core';
import {MarvelRepositoryService} from '../../services/marvel-characters.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  moduleId: module.id,
  templateUrl: 'marvel-comics.component.html'
})
export class MarvelComicsComponent implements OnInit {
  startYear = 2018;
  comics: any[] = [];

  constructor(private marvelService: MarvelRepositoryService) {
  }

  ngOnInit() {
  }

  getComics() {
    this.marvelService.getComicsStartingFrom(this.startYear)
      .subscribe((result) => {
          this.comics = result.data.results;

          if (this.comics.length === 0) {
            console.log('No characters found');
          }
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log(`Client-side error occurred: ${err.message}`);
          } else {
            console.log(`Server-side error occurred: ${err.message}`);
          }
        });
  }

}
