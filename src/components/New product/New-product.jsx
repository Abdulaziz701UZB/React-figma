import "./New-product.css";
import newImg from "../../assets/new-product-img.png";

const NewProduct = () => {
  return (
    <div className="new">
      <div className="new__images">
        <img src={newImg} alt="" />
      </div>
      <div className="new__text">
        <p className="new__text--text">New product</p>
        <h1 className="new--title">BACwALL 437 FCU</h1>
        <p className="new__text--des">
          🟠Fully Reprogrammable FCU BACnet Room Controller
        </p>
        <p className="new__text--des">🟠Features Rich & Cost Effective</p>
        <button className="new--btn">View product →</button>
      </div>
    </div>
  );
};

export default NewProduct;
