import React, { Component } from 'react'
import "./Community.scss"
export default class Community extends Component {
    render() {
        return (
            <div className="gogo-community-box">
                {/* 社区导航开始 */}
                <div className="gogo-community-header">
                    <i className="gogo-community"></i>
                    <span className="gogo-community-cart">购物车</span>
                    <span>编辑</span>
                </div>
                {/* 社区导航结束 */}
            </div>
        )
    }
}
