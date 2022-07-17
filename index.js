function randomColorGenerator()
{
    let r = Math.random();
    r = r*Math.pow(16,6);
    r = Math.floor(r);

    let hexstr = r.toString(16);
    document.querySelector(".mainbody").style.backgroundColor = "#"+hexstr;
    document.querySelector(".colorhex").textContent = hexstr;

}
document.querySelector(".button").addEventListener("click",randomColorGenerator);
