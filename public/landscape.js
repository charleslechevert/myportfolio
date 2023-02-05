//Shooting star
window.onload = function(){
    function star(){
    const stars = document.querySelector('.shooting_star-container');
    const star = document.createElement('span');
  
    star.style.animationDelay = '3s';
    stars.appendChild(star);
    }
    star();
  }
  //Stars.
  for(let i =0; i<23;i++) {

    let container = document.querySelector('.main__window-container')
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight

    let div = document.createElement("div");
    
    div.classList.add("star");
    
    div.style.top = `${Math.random() * containerHeight}px`
    div.style.left = `${Math.random() * containerWidth}px`
    div.style.animation = `twinkle ${Math.random()*10 + 4}s infinite`;
    container.appendChild(div)
  }