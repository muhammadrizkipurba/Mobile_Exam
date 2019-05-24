import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label,Text,Button} from 'native-base';
import {Fire} from './../support/firebase'
import {connect} from 'react-redux'

class AddEmployee extends Component {
    state={data:[]}
    componentDidMount(){
      
    }
  onAddEmployee=()=>{
    var db = Fire.database() // untuk ngakses database
        var employee = db.ref('manager/'+this.props.id+'/employee')
        employee.push({
            nama:this.inputNama,
            usia:this.inputUsia,
            jabatan:this.inputJabatan
        })
        .then((res)=>{
            console.log(res)
            //this.setState({data:Object.values(items.val())})
            alert('Data berhasil ditambah')
            this.setState({data:items.val()})
        })
        .catch((err)=>{
            console.log(err)
        })
  }

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Text>
              {this.props.id}
            </Text>

            <Item floatingLabel>
              <Label>Nama</Label>
              <Input onChangeText={(text)=>this.inputNama=text}/>
            </Item>
            <Item floatingLabel last>
              <Label>Usia</Label>
              <Input onChangeText={(text)=>this.inputUsia=text} />
            </Item>
            <Item floatingLabel last>
              <Label>Jabatan</Label>
              <Input onChangeText={(text)=>this.inputJabatan=text} />
            </Item>
            
            <Button block style={{marginTop:30,marginHorizontal:5}} onPress={()=>this.onAddEmployee()}><Text> Add Employee </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    id:state.auth.id
  }
}
export default connect(mapStateToProps)(AddEmployee)
