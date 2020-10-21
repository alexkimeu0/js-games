let canvas = document.getElementById('gameScreen')

let ctx = canvas.getContext('2d')

const GAME_WIDTH = 800
const GAME_HEIGHT = 600

// Clear the canvas
ctx.clearRect(0, 0, 800, 600)

// Paddle class
class Paddle {
    constructor(gameWidth, gameHeight){
        this.width = 150;
        this.height = 20;

        this.position = {
            x: gameWidth /2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
        
    }

    draw(ctx){
        ctx.fillStyle = '#2c3e50'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT)
paddle.draw(ctx)