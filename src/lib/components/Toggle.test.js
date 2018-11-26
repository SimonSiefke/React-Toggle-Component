import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from './Toggle';

it('Toggle renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Toggle>
      {({on})=><p>{on}</p>}
    </Toggle>, div);
});
