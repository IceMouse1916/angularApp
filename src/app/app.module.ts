import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }    from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { TestComponent } from './test/test.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { StartPageComponent } from './start-page/start-page.component';

import { OccupationsService } from './occupations.service';
import { UsersService } from './users.service';

import { HttpClientModule } from '@angular/common/http';
import { OccupationsListComponent } from './occupations-list/occupations-list.component';
import { OccupationDetailsComponent } from './occupation-details/occupation-details.component';
import { LogInComponent } from './log-in/log-in.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    TestComponent,
    FavouritesComponent,
    AdvancedSearchComponent,
    StartPageComponent,
    OccupationsListComponent,
    OccupationDetailsComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    OccupationsService,
    UsersService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
