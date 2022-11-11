// Begin camera

var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({
        video: true
    }).then(function(stream) {
        video.srcObject = stream;
    }).catch(function(err0r) {
        document.getElementById('container').innerHTML = `
        <div class="mt-10 m-auto">
            <img class="h-56 mx-auto" style="height: 720px;" src="cameraOffline/Vertel_jouw_verhaal_afbeelding_wide.png">
        </div>`;
    });
}

// Einde Camera
// Begin Slide afbeeldingen

function setimage(row) {
    example = document.querySelector('#example' + row);
    image = document.querySelector('#img' + row);
    image.style.width = '0px';
    example.style.width = '400px';
}

function removeimage(row) {
    example = document.querySelector('#example' + row);
    image = document.querySelector('#img' + row);
    image.style.width = '240px';
    example.style.width = '0px';
}

// Einde slide afbeeldingen
// Begin MET WIE number count

const targets = document.querySelectorAll('.maincontainer');
const text1 = document.querySelector('.text1');
const text2 = document.querySelector('.text2');
const text3 = document.querySelector('.text3');

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {

                setTimeout(function() {
                    var test = anime.timeline({
                        duration: 1000,
                        round: 1 // Will round the animated value to 1 decimal
                    }).add({
                        targets: text1,
                        innerHTML: [0, 7],
                        easing: 'linear',
                        delay: 200,
                        duration: 1000
                    }).add({
                        targets: text1,
                        innerHTML: [7, 47],
                        easing: 'linear',
                        duration: 3000,
                        delay: 4200,
                        round: 1 // Will round the animated value to 1 decimal
                    })
                    anime({
                        targets: text1,
                        translateX: -20,
                        duration: 500,
                        delay: 5500,
                        easing: 'linear'
                    })
                    anime({
                        targets: text2,
                        innerHTML: [100, 480],
                        duration: 2000,
                        easing: 'linear',
                        round: 1 // Will round the animated value to 1 decimal
                    });
                    anime({
                        targets: text3,
                        innerHTML: [0, 21],
                        duration: 1500,
                        easing: 'linear',
                        round: 1 // Will round the animated value to 1 decimal
                    })
                }, 700)

                observer.disconnect();
            }
        });
    });

    io.observe(target)
};

targets.forEach(lazyLoad);

// Einde MET WIE number count
// Begin pijlen omhoog en omlaag

const up = document.querySelector('.up');
const down = document.querySelector('.down');

const topdoc = document.querySelectorAll('#top');
const bottomdoc = document.querySelectorAll('#bottom');
var checktopbool = false;
var checkbottombool = false;
const checktop = target => {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                checktopbool = true;
                up.style.display = 'none';
            } else {
                checktopbool = false;
                up.style.display = 'block';
            }
        });
    });

    io.observe(target)
};

topdoc.forEach(checktop);

const checkbottom = target => {
    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                checkbottombool = true;
                down.style.display = 'none';
            } else {
                checkbottombool = false;
                down.style.display = 'block';
            }
        });
    });

    io.observe(target)
};

bottomdoc.forEach(checkbottom);

function scrolldown() {
    const body = document.querySelector('body');
    if (checkbottombool === false) {
        body.style.marginTop = parseInt(body.style.marginTop) - 100 + 'vh';
        down.style.display = 'block';
    }
}

function scrollup() {
    const body = document.querySelector('body');
    if (checktopbool === false) {
        body.style.marginTop = parseInt(body.style.marginTop) + 100 + 'vh';
        up.style.display = 'block';
    }
}

// activate scollup and scolldown function on arrow key up and down
document.addEventListener('keydown', function(e) {
    if (e.code === "ArrowUp") {
        scrollup();
    } else if (e.code === "ArrowDown") {
        scrolldown();
    }
});

// Einde pijlen omhoog en omlaag
