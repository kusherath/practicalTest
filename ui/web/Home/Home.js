import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import './Home.css';
import {PostData} from '../../services/PostData';
import { confirmAlert } from 'react-confirm-alert';
import '../../styles/react-confirm-alert.css';

class Home extends Component {

constructor(props) {
super(props);

this.state = {
data:[],
userFeed: '',
redirectToReferrer: false,
name:'',
};

this.onChange = this.onChange.bind(this);
this.logout = this.logout.bind(this);
}

componentWillMount() {

if(sessionStorage.getItem("userData")){
this.getUserFeed();
}

else{
this.setState({redirectToReferrer: true});
}

}


logout(){
sessionStorage.setItem("userData",'');
sessionStorage.clear();
this.setState({redirectToReferrer: true});
}

render() {
if (this.state.redirectToReferrer) {
return (<Redirect to={'/login'}/>)
}

return (
<div className="row" id="Body">
<div className="medium-12 columns">
<a href="#" onClick={this.logout} className="logout">Logout</a>



</div>

</div>
);
}
}

export default Home;