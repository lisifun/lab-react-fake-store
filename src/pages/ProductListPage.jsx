import { useContext, useEffect } from "react";
import { ProductContext } from "../context/products.context";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function ProductListPage() {
  const { loading, products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    if (!products.length) {
      getProducts();
    }
  }, []);

  return (
    <div className="ProductListPage">
      {loading && <p>Loading...</p>}

      {products.length ? (
        <>
          {products.map((product) => {
            return (
              <Link key={product.id} to={`/product/details/${product.id}`}>
                <ProductCard product={product} />
              </Link>
            );
          })}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductListPage;
