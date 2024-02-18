import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Dummy_Data = [
  {
    id:'p1',
    price: '350',
    title: 'My First Book',
    description : 'First Book written by me',
  },
  {
    id:'p2',
    price: '250',
    title: 'My Second Book',
    description : 'Second Book written by me',
  }
]



const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {Dummy_Data.map(product => <ProductItem
        key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          id={product.id}

        />)}
        
      </ul>
    </section>
  );
};

export default Products;
