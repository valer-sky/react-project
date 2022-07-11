import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';

import { setCategoryId, setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import BeerBlock from '../components/BeerBlock/index.jsx';
import Skeleton from '../components/BeerBlock/Skeleton';
import Pagination from '../components/Pagination';
import { SearchContext } from '../App';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);  // отсутствует далее
  const isMounted = React.useRef(false);

  const  {categoryId, sort, currentPage } = useSelector((state) => state.filter);
  const sortType = sort.sortProperty; 
  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const onChangeCategory = (id) => {
      dispatch(setCategoryId(id));
    }

  const onChangePage = page => {
    dispatch(setCurrentPage(page));
  }

  const fetchBeers = () => {
    setIsLoading(true);
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const order = sortType.includes('-') ? 'asc' : 'desc';
    const sortBy = sortType.replace('-', '');
    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(`https://62becc69be8ba3a10d5be2ad.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,)
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
    });
  }
  // Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if(isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sortType,
        categoryId,
        currentPage,
      });

      navigate(`?${queryString}`)
    }
    isMounted.current = true;
  }, [categoryId, sortType, searchValue, currentPage]);

  //  Если был первый рендер, то проверяем URL-параметры и сохроняем в редаксе
  React.useEffect(() => {
    if(window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      )
      isSearch.current = true;
    }
  }, []);

    // Если был первый рендер, то запрашиваем пиво
    React.useEffect(() => {
      if(!isSearch.current) {
        fetchBeers();
      }

      isSearch.current = false;
      window.scrollTo(0, 0);
      }, [categoryId, sortType, searchValue, currentPage]);

  const craftBeer =  items.map((obj) =>
    <BeerBlock key={obj.id}
      title={obj.title} 
      price={obj.price} 
      image={obj.imageUrl}
      sizes={obj.sizes}
      types={obj.types}
      />);

    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key={index} />);
  

    return(
      <div className="container">
           <div className="content__top">
          <Categories value={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Всё пиво</h2>
        <div className="content__items">
          { isLoading 
          ? skeletons
          : craftBeer}
         </div>
         <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </div>
    );
};

export default Home;