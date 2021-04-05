import React, { Component } from 'react';
import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';
import Header from './ui/web/Header/Header';
import Footer from './ui/web/Footer/Footer';
class App extends Component {
constructor(){
super();
this.state={
appName: "interview login",
home: false
}
}
render() {
return (
<div className="off-canvas-wrapper">
<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
<div className="off-canvas-content" data-off-canvas-content>

<Header name={this.state.appName}/>
<Routes name={this.state.appName}/>
<hr/>
<Footer/>
</div>
</div>
</div>
);
}
}
export default App;
