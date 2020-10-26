import React, { useState } from "react";
import "./Products.scss";
import Product from "../Product/Product";

const Products = () => {

  const [products, setProducts] = useState([
    {
      id: 0,
      brand: "Нямушка",
      intro: "Сказочное заморское лакомство",
      flavoure: "с фуа-гра",
      quantity: 10,
      weight: "0,5",
      gift: "Мышь в подарок",
      description: "Печень утки разварная с артишоками.",
      isAvailable: true,
      isSelected: false
    },
    {
      id: 1,
      brand: "Нямушка",
      intro: "Сказочное заморское лакомство",
      flavoure: "с рыбой",
      quantity: 40,
      weight: "2",
      gift: "2 мыши в подарок",
      description: "Головы щучьи с чесноком, да свежайшая сёмгушка.",
      isAvailable: true,
      isSelected: false
    },
    {
      id: 2,
      brand: "Нямушка",
      intro: "Сказочное заморское лакомство",
      flavoure: "с курой",
      quantity: 100,
      weight: "5",
      gift: "5 мышей в подарок заказчик доволен",
      description: "Филе из цыплят с трюфелями в бульоне.",
      isAvailable: false,
      isSelected: false
    }
  ])

  const selectProduct = (id) => {
    setProducts(
      products.map(product => {
        if (product.id === id && product.isAvailable === true) {
          product.isSelected = !product.isSelected;
        }

        return product;
      })
    );
  };

  return (
    <ul className="app__list products">
      { products.map((product, index) => (
        <Product
          id = { product.id }
          intro = { product.intro }
          brand = { product.brand }
          flavoure = { product.flavoure }
          quantity = { product.quantity }
          weight = { product.weight }
          gift = { product.gift }
          description = { product.description }
          isAvailable = { product.isAvailable }
          isSelected = { product.isSelected }
          selectProduct = { selectProduct }
          key = { index }/>
      ))
    }
    </ul>
  );
}

export default Products;
