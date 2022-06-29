
import './scss/app.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import BeerBlock from './components/BeerBlock';

 
function App() {
  return (
    <div class="wrapper">
        <Header />
    <div class="content">
      <div class="container">
        <div class="content__top">
          <Categories/>
          <Sort />
        </div>
        <h2 class="content__title">Всё пиво</h2>
        <div class="content__items">
          <BeerBlock title="IPA" price="5 Br." />
          <BeerBlock title="DIPA" price="5 Br."/>
          <BeerBlock title="Stout" price="5 Br."/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
