import React, { useState } from "react";
import "./Product.scss";
import BgImage from '../../assets/images/cat-bg.png';


const InfoDefault = ({select}) => {
  return (
    <p>Чего сидишь? Порадуй котэ,
      <button className="products__link" href="#!" onClick={() => select()}> купи.</button>
    </p>
  )
}

const InfoDisabled = ({flavoure}) => {
  return (
    <span className="products__info--point">Печалька, { flavoure } закончился.</span>
  )
}

const IntroSelectedHover = () => {
  return (
    <span className="card__intro--selected">Котэ не одобряет?</span>
  )
}

const Product = ({
  id, intro, brand, flavoure, quantity, weight, gift, description, isAvailable, isSelected, selectProduct
}) => {

  const selectProductHandler = (id) => {
    selectProduct(id);
  }

  const [isHovered, setIsHovered] = useState(false);

  return (
      <li className={ `products__item
          ${ isSelected ? "selected" : "" }
          ${ !isAvailable ? "disabled" : ""}` }
          id={ id }>
        <div className="products__card">
          <section className="card"
                  onClick={ () => selectProductHandler(id) }
                  onMouseEnter={ () => setIsHovered(true) }
                  onMouseLeave={ () => setIsHovered(false) }>
            <p className="card__intro">
              { isSelected && isHovered ? <IntroSelectedHover/> : intro }
            </p>
            <h2 className="card__title">{ brand }</h2>
            <p className="card__taste">{ flavoure }</p>
            <p className="card__numbers">
              <b>{ quantity }</b> порций<br />
              <b>{ gift }</b>
            </p>
            <img className="card__image" src={ BgImage } alt="cat"/>
            <div className="card__weight-wrapper">
            <span className="card__weight">{ weight }</span>
            <span className="card__weight-unit">кг</span>
          </div>
          </section>
        </div>
        <div className="products__info">
          { isAvailable === true ? (
            isSelected === true ? description :
            <InfoDefault select = { () => selectProduct(id) } />
          ) : <InfoDisabled flavoure = { flavoure }/>
          }
        </div>
      </li>

  );
}

export default Product;
