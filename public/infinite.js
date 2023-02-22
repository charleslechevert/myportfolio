const names = document.querySelectorAll('.header__container-name')
const main = document.querySelector('.header__container-main')
const img = document.querySelectorAll('.header__8')

app = {
    newDiv : document.createElement("div"),
    height : 0,
    limitHeight : document.querySelector('.header__container-name').clientHeight *1.4,
    addLe() {
        app.newDiv.classList.add('header__name')
        app.newDiv.textContent = "Le"
        main.insertBefore(app.newDiv, main.children[1]);
    },
    main() {
    setTimeout(() => {
    main.insertBefore(app.newDiv, main.children[1]);
    app.newDiv.style.height = '0px'
    app.moveAway();
    for(let i =0;i<2;i++) {
        img[i].style.WebkitTransitionDuration='1.7s';
        img[i].style.webkitTransform = 'rotate(-0deg)';
    }
    img[0].src ="8left2.png"
    img[1].src ="8right2.png"
    
    }, 1400)
    },
    moveAway() {
        app.height = app.height+2;
        app.newDiv.style.height =`${app.height}px` 
        if (app.height > app.limitHeight ) {
            app.addLe()
            return;
        } else {
        setTimeout(app.moveAway, 20);
        }
    }

}

app.main()










