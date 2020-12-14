import './App.css';
import products from './vschoolProducts'
import Product from './Product.js'

function App() {

const productComponents = products.map(
  product => <Product key={product.id} content={{name:product.name, price: product.price, description: product.description}}/>
)
  return (
    <div>
      {productComponents}
    </div>
  );
}

export default App;
