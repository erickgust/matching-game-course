import "./style.css";
import { CardGame } from "../../components/CardGame";

export function BoardGame (amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return /*html*/`
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}
