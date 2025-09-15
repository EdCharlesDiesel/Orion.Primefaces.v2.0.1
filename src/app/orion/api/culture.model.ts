import {ProductModelProductDescriptionCulture} from "./product-model-product-description-culture.model";

export class Culture  {
  /** Primary key for Culture records. */
  cultureID!: string;
  /** Culture description. */
  name!: string;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productModelProductDescriptionCultures?: ProductModelProductDescriptionCulture[] | undefined;

}

export interface ICulture {
  /** Primary key for Culture records. */
  cultureID: string;
  /** Culture description. */
  name: string;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productModelProductDescriptionCultures?: ProductModelProductDescriptionCulture[] | undefined;
}
