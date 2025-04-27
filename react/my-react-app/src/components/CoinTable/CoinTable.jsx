import { useEffect } from "react";
import { fetchCoinData } from "../../services/fetchCoinData.js";
import { useQuery} from "react-query";
function CoinTable(){
    async function Download(){
        const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
        const data = await response.json();
        console.log(data);
    }
    const { data, isLoading, error } = useQuery("coins", fetchCoinData);

       console.log(data);
       console.log(isLoading);
       console.log(error)

  
    return(
        <div>
            CoinTable
        </div>

    )
}

export default CoinTable;