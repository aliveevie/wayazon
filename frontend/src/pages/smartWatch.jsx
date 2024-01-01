import watchImages from "../data/watchData";

export function Accessories(){

    return (
      <>
      <div  id="smart-watch" className="smartWatch" >
      <h3  >Explore Different Smart Watch</h3>
        <div className="watch-images">
        {watchImages.map((watch, index) => (
          <div key={index} className="product-card">
            <img src={watch.name} alt={watch.Description} />
            <div className="product-info">
              <h3>{watch.Description}</h3>
              <p>{`Brand: ${watch.Specification.Brand}`}</p>
              <p>{`Model: ${watch.Specification.Model}`}</p>
              <a href={`https://wa.me/${+2347038492560}`} target="_blank" rel="noopener noreferrer">
            <button>Shop Now</button>
          </a>
            </div>
          </div>
        ))}
      </div>
      </div>
    </>
    )

   
}