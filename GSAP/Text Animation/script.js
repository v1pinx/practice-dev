function breakTheText() {
    var h1 = document.querySelector("h1");
    var h1Text = h1.textContent;
    var splittedText = h1Text.split("");
    var halfSize = splittedText.length / 2;
    var clutter = "";

    splittedText.forEach(function (ele,idx) {
        if(idx < halfSize){
            clutter += `<span class='a'>${ele}</span>`;
        }
        else{
            clutter += `<span class='b'>${ele}</span>`;
        }
    })

    h1.innerHTML = clutter;
}

breakTheText();

gsap.from('h1 .a', {
    y:80,
    opacity:0,
    duration:0.4,
    delay:0.5,
    stagger:0.15,
})

gsap.from('h1 .b', {
    y:80,
    opacity:0,
    duration:0.4,
    delay:0.5,
    stagger:-0.20,
})