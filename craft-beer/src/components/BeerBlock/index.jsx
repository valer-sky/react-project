import React from "react";


const BeerBlock = ({ title, price, image, sizes, types }) => {
  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);
  const typeConteiner = ['бутылочное', 'разливное'];

  return (
    <div className="beer-block-wrapper">
      <div className="beer-block">
        <img
          clasNames="beer-block__image"
          src={image}
        />
        <h4 className="beer-block__title">{title}</h4>
        <div className="beer-block__selector">
          <ul>
            {types.map((typeId) => (
              <li key={typeId} onClick={() => setActiveType(typeId)} className={activeType === typeId ? 'active' : ''}>{typeConteiner[typeId]}</li>
            ))}
          </ul>
          <ul>
            {sizes.map((size, i) => (
              <li key={size} onClick={() => setActiveSize(i)} className={activeSize === i ? 'active' : ''}>{size} l</li>
            ))}
          </ul>
        </div>
        <div className="beer-block__bottom">
          <div className="beer-block__price">{price} Br</div>
          <button className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>0</i>
          </button>
        </div>
      </div>
    </div>

  )
}

export default BeerBlock;