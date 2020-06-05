import { PizzaBuilder, ActionTypes, BuilderTypes } from '../actions/types';

const initialState = {
  selectedSize: {},
  selectedCrust: {},
  toppings: []
}

export const builderReducer = (state:PizzaBuilder = initialState, action: ActionTypes) => {
  switch (action.type) {
    case BuilderTypes.selectSize:
      return {
        ...state, selectedSize: action.payload
      };

    case BuilderTypes.selectCrust:
      return {
        ...state,
        selectedCrust: action.payload,
        toppings: [],
      };

    case BuilderTypes.addTopings:
      const getIndex = state.toppings.indexOf(action.payload)

      if (getIndex === -1) {
        return {
          ...state,
          toppings: [...state.toppings, action.payload]
        }
      }

      return state;

    case BuilderTypes.removeToppings:
      return {
        ...state,
        toppings: state.toppings.filter((v, k) => k !== action.payload)
      }

    default:
      return state;
  }
}