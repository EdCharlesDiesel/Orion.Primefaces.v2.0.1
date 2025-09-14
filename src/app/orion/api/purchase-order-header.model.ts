import {Vendor} from "./vendor";
import {ShipMethod} from "./ship-method.model";
import {Employee} from "./employee.model";
import {PurchaseOrderDetail} from "./purchase-order-detail.model";

export class PurchaseOrderHeader implements IPurchaseOrderHeader {
  /** Primary key. */
  purchaseOrderID!: number;
  /** Incremental number to track changes to the purchase order over time. */
  revisionNumber!: number;
  /** Order current status. 1 = Pending; 2 = Approved; 3 = Rejected; 4 = Complete */
  status!: number;
  /** Employee who created the purchase order. Foreign key to Employee.BusinessEntityID. */
  employeeID!: number;
  /** Vendor with whom the purchase order is placed. Foreign key to Vendor.BusinessEntityID. */
  vendorID!: number;
  /** Shipping method. Foreign key to ShipMethod.ShipMethodID. */
  shipMethodID!: number;
  /** Purchase order creation date. */
  orderDate!: Date;
  /** Estimated shipment date from the vendor. */
  shipDate?: Date | undefined;
  /** Purchase order subtotal. Computed as SUM(PurchaseOrderDetail.LineTotal)for the appropriate PurchaseOrderID. */
  subTotal!: number;
  /** Tax amount. */
  taxAmt!: number;
  /** Shipping cost. */
  freight!: number;
  /** Total due to vendor. Computed as Subtotal + TaxAmt + Freight. */
  totalDue!: number;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  employee?: Employee;
  vendor?: Vendor;
  shippedBy?: ShipMethod;
  purchaseOrderDetails?: PurchaseOrderDetail[] | undefined;

  constructor(data?: IPurchaseOrderHeader) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.purchaseOrderID = _data["purchaseOrderID"];
      this.revisionNumber = _data["revisionNumber"];
      this.status = _data["status"];
      this.employeeID = _data["employeeID"];
      this.vendorID = _data["vendorID"];
      this.shipMethodID = _data["shipMethodID"];
      this.orderDate = _data["orderDate"] ? new Date(_data["orderDate"].toString()) : undefined as any;
      this.shipDate = _data["shipDate"] ? new Date(_data["shipDate"].toString()) : undefined as any;
      this.subTotal = _data["subTotal"];
      this.taxAmt = _data["taxAmt"];
      this.freight = _data["freight"];
      this.totalDue = _data["totalDue"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.employee = _data["employee"] ? Employee.fromJS(_data["employee"]) : undefined as any;
      this.vendor = _data["vendor"] ? Vendor.fromJS(_data["vendor"]) : undefined as any;
      this.shippedBy = _data["shippedBy"] ? ShipMethod.fromJS(_data["shippedBy"]) : undefined as any;
      if (Array.isArray(_data["purchaseOrderDetails"])) {
        this.purchaseOrderDetails = [] as any;
        for (let item of _data["purchaseOrderDetails"])
          this.purchaseOrderDetails!.push(PurchaseOrderDetail.fromJS(item));
      }
    }
  }

  static fromJS(data: any): PurchaseOrderHeader {
    data = typeof data === 'object' ? data : {};
    let result = new PurchaseOrderHeader();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["purchaseOrderID"] = this.purchaseOrderID;
    data["revisionNumber"] = this.revisionNumber;
    data["status"] = this.status;
    data["employeeID"] = this.employeeID;
    data["vendorID"] = this.vendorID;
    data["shipMethodID"] = this.shipMethodID;
    data["orderDate"] = this.orderDate ? this.orderDate.toISOString() : undefined as any;
    data["shipDate"] = this.shipDate ? this.shipDate.toISOString() : undefined as any;
    data["subTotal"] = this.subTotal;
    data["taxAmt"] = this.taxAmt;
    data["freight"] = this.freight;
    data["totalDue"] = this.totalDue;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["employee"] = this.employee ? this.employee.toJSON() : undefined as any;
    data["vendor"] = this.vendor ? this.vendor.toJSON() : undefined as any;
    data["shippedBy"] = this.shippedBy ? this.shippedBy.toJSON() : undefined as any;
    if (Array.isArray(this.purchaseOrderDetails)) {
      data["purchaseOrderDetails"] = [];
      for (let item of this.purchaseOrderDetails)
        data["purchaseOrderDetails"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
}

export interface IPurchaseOrderHeader {
  /** Primary key. */
  purchaseOrderID: number;
  /** Incremental number to track changes to the purchase order over time. */
  revisionNumber: number;
  /** Order current status. 1 = Pending; 2 = Approved; 3 = Rejected; 4 = Complete */
  status: number;
  /** Employee who created the purchase order. Foreign key to Employee.BusinessEntityID. */
  employeeID: number;
  /** Vendor with whom the purchase order is placed. Foreign key to Vendor.BusinessEntityID. */
  vendorID: number;
  /** Shipping method. Foreign key to ShipMethod.ShipMethodID. */
  shipMethodID: number;
  /** Purchase order creation date. */
  orderDate: Date;
  /** Estimated shipment date from the vendor. */
  shipDate?: Date | undefined;
  /** Purchase order subtotal. Computed as SUM(PurchaseOrderDetail.LineTotal)for the appropriate PurchaseOrderID. */
  subTotal: number;
  /** Tax amount. */
  taxAmt: number;
  /** Shipping cost. */
  freight: number;
  /** Total due to vendor. Computed as Subtotal + TaxAmt + Freight. */
  totalDue: number;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  employee?: Employee;
  vendor?: Vendor;
  shippedBy?: ShipMethod;
  purchaseOrderDetails?: PurchaseOrderDetail[] | undefined;
}
