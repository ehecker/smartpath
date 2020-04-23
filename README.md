# Smartpath
<a href="https://ehecker.github.io/smartpath/">Live Site</a>

<img src="https://i.imgur.com/nfdUohJ.png">

Smartpath is a <strong>Pathfinding Algorithm Visualizer</strong>. A pathfinding algorithm is a program which finds the shortest path between two points, known as the Root and the Target. Smartpath currently generates animations for two of these algorithms: Breadth-First Search and Depth-First Search. In the future, it will also feature Dijkstra's Algorithm and the A-Star Algorithm.

Smartpath also currently allows users to generate Scatter mazes with the "Generate Maze" button. In the future, Smartpath will also give users the option to generate the more familiar "recursive" maze.

## Technical Challenges
### Adding delay between steps in animation
One of the most challenging aspects of creating Smartpath was in determining how to cause a delay between each step of the animation, so that visited nodes would change colors one at a time rather than all at once.

The resulting function, PolyTreeNode.visualize, overcomes three of the most challenging concepts in Javascript: Recursion, Asynchronicity, and Context. 

<img src="https://i.imgur.com/3wFlkMT.png">

### Building Tree structure from PolyTreeNode class

