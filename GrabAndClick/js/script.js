
const ball = document.querySelector('.ball')
const size = 40;


const keyframes = [
{left: 100}
{left: 500}
]

const timingEffect = {
	duration: 1000,
	itteartions: infinity
}

const animation = ball.anmate(keyframes, timingEffect)