import React, { Component } from 'react'
import "./Home.scss"
import axios from "../../utils/axios"
import Swiper from "swiper"
import "swiper/css/swiper.css"
// import Axios from "axios"
import Nav01 from "../../images/nav01.png"
import Nav02 from "../../images/nav02.png"
import Nav03 from "../../images/nav03.png"
import Nav04 from "../../images/nav04.png"
import Nav05 from "../../images/nav05.png"
import customer01 from "../../images/customer01.jpg"
import customer02 from "../../images/customer02.jpg"
import customer03 from "../../images/customer03.jpg"
import customer04 from "../../images/customer04.jpg"

// ../跳出该文件夹,../../再向上跳一层


export default class Home extends Component {
    // constructor(props){
    //     super(props);
    // // }
    state = {
        swiper_list: [], //轮播图列表
        product_list: [] // 促销产品列表
    }
    componentDidMount(){
        //发送促销产品列表的请求
        axios.get("getHotProducts").then(res=>{
            console.log(res)
            this.setState({
                product_list:res.wdata
            })  
        }).catch(err=>console.log(err))
        //发送轮播图的请求
        axios.get("getIndexLoopimg").then(res=>{
            console.log(res)
            this.setState({
                swiper_list:res.wdata
            },()=>{
                this.swiper = new Swiper('.swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项

                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination'
                    }
                })
            })
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
                <div className="gogo-index-swiper">
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            {
                                this.state.swiper_list.map(v => <div key={v.loopimg_url} className="swiper-slide"> 
                                    <img src={v.loopimg_url} alt="" />
                                </div>)
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
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
                {/* 商城客户开始 */}
                <div className="gogo-index-customer">
                    <h3>商城客户</h3>
                    <div className="index-customer-content">
                        <div className="index-customer-item">
                            <img className="index-customer-img" src={customer01} alt=""></img>
                            <span>海绵包包</span>
                        </div>
                        <div className="index-customer-item">
                            <img className="index-customer-img" src={customer02} alt=""></img>
                            <span>韩国代购</span>
                        </div>
                        <div className="index-customer-item">
                            <img className="index-customer-img" src={customer03} alt=""></img>
                            <span>ARC潮店</span>
                        </div>
                        <div className="index-customer-item">
                            <img className="index-customer-img" src={customer04} alt=""></img>
                            <span>欧力女装</span>
                        </div> 
                    </div>
                </div>
                {/* 商城客户结束 */}
                {/* 精选促销开始*/}
                <div className="gogo-index-promotion">
                    <h3>精选促销</h3>
                    <div className="index-product-container">
                        {
                            this.state.product_list.map(v =>
                            <div className="index-product-item" key={v.pid}>
                                <img className="index-product-img" src={v.product_url} alt="" ></img>
                            <h4>{v.product_name}</h4>
                            <span className="index-product-price">¥{v.product_price}</span>
                            <span className="index-product-oldprice">¥{v.product_origin_price}</span>
                            </div>
                            )
                        }

                    </div>
                </div>
                {/* 精选促销结束 */}
            </div> 

        )
    }
}
