import { Observable,tap } from 'rxjs';
import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorService } from '../../../shared/http-error.service';
import { environment } from '../../../../environments/environment';
import { Address } from '../../../core/models/address.model';
import { AddressType } from '../../../core/models/address-type.model';


@Injectable({
    providedIn: 'root'
})
export class AddressTypeService {
    private AddresssUrl = environment.personBaseURL + 'AddressTypes';
    private http = inject(HttpClient);
    private errorService = inject(HttpErrorService);

    //Signal state
    private addresssSignal = signal<AddressType[]>([]);
    private loadingSignal = signal<boolean>(false);
    private errorSignal = signal<string | null>(null);

    //public computed signals
    addresssComputed = computed(() => this.addresssSignal);
    isLoadingComputed = computed(() => this.loadingSignal);
    errorComputed = computed(() => this.errorSignal);

    // constructor() {
    //   effect(() => {
    //     console.log('Addresss changes: ', this.addresssComputed)
    //   });
    // }

    public loadAddresss() {
        this.loadingSignal.set(true);
        this.http
            .get<AddressType[]>(this.AddresssUrl)
            .pipe(
                tap({
                    next: (data) => {
                        this.addresssSignal.set(data);
                        this.errorSignal.set(null);
                    },
                    error: (err) => this.errorSignal.set(err.message),
                    finalize: () => this.loadingSignal.set(false),

                }),
            ).subscribe();
    }

    public getAddresss(): Observable<AddressType[]> {
        return this.http.get<AddressType[]>(this.AddresssUrl)
    }

    public addAddresss(address: AddressType) {
        this.http
            .post<AddressType>(this.AddresssUrl, address)
            .pipe(tap((data) => console.log(data)))
            .subscribe({
                next: (newAddress) => {
                    this.addresssSignal.update((addresssComputed) => [...addresssComputed, newAddress]);
                },
                error: (err: any) => {
                    this.errorSignal.set(err.message);
                }
            });
    }

    public updateAddresss(address: AddressType) {
        this.http.put<AddressType>(this.AddresssUrl, address).subscribe({
            next: (updatedAddress) => {
                this.addresssSignal.update((address) => address.map((x) => (x.addressTypeId === updatedAddress.addressTypeId ? updatedAddress : x)));
            },
            error: (err: any) => {
                this.errorSignal.set(err.message);
            }
        });
    }

    deleteAddresss(addressTypeId: number) {
        this.loadingSignal.set(true);
        this.http.delete<Address>(`${this.AddresssUrl}/${addressTypeId}`).subscribe({
            next: () => {
                this.addresssSignal.update((addresss) => addresss.filter((x) => x.addressTypeId !== addressTypeId));
            },
            error: (err: any) => {
                this.errorSignal.set(err.message);
            }
        });
    }
}
