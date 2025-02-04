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
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);

    setColorRGB(evt.target, r, g, b);
}

function setColorRGB(cell, r, g, b) {
    cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

setupGrid(16, 16);
setup();