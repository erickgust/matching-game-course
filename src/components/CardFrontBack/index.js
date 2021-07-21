import './style.css';
import { CardGame } from "../CardGame";

export function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            <div class="card -front">
                ${CardGame()}
            </div>
            <div class="card -back">
                ${CardGame("javascript", "Logo do JavaScript")}
            </div>
        </article>
    `;
};
