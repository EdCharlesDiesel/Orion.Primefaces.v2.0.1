export interface Country {
  name?: string;
  code?: string;
}

export interface Representative {
  name?: string;
  image?: string;
}

export interface Customer {
  customer_id?: string;
  first_name?: string;
  last_name?: string;
  emailAddress?: string;
  address?: string;
  country?: Country;
  company?: string;
  date?: any;
  status?: string;
  activity?: number;
  representative?: Representative;
  verified?: boolean;
  balance?: number;
}

