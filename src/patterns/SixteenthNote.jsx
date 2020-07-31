import React, { Fragment } from 'react';
import Sixteenth from '../icons/SixteenthNote';
import QuarterNote from '../icons/QuarterNote';

const SixteenthNote = () => (
  <Fragment>
    <Sixteenth />
    <Sixteenth connected />
    <Sixteenth connected />
    <QuarterNote margin="40px 15px 40px 3px" />
  </Fragment>
);

export default SixteenthNote;
