const toggleStr = () => {
    const arrow = document.querySelector('main>a');
    arrow.addEventListener('click', (e) => {
        e.preventDefault();
        const idBlock = arrow.getAttribute('href');
        document.querySelector(idBlock).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
    });
};
export default toggleStr;