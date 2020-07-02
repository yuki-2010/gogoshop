import React, { Component } from 'react'
import "./Home.scss"
import axios from "../../utils/axios"
// import Axios from "axios"
import Nav01 from "../../images/nav01.png"
import Nav02 from "../../images/nav02.png"
import Nav03 from "../../images/nav03.png"
import Nav04 from "../../images/nav04.png"
import Nav05 from "../../images/nav05.png"

// ../跳出该文件夹,../../再向上跳一层


export default class Home extends Component {
    // constructor(props){
    //     super(props);
    // // }
    // state = {
    //     swiper_list: [], //轮播图列表
    //     product_list: [] // 促销产品列表
    // }
    componentDidMount(){
        axios.get("getIndexLoopimg").then(res=>{
            console.log(res)
        }).catch(err=>console.log(err))
    }
    render() {
        return (
            <div className="gogo-index">
                {/* 顶部导航条开始 */}
                <div className="gogo-header">
                    <i className="icon icon-menu"></i>
                    <div className="gogo-header-text">GOGO商城</div>
                    <i className="icon icon-soso"></i>
                </div>
                {/* 首页顶部导航结束 */}
                {/* 首页轮播图开始 */}

                {/* 首页轮播图结束 */}
                {/* 首页分类图标开始 */}
                <div className="gogo-index-classify">
                    <div className="index-image-item">
                        <img src={Nav01} alt="大聚惠"/>
                        <span>大聚惠</span>
                    </div>
                    <div className="index-image-item">
                        <img src={Nav02} alt=""/>
                        <span>海外购</span>
                    </div>
                    <div className="index-image-item">
                        <img src={Nav03} alt="超市百货"/>
                        <span>超市百货</span>
                    </div>
                    <div className="index-image-item">
                        <img src={Nav04} alt="厂家娱乐"/>
                        <span>厂家娱乐</span>
                    </div>
                    <div className="index-image-item">
                        <img src={Nav05} alt="美食娱乐"/>
                        <span>美食娱乐</span>
                    </div>
                </div>
                {/* 首页分类图标结束 */}
            </div> 

        )
    }
}
