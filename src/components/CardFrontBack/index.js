import { CardGame } from "../CardGame";

export function CardFrontBack() {
    return /*html*/`
        <article class="card-front-back">
            ${CardGame()}
            ${CardGame("javascript", "Logo do JavaScript")}
        </article>
    `;
};
