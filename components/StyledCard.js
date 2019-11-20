import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-elements';
import Moment from 'moment';

const StyledCard = ({ title, date, status, index }) => {
  Moment.locale('en');

  const formattedDetails = () => {
    return (
      <View>
        <Text style={{position: 'absolute', right: 0}}>{status}</Text>
        <Text>{Moment(date).format('YYYY-MM-DD')}</Text>
      </View>
    );
  };

  return (
    <View>
      <Card title={title} index={index}>
        { formattedDetails() }
      </Card>
    </View>
  );
}

export default StyledCard;

