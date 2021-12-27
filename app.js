const btnDiv = document.getElementsByClassName('btn-container')[0];
const menuItems = document.getElementsByClassName('section-center')[0];
const categories = ['All', 'Korea', 'Japan', 'China'];

const menuItem = (item) => {
    return `
    <div class="menu-items col-md-5 col-sm-6">
        <img
        src=${item.img}
        alt=${item.title}
        class="photo"
        />
        <div class="menu-info">
        <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
        </div>
        <div class="menu-text">
            ${item.desc}
        </div>
        </div>
    </div>
    `;
}


const getItemByCategory = (category) => { 
    if (category === 0 || category === 'all') {
        return menuItems.innerHTML = menu.map(item => menuItem(item))
    } else {
        const filterData = menu.filter((item) => item.category.toLowerCase() === category.toLowerCase())
        return menuItems.innerHTML = filterData.map(item => menuItem(item))
    }
}

getItemByCategory(0)

const createButton = () => {
    for (var i = 0; i < categories.length; i++) {
        const btn = document.createElement('button');
        btn.textContent = categories[i];
        btn.setAttribute('class', 'btn-item');
        btn.setAttribute('id', `${categories[i].toLowerCase()}`);
        btnDiv.appendChild(btn);
    }
}

createButton();

const clickButton = () => {
    const categoryBtn = document.querySelectorAll('.btn-item');
    categoryBtn.forEach((item) => {
        item.addEventListener('click', () => getItemByCategory(item.id))
    })
        

}

clickButton();

