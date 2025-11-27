import "./Card.css"
import Error from './404.jsx'
function Cards({ Products }) {
  return (
    <div className="cards-wrapper container">
      {Products?.length ? (
        Products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.thumbnail} alt={item.title} />

            <div className="card-body">
              <h3>{item.title}</h3>
              <p className="desc">{item.description}</p>

              <div className="price-row">
                <span className="price">${item.price}</span>
                <span className="discount">-{item.discountPercentage}%</span>
              </div>

              <button className="btn">Buy Now</button>
            </div>
          </div>
        ))
      ) : (
        <Error/>
        // <div className="not-found">404</div>
      )}
    </div>
  );
}

export default Cards;
