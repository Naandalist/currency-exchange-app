import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Body, Icon, Text} from 'native-base';

const BtnAddComp = props => {
  return (
    <>
      <TouchableOpacity onPress={() => props.onClick()}>
        <Card>
          <CardItem bordered>
            <Body>
              <Icon active name="add" />
              <Text style={styles.add}>Add More Currencies</Text>
            </Body>
          </CardItem>
        </Card>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  add: {
    fontStyle: 'italic',
    color: '#222f3e',
    fontWeight: 'bold',
    paddingLeft: 20,
    position: 'absolute',
    top: 5,
    left: 10,
  },
});
export default BtnAddComp;
