import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_DATA = [
  {
    id:'p1',
    title:'MY First Book',
    price: 60,
    description:'MY First Book ever'
  },
  {
    id:'p2',
    title:'MY Second Book',
    price: 90,
    description:'MY Second Book ever'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_DATA.map((product=> <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
        
      </ul>
    </section>
  );
};

export default Products;
