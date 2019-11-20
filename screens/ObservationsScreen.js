import React, { useEffect, useState, useContext } from 'react';
import { Text, ScrollView } from 'react-native';
import _ from 'lodash';
import StyledCard from '../components/StyledCard';
import { PatientContext } from '../providers/PatientContext';

export default function ObservationsScreen() {
  return (
    <ScrollView>
      <Text>Observations Screen</Text>
    </ScrollView>
  );
}

ObservationsScreen.navigationOptions = {
  title: 'Observations',
};

