import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { ProductDTO } from "../../../models/product";

export default function Catalog() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8080/products?size=12")
    .then(response =>{
      const prods = response.data.content;
      setProducts(prods);
    })
  }, [])

  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {products && products.map((product) => (
              <CatalogCard product={product} key={product.id} />
            ))}
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
