import React from 'react';
import { MenuItem } from '../menu-item/menu';
import './directory.css'

export class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'Kaguya sama: Love is War',
                imageUrl: 'https://static.zerochan.net/Kaguya-sama.wa.Kokurasetai.full.2393345.jpg',
                id: 1
            },{
                title: "JoJo's Bizarre Adventure",
                imageUrl: 'https://i.ytimg.com/vi/p0SaxpcUaWo/maxresdefault.jpg',
                id: 2
            },{
                title: 'Death Note',
                imageUrl: 'https://m.media-amazon.com/images/I/81aEb4NBysL._SS500_.jpg',
                id: 3
            },{
                title: 'One Punch Man',
                imageUrl: 'https://i.pinimg.com/736x/f6/a7/25/f6a725d1bde3a1e3e91e43295eafc11e.jpg',
                size: 'large',
                id: 4
            },{
                title: 'Demon Slayer',
                imageUrl: 'https://pressreality.com/wp-content/uploads/2020/02/demonslayer2-1200x675.jpg',
                size: 'large',
                id: 5
            }]
        }
    }
    render(){
        return(
            <div className="directory-menu">
                {this.state.sections.map(({title,imageUrl,id,size})=>{
                    return <MenuItem size={size} imageUrl={imageUrl} key = {id} title= {title} />
                })}
            </div>
        )
    }
}