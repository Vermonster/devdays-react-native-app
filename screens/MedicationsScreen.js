import React, { useEffect, useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import StyledCard from '../components/StyledCard';
import { PatientContext } from '../providers/PatientContext';

export default function MedicationRequestsScreen() {
  const [medicationRequests, setMedicationRequests] = useState(null);
  const [state, setState] = useContext(PatientContext);
  const { client, patientId } = state;

  useEffect(() => {
    client.search({
      resourceType: 'MedicationRequest',
      searchParams: { patient: patientId }
    }).then((bundle) => {
      const { entry: medicationRequests } = bundle;

      return medicationRequests.map((medicationRequest) => {
        const title = _.get(medicationRequest, 'resource.medicationCodeableConcept.text');
        const onset = _.get(medicationRequest, 'resource.authoredOn');
        const status = _.get(medicationRequest, 'resource.status');
        return { title, onset, status };
      }).sort((a, b) => new Date(b.onset) - new Date(a.onset));
    }).then(medicationRequests => setMedicationRequests(medicationRequests));
  }, [state]);

  const medicationRequestsContent = (issues) => {
    return issues.map((issue, index) => {
      const { title, onset, status } = issue;
      return (
        <StyledCard
          key={`${patientId}-${title}-${index}`}
          title={title}
          date={onset}
          status={status}
        />
      )
    })
  }

  return (
    <ScrollView>
      { medicationRequests ? medicationRequestsContent(medicationRequests) : null }
    </ScrollView>
  );
}

MedicationRequestsScreen.navigationOptions = {
  title: 'MedicationRequests',
};
