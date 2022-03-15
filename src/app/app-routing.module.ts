import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';

const routes: Routes = [
  {path: 'tour-of-heroes', component: TourOfHeroesComponent},
  {path: 'test', component : TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
