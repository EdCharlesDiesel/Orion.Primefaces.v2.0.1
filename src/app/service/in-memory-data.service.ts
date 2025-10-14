import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../core/models/product';



@Injectable({
    providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products: Product[] = [
            {
                productID: 1,
                title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
                name: 'Fjallraven',
                description: 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
                category: 'mens clothing',
                price: 109.95,
                productNumber: 'CLT-001',
                makeFlag:true,
                finishedGoodsFlag: true,
                color: 'reg',
                safetyStockLevel: 10,
                reorderPoint: 1,
                standardCost:89.95,
                listPrice:109.95,
                size: 'M',
                sizeUnitMeasureCode: 'medidum',
                weightUnitMeasureCode: 'MDM',
                weight: 10,
                daysToManufacture: 2,
                productLine: 'null',
                class: 'M',
                style:'L',
                productSubcategoryID: 1,
                productModelID: 1,
                sellStartDate: new Date(),
                sellEndDate: new Date(),
                discontinuedDate: new Date(),
                rowguid: "",
                quantityInStock: 11,
                code: 100,
                image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                rating: {
                    rate: 3.9,
                    count: 120
                },
                modifiedDate: new Date(),
            }
        ];

        return { products };
    }
}
