import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes : Routes = [
    {path:'tour-of-heroes/dashboard', component: DashboardComponent},
    {path: 'tour-of-heroes/heroes', component: HeroesComponent},
    {path: 'tour-of-heroes/detail/:id', component: HeroDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class TourOfHeroesRoutingModule {}