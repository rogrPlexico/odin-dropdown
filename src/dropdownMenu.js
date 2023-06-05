export function addDropdown() {
    const headerCategories = document.querySelectorAll('.header-category');

    headerCategories.forEach((item) => {
        item.addEventListener('mouseover', () => {
            let ul = item.querySelector('ul');
            ul.classList.toggle('header-category-ul-hovered');
        });
    });
         
    headerCategories.forEach((item) => {
        item.addEventListener('mouseout', () => {
            let ul = item.querySelector('ul');
            ul.classList.toggle('header-category-ul-hovered');
            console.log('out');
        });
    });
}
