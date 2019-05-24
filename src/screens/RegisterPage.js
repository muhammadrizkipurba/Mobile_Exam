import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, Body, Title, Icon } from 'native-base';
import { Fire } from './../support/firebase'

import { onLoginSuccess } from './../2.actions'
import { connect } from 'react-redux'
import { StackActions, NavigationActions } from 'react-navigation'


class RegisterScreen extends Component {
  state = { pass: '', confirm: '', loading: false, error: '' }

  componentDidUpdate() {
    if (this.props.user.email !== '') {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'home' })]
      })
      this.props.navigation.dispatch(resetAction)
    }
  }

  onBtnRegisterClick = () => {
    if (this.inputEmail && this.state.confirm && this.state.pass) {
      if (this.state.pass == this.state.confirm) {
        this.setState({ loading: true })
        const auth = Fire.auth()
        auth.createUserWithEmailAndPassword(this.inputEmail, this.state.pass)
          .then((val) => {
            var { uid, email } = val.user
            console.log(uid)
            this.props.onLoginSuccess(email, uid)
            this.setState({ loading: false })
          })
          .catch((err) => {
            console.log('Ini Catch' + err)
            this.setState({ error: err.message, loading: false })
          })
      } else {
        this.setState({ error: 'Password dan Confirm harus sama' })
      }

    } else {
      this.setState({ error: 'Isi Semua !!' })
    }

  }

  render() {

    return (
      <Container>
        <Header>
          <Body>
            <Title style={{ marginLeft: 10 }}>Login</Title>
          </Body>
        </Header>
        <Content>
          <Text>Muhammad Rizki Purba</Text>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input onChangeText={text => (this.inputEmail = text)} />
            </Item>

            <Item floatingLabel last>
              <Label>Password</Label>
              <Input onChangeText={val => this.setState({ pass: val })} />
            </Item>

            <Button
              block
              style={{ marginTop: 30, marginHorizontal: 5 }}
              onPress={this.onBtnRegisterClick}
            >
              {this.state.loading ? (
                <ActivityIndicator size="small" color="#00ff00" />
              ) : (
                <Text> Register </Text>
              )}
            </Button>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                marginTop: 30
              }}
            >
              <Text onPress={() => this.props.navigation.navigate("login")}>
                Sudah punya akun? Login
              </Text>
            </View>
            {this.state.error ? (
              <View
                style={{
                  paddingVertical: 15,
                  backgroundColor: "red",
                  marginHorizontal: 10,
                  padding: 10,
                  marginTop: 10
                }}
              >
                <View style={{ position: "absolute", top: 10, right: 3 }}>
                  <Icon
                    name="close-circle"
                    fontSize={10}
                    color="white"
                    onPress={() => this.setState({ error: "" })}
                  />
                </View>
                <View>
                  <Text style={{ color: "white", alignSelf: "center" }}>
                    {this.state.error}
                  </Text>
                </View>
              </View>
            ) : null}
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth
  }
}

export default connect(mapStateToProps, { onLoginSuccess })(RegisterScreen)
