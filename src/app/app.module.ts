import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './/app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
// import {InMemoryDataService} from './in-memory-data.service';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {BootstrapContainersComponent} from './bootstrap/containers/bootstrap-containers.component';
import {BootstrapJumbotronComponent} from './bootstrap/jumbotron/bootstrap-jumbotron.component';
import {MarvelCharactersComponent} from './marvel/characters/marvel-characters.component';
import {MarvelRepositoryService} from './services/marvel-characters.service';
import {MarvelComicsComponent} from './marvel/comics/marvel-comics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    AppNavbarComponent,
    BootstrapContainersComponent,
    BootstrapJumbotronComponent,
    MarvelCharactersComponent,
    MarvelComicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
//     HttpClientInMemoryWebApiModule.forRoot(
//       InMemoryDataService, {dataEncapsulation: false}
//     )
  ],
  providers: [HeroService, MessageService, MarvelRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
