import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CategoryFormComponent } from "./categories-form/category-form.component";
import { CategoryListComponent } from "./category-list/category-list.component";

const routes: Routes = [
    { path: '', component: CategoryListComponent },
    { path: ':new', component: CategoryFormComponent },
    { path: ':id/edit', component: CategoryFormComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CategoriesRoutingModule { }