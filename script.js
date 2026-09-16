const text1 = "Olá! Eu me chamo";
const text2 = "Ana Caroline";
const text3 = "Desenvolvedora\nFull Stack";

let i = 0;
let j = 0;
let k = 0;

const typing = document.getElementById("typing");
const typing2 = document.getElementById("typing2");

typing.classList.add("cursor");

function typeName() {
    if (i < text1.length) {
        typing.innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeName, 80);
    } else {
        setTimeout(typeSecond, 600);
    }
}

function typeSecond() {
    typing.classList.remove("cursor");
    typing2.classList.add("cursor");

    if (j < text2.length) {
        typing2.innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeSecond, 80);
    } else {
        setTimeout(eraseAll, 1500);
    }
}

function eraseAll() {
    let h2 = typing2.innerHTML;

    if (h2.length > 0) {
        typing2.innerHTML = h2.slice(0, -1);
        setTimeout(eraseAll, 50);
    } else {
        typing2.classList.remove("cursor");
        typing.classList.add("cursor");
        eraseH1();
    }
}

function eraseH1() {
    let h1 = typing.innerHTML;

    if (h1.length > 0) {
        typing.innerHTML = h1.slice(0, -1);
        setTimeout(eraseH1, 50);
    } else {
        typing.classList.remove("cursor");
        setTimeout(typeThird, 500);
    }
}

function typeThird() {
    typing.classList.add("cursor");
    typing2.classList.remove("cursor"); 

    if (k < text3.length) {
        let char = text3.charAt(k);

        if (char === "\n") {
        typing.innerHTML += "<br>";
        } else {
        typing.innerHTML += char;
        }

        k++;
        setTimeout(typeThird, 100);
    } else {
        setTimeout(() => {
        document.getElementById("scrollIndicator").classList.add("show-scroll");
        }, 500);
    }
}

typeName();

const elements = document.querySelectorAll('.fade-in');

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < trigger) {
        el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showOnScroll);