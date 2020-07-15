# Smartpath
<img src="https://i.imgur.com/nfdUohJ.png">
<a href="https://ehecker.github.io/smartpath/" target="_blank" rel="noreferrer">Live Site</a>

Smartpath is a <strong>Pathfinding Algorithm Visualizer</strong>. A pathfinding algorithm is a computer program which finds the shortest path between two points, known as the Root and the Target. Smartpath currently generates animations for two of these algorithms: Breadth-First Search and Depth-First Search. In the future, it will also feature Dijkstra's Algorithm and the A-Star Algorithm.

Smartpath is an interactive application which allows users to place and destroy walls manually, or to generate Scatter mazes (and soon Recursive mazes) using the "Generate Maze" feature. Users can run different algorithms on the same maze setup to observe the differences in each algorithm's approach.

## Technologies
Smartpath is built in pure Object-Oriented Javascript, CSS3 and HTML5. It does not rely on any existing libraries or frameworks.

## Technical Challenges
### Adding delay between steps in animation
One of the most challenging aspects of building Smartpath was in determining how to implement a delay between each step of the animation so that visited nodes would change colors one at a time rather than all at once.

The resulting function, PolyTreeNode.visualize, overcomes three of the most challenging concepts in Javascript: Recursion, Asynchronicity, and Context. 

<img src="https://i.imgur.com/ZPXKivM.png">

### Building a Tree from 1200 PolyTreeNodes
The underlying data structure upon which both Breadth-First Search and Depth-First Search operate is called a Tree. While the logic for assigning parent/child relationships between two nodes is simple enough, the process becomes more complex when it involves 1200 PolyTreeNodes arranged in a graph structure.

In order to accomplish this, PolyTreeNode.buildTree uses a Queue data structure to ensure that it adds every node to the tree, and a Set (this.visited) to ensure that there are no duplicate relationships.

<img src="https://i.imgur.com/CHs1u8x.png">

## Upcoming Features
<ul>
  <li>Dijkstra's Algorithm, including "mud" tiles with varying weight values.</li>
  <li>A-Star Algorithm.</li>
  <li>Recursive Maze generation.</li>
  <li>Path recalculation on node repositioning.</li>
  <li>Interface for viewing tree structure by hovering over individual tiles.</li>
  <li>Timer displaying runtime for application to solve a particular maze.</li>
</ul>
