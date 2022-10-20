export interface IProduct{
    productName:string;
    shortDescription:string;
    detailedDescription:string;
    startingPrice:number,
    bidEndDate:string;
    categoryId:number;
}

export interface IBid{
    bidAmount:number;
    name:string;
    mobile:string;
    email:string;
}