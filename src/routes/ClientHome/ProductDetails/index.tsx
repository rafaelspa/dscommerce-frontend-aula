import "./styles.css";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ButtonInverse from "../../../components/ButtonInverse";
import * as productService from "../../../services/product-service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";

export default function ProductDetails() {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService.findById(Number(params.productId)).then((response) => {
      setProduct(response.data);
    });
  }, []);

  return (
    <>
      <main>
        <section id="product-details-section" className="dsc-container">
          {product && <ProductDetailsCard product={product} />}
          <div className="dsc-btn-container">
            <ButtonPrimary text="Comprar" />
            <Link to={"/"}>
              <ButtonInverse text="Início" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
