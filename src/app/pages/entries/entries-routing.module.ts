import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EntryFormComponent } from "./entry-form/entry-form.component";
import { EntryListComponent } from "./entry-list/entry-list.component";

const routes: Routes = [
    { path: '', component: EntryListComponent },
    { path: ':new', component: EntryFormComponent },
    { path: ':id/edit', component: EntryFormComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EntriesRoutingModule { }