import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container, Header, Content, List, ListItem, Text,Left,Right } from 'native-base';

import {Fire} from './../support/firebase'
import {connect} from 'react-redux'

class ListExample extends Component {
    state={data:[]}
  componentDidMount(){
    //this.setState({data:this.props.data})
    this.getData()
  }
  getData=()=>{
    var db = Fire.database() // untuk ngakses database
        var employee = db.ref('manager/'+this.props.id+'/employee')
        //alert('manager/'+this.props.id+'/employee')
        employee.on('value',(items)=>{
            //this.setState({data:Object.values(items.val())})
            this.setState({data:items.val()})
            //alert(this.state.data)
            console.log('Items.Val'+items.val())
            //alert(Object.keys(this.state.data))
        },(err)=>{
            console.log(err)
        })
  }
  render() {
      console.disableYellowBox=true
    return (
      <Container>
        <Header />
        <Content>
          <List>
          {this.state.data!==[]?
              Object.keys(this.state.data).map((val)=>{
                return(
                <ListItem onPress={()=>this.props.navigation.navigate('detail',{
                  nama:this.state.data[val].nama,
                  jabatan:this.state.data[val].jabatan,
                  usia:this.state.data[val].usia,
                  key:val,
                  id:this.props.id
                })}>
                    <Left>
                        <Text>{this.state.data[val].nama}</Text>
                    </Left>
                    <Right>
                        <Icon name='chevron-right' size={20}/>
                    </Right>
                </ListItem>  
                )
              }):null
          }
          </List>
        </Content>
      </Container>
    );
  }
}
const mapStateToProps=(state)=>{
  return{
    data:state.auth,
    id:state.auth.id
  }
}
export default connect(mapStateToProps)(ListExample)