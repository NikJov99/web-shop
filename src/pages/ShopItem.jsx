//components
import Loader from "../components/Loader";

//styles
import "../styles/shopitem.css";

//other
import { useEffect, useState } from "react";
import { fetchData } from "../helpers/helper";
import { useParams } from "react-router";

const ShopItem = () => {
  const [itemData, setItemData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchProduct = async () => {
    setLoading(true);
    const data = await fetchData(id);
    setItemData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="shop-item content">
      {loading && <Loader />}
      {itemData && (
        <div className="card">
          <h3>{itemData.title}</h3>
          {/* <img src={itemData.image} alt={itemData.title} /> */}
          <div
            className="image-container"
            style={{ backgroundImage: `url(${itemData.image})` }}
          ></div>
          <p className="description">{itemData.description}</p>
          <p className="price">$ {itemData.price}</p>
        </div>
      )}
    </div>
  );
};

export default ShopItem;
