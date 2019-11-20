import React, { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { ListItem } from 'react-native-elements';
import _ from 'lodash';

import { PatientContext } from '../providers/PatientContext';

// const patientIds = [
//   '0488ce70-f68d-45fb-b6a5-29684d0e4f35',
//   '62acbbe9-7bae-4d33-b53f-a389c1a0e281',
// ];

export default function HomeScreen() {
  const [state, setState] = useContext(PatientContext);
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const { client } = state;

    client.search({
      resourceType: 'Patient',
    }).then(({ entry }) => {
      return entry.map((patient) => {
        const id = _.get(patient, 'resource.id');
        const firstName = _.get(patient, 'resource.name[0].given[0]');
        const givenName = _.get(patient, 'resource.name[0].family');
        return { id, fullName: `${firstName} ${givenName}`}
      })
    }).then((patients) => {
      setPatients(patients)
    });
  }, []);

  const patientList = () => {
    return patients.map((patient, i) => {
      const { id, fullName } = patient;
      return (
        <ListItem
          key={i + 2}
          title={fullName}
          value={id}
          chevron
          onPress={() => setState((prevState) => ({ ...prevState, patientId: id, patientName: fullName }))}
        />
      )
    })
  }
  return (
    <ScrollView stickyHeaderIndices={[0]}>
      <ListItem bottomDivider titleStyle={{fontWeight: 'bold' }}id={0} title={state.patientName || ''}/>
      { patients ? patientList() : null }
    </ScrollView>
  );
}

HomeScreen.navigationOptions = {
  title: 'Home',
};
