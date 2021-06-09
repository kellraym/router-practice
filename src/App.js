import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './Home'
import Products from './Products'
import IndividualProduct from './IndividualProduct'
import ViewCart from './ViewCart'
import Checkout from './Checkout'
import Nav from './Nav'



// class App extends React.Component {

//   render() {
//     return (
//       <div className="App">
//           <Nav />
//           <Shop />
//           <About /> 
//       </div>
//     );
// }
function App() {

  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" exact component={Products} />
          <Route path="/individualProduct" exact component={IndividualProduct} />
          <Route path="/viewCart" exact component={ViewCart} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </Router>
    </div >
  )

  // return (
  // <AppContext.Provider value={{ notProps }}>
  //   <Router>
  //     <Switch>
  //       <Route path="/" exact component={Nav} />
  //       <Route path="/about" component={About} />
  //       <Route path="/shop" render={(props) => <Shop myProp="tubular" {...props} />} />
  //     </Switch>
  //   </Router>
  //   <Button />
  // </AppContext.Provider>
  // )
}

export default App;
