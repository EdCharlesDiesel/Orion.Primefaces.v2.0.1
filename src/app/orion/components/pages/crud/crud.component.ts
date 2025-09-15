import {Component, OnInit} from "@angular/core";
import {MessageService} from "primeng/api";
import {Product} from "../../../api/product";
import {ProductService} from "../../../services/product.service";
import {Table} from "primeng/table";


@Component({
    templateUrl: './crud.component.html',
    providers: [MessageService]
})
export class CrudComponent implements OnInit {

    productDialog: boolean = false;

    deleteProductDialog: boolean = false;

    deleteProductsDialog: boolean = false;

    products: Product[] = [];

    product = new Product();

    selectedProducts: Product[] = [];

    submitted: boolean = false;

    cols: any[] = [];

    statuses: any[] = [];

    rowsPerPageOptions = [5, 10, 20];

    constructor(private productService: ProductService, private messageService: MessageService) { }

    ngOnInit() {
     //   this.productService.getProducts().then(data => this.products = data);

        this.cols = [
            { field: 'product', header: 'Product' },
            { field: 'price', header: 'Price' },
            { field: 'category', header: 'Category' },
            { field: 'rating', header: 'Reviews' },
            { field: 'inventoryStatus', header: 'Status' }
        ];

        this.statuses = [
            { label: 'INSTOCK', value: 'instock' },
            { label: 'LOWSTOCK', value: 'lowstock' },
            { label: 'OUTOFSTOCK', value: 'outofstock' }
        ];
    }

    openNew() {
        this.product = new Product();
        this.submitted = false;
        this.productDialog = true;
    }

    deleteSelectedProducts() {
        this.deleteProductsDialog = true;
    }

    editProduct(product: Product) {
        this.product = { ...product };
        this.productDialog = true;
    }

    deleteProduct(product: Product) {
        this.deleteProductDialog = true;
        this.product = { ...product };
    }

    confirmDeleteSelected() {
        this.deleteProductsDialog = false;
        this.products = this.products.filter(val => !this.selectedProducts.includes(val));
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
        this.selectedProducts = [];
    }

    confirmDelete() {
        this.deleteProductDialog = false;
        this.products = this.products.filter(val => val.productID !== this.product.productID);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
        // this.product = new Product();
    }

    hideDialog() {
        this.productDialog = false;
        this.submitted = false;
    }

    saveProduct() {
        this.submitted = true;

        if (this.product.name?.trim()) {
            if (this.product.productID) {
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus.value ? this.product.inventoryStatus.value : this.product.inventoryStatus;
                this.products[this.findIndexById(this.product.productID)] = this.product;
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
            } else {
                this.product.productID = this.createId();
                this.product.code = this.createId();
                this.product.image = 'product-placeholder.svg';
                // @ts-ignore
                this.product.inventoryStatus = this.product.inventoryStatus ? this.product.inventoryStatus.value : 'INSTOCK';
                this.products.push(this.product);
                this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
            }

            this.products = [...this.products];
            this.productDialog = false;
            this.product = new Product();
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].productID === id) {
                index = i;
                break;
            }
        }

        return index;
    }

  createId(): number {
    return Math.floor(Math.random() * 10000); // e.g. 3456
  }

    onGlobalFilter(table: Table, event: Event) {
        table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
    }
}

export const createDefaultProduct = (): Product => ({
  productID: 0,
  name: '',
  productNumber: '',
  makeFlag: false,
  finishedGoodsFlag: false,
  color: undefined,
  safetyStockLevel: 0,
  reorderPoint: 0,
  standardCost: 0,
  listPrice: 0,
  size: undefined,
  sizeUnitMeasureCode: undefined,
  weightUnitMeasureCode: undefined,
  weight: undefined,
  daysToManufacture: 0,
  productLine: undefined,
  class: undefined,
  style: undefined,
  productSubcategoryID: undefined,
  productModelID: undefined,
  sellStartDate: new Date(),
  sellEndDate: undefined,
  discontinuedDate: undefined,
  rowguid: crypto.randomUUID(), // generates a unique string
  image: '',
  code: Math.floor(Math.random() * 100000), // random numeric code
  modifiedDate: new Date(),
  unitMeasure: undefined,
  unitMeasure1: undefined,
  productSubcategory: undefined,
  productModel: undefined,
  billOfMaterials: [],
  billOfMaterials1: [],
  productCostHistories: [],
  productDocuments: [],
  productInventories: [],
  productListPriceHistories: [],
  productProductPhotos: [],
  productReviews: [],
  transactionHistories: [],
  workOrders: [],
  productVendors: [],
  purchaseOrderDetails: [],
  shoppingCartItems: [],
  specialOfferProducts: []
});
