import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ShowsComponent } from './components/pages/shows/shows.component';
import { MangaComponent } from './components/pages/manga/manga.component';
import { NewsComponent } from './components/pages/news/news.component';
import { GamesComponent } from './components/pages/games/games.component';
import { StoreComponent } from './components/pages/store/store.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ShowsComponent,
    MangaComponent,
    NewsComponent,
    GamesComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
