import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const products = [
            {
                inventoryStatus: '',
                productID: 1,
                title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
                name: 'Fjallraven',
                description:
                    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
                category: 'mens clothing',
                price: 109.95,
                productNumber: 'CLT-001',
                makeFlag: true,
                finishedGoodsFlag: true,
                color: 'reg',
                safetyStockLevel: 10,
                reorderPoint: 1,
                standardCost: 89.95,
                listPrice: 109.95,
                size: 'M',
                sizeUnitMeasureCode: 'medium',
                weightUnitMeasureCode: 'MDM',
                weight: 10,
                daysToManufacture: 2,
                productLine: 'null',
                class: 'M',
                style: 'L',
                productSubcategoryID: 1,
                productModelID: 1,
                sellStartDate: new Date(),
                sellEndDate: new Date(),
                discontinuedDate: new Date(),
                rowguid: '',
                quantityInStock: 11,
                code: 100,
                image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                rating: {
                    rate: 3.9,
                    count: 120
                },
                modifiedDate: new Date()
            },
            {
                inventoryStatus: 'INSTOCK',
                productID: 2,
                title: 'Mens Casual Premium Slim Fit T-Shirts',
                name: 'SlimFit',
                description:
                    'Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.',
                category: 'mens clothing',
                price: 22.3,
                productNumber: 'CLT-002',
                makeFlag: true,
                finishedGoodsFlag: true,
                color: 'black',
                safetyStockLevel: 5,
                reorderPoint: 1,
                standardCost: 18.5,
                listPrice: 22.3,
                size: 'L',
                sizeUnitMeasureCode: 'large',
                weightUnitMeasureCode: 'LG',
                weight: 12,
                daysToManufacture: 1,
                productLine: 'A',
                class: 'M',
                style: 'L',
                productSubcategoryID: 1,
                productModelID: 1,
                sellStartDate: new Date(),
                sellEndDate: new Date(),
                discontinuedDate: new Date(),
                rowguid: '',
                quantityInStock: 25,
                code: 101,
                image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
                rating: {
                    rate: 4.1,
                    count: 259
                },
                modifiedDate: new Date()
            }
        ];

        const images = [
            {
                itemImageSrc: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
                thumbnailImageSrc: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
            },
            {
                itemImageSrc: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
                thumbnailImageSrc: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg'
            }
        ];

        return { products, images };
    }
}
