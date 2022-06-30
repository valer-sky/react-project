import React from 'react';


const Categories = () =>{
  const [activeIndex, setActiveIndex] = React.useState(0);

  const categories = [
    'Все',
    'Эли светлые',
    'Эли темные',
    'Портер',
    'Стаут',
    'Sour Ale'
  ];

  const onClickCategory = (index) => {
    setActiveIndex(index);
  }
    return(
      <div className="categories">
        <ul>
          {categories.map((value, i) =>  
            <li key={i} onClick={() => onClickCategory(i)} className={activeIndex === i ? 'active' : ''}>
              {value}
            </li>)}
        </ul>
      </div>
    )
}

  export default Categories;