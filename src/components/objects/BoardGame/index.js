import "./style.css";
import { CardGame } from "../../CardGame";

export function BoardGame (amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);

    return `
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}
