import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { ShowsComponent } from './components/pages/shows/shows.component';
import { MangaComponent } from './components/pages/manga/manga.component';
import { NewsComponent } from './components/pages/news/news.component';
import { GamesComponent } from './components/pages/games/games.component';
import { StoreComponent } from './components/pages/store/store.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shows', component: ShowsComponent },
  { path: 'manga', component: MangaComponent },
  { path: 'news', component: NewsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'store', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
