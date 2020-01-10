import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Text, Input, Item} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

const FormAddComp = props => {
  return (
    <>
      <Grid>
        <Col size={5}>
          <Item regular>
            <Input
              placeholder="Type currency code..."
              onChangeText={value => props.onChange(value)}
            />
          </Item>
        </Col>
        <Col size={1} style={styles.btnAdd}>
          <TouchableOpacity
            style={styles.btnAdd}
            onPress={() => props.onSubmit()}>
            <Text style={styles.txtAdd}>ADD</Text>
          </TouchableOpacity>
        </Col>
      </Grid>
    </>
  );
};

const styles = StyleSheet.create({
  height: {
    height: 40,
  },
  btnAdd: {
    paddingTop: 0,
    height: 51,
    backgroundColor: '#222f3e',
    color: 'white',
  },
  txtAdd: {
    color: 'white',
    marginLeft: 13,
    marginTop: 15,
    fontWeight: 'bold',
  },
});

export default FormAddComp;
