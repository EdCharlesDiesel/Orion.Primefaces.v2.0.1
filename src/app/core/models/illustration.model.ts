import {ProductModelIllustration} from "./product-model-illustration.model";

export class Illustration {
  /** Primary key for Illustration records. */
  illustrationID!: number;
  /** Illustrations used in manufacturing instructions. Stored as XML. */
  diagram?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate!: Date;
  productModelIllustrations?: ProductModelIllustration[] | undefined;

}

export interface IIllustration {
  /** Primary key for Illustration records. */
  illustrationID: number;
  /** Illustrations used in manufacturing instructions. Stored as XML. */
  diagram?: string | undefined;
  /** Date and time the record was last updated. */
  modifiedDate: Date;
  productModelIllustrations?: ProductModelIllustration[] | undefined;
}
