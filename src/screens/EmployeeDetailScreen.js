import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Alert
} from "react-native";
import { Fire } from './../support/firebase'

class EmployeeDetailScreen extends Component {
  onBtnDelete = (key, nama) => {
    const { getParam } = this.props.navigation
    Alert.alert('Delete Data', ' Are You Sure you want to delete ' + nama,
      [
        {
          text: 'Yes', onPress: () => {
            //alert('manager/'+getParam('id')+'/employee/'+key)
            Fire.database().ref('manager/' + getParam('id') + '/employee').child(key).remove()
            alert('Data berhasil dihapus')
          }
        },
        { text: 'Cancel' }
      ])
  }

  render() {
    const { getParam } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>{getParam('nama')}</Text>
        <Text>{getParam('usia')}</Text>
        <Text>{getParam('jabatan')}</Text>
        <Button title='Delete' onPress={() => this.onBtnDelete(getParam('key'), getParam('nama'))}></Button>
      </View>
    );
  }
}
export default EmployeeDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
