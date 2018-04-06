import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {BootstrapContainersComponent} from "./bootstrap/containers/bootstrap-containers.component";
import {BootstrapJumbotronComponent} from "./bootstrap/jumbotron/bootstrap-jumbotron.component";
import {MarvelCharactersComponent} from "./marvel/characters/marvel-characters.component";


const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'bootstrap-containers', component: BootstrapContainersComponent},
  {path: 'bootstrap-jumbotron', component: BootstrapJumbotronComponent},
  {path: 'marvel-characters', component: MarvelCharactersComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
