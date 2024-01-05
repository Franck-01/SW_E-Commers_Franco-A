const SCENE = document.querySelector('.button_rev')
const BUTTON_TEXT = document.querySelector('.text')

const CONFIG = {
    text: "Deploy",
    hue: 359,
    alpha: 1,
    window: 5,
    speed: 1,
    blur: 50,
    spread: 180,
    thickness: 3,
    radius: 100,
    constant: true,
}

const UPDATE = () => {
    console.info('cool')
    for (const KEY of Object.keys(CONFIG)) {
        if (KEY === 'exploded' || KEY === 'constant') break
        document.documentElement.style.setProperty(`--${KEY}`, CONFIG[KEY])
    }
    document.body.dataset.showGlows = CONFIG.constant
}


UPDATE()