import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    return (
        <section className="main-area">
            <div className="top-area">
                <h2>Our Products</h2>
                <p>Explore our latest collection and check specifications.</p>
            </div>

            <div className="items-box">
                {products.map((product) => (
                    <div key={product.id} className="item-card">
                        <img src={product.image} alt={product.title} />
                        <h3>{product.title}</h3>
                        <p className="price">${product.price}</p>
                        <Link to={`/dashboard/products/${product.id}`}>
                            <button>View Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;