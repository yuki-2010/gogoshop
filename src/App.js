
import React, { Component } from 'react'
// 对render里面所有用到的标签进行引用
import TabBar from "./components/tabBar/TabBar"
import Home from "./components/home/Home"
import Community from "./components/community/Community"
import Cart from "./components/cart/Cart"
import My from "./components/my/My"

import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 思考1：为什么用tabbar包一个标签*/}
        <Router>
          <Switch>          
            <Route path="/" exact render={()=><TabBar><Home></Home></TabBar>}></Route>
            <Route path="/community" exact render={()=><TabBar><Community></Community></TabBar>}></Route>
            <Route path="/cart" exact render={()=><TabBar><Cart></Cart></TabBar>}></Route>
            <Route path="/my" exact render={()=><TabBar><My></My></TabBar>}></Route>
            <Redirect to="/"></Redirect>
          </Switch>
        </Router>
      </div>
    )
  }
}

