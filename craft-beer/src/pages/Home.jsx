import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import BeerBlock from '../components/BeerBlock/index.jsx';
import Skeleton from '../components/BeerBlock/Skeleton';

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
      React.useEffect(() => {
        fetch('https://62becc69be8ba3a10d5be2ad.mockapi.io/items')
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
      
      }, []);
    return(
        <>
           <div className="content__top">
          <Categories/>
          <Sort />
        </div>
        <h2 className="content__title">Всё пиво</h2>
        <div className="content__items">
          { isLoading 
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) =>
            <BeerBlock key={obj.id}
              title={obj.title} 
              price={obj.price} 
              image={obj.imageUrl}
              sizes={obj.sizes}
              types={obj.types}
              />) 
            }
         
        </div>
        </>
    );
};

export default Home;