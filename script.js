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

    grid.addEventListener("mouseover", onMouseOver);
    grid.addEventListener("mouseout",  onMouseOut);
}

function onMouseOver(evt)
{
    let cell = evt.target;
    setColor(cell, "#f00");
}

function onMouseOut(evt)
{
    let cell = evt.target;
    setColor(cell, "");
}

function setColor(cell, color)
{
    cell.style.backgroundColor = color;
}

setupGrid(16, 16);