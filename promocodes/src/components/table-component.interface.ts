export interface IPromocode {
    code: string;
    description: string;
    discount_percent: number;
    expiration_date: string;
    is_active: boolean;
    store: number
  }