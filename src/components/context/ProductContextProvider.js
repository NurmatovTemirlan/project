import axios from "axios";
import { createContext, useContext, useReducer } from "react";
import React from "react";
import { API, API_SERIES } from "../../helpers/const";
import { useLocation, useNavigate } from "react-router-dom";

const productContext = createContext();
export const useProducts = () => useContext(productContext);
const ProductContextProvider = ({ children }) => {
  const INIT_STATE = {
    products: [],
    oneProduct: null,
    video: [],
  };
  const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case "GET_PRODUCTS":
        return { ...state, products: action.payload };
      case "GET_ONE_PRODUCT":
        return { ...state, oneProduct: action.payload };
      case "GET_SERIES":
        return { ...state, video: action.payload };
    }
  };

  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const location = useLocation();
  const navigate = useNavigate();
  // ! create
  const createProduct = async (newProduct) => {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log(error);
    }
  };
  // ! get
  const getProducts = async () => {
    const { data } = await axios(`${API}/${window.location.search}`);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };
  //! GETONEPRODUCT
  const getOneProduct = async (id) => {
    const { data } = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  };
  // ! edit
  const editProduct = async (editedProduct) => {
    await axios.patch(`${API}/${editedProduct.id}`, editedProduct);
    getProducts();
  };
  // ! delete
  const deleteProduct = async (id) => {
    await axios.delete(`${API}/${id}`);
    getProducts();
  };

  // ! createSeries
  const createSeries = async (newseries) => {
    await axios.post(API_SERIES, newseries);
    // getcategories();
  };

  // !  getSeries
  const getSeries = async () => {
    const { data } = await axios(`${API_SERIES}`);
    dispatch({
      type: "GET_SERIES",
      payload: data,
    });
  };

  function fetchByParams(query, value) {
    const paramsFromUrl = new URLSearchParams(location.search);
    if (value === "all") {
      paramsFromUrl.delete(query);
    } else {
      paramsFromUrl.set(query, value);
    }
    const url = `${location.pathname}?${paramsFromUrl.toString()}`;
    navigate(url);
  }

  const values = {
    fetchByParams,
    createProduct,
    getProducts,
    products: state.products,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
    deleteProduct,
    createSeries,
    getSeries,
    video: state.video,
  };

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
