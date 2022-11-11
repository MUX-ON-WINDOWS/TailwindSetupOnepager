// Documentatie is te vinden op: https://animejs.com/documentation/

//start Wat doen wij?
function resize() {
    // Start orang
    anime({
        targets: '.n1',
        scale: 7,
        duration: 1000,
    })
    anime({
        targets: '.n2',
        scale: 2.3,
        translateX: -130,
        translateY: -80,
        duration: 3500,
        delay: 500
    })
    anime({
        targets: '.n3',
        scale: 4.5,
        translateX: -40,
        translateY: -30,
        duration: 2300,
        delay: 500
    })
    anime({
        targets: '.n4',
        scale: 2.7,
        translateX: -70,
        translateY: -5,
        duration: 2000,
        delay: 500
    })
    anime({
        targets: '.n5',
        scale: 3.2,
        translateX: 50,
        translateY: 30,
        duration: 2400,
        delay: 500
    })
    anime({
            targets: '.n6',
            scale: 3.6,
            translateX: 80,
            translateY: 5,
            duration: 3000,
            delay: 500
        })
        // Einde orange
        // Start Blauw
    anime({
        targets: '.n7',
        scale: 6,
        duration: 1000,
    })
    anime({
        targets: '.n8',
        scale: 2,
        translateX: -150,
        translateY: 60,
        duration: 4000,
        delay: 500
    })
    anime({
        targets: '.n9',
        scale: 4.0,
        translateX: -50,
        translateY: 20,
        duration: 2500,
        delay: 500
    })
    anime({
        targets: '.n10',
        scale: 1.2,
        translateX: -200,
        translateY: -40,
        duration: 1900,
        delay: 500
    })
    anime({
        targets: '.n11',
        scale: 2,
        translateX: -70,
        translateY: -40,
        duration: 1700,
        delay: 500
    })
    anime({
        targets: '.n12',
        scale: 2.3,
        translateX: 40,
        translateY: -70,
        duration: 1800,
        delay: 500
    })
    anime({
            targets: '.n13',
            scale: 3.5,
            translateX: 45,
            translateY: -15,
            duration: 2000,
            delay: 500
        })
        // Einde blauw
        // Start groen
    anime({
        targets: '.n14',
        scale: 6,
        duration: 1000,
    })
    anime({
        targets: '.n15',
        scale: 2.5,
        translateX: -90,
        translateY: 20,
        duration: 2200,
        delay: 500
    })
    anime({
        targets: '.n16',
        scale: 2.5,
        translateX: -65,
        translateY: 45,
        duration: 2000,
        delay: 500
    })
    anime({
        targets: '.n17',
        scale: 3,
        translateX: 30,
        translateY: -60,
        duration: 1900,
        delay: 500
    })
    anime({
        targets: '.n18',
        scale: 3.5,
        translateX: 55,
        translateY: -30,
        duration: 2300,
        delay: 500
    })
    anime({
        targets: '.n19',
        scale: 2.7,
        translateX: 60,
        translateY: 35,
        duration: 2500,
        delay: 500
    })
    anime({
        targets: '.n20',
        scale: 1.2,
        translateX: 190,
        translateY: 10,
        duration: 2700,
        delay: 500
    })
    anime({
            targets: '.n21',
            scale: 2.5,
            translateX: 130,
            translateY: -45,
            duration: 3200,
            delay: 500
        })
        // Einde groen
    anime({
        targets: '.wat-text',
        opacity: 1,
        delay: 500,
        duration: 2000,
        easing: 'linear'
    })
}

div = document.querySelectorAll('.wat-doen-wij')

const lazierLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    resize();
                }, 1000);
                observer.disconnect();
            }
        });
    });
    io.observe(target)
}
div.forEach(lazierLoad)
    // einde Wat doen wij?

// start Voor wie?
// Slide in image animation
collaps = document.querySelectorAll('.Voor-wie')
const sidecollapslogos = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    logocollaps();
                }, 100);
                observer.disconnect();
            }
        });
    });
    io.observe(target)
}
collaps.forEach(sidecollapslogos)

function logocollaps() {
    anime({
        targets: '.logos',
        scale: 1,
        duration: 300,
        easing: 'easeOutQuad',
        delay: anime.stagger(200, { start: 300 })
    })
}
// einde Voor wie?

// start Met wie?
// Slide in image animation
move = document.querySelectorAll('.Met-wie')

const sidecollaps = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    movein();
                }, 100);
                observer.disconnect();
            }
        });
    });
    io.observe(target)
}
move.forEach(sidecollaps)

function movein() {
    anime({
        targets: '.left',
        translateX: 0,
        opacity: 1,
        duration: 1000,
        delay: 200,
        easing: 'easeOutQuad'
    })
    anime({
        targets: '.right',
        translateX: 0,
        opacity: 1,
        duration: 1000,
        delay: 500,
        easing: 'easeOutQuad'
    })
}
// einde Met wie?