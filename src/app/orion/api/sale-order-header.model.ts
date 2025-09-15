import { SalesPerson } from "./sales-person.model";

import {Customer} from "./customer";
import {Address} from "./address.model";
import {CurrencyRate} from "./currency-rate.model";
import {SalesOrderHeaderSalesReason} from "./sales-order-header-sales-reason.model";
import {SalesTerritory} from "./sales-territory.model";
import {SalesOrderDetail} from "./sales-order-detail";
import {CreditCard} from "./credit-card.model";
import {ShipMethod} from "./ship-method.model";

export class SalesOrderHeader implements ISalesOrderHeader {
  /** Primary key. */
  salesOrderID!: number;
  /** Incremental number to track changes to the sales order over time. */
  revisionNumber!: number;
  /** Dates the sales order was created. */
  orderDate!: Date;
  /** Date the order is due to the customer. */
  dueDate!: Date;
  /** Date the order was shipped to the customer. */
  shipDate?: Date | undefined;
  /** Order current status. 1 = In process; 2 = Approved; 3 = Backordered; 4 = Rejected; 5 = Shipped; 6 = Cancelled */
  status!: number;
  /** 0 = Order placed by sales person. 1 = Order placed online by customer. */
  onlineOrderFlag!: boolean;
  /** Unique sales order identification number. */
  salesOrderNumber!: string;
  /** Customer purchase order number reference.  */
  purchaseOrderNumber?: string | undefined;
  /** Financial accounting number reference. */
  accountNumber?: string | undefined;
  /** Customer identification number. Foreign key to Customer.BusinessEntityID. */
  customerID!: number;
  /** Sales person who created the sales order. Foreign key to SalesPerson.BusinessEntityID. */
  salesPersonID?: number | undefined;
  /** Territory in which the sale was made. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID?: number | undefined;
  /** Customer billing address. Foreign key to Address.AddressID. */
  billToAddressID!: number;
  /** Customer shipping address. Foreign key to Address.AddressID. */
  shipToAddressID!: number;
  /** Shipping method. Foreign key to ShipMethod.ShipMethodID. */
  shipMethodID!: number;
  /** Credit card identification number. Foreign key to CreditCard.CreditCardID. */
  creditCardID?: number | undefined;
  /** Approval code provided by the credit card company. */
  creditCardApprovalCode?: string | undefined;
  /** Currency exchange rate used. Foreign key to CurrencyRate.CurrencyRateID. */
  currencyRateID?: number | undefined;
  /** Sales subtotal. Computed as SUM(SalesOrderDetail.LineTotal)for the appropriate SalesOrderID. */
  subTotal!: number;
  /** Tax amount. */
  taxAmt!: number;
  /** Shipping cost. */
  freight!: number;
  /** Total due from customer. Computed as Subtotal + TaxAmt + Freight. */
  totalDue!: number;
  /** Sales representative comments. */
  comment?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  customer?: Customer;
  salesPerson?: SalesPerson;
  salesTerritory?: SalesTerritory;
  address?: Address;
  address1?: Address;
  shippedBy?: ShipMethod;
  creditCard?: CreditCard;
  currencyRate?: CurrencyRate;
  salesOrderDetails?: SalesOrderDetail[] | undefined;
  salesOrderHeaderSalesReasons?: SalesOrderHeaderSalesReason[] | undefined;

}

export interface ISalesOrderHeader {
  /** Primary key. */
  salesOrderID: number;
  /** Incremental number to track changes to the sales order over time. */
  revisionNumber: number;
  /** Dates the sales order was created. */
  orderDate: Date;
  /** Date the order is due to the customer. */
  dueDate: Date;
  /** Date the order was shipped to the customer. */
  shipDate?: Date | undefined;
  /** Order current status. 1 = In process; 2 = Approved; 3 = Backordered; 4 = Rejected; 5 = Shipped; 6 = Cancelled */
  status: number;
  /** 0 = Order placed by sales person. 1 = Order placed online by customer. */
  onlineOrderFlag: boolean;
  /** Unique sales order identification number. */
  salesOrderNumber: string;
  /** Customer purchase order number reference.  */
  purchaseOrderNumber?: string | undefined;
  /** Financial accounting number reference. */
  accountNumber?: string | undefined;
  /** Customer identification number. Foreign key to Customer.BusinessEntityID. */
  customerID: number;
  /** Sales person who created the sales order. Foreign key to SalesPerson.BusinessEntityID. */
  salesPersonID?: number | undefined;
  /** Territory in which the sale was made. Foreign key to SalesTerritory.SalesTerritoryID. */
  territoryID?: number | undefined;
  /** Customer billing address. Foreign key to Address.AddressID. */
  billToAddressID: number;
  /** Customer shipping address. Foreign key to Address.AddressID. */
  shipToAddressID: number;
  /** Shipping method. Foreign key to ShipMethod.ShipMethodID. */
  shipMethodID: number;
  /** Credit card identification number. Foreign key to CreditCard.CreditCardID. */
  creditCardID?: number | undefined;
  /** Approval code provided by the credit card company. */
  creditCardApprovalCode?: string | undefined;
  /** Currency exchange rate used. Foreign key to CurrencyRate.CurrencyRateID. */
  currencyRateID?: number | undefined;
  /** Sales subtotal. Computed as SUM(SalesOrderDetail.LineTotal)for the appropriate SalesOrderID. */
  subTotal: number;
  /** Tax amount. */
  taxAmt: number;
  /** Shipping cost. */
  freight: number;
  /** Total due from customer. Computed as Subtotal + TaxAmt + Freight. */
  totalDue: number;
  /** Sales representative comments. */
  comment?: string | undefined;
  /** ROWGUIDCOL number uniquely identifying the record. Used to support a merge replication sample. */
  rowguid: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  customer?: Customer;
  salesPerson?: SalesPerson;
  salesTerritory?: SalesTerritory;
  address?: Address;
  address1?: Address;
  shippedBy?: ShipMethod;
  creditCard?: CreditCard;
  currencyRate?: CurrencyRate;
  salesOrderDetails?: SalesOrderDetail[] | undefined;
  salesOrderHeaderSalesReasons?: SalesOrderHeaderSalesReason[] | undefined;
}
