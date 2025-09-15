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
