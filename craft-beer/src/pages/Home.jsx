import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import BeerBlock from '../components/BeerBlock/index.jsx';
import Skeleton from '../components/BeerBlock/Skeleton';

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoryId, setCategoryId] = React.useState(0);
    const [sortType, setSortType] = React.useState({
      name: 'популярности',
      sortProperty: 'reiting'
    });

      React.useEffect(() => {
        setIsLoading(true);

        const category = categoryId > 0 ? `category=${categoryId}` : '';
        const order = sortType.sortProperty.includes('-') ? 'asc' : 'desc';
        const sortBy = sortType.sortProperty.replace('-', '');

        fetch(`https://62becc69be8ba3a10d5be2ad.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`,)
        .then((res) => res.json())
        .then((arr) => {
          setItems(arr);
          setIsLoading(false);
        });
        window.scrollTo(0, 0);
      }, [categoryId, sortType]);
    return(
      <div className="container">
           <div className="content__top">
          <Categories value={categoryId} onChangeCategory={(i) => setCategoryId(i)} />
          <Sort value={sortType} onChangeSort={(i) => setSortType(i)} />
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
        </div>
    );
};

export default Home;