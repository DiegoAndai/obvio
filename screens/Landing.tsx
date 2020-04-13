import React from 'react';
import styled from 'styled-components/native'

import AppScreen from './AppScreen';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

export default function Landing() {

  return (
    <AppScreen>
      <AppButton label='host' isPrimary/>
      <AppText>- or -</AppText>
      <AppButton label='enter room'/>
    </AppScreen>
  );
}