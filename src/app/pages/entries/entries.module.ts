import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EntriesRoutingModule } from "./entries-routing.module";
import { EntryListComponent } from "./entry-list/entry-list.component";
import { EntryFormComponent } from "./entry-form/entry-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IMaskModule } from "angular-imask";
import { CalendarModule } from "primeng/calendar";

@NgModule({
    declarations: [
        EntryListComponent,
        EntryFormComponent
    ],
    imports: [
        CommonModule,
        EntriesRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        IMaskModule,
        CalendarModule
    ]
})

export class EntriesModule { }