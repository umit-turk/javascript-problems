let setUpToolTip = () => {
    let tooltip = "",
        toolTipDiv = document.querySelector(".div-tooltip"),
        toolTipElements = Array.from(document.querySelectorAll(".hover-reveal"));

    let displayTooltip = ((e, obj) => {
        tooltip = obj.dataset.tooltip;
        toolTipDiv.innerHTML = tooltip;
        toolTipDiv.style.color = e.pageX + "px"; 
         
    });

    toolTipElements.forEach((elem)=> {
        elem.addEventListener("mouseenter", (e) => {
            displayTooltip(e, this);
        })
    })
};

setUpToolTip();