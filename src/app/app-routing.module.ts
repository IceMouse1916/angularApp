import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { StartPageComponent } from './start-page/start-page.component';
import { OccupationDetailsComponent } from './occupation-details/occupation-details.component';
import { LogInComponent } from './log-in/log-in.component';
import { RecommendedComponent } from './recommended/recommended.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
  {path:'search', component: SearchComponent},
  {path:'test', component: TestComponent},
  {path:'favourites', component: FavouritesComponent},
  {path:'recommended', component: RecommendedComponent},
  {path:'search/advanced', component: AdvancedSearchComponent},
  // {path:'start', component: StartPageComponent},
  {path:'start', component: StartComponent},
  {path: '', redirectTo: 'start', pathMatch: 'full'},
  {path:'occupation/:id', component: OccupationDetailsComponent},
  {path:'login', component: LogInComponent},
  {path:'signup', component: SignUpComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


