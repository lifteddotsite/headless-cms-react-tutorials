import ProductComponent from "../components/Product";
import { getProductById } from "../data/products";

export function Product({ dataset }) {
  console.log(dataset);
  const { productId } = dataset;
  const product = getProductById(productId);
  return product && <ProductComponent product={product} />;
}
