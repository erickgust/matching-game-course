import "./style.css";
import { CardFrontBack } from "../../components/CardFrontBack";

export function BoardGame (amountCards) {
    const $htmlCardFrontBack = CardFrontBack();
    const $htmlContent = $htmlCardFrontBack.repeat(amountCards);

    return /*html*/`
        <section class="board-game">
            ${$htmlContent}
        </section>
    `;
}
