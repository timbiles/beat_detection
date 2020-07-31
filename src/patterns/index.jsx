import React from 'react';
import { Flex } from 'minerva-ui';
import QuarterNote from '../icons/QuarterNote';
import BarLine from '../icons/BarLine';
import Triplet from './Triplet';
import EighthNote from './EighthNote';
import SixteenthNote from './SixteenthNote';
import SixteenthTwo from './SixteenthTwo';

export const PatternOne = () => (
  <Flex>
    <QuarterNote />
    <QuarterNote />
    <QuarterNote />
    <QuarterNote />
    <BarLine />
    <QuarterNote />
  </Flex>
);

export const PatternTwo = () => (
  <Flex>
    <QuarterNote />
    <QuarterNote />
    <EighthNote />
    <QuarterNote />
    <BarLine />
    <QuarterNote />
  </Flex>
);

export const PatternThree = () => (
  <Flex>
    <EighthNote />
    <EighthNote />
    <QuarterNote />
    <EighthNote />
    <BarLine />
    <QuarterNote />
  </Flex>
);

export const PatternFour = () => (
  <Flex>
    <QuarterNote />
    <Triplet />
    <EighthNote />
    <QuarterNote />
    <BarLine />
    <QuarterNote />
  </Flex>
);

export const PatternFive = () => (
  <Flex>
    <SixteenthNote />
    <EighthNote />
    <Triplet />
    <SixteenthTwo />
    <BarLine />
    <QuarterNote />
  </Flex>
);

export const PatternSix = () => (
  <Flex>
    <EighthNote />
    <Triplet />
    <EighthNote />
    <QuarterNote />
    <BarLine />
    <QuarterNote />
  </Flex>
);
