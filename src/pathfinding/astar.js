class Node {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.g = 1e25;
        this.h      ;
        this.f      ;
        this.parent ;
    }
}

const search = (grid, start, goal) => {
    let openSet = []
    openSet.push(new Node(start[0], start[1]))
    openSet[0].g = 0;


    while (openSet.length > 0) {
        let currentValue = 1e25;
        let currentNode = new Node(-1, -1);
        openSet.forEach( (node) => {
            if (node.g < currentValue) {
                currentValue = node.g
                currentNode = node
            }
        })
        if (currentNode.x === goal[0] && currentNode.y === goal[1]) {
            return reconstructPath(currentNode)
        }

        let first = openSet.shift();
        grid[first.x][first.y] = 'explored'

        neighbours.forEach( (relPos) => { //relativePosition
            let nbX = currentNode.x+relPos[0] //neighbourX
            let nbY = currentNode.y+relPos[1] //neighbourY
            if (grid[nbX] === undefined || grid[nbX][nbY] === undefined) { return; } //out of bounds
            if (grid[nbX][nbY] === 'wall' || grid[nbX][nbY] === 'explored') return; //not needed to explore

            let gScore = currentValue + 1;
            let gScoreIsBest = false;

            let nbIndex = openSet.findIndex( (node) => node.x === nbX && node.y === nbY )
            if (nbIndex === -1) {
                gScoreIsBest = true;
                let neighbour = new Node(nbX, nbY)
                neighbour.h = h([0, 0], [nbX, nbY])
                openSet.push(neighbour)
            } else if (gScore < openSet[nbIndex].g) {
                gScoreIsBest = true;
            }

            if (gScoreIsBest) {
                let nbIndex = openSet.findIndex( (node) => node.x === nbX && node.y === nbY )
                openSet[nbIndex].parent = currentNode
                openSet[nbIndex].g = gScore;
                openSet[nbIndex].f = openSet[nbIndex].g + openSet[nbIndex].h;
            }
        })
    }
    return [];

}

const h = (pos0, pos1) => {
    let delta0 = Math.abs(pos0[0] - pos1[0])
    let delta1 = Math.abs(pos0[1] - pos1[1])
    return delta0 + delta1
}

const reconstructPath = (goal) => {
    let totalPath = []
    let current = goal
    while (current.parent) {
        totalPath.push(current.parent)
        current = current.parent
    }
    return totalPath.reverse()
}

const neighbours = [
    [1, -0],
    [-0, 1],
    [-1, 0],
    [0, -1],
]

export default search