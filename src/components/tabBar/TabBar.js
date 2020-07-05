import React, { Component } from 'react'
import "./TabBar.scss"
import { withRouter } from "react-router-dom"

class TabBar extends Component {
    state={
        activeTab:"home"
    }
    handleChange=(tab) =>{
        console.log(tab)
        let tabMap = {
            "home":{
                path:"/"
            },
            "community":{
                path:"/community"
            },
            "cart":{
                path:"/cart"
            },
            "my":{
                path:"/my"
            }
        }
        this.props.history.push(tabMap[tab].path)
        this.setState({
            activeTab:tab
            //改变tab的标志值
        }) 
    }   
    // 访问元素的只有.和[]
    //还有一个问题就是页面重新加载的时候,url地址是停留在点击的那个页面
    //但是activetab重设为home,所以要优化一下
    componentDidMount(){
        let activeTab = window.location.hash.split("/")[1]
        // 要做个判断,hash值一定为该关键字,不能出现其他字符,出现其他字符统一跳转到home主页
        if(activeTab === "" || activeTab==="community" || activeTab==="cart"|| activeTab==="my"){
            if(activeTab === ""){
                activeTab = "home"
            }
            this.setState({
                activeTab
            })
            }else{
                this.setState({
                    activeTab:"home"
                })
            }
        }
    render() {
        return (
            <div className="gogo-tabbar">
                <div className="tabbar-content">
                    {this.props.children}
                </div>
                <div className="gogo-footer-nav">
                    <div className="gogo-footer-home" onClick={ this.handleChange.bind(this,"home")}>
                        <i className={this.state.activeTab === "home"?"icon icon-home-o":"icon icon-home"}></i>
                        <span className={this.state.activeTab === "home"?"activeTab footer-home-text":"footer-home-text"}>首页</span>
                    </div>
                    <div className="gogo-footer-community" onClick={this.handleChange.bind(this,"community")}>
                        <i className={this.state.activeTab === "community"?"icon icon-community-o":"icon icon-community"}></i>
                        <span className={this.state.activeTab === "community"?"activeTab footer-community-text":"footer-community-text"}>社区</span>
                    </div>
                    <div className="gogo-footer-cart" onClick={ this.handleChange.bind(this,"cart")}>
                        <i className={this.state.activeTab === "cart"?"icon icon-cart-o":"icon icon-cart"}></i>
                        <span className={this.state.activeTab === "cart"?"activeTab footer-cart-text":"footer-cart-text"}>购物车</span>
                    </div>
                    <div className="gogo-footer-my"  onClick={ this.handleChange.bind(this,"my")}>
                        <i className={this.state.activeTab === "my"?"icon icon-my-o":"icon icon-my"}></i>
                        <span className={this.state.activeTab === "my"?"activeTab footer-my-text":"footer-my-text"}>我</span>
                    </div>
                </div> 
            </div>

        )
    }
}

// 导出去到app.js
export default withRouter(TabBar)
