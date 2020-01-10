import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Text, Body, Icon, Left, Right} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';
import {numberFormatter, numberFormatterV2} from '../helpers/NumberFormatter';
const CardComp = props => {
  return (
    <>
      {props.data.map((element, index) => {
        return (
          <Grid key={index}>
            <Col size={5} style={styles.height}>
              <Card>
                <CardItem bordered>
                  <Body>
                    <Right>
                      <Text style={styles.total}>
                        {numberFormatterV2(element[1][1] * 10000)}
                      </Text>
                    </Right>
                    <Text style={styles.name}> {element[0]} </Text>
                    <Text style={styles.subname}> {element[1][0]} </Text>
                    <Text style={styles.value}>
                      1 USD = {element[0]} {numberFormatter(element[1][1])}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Col>
            <Col size={1}>
              <TouchableOpacity onPress={() => props.onRemove(element[0])}>
                <Card>
                  <CardItem bordered style={styles.btnDelete}>
                    <Body>
                      <Icon active name="trash" />
                    </Body>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            </Col>
          </Grid>
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  total: {
    left: 60,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  subname: {
    fontStyle: 'italic',
    fontSize: 15,
  },
  value: {
    paddingTop: 20,
  },
  btnDelete: {
    backgroundColor: 'white',
    paddingBottom: 36,
    paddingTop: 36,
  },
  height: {
    height: 40,
  },
});

export default CardComp;
