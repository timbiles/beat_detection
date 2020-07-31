import React, { Fragment } from 'react';
import Sixteenth from '../icons/SixteenthNote';
import EighthNote from '../icons/EighthNote';
import QuarterNote from '../icons/QuarterNote';

const SixteenthTwoPattern = () => (
  <Fragment>
    <EighthNote />
    <Sixteenth connected patternTwo />
    <QuarterNote margin="40px 15px 40px 3px" />
  </Fragment>
);

export default SixteenthTwoPattern;
