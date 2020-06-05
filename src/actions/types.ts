export interface Size {
  label?: string;
  price?: number;
}

export interface Crust {
  label?: string;
  price?: number;
}

export interface Topping {
  label: string;
}

export interface PizzaBuilder {
  selectedSize: Size;
  selectedCrust: Crust;
  toppings: string[];
}

export enum BuilderTypes {
  addTopings,
  removeToppings,
  selectSize,
  selectCrust
}

export interface SelectSize {
  type: BuilderTypes.selectSize,
  payload: Size
}

export interface SelectCrust {
  type: BuilderTypes.selectCrust,
  payload: Crust
}

export interface AddToppings {
  type: BuilderTypes.addTopings,
  payload: string
}

export interface RemoveToppings {
  type: BuilderTypes.removeToppings,
  payload: number
}

export type ActionTypes = SelectSize | SelectCrust | AddToppings | RemoveToppings;