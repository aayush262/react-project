import React from 'react';
import { Shop_Data } from './animeData';
import Preview from '../preview/preview';

class Anime extends React.Component{
    constructor(){
        super();
        this.state ={
            collections: Shop_Data
        }
    }
    render(){
        return(
            <div className="anime-page">
                {this.state.collections.map(({title,items})=>{
                   return <Preview title = {title} items={items}></Preview>
                })}
            </div>
        )
    }
}

export default Anime;