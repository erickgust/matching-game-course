import { CardGame } from "../../CardGame";

export function BoardGame (amountCards) {
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    return $htmlBoardGame;
}
