const cartonblanc = document.querySelector('#cartonblanc')
const mathack = document.querySelector('#mathack')
const codeclicker = document.querySelector('#codeclicker')
const Gr = document.querySelector('#GR')
const maths = document.querySelector('#maths')

const cartonblanc_btn = document.querySelector('#cartonblanc_btn')
const mathack_btn = document.querySelector('#mathack_btn')
const codeclicker_btn = document.querySelector('#codeclicker_btn')
const Gr_btn = document.querySelector('#GR_btn')
const maths_btn = document.querySelector('#maths_btn')


cartonblanc_btn.addEventListener('click', () => {
    cartonblanc.style.display = 'block'
    mathack.style.display ='none'
    codeclicker.style.display ='none'
    vdb.style.display ='none'
    Gr.style.display ='none'
    maths.style.display ='none'

    cartonblanc_btn.style.color = 'white'
    mathack_btn.style.color = 'rgb(92,92,92)'
    codeclicker_btn.style.color = 'rgb(92,92,92)'
    vdb_btn.style.color = 'rgb(92,92,92)'
    Gr_btn.style.color = 'rgb(92,92,92)'
    maths_btn.style.color = 'rgb(92,92,92)'

})

mathack_btn.addEventListener('click', () => {
    cartonblanc.style.display = 'none'
    codeclicker.style.display ='none'
    mathack.style.display ='block'
    vdb.style.display ='none'
    Gr.style.display ='none'
    maths.style.display ='none'

    cartonblanc_btn.style.color = 'rgb(92,92,92)'
    mathack_btn.style.color = 'white'
    codeclicker_btn.style.color = 'rgb(92,92,92)'
    vdb_btn.style.color = 'rgb(92,92,92)'
    Gr_btn.style.color = 'rgb(92,92,92)'
    maths_btn.style.color = 'rgb(92,92,92)'
})

codeclicker_btn.addEventListener('click', () => {
    cartonblanc.style.display = 'none'
    codeclicker.style.display ='block'
    mathack.style.display ='none'
    vdb.style.display ='none'
    Gr.style.display ='none'
    maths.style.display ='none'

    cartonblanc_btn.style.color = 'rgb(92,92,92)'
    mathack_btn.style.color = 'rgb(92,92,92)'
    codeclicker_btn.style.color = 'white'
    vdb_btn.style.color = 'rgb(92,92,92)'
    Gr_btn.style.color = 'rgb(92,92,92)'
    maths_btn.style.color = 'rgb(92,92,92)'
})

vdb_btn.addEventListener('click', () => {
    cartonblanc.style.display = 'none'
    codeclicker.style.display ='none'
    mathack.style.display ='none'
    vdb.style.display ='block'
    Gr.style.display ='none'
    maths.style.display ='none'

    cartonblanc_btn.style.color = 'rgb(92,92,92)'
    mathack_btn.style.color = 'rgb(92,92,92)'
    codeclicker_btn.style.color = 'rgb(92,92,92)'
    vdb_btn.style.color = 'white'
    Gr_btn.style.color = 'rgb(92,92,92)'
    maths_btn.style.color = 'rgb(92,92,92)'
})

Gr_btn.addEventListener('click', () => {
    cartonblanc.style.display = 'none'
    codeclicker.style.display ='none'
    mathack.style.display ='none'
    vdb.style.display ='none'
    Gr.style.display ='block'
    maths.style.display ='none'

    cartonblanc_btn.style.color = 'rgb(92,92,92)'
    mathack_btn.style.color = 'rgb(92,92,92)'
    codeclicker_btn.style.color = 'rgb(92,92,92)'
    vdb_btn.style.color = 'rgb(92,92,92)'
    Gr_btn.style.color = 'white'
    maths_btn.style.color = 'rgb(92,92,92)'
})

maths_btn.addEventListener('click', () => {
    cartonblanc.style.display = 'none'
    codeclicker.style.display ='none'
    mathack.style.display ='none'
    vdb.style.display ='none'
    Gr.style.display ='none'
    maths.style.display ='block'

    cartonblanc_btn.style.color = 'rgb(92,92,92)'
    mathack_btn.style.color = 'rgb(92,92,92)'
    codeclicker_btn.style.color = 'rgb(92,92,92)'
    vdb_btn.style.color = 'rgb(92,92,92)'
    Gr_btn.style.color = 'rgb(92,92,92)'
    maths_btn.style.color = 'white'
})