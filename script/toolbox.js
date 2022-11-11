//toolbox begin animatie

div = document.querySelectorAll('.waarmee')

const laziestLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    move();
                }, 200);
                observer.disconnect();
            }
        });
    });
    io.observe(target)
}
div.forEach(laziestLoad)

function move() {
    setTimeout(() => {
        document.querySelector('.toolbox').classList.remove('z-50');
        document.querySelector('.toolbox').style.zindex = "1";
    }, 8000);

    // tool1 is waterpomptang bij maatwerk en de rest gaat met de klok mee
    anime({
        targets: '#tool1',
        translateX: '350px',
        delay: 1000,
        duration: 1500,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool2',
        translateX: '350px',
        duration: 1500,
        delay: 1000,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool2',
        translateX: '350px',
        duration: 1500,
        delay: 1500,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool3',
        translateX: '350px',
        duration: 1500,
        delay: 2000,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool4',
        translateX: '350px',
        duration: 1500,
        delay: 2500,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool5',
        translateX: '350px',
        duration: 1500,
        delay: 3000,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool6',
        translateX: '350px',
        duration: 1500,
        delay: 3500,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool7',
        translateX: '350px',
        duration: 1500,
        delay: 4000,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool8',
        translateX: '350px',
        duration: 1500,
        delay: 4500,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool9',
        translateX: '350px',
        duration: 1500,
        delay: 5000,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool10',
        translateX: '350px',
        duration: 1500,
        delay: 5500,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool11',
        translateX: '350px',
        duration: 1500,
        delay: 6000,
        easing: 'spring(1, 80, 10, 0)'
    })
    anime({
        targets: '#tool12',
        translateX: '350px',
        duration: 1500,
        delay: 6500,
        easing: 'spring(1, 80, 10, 0)'
    })
}

//toolbox hover animatie
function extend(num) {
    anime({
        targets: '#T' + num,
        strokeDashoffset: [2000, 0],
        duration: 2000,
        easing: 'easeInOutSine'
    })
    box = setTimeout(() => {
        document.querySelector('.tooltext' + num).style.width = "500px";
    }, 500);
}

//toolbox stop hover animatie
function collaps(num) {
    anime({
        targets: '#T' + num,
        strokeDashoffset: [anime.setDashoffset, 2000],
        duration: 2000,
        easing: 'easeInOutSine'
    })
    clearTimeout(box);
    setTimeout(() => {
        document.querySelector('.tooltext' + num).style.width = "0px";
    }, 500);
}

function extendall() {
    for (i = 1; i <= 12; i++) {
        extend(i);
    }
    click = document.querySelector(".toolbox");
    console.log(click);
    click.onclick = function() { collapsall() };
}

function collapsall() {
    for (i = 1; i <= 12; i++) {
        collaps(i);
    }
    click = document.querySelector(".toolbox");
    click.onclick = function() { extendall() };
}