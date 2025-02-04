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
    grid.addEventListener("mouseout",  onMouseOut);
}

function setup()
{
    let button = document.querySelector("#buttonSize");
    button.addEventListener('click', e => {
        let result = prompt('Enter the new size (max 100)', 16);
        let number = parseInt(result);

        if (isNaN(number) || number <= 0 || number > 100)
        {
            alert("Invalid size");
            return;
        }

        setupGrid(number, number);
    })
}

function onMouseOver(evt)
{
    let cell = evt.target;
    setColor(cell, "#f00");
}

function onMouseOut(evt)
{
    let cell = evt.target;
    setColor(cell, "#a77");
}

function setColor(cell, color)
{
    cell.style.backgroundColor = color;
}

setupGrid(16, 16);
setup();