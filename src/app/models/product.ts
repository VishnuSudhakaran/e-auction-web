export interface IProduct{
    productName:string;
    shortDescription:string;
    detailedDescription:string;
    startingPrice:number,
    bidEndDate:string;
    categoryId:number;
    bidsCount:number;
}

export interface IBid{
    bidAmount:number;
    name:string;
    mobile:string;
    email:string;
}