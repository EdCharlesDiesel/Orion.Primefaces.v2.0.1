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

  constructor(data?: ISalesOrderHeader) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (this as any)[property] = (data as any)[property];
      }
    }
  }

  init(_data?: any) {
    if (_data) {
      this.salesOrderID = _data["salesOrderID"];
      this.revisionNumber = _data["revisionNumber"];
      this.orderDate = _data["orderDate"] ? new Date(_data["orderDate"].toString()) : undefined as any;
      this.dueDate = _data["dueDate"] ? new Date(_data["dueDate"].toString()) : undefined as any;
      this.shipDate = _data["shipDate"] ? new Date(_data["shipDate"].toString()) : undefined as any;
      this.status = _data["status"];
      this.onlineOrderFlag = _data["onlineOrderFlag"];
      this.salesOrderNumber = _data["salesOrderNumber"];
      this.purchaseOrderNumber = _data["purchaseOrderNumber"];
      this.accountNumber = _data["accountNumber"];
      this.customerID = _data["customerID"];
      this.salesPersonID = _data["salesPersonID"];
      this.territoryID = _data["territoryID"];
      this.billToAddressID = _data["billToAddressID"];
      this.shipToAddressID = _data["shipToAddressID"];
      this.shipMethodID = _data["shipMethodID"];
      this.creditCardID = _data["creditCardID"];
      this.creditCardApprovalCode = _data["creditCardApprovalCode"];
      this.currencyRateID = _data["currencyRateID"];
      this.subTotal = _data["subTotal"];
      this.taxAmt = _data["taxAmt"];
      this.freight = _data["freight"];
      this.totalDue = _data["totalDue"];
      this.comment = _data["comment"];
      this.rowguid = _data["rowguid"];
      this.modifiedDate = _data["modifiedDate"] ? new Date(_data["modifiedDate"].toString()) : undefined as any;
      this.customer = _data["customer"] ? Customer.fromJS(_data["customer"]) : undefined as any;
      this.salesPerson = _data["salesPerson"] ? SalesPerson.fromJS(_data["salesPerson"]) : undefined as any;
      this.salesTerritory = _data["salesTerritory"] ? SalesTerritory.fromJS(_data["salesTerritory"]) : undefined as any;
      this.address = _data["address"] ? Address.fromJS(_data["address"]) : undefined as any;
      this.address1 = _data["address1"] ? Address.fromJS(_data["address1"]) : undefined as any;
      this.shippedBy = _data["shippedBy"] ? ShipMethod.fromJS(_data["shippedBy"]) : undefined as any;
      this.creditCard = _data["creditCard"] ? CreditCard.fromJS(_data["creditCard"]) : undefined as any;
      this.currencyRate = _data["currencyRate"] ? CurrencyRate.fromJS(_data["currencyRate"]) : undefined as any;
      if (Array.isArray(_data["salesOrderDetails"])) {
        this.salesOrderDetails = [] as any;
        for (let item of _data["salesOrderDetails"])
          this.salesOrderDetails!.push(SalesOrderDetail.fromJS(item));
      }
      if (Array.isArray(_data["salesOrderHeaderSalesReasons"])) {
        this.salesOrderHeaderSalesReasons = [] as any;
        for (let item of _data["salesOrderHeaderSalesReasons"])
          this.salesOrderHeaderSalesReasons!.push(SalesOrderHeaderSalesReason.fromJS(item));
      }
    }
  }

  static fromJS(data: any): SalesOrderHeader {
    data = typeof data === 'object' ? data : {};
    let result = new SalesOrderHeader();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data["salesOrderID"] = this.salesOrderID;
    data["revisionNumber"] = this.revisionNumber;
    data["orderDate"] = this.orderDate ? this.orderDate.toISOString() : undefined as any;
    data["dueDate"] = this.dueDate ? this.dueDate.toISOString() : undefined as any;
    data["shipDate"] = this.shipDate ? this.shipDate.toISOString() : undefined as any;
    data["status"] = this.status;
    data["onlineOrderFlag"] = this.onlineOrderFlag;
    data["salesOrderNumber"] = this.salesOrderNumber;
    data["purchaseOrderNumber"] = this.purchaseOrderNumber;
    data["accountNumber"] = this.accountNumber;
    data["customerID"] = this.customerID;
    data["salesPersonID"] = this.salesPersonID;
    data["territoryID"] = this.territoryID;
    data["billToAddressID"] = this.billToAddressID;
    data["shipToAddressID"] = this.shipToAddressID;
    data["shipMethodID"] = this.shipMethodID;
    data["creditCardID"] = this.creditCardID;
    data["creditCardApprovalCode"] = this.creditCardApprovalCode;
    data["currencyRateID"] = this.currencyRateID;
    data["subTotal"] = this.subTotal;
    data["taxAmt"] = this.taxAmt;
    data["freight"] = this.freight;
    data["totalDue"] = this.totalDue;
    data["comment"] = this.comment;
    data["rowguid"] = this.rowguid;
    data["modifiedDate"] = this.modifiedDate ? this.modifiedDate.toISOString() : undefined as any;
    data["customer"] = this.customer ? this.customer.toJSON() : undefined as any;
    data["salesPerson"] = this.salesPerson ? this.salesPerson.toJSON() : undefined as any;
    data["salesTerritory"] = this.salesTerritory ? this.salesTerritory.toJSON() : undefined as any;
    data["address"] = this.address ? this.address.toJSON() : undefined as any;
    data["address1"] = this.address1 ? this.address1.toJSON() : undefined as any;
    data["shippedBy"] = this.shippedBy ? this.shippedBy.toJSON() : undefined as any;
    data["creditCard"] = this.creditCard ? this.creditCard.toJSON() : undefined as any;
    data["currencyRate"] = this.currencyRate ? this.currencyRate.toJSON() : undefined as any;
    if (Array.isArray(this.salesOrderDetails)) {
      data["salesOrderDetails"] = [];
      for (let item of this.salesOrderDetails)
        data["salesOrderDetails"].push(item ? item.toJSON() : undefined as any);
    }
    if (Array.isArray(this.salesOrderHeaderSalesReasons)) {
      data["salesOrderHeaderSalesReasons"] = [];
      for (let item of this.salesOrderHeaderSalesReasons)
        data["salesOrderHeaderSalesReasons"].push(item ? item.toJSON() : undefined as any);
    }
    return data;
  }
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
