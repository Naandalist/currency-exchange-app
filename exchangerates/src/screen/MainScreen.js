import React, {Component} from 'react';
import {StyleSheet, View, ToastAndroid, Toast} from 'react-native';
import {Container, Content} from 'native-base';
import {
  getSomeRates,
  addDescription,
  addOneRate,
  RemoveOneRate,
} from '../helpers/dataProcessing';

import {getRates} from '../helpers/fetchApi';
import HeaderComp from '../components/HeaderComp';
import CardComp from '../components/CardComp';
import BtnAddComp from '../components/BtnAddComp';
import FormAddComp from '../components/FormAddComp';

export default class MainScreen extends Component {
  constructor() {
    super();
    this.state = {
      allRates: {},
      someRates: [],
      isClick: false,
      newRates: '',
    };
  }

  componentDidMount() {
    this.getAllRatesHandle();
  }

  getAllRatesHandle = () => {
    getRates().then(result => {
      if (result) {
        addDescription(result).then(result => {
          if (result) {
            this.setState({
              allRates: result,
            });
            this.getSomeRatesHandle();
          }
        });
      }
    });
  };

  getSomeRatesHandle = () => {
    const data = this.state.allRates;
    getSomeRates(data).then(result => {
      if (result) {
        this.setState({someRates: result});
      }
    });
  };
  btnAddHandle = () => {
    this.setState({isClick: true});
    ToastAndroid.show('Please, Type Country Currency Code', ToastAndroid.SHORT);
  };

  inputAddHandle = value => {
    const country = value.toUpperCase();
    this.setState({newRates: country});
  };

  submitAddHandle = () => {
    const newRates = this.state.newRates;
    const allRates = this.state.allRates;
    const someRates = this.state.someRates;

    addOneRate(allRates, someRates, newRates).then(result => {
      if (result) {
        if (result.length < 1) {
          ToastAndroid.show('Code Country is Invalid', ToastAndroid.SHORT);
        } else {
          ToastAndroid.show('Add Success', ToastAndroid.SHORT);
          const someRatesNew = [...this.state.someRates, result];
          this.setState({someRates: someRatesNew});
        }
      } else {
        ToastAndroid.show('It Has Already Added', ToastAndroid.SHORT);
      }
    });
    this.setState({isClick: false});
  };

  btnRemoveHandle = codeCountry => {
    const someRates = this.state.someRates;
    RemoveOneRate(someRates, codeCountry).then(result => {
      if (result) {
        this.setState({someRates: result});
      }
    });
    ToastAndroid.show('Remove Success', ToastAndroid.SHORT);
  };

  render() {
    return (
      <>
        <Container>
          <HeaderComp />
          <Content padder>
            <View>
              <CardComp
                data={this.state.someRates}
                onRemove={this.btnRemoveHandle}
              />
              <>
                {this.state.isClick ? (
                  <FormAddComp
                    onChange={this.inputAddHandle}
                    onSubmit={this.submitAddHandle}
                  />
                ) : (
                  <BtnAddComp onClick={this.btnAddHandle} />
                )}
                <></>
              </>
            </View>
          </Content>
        </Container>
      </>
    );
  }
}

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
