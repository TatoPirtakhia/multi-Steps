export interface user {
  name: string;
  email: string;
  phone: string;
  plan: {
    id: string;
    price: number;
    name:string
  };
  addOns: addons[];
}

interface addons {
  id: string;
  name:string;
  price: number ;
}

export type Inputs = {
  phone: string;
  email: string;
  name: string;
};

export type ArrayOfObject = {
  id: string;
  name:string;
  price:number
};
