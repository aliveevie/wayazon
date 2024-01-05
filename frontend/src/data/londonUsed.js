import { Loader } from "../components/loader";
import { useState, useEffect } from "react";
import { ShowDetails } from "../components/showDetails";

export function LondonUsed(){

    const [products, setProducts] = useState([]);
    const [currentData, setCurrentData] = useState(false);
    const [details, setDetails] = useState(false);

   function handleCurrentData(data){
        setDetails(!details);
        setCurrentData(data);
   }


    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/admin/phones/londonused');
        const data = await response.json();
        setProducts(data);
      }
  
      fetchData();
    }, []);

        return (
            <>
             <div className="phones" >
        <h2>Explore Different Variety Of Phones</h2>
         <div className="phone-images"  id="phones" >
   
        {products.map((phone, index) => (
            <div key={index} className="product-card">
            <img src={phone.image_link} alt={phone.product_name} />
            <div className="product-info">
                <h3>{phone.product_name}</h3>
            <button onClick={() => handleCurrentData(phone)} >View Details</button>

                <a href={`https://wa.me/${+2347038492560}`} target="_blank" rel="noopener noreferrer">
            
            <button>Shop Now</button>
          </a>
            </div>
            </div>
        ))}
        </div>
    </div>
    {details && (
        <ShowDetails currentData={currentData} handleCurrentData={handleCurrentData} />
      )}
            </>
        )
}