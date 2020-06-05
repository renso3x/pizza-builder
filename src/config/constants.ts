export const OPTIONS = {
  sizes: [
    {
      label: "Small",
      price: 8,
      img: require('../assets/small-size-pan.jpg')
    }, {
      label: "Medium",
      price: 10,
      img: require('../assets/medium-size-pan.jpg')
    },{
      label: "Large",
      price: 12,
      img: require('../assets/large-size-pan.jpg')
    }
  ],
  crusts: [
    { label: "Thin", price: 2, img: require('../assets/thin-crust.png') },
    { label: "Thick", price: 4, img: require('../assets/thick-crust.png') },
  ],
  toppings: [
    { value: 'pepperoni', label: "Pepperoni" },
    { value: 'mushrooms', label: "Mushrooms" },
    { value: 'onions', label: "Onions" },
    { value: 'sausage', label: "Sausage" },
    { value: 'bacon', label: "Bacon" },
    { value: 'extraCheese', label: "Extra Cheese" },
    { value: 'blackOlives', label: "Black Olives" },
    { value: 'greenPeppers', label: "Green Peppers" },
    { value: 'pineapple', label: "Pineapple" },
    { value: 'spinach', label: "Spinach" },
  ]
};