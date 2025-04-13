import {axiosInstance}  from '../helpers/axiosInstance.js';

export async function fetchCoinData(){
   try{
         const response = await axiosInstance.get("/coins/markets", {
              params: {
                vs_currency: "usd",
                order: "market_cap_desc",
                per_page: 10,
                page: 1,
                sparkline: false,
              },
         });
         return response.data;
   }
   catch(error){
    console.log("Error fetching coin data:", error);
    return null;
   }
}