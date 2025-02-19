import React from "react";

// Correct the import path for the Card component
import { Card } from "../card/card.component.jsx";

import "./card-list.styles.css";

export const CardList = (props) => {
    return (
        <div className="card-list">
            {props.monsters.map(monster => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    );
}