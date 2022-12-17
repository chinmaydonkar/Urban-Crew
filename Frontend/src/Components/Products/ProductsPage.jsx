import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { NavLink, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex: 1;
  background-color: #f7f7f7;
  & .displayFilters {
    flex: 1.4;
    background-color: white;
    padding-left: 1.5%;
    padding-right: 1.5%;
  }
  & .displayFilters > .productName {
    font-size: 11px;
    margin-top: 5%;
    margin-left: 0%;
    align-items: left;
    width: 100%;
    overflow: auto;
    border-bottom: 1px solid #cccccc;
  }
  & .displayFilters > .productName > label {
    font-size: 11px;
    margin: 2%;
    margin-top: 0%;
    float: left;
  }
  & .displayFilters > .productName > p {
    font-size: 13px;
    text-align: left;
  }
  & .displayFilters > .productName > input {
    height: 18px;
    width: 18px;
    float: left;
  }
  & .displayProduct {
    flex: 5;
    display: flex;
    padding-top: 2%;
    gap: 1%;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 10%;
  }
`;

const ProductsPage = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();

  const getProducts = async () => {
    setLoading(true);
    const result = await axios.get(
      `https://real-red-blackbuck-toga.cyclic.app/products/${name}`
    );
    setData(result.data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        {/* <div >
          <Skeleton height={350} />
        </div> */}
      </>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Main>
        <div className="displayFilters">
          <div className="productName">
            <p>Class</p>
            <input type="checkbox" checked={""} onChange={() => ""} />
            <label>Galaxy Z</label>
            <br />
            <br />
            <input type="checkbox" checked={""} onChange={() => ""(2)} />
            <label>Galaxy S</label>
            <br />
            <br />
            <input type="checkbox" checked={""} onChange={() => ""(3)} />
            <label>Galaxy Note</label>
            <br />
            <br />
            <input type="checkbox" checked={""} onChange={() => ""(4)} />
            <label>Galaxy A</label>
          </div>
          <div className="productPrice productName">
            <p>Price</p>
            <input
              type="checkbox"
              name="productPrice"
              checked={""}
              onChange={() => ""(1)}
            />
            <label htmlFor="">Up to ₹10000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={""}
              onChange={() => ""(2)}
            />
            <label htmlFor="">₹10000 ~ ₹20000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={""}
              onChange={() => ""(3)}
            />
            <label htmlFor="">₹20000 ~ ₹30000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={""}
              onChange={() => ""(4)}
            />
            <label htmlFor="">₹30000 ~ ₹40000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={""}
              onChange={() => ""(5)}
            />
            <label htmlFor="">₹40000 ~ ₹50000</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productPrice"
              checked={""}
              onChange={() => ""(6)}
            />
            <label htmlFor="">Above ₹50000</label>
          </div>
          <div className="productMemory productName">
            <p>Memory</p>
            <input
              type="checkbox"
              name="productMemory"
              checked={""}
              onChange={() => ""(1)}
            />
            <label htmlFor="">Up to 32GB</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productMemory"
              checked={""}
              onChange={() => ""(2)}
            />
            <label htmlFor="">64GB</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productMemory"
              checked={""}
              onChange={() => ""(3)}
            />
            <label htmlFor="">128GB</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productMemory"
              checked={""}
              onChange={() => ""(4)}
            />
            <label htmlFor="">256GB</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productMemory"
              checked={""}
              onChange={() => ""(5)}
            />
            <label htmlFor="">512GB</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productMemory"
              checked={""}
              onChange={() => ""(6)}
            />
            <label htmlFor="">1TB</label>
          </div>
          <div className="productCamera productName">
            <p>Camera</p>
            <input
              type="checkbox"
              name="productCamera"
              checked={""}
              onChange={() => ""(1)}
            />
            <label htmlFor="">~8MP</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productCamera"
              checked={""}
              onChange={() => ""(2)}
            />
            <label htmlFor="">9~12.9MP</label>
            <br />
            <br />
            <input
              type="checkbox"
              name="productCamera"
              checked={""}
              onChange={() => ""(3)}
            />
            <label htmlFor="">20MP~</label>
          </div>
          <div className="productAvailable productName">
            <p>Availability</p>
            <input
              type="checkbox"
              name="productAvailable"
              checked={""}
              onChange={() => ""()}
            />
            <label htmlFor="">Available to order</label>
          </div>
        </div>
      </Main>
      <div style={{ flex: 3 }}>
        <h1>{name}</h1>
        <div className="container my-5 py-5">
          <div className="row"></div>
          <div className="row justify-content-center">
            {loading ? (
              <Loading />
            ) : (
              <>
                {data.map((product) => {
                  return (
                    <ProductCard
                      img={product.img}
                      title={product.title}
                      desc={product.desc}
                      originalPrice={product.original_price}
                      size={product.size}
                      salePrice={product.sale_price}
                      key={product._id}
                    />
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
