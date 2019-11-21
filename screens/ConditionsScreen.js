import React, { useEffect, useState, useContext } from 'react';
import { ScrollView } from 'react-native';
import _ from 'lodash';
import StyledCard from '../components/StyledCard';
import { PatientContext } from '../providers/PatientContext';

export default function ConditionsScreen() {
  const [conditions, setConditions] = useState(null);
  const [state, setState] = useContext(PatientContext);
  const { client, patientId } = state;

  useEffect(() => {
    client.search({
      resourceType: 'Condition',
      searchParams: { patient: patientId }
    }).then((bundle) => {
      const { entry: conditions } = bundle;

      return conditions.map((condition) => {
        const title = _.get(condition, 'resource.code.text');
        const onset = _.get(condition, 'resource.onsetDateTime');
        const status = _.get(condition, 'resource.clinicalStatus.coding[0].code');
        return { title, onset, status };
      }).sort((a, b) => new Date(b.onset) - new Date(a.onset));
    }).then(conditions => setConditions(conditions));
  }, [state]);

  const conditionsContent = (issues) => {
    return issues.map((issue, index) => {
      const { title, onset, status } = issue;
      return (
        <StyledCard
          key={`condition-${patientId}-${index}`}
          title={title}
          date={onset}
          status={status}
        />
      )
    })
  }

  return (
    <ScrollView>
      { conditions ? conditionsContent(conditions) : null }
    </ScrollView>
  );
}

ConditionsScreen.navigationOptions = {
  title: 'Conditions',
};
