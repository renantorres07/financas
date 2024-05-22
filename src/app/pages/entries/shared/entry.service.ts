import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, mergeMap, map, Observable, throwError } from "rxjs";
import { Entry } from "../shared/entry.model";
import { CategoryService } from "../../categories/shared/category.service";

@Injectable({
    providedIn: 'root'
})
export class EntryService {
    private apiPath: string = 'http://localhost:3000/entries'
    constructor(
        private http: HttpClient,
        private categoryService: CategoryService
    ) { }

    getAll(): Observable<Entry[]> {
        return this.http.get<Entry>(this.apiPath).pipe(
            catchError(this.handleError),
            map(this.jsonDataEntries),
        )
    }

    getById(id: Number): Observable<Entry> {
        const url = `${this.apiPath}/${id}`

        return this.http.get<Entry>(url).pipe(
            catchError(this.handleError),
            map(this.jsonDataEntry)
        )
    }

    create(entry: Entry): Observable<unknown> {
        return this.categoryService.getById(Number(entry.categoryId)).pipe(
            mergeMap(category => {
                entry.category = category
                return this.http.post(this.apiPath, entry).pipe(
                    catchError(this.handleError),
                    map(this.jsonDataEntry)
                )
            })
        )
    }

    update(entry: Entry): Observable<unknown> {
        const url = `${this.apiPath}/${entry.id}`

        return this.categoryService.getById(Number(entry.categoryId)).pipe(
            mergeMap(category => {
                entry.category = category
                return this.http.post(this.apiPath, entry).pipe(
                    catchError(this.handleError),
                    map(this.jsonDataEntry)
                )
            })
        )
    }

    delete(id: Number): Observable<any> {
        const url = `${this.apiPath}/${id}`

        return this.http.delete(url).pipe(
            catchError(this.handleError),
            map(() => null)
        )
    }

    jsonDataEntries(jsonDataEntries: any[]): Entry[] {
        console.log(Object.assign(new Entry, jsonDataEntries[0]))
        const entries: Entry[] = []
        jsonDataEntries.forEach(item => {
            const entry = Object.assign(new Entry, item)
            entries.push(item)
        })
        return entries
    }

    jsonDataEntry(jsonData: any): Entry {
        return Object.assign(new Entry, jsonData)
    }

    handleError(error: any): Observable<any> {
        console.log('ERRO NA REQUISIÇÃO => '+ error)
        return throwError(error)
    }
}

function flatMap(arg0: (category: any) => Observable<Entry>, p0: (category: any) => Observable<Entry>): import("rxjs").OperatorFunction<import("../../categories/shared/category.model").Category, Entry> {
    throw new Error('Function not implemented.')
}

function arg0(category: any): Observable<Entry> {
    throw new Error("Function not implemented.");
}
