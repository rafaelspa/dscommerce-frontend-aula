import "./styles.css";
import SearchBar from "../../../components/SearchBar";
import CatalogCard from "../../../components/CatalogCard";
import ButtonNextPage from "../../../components/ButtonNextPage";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

export default function Catalog() {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [productName, setProductName] = useState<string>("");

  useEffect(() => {
    productService.findPageRequest(0, productName).then((response) => {
      setProducts(response.data.content);
    });
  }, [productName]);

  function handleSearch(searchText: string) {
    setProductName(searchText)
  }

  return (
    <>
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar onSearch={handleSearch}/>

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {products &&
              products.map((product) => (
                <CatalogCard product={product} key={product.id} />
              ))}
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
