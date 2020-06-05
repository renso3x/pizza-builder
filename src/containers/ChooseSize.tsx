import * as React from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import _ from 'lodash';

import { OPTIONS } from '../config/constants';
import { selectSize } from '../actions/builder';
import { Size } from '../actions/types';

const { sizes } = OPTIONS;

interface Props {
  selectedSize: Size;
  selectSize: Function;
  history?: any;
}

const ChooseSize: React.SFC<Props> = ({ history, selectedSize, selectSize }) => {
  const onSelect = (size: Size) => {
    selectSize(size);
    history.push('/choose-crust');
  }

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            Pick a Size: {_.isEmpty(selectedSize) ? 'You have not selected any.' : selectedSize.label}
          </li>
        </ol>
      </nav>

      <div className="row">
        {sizes.map(size => (
          <div key={uuidv4()} className="col-sm">
            <div className="card">
              <img src={size.img} className="card-img-top" alt={size.label} />
              <div className="card-body">
                <h5 className="card-title">{size.label} - ${size.price}</h5>
                <button onClick={() => onSelect(size)} className="btn btn-primary">Select Size</button>
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
    selectedSize: builder.selectedSize
  }
}

export default connect(mapStateToProps, {
  selectSize
})(ChooseSize);