import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { TestComponent } from './test/test.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { StartPageComponent } from './start-page/start-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    TestComponent,
    FavouritesComponent,
    AdvancedSearchComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
