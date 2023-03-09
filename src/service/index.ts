import { checkAndConvertParams } from "./../helpers/index";
import { IProduct } from "./../models/product.model";
import axios from "axios";

export const API_URL = "https://5fc9346b2af77700165ae514.mockapi.io";

const getAllProducts = async (params: {}) => {
  const response = await axios.get(
    API_URL + "/products" + `?${checkAndConvertParams(params)}`
  );
  return response.data as IProduct[];
};

const getProductDetailWithId = async (id: string) => {
  const response = await axios.get(API_URL + "/products/" + id);
  return response.data as IProduct;
};

const filterProducts = async (key: string, value: string) => {
  const response = await axios.get(API_URL + "/products/" + `?${key}=${value}`);
  return response.data as IProduct[];
};

export const appService = {
  getAllProducts,
  getProductDetailWithId,
  filterProducts,
};
