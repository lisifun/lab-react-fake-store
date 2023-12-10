import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../context/products.context";

function ProductDetailsPage() {
  const [product, setProduct] = useState(null);

  const { productId } = useParams();

  const { loading, products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    if (!products.length) {
      getProducts();
    } else {
      console.log("Product Id ===>", productId);
      console.log("Products at 21 ===>", products);
      let thisProduct = products.find(
        (product) => product.id === Number(productId)
      );
      setProduct(thisProduct);

      console.log("This product ===>", thisProduct);
    }
  }, [products, productId]);

  return (
    <div className="ProductDetailsPage" style={{ padding: "24px" }}>
      {product && (
        <div className="details" style={{ display: "flex", gap: "24px" }}>
          <img src={product.image} alt="product-image" />
          <p
            style={{
              border: "1px solid #433bde",
              backgroundColor: "#433bde",
              padding: " 0px 8px",
              borderRadius: "4px",
            }}
          >
            {product.category}
          </p>
          <h1>{product.title}</h1>
          <div
            className="details-container"
            style={{ display: "flex", gap: "80px" }}
          >
            <p style={{ textAlign: "left" }}>{product.description}</p>
            <strong style={{ color: "#433bde" }}>{product.price}</strong>
          </div>
        </div>
      )}

      <hr />

      <Link to="/">
        <button style={{ backgroundColor: "#5db579" }}>Back</button>
      </Link>
    </div>
  );
}

export default ProductDetailsPage;
