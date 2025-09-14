import {SpecialOfferProduct} from "./special-offer-product.model";
import {UnitMeasure} from "./unit-measure";
import {ProductSubcategory} from "./product-subcategory.model";
import {ProductModel} from "./product-model.model";
import {BillOfMaterials} from "./bill-of-materials.model";
import {ProductDocument} from "./product-document.model";
import {ProductInventory} from "./product-inventory.model";
import {ProductListPriceHistory} from "./product-list-price-history.model";
import {ProductProductPhoto} from "./product-product-photo.model";
import {ProductReview} from "./product-review.model";
import {TransactionHistory} from "./transaction-history";
import {WorkOrder} from "./work-order.model";
import {ProductVendor} from "./product-vendor.model";
import {PurchaseOrderDetail} from "./purchase-order-detail.model";
import {ShoppingCartItem} from "./shopping-cart-item.model";

export class Product implements IProduct {
  /** Primary key for Product records. */
  productID!: number;
  /** Name of the product. */
  name!: string;
  /** Unique product identification number. */
  productNumber!: string;
  /** 0 = Product is purchased, 1 = Product is manufactured in-house. */
  makeFlag!: boolean;
  /** 0 = Product is not a salable item. 1 = Product is salable. */
  finishedGoodsFlag!: boolean;
  /** Product color. */
  color?: string | undefined;
  /** Minimum inventory quantity.  */
  safetyStockLevel!: number;
  /** Inventory level that triggers a purchase order or work order.  */
  reorderPoint!: number;
  /** Standard cost of the product. */
  standardCost!: number;
  /** Selling price. */
  listPrice!: number;
  /** Product size. */
  size?: string | undefined;
  /** Unit of measure for Size column. */
  sizeUnitMeasureCode?: string | undefined;
  /** Unit of measure for Weight column. */
  weightUnitMeasureCode?: string | undefined;
  /** Product weight. */
  weight?: number | undefined;
  /** Number of days required to manufacture the product. */
  daysToManufacture!: number;
  /** R = Road, M = Mountain, T = Touring, S = Standard */
  productLine?: string | undefined;
  /** H = High, M = Medium, L = Low */
  class?: string | undefined;
  /** W = Womens, M = Mens, U = Universal */
  style?: string | undefined;
  /** Product is a member of this product subcategory. Foreign key to ProductSubCategory.ProductSubCategoryID.  */
  productSubcategoryID?: number | undefined;
  /** Product is a member of this product model. Foreign key to ProductModel.ProductModelID. */
  productModelID?: number | undefined;
  /** Date the product was available for sale. */
  sellStartDate!: Date;
  /** Date the product was no longer available for sale. */
  sellEndDate?: Date | undefined;
  /** Date the product was discontinued. */
  discontinuedDate?: Date | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  unitMeasure?: UnitMeasure;
  unitMeasure1?: UnitMeasure;
  productSubcategory?: ProductSubcategory;
  productModel?: ProductModel;
  billOfMaterials?: BillOfMaterials[] | undefined;
  billOfMaterials1?: BillOfMaterials[] | undefined;
  productCostHistories?: ProductCostHistory[] | undefined;
  productDocuments?: ProductDocument[] | undefined;
  productInventories?: ProductInventory[] | undefined;
  productListPriceHistories?: ProductListPriceHistory[] | undefined;
  productProductPhotos?: ProductProductPhoto[] | undefined;
  productReviews?: ProductReview[] | undefined;
  transactionHistories?: TransactionHistory[] | undefined;
  workOrders?: WorkOrder[] | undefined;
  productVendors?: ProductVendor[] | undefined;
  purchaseOrderDetails?: PurchaseOrderDetail[] | undefined;
  shoppingCartItems?: ShoppingCartItem[] | undefined;
  specialOfferProducts?: SpecialOfferProduct[] | undefined;

