//utils.js file

function rectangularCollision({ rec1, rec2 }) {
    return (
        rec1.attackBox.position.x + rec1.attackBox.width >=
        rec2.position.x &&
        rec1.attackBox.position.x <=
        rec2.position.x + rec2.width &&
        rec1.attackBox.position.y + rec1.attackBox.height >= rec2.position.y &&
        rec1.attackBox.position.y <= rec2.position.y + rec2.height
    );
}

function determineWinner({ player, enemy, timerId }) {
    clearTimeout(timerId);
    document.querySelector('#displayText').style.display = 'flex';
    if (player.health === enemy.health) {
        document.querySelector('#displayText').innerHTML = 'Tie';
    } else if (player.health > enemy.health) {
        document.querySelector('#displayText').innerHTML = 'You win';
    } else if (enemy.health > player.health) {
        document.querySelector('#displayText').innerHTML = 'Enemy wins';
    }
}

let timer = 60;
let timerId;
function decreaseTimer() {
    if (timer > 0) {
        timerId = setTimeout(decreaseTimer, 1000);
        timer--;
        document.querySelector('#timer').innerHTML = timer;
    }

    if (timer === 0) {
        determineWinner({ player, enemy, timerId });
    }
}
