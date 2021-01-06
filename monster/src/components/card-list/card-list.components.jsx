import React from 'react';

//Components
import { Card } from '../card/card.component'

//Styles
import './card-list.styles.css';

export const CardList = props => {
    return (
        <div className='card-list'>
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    );
}