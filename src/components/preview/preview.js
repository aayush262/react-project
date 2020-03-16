import React from 'react';
import './preview.css';
import { CollectionItem } from '../collection-item/collection-item';

const Preview = ({title, items})=> (
    <div className ="collection-preview">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {items.filter((item,index)=>index<4).map(({name,id,imageUrl})=>{
                return <CollectionItem name={name} key={id} imageUrl={imageUrl}></CollectionItem>
            })}
        </div>
    </div>
)

export default Preview;