import { Dispatch } from 'redux';
import { Size, Crust, SelectSize, SelectCrust, BuilderTypes, AddToppings, RemoveToppings } from './types';

export const selectSize = (size: Size) => {
  return (dispatch: Dispatch) => {
    dispatch<SelectSize>({
      type: BuilderTypes.selectSize,
      payload: size
    })
  }
}

export const selectCrust = (crust: Crust) => {
  return (dispatch: Dispatch) => {
    dispatch<SelectCrust>({
      type: BuilderTypes.selectCrust,
      payload: crust
    })
  }
}

export const addToppings = (topping: string) => {
  return (dispatch: Dispatch) => {
    dispatch<AddToppings>({
      type: BuilderTypes.addTopings,
      payload: topping
    })
  }
}

export const removeToppings = (index: number) => {
  return (dispatch: Dispatch) => {
    dispatch<RemoveToppings>({
      type: BuilderTypes.removeToppings,
      payload: index
    })
  }
}