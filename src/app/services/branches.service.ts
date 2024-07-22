import { inject, Injectable, signal } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { IBranch } from '../models/branch.model';

@Injectable({
    providedIn: 'root'
})
export class BranchesService {

    private httpClient = inject(HttpClient)

getAllBranches() {
  const url = 'http://localhost:5555/branches'
  return this.httpClient.get<IBranch[]>(url).pipe(
    catchError((error: HttpErrorResponse) => {
      console.log(error)
      return throwError(() => new Error(error.error.message))
    }))

}
}