import { React, useState, useEffect } from 'react';
import samimg from "../../assets/Total_Revenue.jpg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchTools from './SearchTools';
import { SEARCH_TOOLS } from '../../api/apiUrls';
import axios from '../../api/axios';
import "./buy.scss"
import {firstChrUpperCase} from "../../utils/utils.js";


function BuyTools() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [buyTools,setBuyTools]=useState([]);
    
   

    const [searchParam,setSearchParam]=useState("");
    let previousSearch = localStorage.getItem('searchParam');
    const getAllTools = async () => {
        try {
            if(previousSearch!="" && searchParam.trim()!="") {
            const token = localStorage.getItem('authToken');
            axios.defaults.headers.common['authorization'] = 'Bearer ' + token;
            const response = await axios.get(SEARCH_TOOLS, { params: { query: previousSearch || searchParam}});
            if (response && response.data.results) {
                console.log(response.data.results);
                setBuyTools(response.data.results);
                return response.data.results;
            }
            }
        } catch (error) {
            message.error("Error on loading orders..");
            navigate('/login');
        }
    }
    

    useEffect(() => {
        searchParam?previousSearch=searchParam:setSearchParam(previousSearch);
        getAllTools();
        console.log(searchParam, "  buy tools");
    }, [searchParam]);
    
    const cardClick = (item) => {
        console.log("card clicked ", item);
        navigate("/buytools-detail",{
            state: {
              toolsDetails: item,
            },
          });

    }

    return (
        <div>
            <h1>BuyTools</h1>
            <div className="container-layout">
                <div className="sidebar-filter">Filter <div>
                    <SearchTools searchParam={searchParam} setSearchParam={setSearchParam}/></div> </div>
                <div className="main-container">
                    <div>
                    <span className="detailsCardSpan">Search Results for: </span>{previousSearch||searchParam}
                    </div>
                    {buyTools.map((item, index) => {
                        return (
                            <div className="inline-cardblock" key={item.tool_id} onClick={() => cardClick(item)}>
                                <div className="main-card">
                                    <div className="child-card-img">
                                        <img className="card-img" src={item.tool_image[0]} alt={index} />
                                    </div>
                                    <div className="card-price-tag">₹ {item.tool_selling_price}</div>
                                    <div className="card-desc"><span className="detailsCardSpan">{firstChrUpperCase(item.tool_name)}</span></div>
                                    <div className="card-desc">{firstChrUpperCase(item.tool_description)}</div>
                                    <div className="card-desc"><span className="detailsCardSpan">Condition : </span>{item.tool_condition.toUpperCase()}</div>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </div>
    )
}

export default BuyTools;
