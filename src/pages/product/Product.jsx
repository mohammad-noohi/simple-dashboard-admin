import "./Product.css";
import React from "react";
import { Link, useParams } from "react-router-dom";
import { products, monthesSale } from "@/data";
import Chart from "@/components/chart/Chart";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Product() {
  const urlParams = useParams();
  const productID = urlParams.id;
  const mainProduct = products.find(product => product.id === +productID);

  console.log(mainProduct);

  return (
    <div className="product">
      <div className="product__title-container">
        <h1 className="product__title">product</h1>
        <Link to="/newProduct">
          <button className="product__add-btn">create</button>
        </Link>
        <Link to="/products" style={{ marginLeft: "auto" }} className="link">
          <button className="back-link">
            <span>back</span>
            <ArrowForwardIcon />
          </button>
        </Link>
      </div>

      <div className="product__top">
        <div className="product__top-left">
          <Chart title="Sale In Month" data={monthesSale} dataKey="sales" />
        </div>
        <div className="product__top-right">
          <div className="product__info-top">
            <img src="./../../../src/assets/images/products/airpod-max.jpg" className="product__img" />
            {/* <img src="@/assets/images/products/airpod-max.jpg" className="product__img" /> */}
            <span className="product__name">product name</span>
          </div>

          <div className="product__info-bottom">
            <div className="product__info-item">
              <div className="product__info-key">ID:</div>
              <div className="product__info-value">132</div>
            </div>

            <div className="product__info-item">
              <div className="product__info-key">Name: </div>
              <div className="product__info-value">asus tuf</div>
            </div>

            <div className="product__info-item">
              <div className="product__info-key">Sales:</div>
              <div className="product__info-value">$ 90000</div>
            </div>

            <div className="product__info-item">
              <div className="product__info-key">active:</div>
              <div className="product__info-value">yes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
