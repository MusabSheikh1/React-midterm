import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../products/Products.css";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((err) => console.error("Error:", err));
    }, [id]);

    if (!product) return <p>Loading product details...</p>;

    return (
        <div className="popup show">
            <div className="popup-box">
                <span className="close" onClick={() => navigate("/dashboard/products")}>
                    &times;
                </span>
                <img src={product.image} alt={product.title} />
                <h2>{product.title}</h2>
                <p><b>Price:</b> ${product.price}</p>
                <p><b>Category:</b> {product.category}</p>
                <p><b>Description:</b> {product.description}</p>
            </div>
        </div>
    );
}

export default ProductDetails;
