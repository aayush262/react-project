import React from 'react';

import './collection-item.css';

export const CollectionItem = ({key,name,imageUrl})=> (
    <div className="collection-item">
        <div className ="image" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url(${imageUrl})`
        }}/>
        <div className="collection-footer">
            <span className="name">{name}</span>
        </div>
    </div>
)

