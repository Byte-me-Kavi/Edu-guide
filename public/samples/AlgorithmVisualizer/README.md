# Algorithm Visualizer

This is a WinForms desktop application built with C# (.NET 8.0) that visualizes sorting and pathfinding algorithms.

## Features

### Sorting Visualizer
- **Algorithms**: Quick Sort, Insertion Sort
- **Visualization**: Bar chart representation drawn using GDI+.
- **Animation**: Step-by-step execution using an internal IEnumerator state machine driven by a UI Timer.
- **Interactivity**: Configurable array size and animation speed. Live comparison counter.

### Pathfinding Visualizer
- **Algorithm**: A* (A-Star) Search
- **Visualization**: Interactive 2D grid drawn using GDI+.
- **Animation**: Step-by-step expansion driven by a UI Timer.
- **Interactivity**: Click and drag to draw walls, place Start and End nodes. Configurable grid size and animation speed.

## How to Run in Visual Studio

1. Ensure you have Visual Studio 2022 (or later) installed with the **.NET desktop development** workload.
2. Open the `AlgorithmVisualizer.slnx` or `AlgorithmVisualizer.csproj` file.
3. In the Solution Explorer, ensure `AlgorithmVisualizer` is set as the Startup Project.
4. Press `F5` (Start Debugging) or `Ctrl + F5` (Start Without Debugging).

## Architecture Notes
- The algorithms are strictly implemented using Object-Oriented principles, inheriting from `ISortingAlgorithm` and `IPathfindingAlgorithm`.
- The animation sequence avoids blocking the UI thread (`Thread.Sleep`) by yielding states (`IEnumerator` / `yield return`) so the Timer can simply ask for the next frame. 
