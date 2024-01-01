import phoneImages from "../data/phoneData";

export function Phones(){
   return (
    <div className="phones" >
        <h2>Explore Different Variety Of Phones</h2>
         <div className="phone-images"  id="phones" >
   
        {phoneImages.map((phone, index) => (
            <div key={index} className="product-card">
            <img src={phone.name} alt={phone.Description} />
            <div className="product-info">
                <h3>{phone.Description}</h3>
                <p>{`Battery: ${phone.Specification.Battery}`}</p>
                <p>{`Color: ${phone.Specification.Color}`}</p>
                <a href={`https://wa.me/${+2347038492560}`} target="_blank" rel="noopener noreferrer">
            <button>Shop Now</button>
          </a>
            </div>
            </div>
        ))}
        </div>
    </div>
   )
}