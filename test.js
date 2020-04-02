let pions = ["bleu", "vert", "rouge", "jaune"];

document.getElementById("player-input").onkeydown = detectInput;

let joeur_actuel = 0;
let couleur_joueur_actuel = document.getElementById("joeur_actuel");
couleur_joueur_actuel.textContent=pions[joeur_actuel];


function detectInput(event){
    if (event.key === "Enter"){ //si on appuie sur "Entrée"
        processCommand(this.value);
        this.value = ""; //vide le champ texte
        if(joeur_actuel == 3){
            joeur_actuel = 0
        }else{
            joeur_actuel+=1;
        }
        couleur_joueur_actuel.textContent=pions[joeur_actuel];
    };
    

}

/**
 * Permet de traiter la commande
 * envoyée par le joueur.
 * 
 * @example Commandes possibles:
 * "vert-A1"
 * "Bleu-E3"
 * "BLEU-d7"
 * "MUR-B3-v"
 * "mur-F4-H"
 * @param {string} text 
 */
function processCommand(text){
    params = text.split("-");
    let command = params[0].toUpperCase();
    let [x,y] = convertCoords(params[1].toUpperCase());
    switch (command){
        case "ROUGE":
            movePiece("rouge", x, y);
            break;
        case "JAUNE":
            movePiece("jaune", x, y);
            break;
        case "VERT":
            movePiece("vert", x, y);
            break;
        case "BLEU":
            movePiece("bleu", x, y);
            break;
        case "MUR":
            let direction = params[2].toLowerCase(); // h ou v
            placeWall(direction, x, y);
    }
}