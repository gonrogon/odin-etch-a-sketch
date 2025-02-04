function setupGrid(width, height)
{
    let grid = document.querySelector("#grid");

    for (let row = 0; row < height; row++)
    {
        for (let col = 0; col < width; col++)
        {
            let cell = document.createElement("div");
            cell.classList.add("cell");

            grid.appendChild(cell);
        }
    }
}

setupGrid(16, 16);