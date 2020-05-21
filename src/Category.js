import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link, useParams} from "react-router-dom";
import dl from './data-exam.json';//Load file Json
import Single_post from './Single_post.js';
export default class Category extends Component {
    
    render() {
        return (
            <div>
            <h2>Trang Category</h2>    
            {dl.map((value,key)=>{
              return(
              <Cat tin_id={value.id} key={key} tieude={value.tieude} hinhanh={value.img_thum} trichdan={value.trichdan} />
              );
            })}
            </div>
        )
    }
}


function Cat(props) {
    return (
    
    <div>   
      <img src={props.hinhanh} alt=""/><br/>
      <b><Link to={ "/chi-tiet/" +props.tin_id }>
            <b>{props.tieude}</b>
        </Link></b> 
      <p>{props.noidung}</p> 
      <p>{props.category}</p>      
    </div>   
    
 
); 

}


