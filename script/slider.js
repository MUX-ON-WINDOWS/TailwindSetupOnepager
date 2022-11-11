//slider reviews
function navigation(slider) {
    let wrapper, arrowLeft, arrowRight

    function markup() {
        wrapperMarkup()
        arrowMarkup()
    }

    function createDiv(className) {
        var div = document.createElement("div")
        var classNames = className.split(" ")
        classNames.forEach((name) => div.classList.add(name))
        return div
    }

    function arrowMarkup() {
        arrowLeft = createDiv("arrow arrow--left")
        arrowLeft.addEventListener("click", () => slider.prev())
        arrowRight = createDiv("arrow arrow--right")
        arrowRight.addEventListener("click", () => slider.next())

        wrapper.appendChild(arrowLeft)
        wrapper.appendChild(arrowRight)
    }

    function wrapperMarkup() {
        wrapper = createDiv("navigation-wrapper")
        slider.container.parentNode.appendChild(wrapper)
        wrapper.appendChild(slider.container)
    }
    //verdwijning van niet te zien reviews
    function grayout() {
        position = slider.track.details.rel;
        previous = position;
        if (previous === 0) {
            previous = 3;
        }
        position++;
        object = document.querySelector('.number-slide' + position);
        objects = document.querySelectorAll('.keen-slider__slide:not(.number-slide' + position + ')');
        object.classList.remove('grayout');
        objects.forEach(element => element.classList.add('grayout'))
    }

    //reviews kunnen wisselen met links en rechts pijltjes
    document.addEventListener('keydown', function(e) {
        if (e.code === "ArrowLeft") {
            slider.prev();
        } else if (e.code === "ArrowRight") {
            slider.next();
        }
    });

    slider.on("created", () => {
        markup()
        grayout()
    })
    slider.on("optionsChanged", () => {
        console.log(2)
        markup(true)
        markup()
    })
    slider.on("slideChanged", () => {
        grayout()
    })
    slider.on("destroyed", () => {
        markup(true)
    })
}

var slider = new KeenSlider("#my-keen-slider", {
    loop: true,
    mode: "snap",
    drag: false,
    defaultAnimation: {
        duration: 500,
    },
    slides: {
        origin: "center",
        perView: 2,
        spacing: 100,
    }
}, [
    navigation,
    (slider) => {
        let timeout
        let mouseOver = false

        function clearNextTimeout() {
            clearTimeout(timeout)
        }

        function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
                slider.next()
            }, 8000)
        }
        slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
            })
            nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
    }
])

//slider animatie

div = document.querySelectorAll('.navigation-wrapper')

const slideintersection = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    flyin();
                }, 200);
                observer.disconnect();
            }
        });
    });
    io.observe(target)
}
div.forEach(slideintersection)

function flyin() {
    anime({
        targets: '#my-keen-slider',
        easing: 'easeOutQuad',
        translateY: 0,
        opacity: 1,
        duration: 700,
    })
}