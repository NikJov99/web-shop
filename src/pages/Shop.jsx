//components
import Loader from "../components/Loader";

//styles
import "../styles/shop.css";

//other
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../helpers/helper";

const Shop = () => {
  const [shopData, setShopData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAllProducts = async () => {
    setLoading(true);
    const data = await fetchData();
    setShopData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="shop content">
      <h1>Shop</h1>
      {loading && <Loader />}
      <div className="shop-data">
        {shopData &&
          shopData.map((item) => (
            <div key={item.id} className="item-link">
              <Link to={`/shop/${item.id}`}>
                <img src={item.image} alt={item.title} />
                {item.title}
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shop;
