

function setup()
{
    let button = document.querySelector("#buttonSize");
    button.addEventListener("click", e => {
        let result = prompt("Enter the new size (max 100)", 16);
        let number = parseInt(result);

        if (isNaN(number) || number <= 0 || number > 100)
        {
            alert("Invalid size");
            return;
        }

        setupGrid(number, number);
    })

    let buttonClear = document.querySelector("#buttonClear");
    buttonClear.addEventListener("click", e => {
        let cells = document.querySelectorAll(".cell");
        for (let cell of cells)
        {
            setOpacity(cell, 0);
            removeColor(cell);
        }
    });
    // Set up the initial grid.
    setupGrid(16, 16);
}

function setupGrid(width, height)
{
    let grid = document.querySelector("#grid");
    grid.replaceChildren();

    let childFlexBasis = Math.floor((100 / width) * 100) / 100;

    for (let row = 0; row < height; row++)
    {
        for (let col = 0; col < width; col++)
        {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.flexBasis = childFlexBasis + "%";

            grid.appendChild(cell);
        }
    }

    grid.addEventListener("mouseover", onMouseOver);
}

function onMouseOver(evt)
{
    let cell = evt.target;

    if (hasColor(cell))
    {
        let opacity = getOpacity(cell);

        if (opacity < 1)
        {
            setOpacity(cell, opacity + 0.1);
        }
    }
    else
    {
        let r = Math.round(Math.random() * 255);
        let g = Math.round(Math.random() * 255);
        let b = Math.round(Math.random() * 255);

        setOpacity (cell, 0.1);
        setColorRGB(cell, r, g, b);
    }
}

function getOpacity(cell) {
    let opacity = cell.style.opacity;
    let value   = 0;

    if (opacity.length != 0)
    {
        value = parseFloat(cell.style.opacity);
    }
    
    return value;
}

function setOpacity(cell, opacity) {
    cell.style.opacity = Math.min(Math.max(opacity, 0), 1);
}

function hasColor(cell) {
    return cell.style.backgroundColor.length != 0;
}

function setColorRGB(cell, r, g, b) {
    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function removeColor(cell) {
    cell.style.backgroundColor = '';
}

setup();