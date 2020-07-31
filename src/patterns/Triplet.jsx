import React from 'react';
import { Flex } from 'minerva-ui';
import EighthNote from '../icons/EighthNote';
import QuarterNote from '../icons/QuarterNote';

const Triplet = () => (
  <Flex flexDirection="column" marginTop="-18px" alignItems="center">
    3
    <Flex>
      <EighthNote margin="40px 4px 40px 3px" />
      <EighthNote />
      <QuarterNote margin="40px 15px 40px 3px" />
    </Flex>
  </Flex>
);

export default Triplet;
