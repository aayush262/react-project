import React from 'react';
import './menu.css';
import { withRouter } from 'react-router-dom';


const MenuItem = ({title, imageUrl, size, linkUrl, history, match})=>(
    <div onClick ={
        ()=>{
            history.push(`${match.url}${linkUrl}`)
        }
    }  className = {`${size} menu-item`} >
        <div className='background-image' style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${imageUrl})`
        }} />
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">Watch Now</span>
        </div>   
    </div>
)

export default withRouter(MenuItem);