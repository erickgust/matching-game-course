import "./style.css";
import { PlayerName } from "../../components/PlayerName";
import { VsPlayer } from "../../components/VsPlayer";

export function ScoreBoard() {
    return /*html*/`
        <header class='score-board'>
            ${PlayerName("Player1")}
            ${VsPlayer()}
            ${PlayerName("Player2")}
        </header>
    `;
}
