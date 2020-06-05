import * as React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import { OPTIONS } from '../config/constants';
import { Crust } from '../actions/types';
import { selectCrust } from '../actions/builder';

const { crusts } = OPTIONS;

interface Props {
  selectedCrust: Crust;
  selectCrust: Function;
  history?: any;
}

const ChooseCrust: React.SFC<Props> = ({ history, selectedCrust, selectCrust }) => {
  const onSelect = (crust: Crust) => {
    selectCrust(crust);
    history.push('/choose-toppings');
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Pick your crust: {_.isEmpty(selectedCrust) ? 'You have not selected any.' : selectedCrust.label}
          </li>
        </ol>
      </nav>

      <div className="row">
        {crusts.map(crust => (
          <div key={uuidv4()} className="col-sm">
            <div className="card">
              <img src={crust.img} className="card-img-top" alt={crust.label} />
              <div className="card-body">
                <h5 className="card-title">{crust.label} Crust - ${crust.price}</h5>
                <button onClick={() => onSelect(crust)} className="btn btn-primary">Select Crust</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = ({ builder }: any) => {
  return {
    selectedCrust: builder.selectedCrust
  }
}

export default connect(mapStateToProps, {
  selectCrust
})(ChooseCrust);