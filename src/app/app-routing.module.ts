import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { TestComponent } from './test/test.component';
import { FavouritesComponent } from './favourites/favourites.component';


const routes: Routes = [
  {path:'search', component: SearchComponent},
  {path:'test', component: TestComponent},
  {path:'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


