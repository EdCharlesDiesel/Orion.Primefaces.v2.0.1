import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { HttpErrorService } from '../../../shared/http-error.service';
import { BusinessEntity } from '../../../core/models/business-entity.model';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BusinessEntityService {
    private apiUrl = environment.personBaseURL+ 'businessEntity';
    private http = inject(HttpClient);
    private errorService = inject(HttpErrorService);

    //Signal state
    private businessEntitysSignal = signal<BusinessEntity[]>([]);
    private loadingSignal = signal<boolean>(false);
    private errorSignal = signal<string | null>(null);

    //public computed signals
    businessEntitysComputed = computed(() => this.businessEntitysSignal);
    isLoadingComputed = computed(() => this.loadingSignal);
    errorComputed = computed(() => this.errorSignal);

    // constructor() {
    //   effect(() => {
    //     console.log('BusinessEntity changes: ', this.businessEntitysComputed)
    //   });
    // }

    public loadBusinessEntity() {
        this.loadingSignal.set(true);
        this.http
            .get<BusinessEntity[]>(this.BusinessEntityUrl)
            .pipe(
                tap({
                    next: (data) => {
                        this.businessEntitysSignal.set(data);
                        this.errorSignal.set(null);
                    },
                    error: (err) => this.errorSignal.set(err.message),
                    finalize: () => this.loadingSignal.set(false),

                }),
            ).subscribe();
    }

    public getBusinessEntity(): Observable<BusinessEntity[]> {
        return this.http.get<BusinessEntity[]>(this.BusinessEntityUrl)
    }

    public addBusinessEntity(businessEntity: BusinessEntity) {
        this.http
            .post<BusinessEntity>(this.BusinessEntityUrl, businessEntity)
            .pipe(tap((data) => console.log(data)))
            .subscribe({
                next: (newBusinessEntity) => {
                    this.businessEntitysSignal.update((businessEntitysComputed) => [...businessEntitysComputed, newBusinessEntity]);
                },
                error: (err: any) => {
                    this.errorSignal.set(err.message);
                }
            });
    }

    public updateBusinessEntity(businessEntity: BusinessEntity) {
        this.http.put<BusinessEntity>(this.BusinessEntityUrl, businessEntity).subscribe({
            next: (updatedBusinessEntity) => {
                this.businessEntitysSignal.update((businessEntity) => businessEntity.map((x) => (x.businessEntityID === updatedBusinessEntity.businessEntityID ? updatedBusinessEntity : x)));
            },
            error: (err: any) => {
                this.errorSignal.set(err.message);
            }
        });
    }

    deleteBusinessEntity(businessEntityID: number) {
        this.loadingSignal.set(true);
        this.http.delete<BusinessEntity>(`${this.BusinessEntityUrl}/${businessEntityID}`).subscribe({
            next: () => {
                this.businessEntitysSignal.update((businessEntitys) => businessEntitys.filter((x) => x.businessEntityID !== businessEntityID));
            },
            error: (err: any) => {
                this.errorSignal.set(err.message);
            }
        });
    }
}
