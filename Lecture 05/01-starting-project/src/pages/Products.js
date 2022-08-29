import { Link } from "react-router-dom";

const Products = () => {
    return (<section>
        <h1>This is the product page!</h1>
        <ul>
            <li><Link to="/products/p1">A Book</Link></li>
            <li><Link to="/products/p2">A Bat</Link></li>
            <li><Link to="/products/p3">A Ball</Link></li>
        </ul>
    </section>)
}

export default Products;