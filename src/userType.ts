export interface user {
  name: string;
  email: string;
  phone: string;
  plan: Plan;
  addOns: addons[];
}

interface addons {
  id: string;
  name:string;
  price: number ;
}
interface Plan {
  id: string;
  price: number;
  name:string
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
