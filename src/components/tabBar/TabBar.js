import React, { Component } from 'react'
import "./TabBar.scss"
// import { withRouter } from "react-router-dom"


export default class TabBar extends Component {
    state={
        activeTab:"home"
    }
    render() {
        return (
            <div className="gogo-tabbar">
                <div className="tabbar-content">
                    {this.props.children}
                </div>
                <div className="gogo-footer-nav">
                    <div className="gogo-footer-home">
                        <i className="icon icon-home"></i>
                        <span className="footer-home-text">首页</span>
                    </div>
                    <div className="gogo-footer-community">
                        <i className="icon icon-community"></i>
                        <span className="footer-community-text">社区</span>
                    </div>
                    <div className="gogo-footer-cart">
                        <i className="icon icon-cart"></i>
                        <span className="footer-cart-text">购物车</span>
                    </div>
                    <div className="gogo-footer-my">
                        <i className="icon icon-my"></i>
                        <span className="footer-my-text">我</span>
                    </div>
                </div> 
            </div>

        )
    }
}

// 导出去到app.js

