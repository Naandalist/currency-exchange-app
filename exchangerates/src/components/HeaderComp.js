import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Header, Title, Subtitle} from 'native-base';
import {Col, Grid} from 'react-native-easy-grid';

export default class HeaderComp extends Component {
  render() {
    return (
      <>
        <Header style={styles.header}>
          <Grid>
            <Col size={3} style={{height: 50}}>
              <Subtitle style={styles.subtitle}>
                USD-United States Dollars
              </Subtitle>
              <Title style={styles.title}>USD</Title>
            </Col>
            <Col size={1} style={{height: 50}}>
              <Title style={styles.total}>10.0000</Title>
            </Col>
          </Grid>
        </Header>
      </>
    );
  }
}

const styles = StyleSheet.create({
  subtitle: {
    fontStyle: 'italic',
    color: '#222f3e',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 20,
    paddingTop: 10,
  },
  title: {
    color: '#222f3e',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 20,
  },
  total: {
    color: '#222f3e',
    fontWeight: 'bold',
    textAlign: 'left',
    paddingLeft: 15,
    paddingTop: 18,
    fontSize: 22,
  },
  header: {
    backgroundColor: '#feca57',
  },
});
