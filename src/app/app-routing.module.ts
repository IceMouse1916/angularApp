import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';


const routes: Routes = [
  {path:'search', component: SearchComponent},
  {path:'test', component: TestComponent},
  {path:'favourites', component: FavouritesComponent},
  {path:'search/advanced', component: AdvancedSearchComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


