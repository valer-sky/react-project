
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import BeerBlock from './components/BeerBlock';
import beers from './assets/beers.json';

function App() {
  return (
    <div className="wrapper">
        <Header />
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Categories/>
          <Sort />
        </div>
        <h2 className="content__title">Всё пиво</h2>
        <div className="content__items">
          {
            beers.map(obj =>
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
    </div>
    </div>
  );
}

export default App;
