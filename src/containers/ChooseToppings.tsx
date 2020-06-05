import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { OPTIONS } from '../config/constants';
import { Size } from '../actions/types';
import { addToppings, removeToppings } from '../actions/builder';
import { getMaxToppings } from '../utilities/toppings';

const { toppings } = OPTIONS;

interface Props {
  history?: any;
  selectedSize: Size;
  selectedToppings: string[];
  addToppings: Function;
  removeToppings: Function
}

const ChooseToppings: React.SFC<Props> = ({
  history,
  selectedSize,
  selectedToppings,
  addToppings,
  removeToppings
}) => {
  const onSelect = (topping: string) => {
    if (selectedToppings.length < getMaxToppings(selectedSize.label || "Small")) {
      addToppings(topping);
    }
  }

  const onRemove = (index: number) => {
    removeToppings(index);
  }

  const onCheckout = () => history.push('/confirm')

  const filteredToppings = toppings.filter(topping => !selectedToppings.includes(topping.label));

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Mix and match your toppings
          </li>
        </ol>
      </nav>

      <div className="row">
        <div className="col-md-6">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">List of Toppings</span>
          </h4>
          <ul className="list-group">
            {filteredToppings.map(topping => (
              <li
                className="list-group-item"
                key={uuidv4()}
                onClick={() => onSelect(topping.label)}
              >
                <div className="form-check form-check-inline">
                  <label className="form-check-label">{topping.label}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6">
          <h6 className="d-flex justify-content-between align-items-center mb-3">
            <span>{selectedSize.label} Size has a maximum toppings of {getMaxToppings(selectedSize.label || "Small")}.</span>
          </h6>
          <p>* You have a free up to 3 ingredient without any cost for the pizza. Additional topping cost up to $0.50 each. You may remove click the topping to remove from this list.</p>
          <ul className="list-group">
            {selectedToppings.map((topping, k) => (
              <li className="list-group-item" key={uuidv4()} onClick={() => onRemove(k)}>{topping}</li>
            ))}
          </ul>
          <button className="mt-4 btn btn-primary btn-block" onClick={onCheckout}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({ builder }: any) => {
  return {
    selectedSize: builder.selectedSize,
    selectedToppings: builder.toppings
  }
}

export default connect(mapStateToProps, {
  addToppings,
  removeToppings
})(ChooseToppings);