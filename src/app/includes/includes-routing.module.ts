import { NgModule } from "@angular/core";
import { Routes, RouterModule, Route } from "@angular/router";

import { DashboardComponent } from "../pages/dashboard/dashboard.component";
import { ProductListComponent } from "../pages/product-list/product-list.component";
import { ProductSalesComponent } from "../pages/product-sales/product-sales.component";
import { InventoryComponent } from "../pages/inventory/inventory.component";

const routes: Routes = [
    {path: '', component: DashboardComponent},
    {path: 'dashboard', component: DashboardComponent, data: {title: 'Dashboard'}},
    {path: 'product-list', component: ProductListComponent},
    {path: 'product-sales', component: ProductSalesComponent},
    {path: 'inventory', component: InventoryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true})],
    exports: [RouterModule]
})

export class IncludesRoutingModule {}