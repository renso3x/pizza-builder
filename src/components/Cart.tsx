import * as React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { PizzaBuilder } from '../actions/types';
import { computeTotal } from '../utilities/cart';

interface Props {
  builder: PizzaBuilder
}

const Checkout: React.SFC<Props> = ({
  builder: {
    selectedCrust,
    selectedSize,
    toppings
  }
}) => {
  return (
    <React.Fragment>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-muted">Cart</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Pizza Size - {selectedSize.label}</h6>
          </div>
          <span className="text-muted"> ${selectedSize.price}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Pizza Crust - {selectedCrust.label}</h6>
          </div>
          <span className="text-muted">${selectedCrust.price}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between lh-condensed">
          <div>
            <h6 className="my-0">Toppings</h6>
          </div>
        </li>
        {toppings.map((topping, k) =>
          <li className="list-group-item d-flex justify-content-between bg-light" key={uuidv4()}>
            <div className={k > 2 ? "" : 'text-success'}>
              <h6 className="my-0">{topping}</h6>
            </div>
            <span className={k > 2 ? "" : 'text-success'}>{k > 2 ? '$0.50' : 'Free' }</span>
          </li>
        )}

        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong className="text-danger">${computeTotal(selectedCrust.price || 0, selectedSize.price || 0, toppings || [])}</strong>
        </li>
      </ul>
    </React.Fragment>
  );
}

const mapStateToProps = ({ builder }: any) => {
  return {
    builder
  }
}

export default connect(mapStateToProps)(Checkout);