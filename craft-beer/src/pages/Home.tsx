import React from 'react';
// import qs from 'qs';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { setCategoryId, setCurrentPage, setFilters,  } from '../redux/slices/filterSlice';
import {  fetchBeers } from '../redux/slices/BeersSlice';
import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import BeerBlock from '../components/BeerBlock/index.tsx';
import Skeleton from '../components/BeerBlock/Skeleton';
import Pagination from '../components/Pagination';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);  // отсутствует далее
  
  const {items, status }= useSelector((state: any) => state.beer)
  const  {categoryId, sort, currentPage, searchValue } = useSelector((state: any) => state.filter);
  const sortType = sort.sortProperty; 
  
  const onChangeCategory = (id: number) => {
      dispatch(setCategoryId(id));
    }

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  }

  const getBeers= async () => {
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

      dispatch(
        fetchBeers({
        category,
        order,
        sortBy,
        search,
        currentPage: String(currentPage),
      }));
     
    window.scrollTo(0, 0);
  };
  // Если был первый рендер, то запрашиваем пиво
    React.useEffect(() => {
      if(!isSearch.current) {
        getBeers();
      }

      isSearch.current = false;
      }, [categoryId, sortType, searchValue, currentPage]);

  const craftBeer =  items.map((obj: any) =>
    
    <BeerBlock key={obj.id}
    id={obj.id}
    title={obj.title} 
    price={obj.price} 
    image={obj.imageUrl}
    sizes={obj.sizes}
    types={obj.types}
    />
    );

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
    return(
      <div className="container">
        <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Сегодня на кранах</h2>
        <div className="content__items">
        {status === 'error' ? (
          <div className="content__error-info">
            <h2>Произошла ошибка 😕</h2>
            <p>К сожалению, не удалось получить пиво. Попробуйте повторить попытку позже.</p>
          </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : craftBeer}</div>
      )}
        </div>
         <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
      </div>
    );
};

export default Home;