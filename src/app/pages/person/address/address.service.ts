import { Observable,tap } from 'rxjs';
import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorService } from '../../../shared/http-error.service';
import { environment } from '../../../../environments/environment';
import { Address } from '../../../core/models/address.model';


@Injectable({
    providedIn: 'root'
})
export class AddressService {
    private AddresssUrl = environment.personBaseURL + 'address';
    private http = inject(HttpClient);
    private errorService = inject(HttpErrorService);

    //Signal state
    private addresssSignal = signal<Address[]>([]);
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
            .get<Address[]>(this.AddresssUrl)
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

    public getAddresss(): Observable<Address[]> {
        return this.http.get<Address[]>(this.AddresssUrl)
    }

    public addAddresss(address: Address) {
        this.http
            .post<Address>(this.AddresssUrl, address)
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

    public updateAddresss(address: Address) {
        this.http.put<Address>(this.AddresssUrl, address).subscribe({
            next: (updatedAddress) => {
                this.addresssSignal.update((address) => address.map((x) => (x.addressID === updatedAddress.addressID ? updatedAddress : x)));
            },
            error: (err: any) => {
                this.errorSignal.set(err.message);
            }
        });
    }

    deleteAddresss(addressID: number) {
        this.loadingSignal.set(true);
        this.http.delete<Address>(`${this.AddresssUrl}/${addressID}`).subscribe({
            next: () => {
                this.addresssSignal.update((addresss) => addresss.filter((x) => x.addressID !== addressID));
            },
            error: (err: any) => {
                this.errorSignal.set(err.message);
            }
        });
    }
}
