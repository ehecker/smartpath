# Smartpath
<a href="https://ehecker.github.io/smartpath/">Live Site</a>

<img src="https://i.imgur.com/nfdUohJ.png">

Smartpath is a <strong>Pathfinding Algorithm Visualizer</strong>.

## Technical Challenges
### Adding delay between steps in animation
One of the most difficult aspects of creating Smartpath was in determining how to cause a delay between each step of the animation, so that the visited nodes would populate one at a time rather than all at once.

The resulting function, PolyTreeNode.visualize, features three of the most challenging concepts in Javascript: Recursion, Asynchronicity, and Context. 

```
// In PolyTreeNode constructor:
  this.visualize = this.visualize.bind(this);

// Main PolyTreeNode Function
visualize(visitedTiles, grid, speed) {
        let visStep = this.visualize;

        if (visitedTiles.length > 0) {
            setTimeout(function() {
                let currentPos = visitedTiles.shift()
                let currentTile = grid[currentPos[0]][currentPos[1]].tile

                currentTile.classList.add("visited");
                
                visStep(visitedTiles, grid, speed);
            }, speed)

        } else if (visitedTiles.length === 0) {
            if (this.board.algorithmIsRunning === false) return;

            this.board.targetNode.tileEl.classList.add("target-found");
            this.visualizeShortestPath(this.shortestPath, this.grid);
        }
    }
```
