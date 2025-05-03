function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('Change-btn'); 
    const output = document.getElementById('output');

    btn.addEventListener('click', function () {
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
}

function generateHexColor() {
    const red = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const green = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    const blue = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
}

main();
