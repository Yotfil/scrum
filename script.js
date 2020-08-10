document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#contTitle');
    const main = document.querySelector('#main');
    const linkMenu = document.querySelectorAll('.linkMenu');
    setTimeout(() => title.classList.add('show'), 500);
    setTimeout(() => main.classList.add('showMain'), 1000);


    const changeSlide = e => {
        const idBtn = e.target.id;
        const slide = document.querySelector(`#btn_${idBtn}`);
        const classSlide = document.querySelectorAll('.slide');
        console.log(classSlide);
        // for (let i = 0; i < classSlide.length; i += 1) {
        //     if (classSlide[i].className.includes('showSlide')) {
        //         console.log('Si lo incluye');
        //         classSlide[i].className = classSlide[i].className.replace(
        //             'showSlide',
        //             ''
        //         );
        //         break;
        //     }
        // }
        document.querySelector('.showSlide').classList.remove('showSlide');
        slide.classList.add('showSlide');
        // console.log(linkMenu.length - 1);
    };
    for (let i = 0; i < linkMenu.length; i += 1) {
        linkMenu[i].addEventListener('click', changeSlide);
    }
});
