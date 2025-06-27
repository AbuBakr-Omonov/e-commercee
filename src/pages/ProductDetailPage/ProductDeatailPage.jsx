import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProduct } from "@/api/hooks/useProduct";
import ProDetail from "@/components/proDetail/ProDetail";
import Product from "@/components/product/Product";
const ProductDetailPage = () => {

  const { id } = useParams()
  const {getProductById,getProduct} = useProduct()
  const { data} = getProductById(id);
  console.log(data)
  const { data: productData } = getProduct({ limit: 4 });

  
  return (
  <div>
      <ProDetail  data={data} />
       <Product data={productData?.data?.products} />
  </div>
  );
};

export default React.memo(ProductDetailPage);
