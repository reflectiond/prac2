import './App.css';
import products from './vschoolProducts'
import Product from './Product.js'

function App() {

const product = products.map(
  product => {
    return(
      <Product
        key={product.id} 
        content={{name:product.name, price: product.price, description: product.description}}
      />
    );
  }
)
  return (
    <div>
      {product}
    </div>
  );
}

export default App;
