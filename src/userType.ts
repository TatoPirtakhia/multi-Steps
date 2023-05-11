export interface user{
    name:string;
    email:string;
    phone:string;
    plan:object;
    addOns: addons[];
    planId:string;
    planPrice:string;
}

interface addons {
    name:string
    price:number
}