import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import {ProductListComponent} from "../pages/product-list/product-list.component";

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
    {path: 'product-list', component: ProductListComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})

export class IncludesRoutingModule {}