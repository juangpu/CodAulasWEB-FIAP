// MONTA OS QUADRADOS(ROBÔS E OBSTÁCULOS)
const Quadrado = function (posX, posY, width, height, color, velocidade) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;
    this.velocidade = velocidade;
}