  constructor(data?: IProduct) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.productID = _data["productID"];
      this.name = _data["name"];
      this.productNumber = _data["productNumber"];
      this.makeFlag = _data["makeFlag"];
      this.finishedGoodsFlag = _data["finishedGoodsFlag"];
      this.color = _data["color"];
      this.safetyStockLevel = _data["safetyStockLevel"];
      this.reorderPoint = _data["reorderPoint"];
      this.standardCost = _data["standardCost"];
      this.listPrice = _data["listPrice"];
      this.size = _data["size"];
      this.sizeUnitMeasureCode = _data["sizeUnitMeasureCode"];
      this.weightUnitMeasureCode = _data["weightUnitMeasureCode"];
      this.weight = _data["weight"];
      this.daysToManufacture = _data["daysToManufacture"];
      this.productLine = _data["productLine"];
      this.class = _data["class"];
      this.style = _data["style"];
      this.productSubcategoryID = _data["productSubcategoryID"];
      this.productModelID = _data["productModelID"];
      this.sellStartDate = _data["sellStartDate"] ? new Date(_data["sellStartDate"].toString()) : undefined as any;
      this.sellEndDate = _data["sellEndDate"] ? new Date(_data["sellEndDate"].toString()) : undefined as any;
      this.discontinuedDate = _data["discontinuedDate"] ? new Date(_data["discontinuedDate"].toString()) : undefined as any;
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.unitMeasure = _data["unitMeasure"] ? UnitMeasure.fromJS(_data["unitMeasure"]) : undefined as any;
      this.unitMeasure1 = _data["unitMeasure1"] ? UnitMeasure.fromJS(_data["unitMeasure1"]) : undefined as any;
      this.productSubcategory = _data["productSubcategory"] ? ProductSubcategory.fromJS(_data["productSubcategory"]) : undefined as any;
      this.productModel = _data["productModel"] ? ProductModel.fromJS(_data["productModel"]) : undefined as any;
      if (Array.isArray(_data["billOfMaterials"])) {
        this.billOfMaterials = [] as any;
        for (let item of _data["billOfMaterials"])
          this.billOfMaterials!.push(BillOfMaterials.fromJS(item));
      }
      if (Array.isArray(_data["billOfMaterials1"])) {
        this.billOfMaterials1 = [] as any;
        for (let item of _data["billOfMaterials1"])
          this.billOfMaterials1!.push(BillOfMaterials.fromJS(item));
      }
      if (Array.isArray(_data["productCostHistories"])) {
        this.productCostHistories = [] as any;
        for (let item of _data["productCostHistories"])
          this.productCostHistories!.push(ProductCostHistory.fromJS(item));
      }
      if (Array.isArray(_data["productDocuments"])) {
        this.productDocuments = [] as any;
        for (let item of _data["productDocuments"])
          this.productDocuments!.push(ProductDocument.fromJS(item));
      }
      if (Array.isArray(_data["productInventories"])) {
        this.productInventories = [] as any;
        for (let item of _data["productInventories"])
          this.productInventories!.push(ProductInventory.fromJS(item));
      }
      if (Array.isArray(_data["productListPriceHistories"])) {
        this.productListPriceHistories = [] as any;
        for (let item of _data["productListPriceHistories"])
          this.productListPriceHistories!.push(ProductListPriceHistory.fromJS(item));
      }
      if (Array.isArray(_data["productProductPhotos"])) {
        this.productProductPhotos = [] as any;
        for (let item of _data["productProductPhotos"])
          this.productProductPhotos!.push(ProductProductPhoto.fromJS(item));
      }
      if (Array.isArray(_data["productReviews"])) {
        this.productReviews = [] as any;
        for (let item of _data["productReviews"])
          this.productReviews!.push(ProductReview.fromJS(item));
      }
      if (Array.isArray(_data["transactionHistories"])) {
        this.transactionHistories = [] as any;
        for (let item of _data["transactionHistories"])
          this.transactionHistories!.push(TransactionHistory.fromJS(item));
      }
      if (Array.isArray(_data["workOrders"])) {
        this.workOrders = [] as any;
        for (let item of _data["workOrders"])
          this.workOrders!.push(WorkOrder.fromJS(item));
      }
      if (Array.isArray(_data["productVendors"])) {
        this.productVendors = [] as any;
        for (let item of _data["productVendors"])
          this.productVendors!.push(ProductVendor.fromJS(item));
      }
      if (Array.isArray(_data["purchaseOrderDetails"])) {
        this.purchaseOrderDetails = [] as any;
        for (let item of _data["purchaseOrderDetails"])
          this.purchaseOrderDetails!.push(PurchaseOrderDetail.fromJS(item));
      }
      if (Array.isArray(_data["shoppingCartItems"])) {
        this.shoppingCartItems = [] as any;
        for (let item of _data["shoppingCartItems"])
          this.shoppingCartItems!.push(ShoppingCartItem.fromJS(item));
      }
      if (Array.isArray(_data["specialOfferProducts"])) {
        this.specialOfferProducts = [] as any;
        for (let item of _data["specialOfferProducts"])
          this.specialOfferProducts!.push(SpecialOfferProduct.fromJS(item));
      }
    }
  }

  static fromJS(data: any): Product {
    data = typeof data === 'object' ? data : {};
    let result = new Product();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["productID"] = this.productID;
    data["name"] = this.name;
    data["productNumber"] = this.productNumber;
    data["makeFlag"] = this.makeFlag;
    data["finishedGoodsFlag"] = this.finishedGoodsFlag;
    data["color"] = this.color;
    data["safetyStockLevel"] = this.safetyStockLevel;
    data["reorderPoint"] = this.reorderPoint;
    data["standardCost"] = this.standardCost;
    data["listPrice"] = this.listPrice;
    data["size"] = this.size;
    data["sizeUnitMeasureCode"] = this.sizeUnitMeasureCode;
    data["weightUnitMeasureCode"] = this.weightUnitMeasureCode;
    data["weight"] = this.weight;
    data["daysToManufacture"] = this.daysToManufacture;
    data["productLine"] = this.productLine;
    data["class"] = this.class;
    data["style"] = this.style;
    data["productSubcategoryID"] = this.productSubcategoryID;
    data["productModelID"] = this.productModelID;
    data["sellStartDate"] = this.sellStartDate ? this.sellStartDate.toISOString() : undefined as any;
    data["sellEndDate"] = this.sellEndDate ? this.sellEndDate.toISOString() : undefined as any;
    data["discontinuedDate"] = this.discontinuedDate ? this.discontinuedDate.toISOString() : undefined as any;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["unitMeasure"] = this.unitMeasure ? this.unitMeasure.toJSON() : undefined as any;
    data["unitMeasure1"] = this.unitMeasure1 ? this.unitMeasure1.toJSON() : undefined as any;
    data["productSubcategory"] = this.productSubcategory ? this.productSubcategory.toJSON() : undefined as any;
    data["productModel"] = this.productModel ? this.productModel.toJSON() : undefined as any;
    if (Array.isArray(this.billOfMaterials)) {
      data["billOfMaterials"] = [];
      for (let item of this.billOfMaterials)
        data["billOfMaterials"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.billOfMaterials1)) {
      data["billOfMaterials1"] = [];
      for (let item of this.billOfMaterials1)
        data["billOfMaterials1"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productCostHistories)) {
      data["productCostHistories"] = [];
      for (let item of this.productCostHistories)
        data["productCostHistories"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productDocuments)) {
      data["productDocuments"] = [];
      for (let item of this.productDocuments)
        data["productDocuments"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productInventories)) {
      data["productInventories"] = [];
      for (let item of this.productInventories)
        data["productInventories"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productListPriceHistories)) {
      data["productListPriceHistories"] = [];
      for (let item of this.productListPriceHistories)
        data["productListPriceHistories"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productProductPhotos)) {
      data["productProductPhotos"] = [];
      for (let item of this.productProductPhotos)
        data["productProductPhotos"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productReviews)) {
      data["productReviews"] = [];
      for (let item of this.productReviews)
        data["productReviews"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.transactionHistories)) {
      data["transactionHistories"] = [];
      for (let item of this.transactionHistories)
        data["transactionHistories"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.workOrders)) {
      data["workOrders"] = [];
      for (let item of this.workOrders)
        data["workOrders"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.productVendors)) {
      data["productVendors"] = [];
      for (let item of this.productVendors)
        data["productVendors"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.purchaseOrderDetails)) {
      data["purchaseOrderDetails"] = [];
      for (let item of this.purchaseOrderDetails)
        data["purchaseOrderDetails"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.shoppingCartItems)) {
      data["shoppingCartItems"] = [];
      for (let item of this.shoppingCartItems)
        data["shoppingCartItems"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.specialOfferProducts)) {
      data["specialOfferProducts"] = [];
      for (let item of this.specialOfferProducts)
        data["specialOfferProducts"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IProduct {
  /** Primary key for Product records. */
  productID: number;
  /** Name of the product. */
  name: string;
  /** Unique product identification number. */
  productNumber: string;
  /** 0 = Product is purchased, 1 = Product is manufactured in-house. */
  makeFlag: boolean;
  /** 0 = Product is not a salable item. 1 = Product is salable. */
  finishedGoodsFlag: boolean;
  /** Product color. */
  color?: string | undefined;
  /** Minimum inventory quantity.  */
  safetyStockLevel: number;
  /** Inventory level that triggers a purchase order or work order.  */
  reorderPoint: number;
  /** Standard cost of the product. */
  standardCost: number;
  /** Selling price. */
  listPrice: number;
  /** Product size. */
  size?: string | undefined;
  /** Unit of measure for Size column. */
  sizeUnitMeasureCode?: string | undefined;
  /** Unit of measure for Weight column. */
  weightUnitMeasureCode?: string | undefined;
  /** Product weight. */
  weight?: number | undefined;
  /** Number of days required to manufacture the product. */
  daysToManufacture: number;
  /** R = Road, M = Mountain, T = Touring, S = Standard */
  productLine?: string | undefined;
  /** H = High, M = Medium, L = Low */
  class?: string | undefined;
  /** W = Womens, M = Mens, U = Universal */
  style?: string | undefined;
  /** Product is a member of this product subcategory. Foreign key to ProductSubCategory.ProductSubCategoryID.  */
  productSubcategoryID?: number | undefined;
  /** Product is a member of this product model. Foreign key to ProductModel.ProductModelID. */
  productModelID?: number | undefined;
  /** Date the product was available for sale. */
  sellStartDate: Date;
  /** Date the product was no longer available for sale. */
  sellEndDate?: Date | undefined;
  /** Date the product was discontinued. */
  discontinuedDate?: Date | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  unitMeasure?: UnitMeasure;
  unitMeasure1?: UnitMeasure;
  productSubcategory?: ProductSubcategory;
  productModel?: ProductModel;
  billOfMaterials?: BillOfMaterials[] | undefined;
  billOfMaterials1?: BillOfMaterials[] | undefined;
  productCostHistories?: ProductCostHistory[] | undefined;
  productDocuments?: ProductDocument[] | undefined;
  productInventories?: ProductInventory[] | undefined;
  productListPriceHistories?: ProductListPriceHistory[] | undefined;
  productProductPhotos?: ProductProductPhoto[] | undefined;
  productReviews?: ProductReview[] | undefined;
  transactionHistories?: TransactionHistory[] | undefined;
  workOrders?: WorkOrder[] | undefined;
  productVendors?: ProductVendor[] | undefined;
  purchaseOrderDetails?: PurchaseOrderDetail[] | undefined;
  shoppingCartItems?: ShoppingCartItem[] | undefined;
  specialOfferProducts?: SpecialOfferProduct[] | undefined;
}
