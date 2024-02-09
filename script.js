const board = document.getElementById('game-board');

//variáveis do jogo
const gridSize = 20;
let snake = [{x:10, y:10}];
let food = generateFood();
let direction = 'right';


//desenha o mapa do jogo, a cobra e a comida
function draw(){
    board.innerHTML = '';
    drawSnake();
    drawFood();
}

//desenha a cobra
function drawSnake(){
    snake.forEach((segment) => {
        const snakeElement = createGameElement('div', 'snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}

//desenha a comida
function createGameElement(tag, className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//definindo a posição da cobra ou da comida
function setPosition(element, position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

//desenhando a comida
function drawFood(){
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

//gerando a comida
function generateFood(){
    const x = Math.floor(Math.random() * gridSize) * 1;
    const y = Math.floor(Math.random() * gridSize) * 1;
    return {x,y};
}

//movendo a cobra
function move(){
    const head = { ...snake[0]};
    switch(direction){
        case 'right':
            head.x++;
            break;
        case 'left':
            head.x--;
            break;
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
    }
    snake.unshift(head);
    snake.pop();

    if(head.x === food.x && )
}