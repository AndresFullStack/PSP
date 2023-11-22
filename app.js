document.addEventListener('DOMContentLoaded', function () {
  const navbarLinks = document.querySelectorAll('.navbar a');

  navbarLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scroll({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }

  const menuItems = [
    { name: 'Hamburguesa sencilla', ingredients: 'Carne, queso, lechuga, tomate, cebolla', image: './assets/hamburguesa-sencilla.jpg' },
    { name: 'Pizza', ingredients: 'Masa, salsa de tomate, mozzarella y peperoni', image: './assets/pizza.jpg' },
    {name: 'Perro caliente', ingredients: 'Salchicha, pan de perro, cebolla, salsa de tomate, mostaza', image: './assets/perrocaliente.jpg'}
  ];

  const menuItemsContainer = document.getElementById('menu-items');
  menuItems.forEach(item => {
    const menuItemElement = document.createElement('div');
    menuItemElement.classList.add('menu-item');

    // Agregamos la imagen al elemento del menú
    const imageElement = document.createElement('img');
    imageElement.src = item.image;
    imageElement.alt = item.name;

    menuItemElement.innerHTML = `<h3>${item.name}</h3><p>Ingredientes: ${item.ingredients}</p>`;

    menuItemElement.appendChild(imageElement);
    menuItemsContainer.appendChild(menuItemElement);
  });

  const reservaForm = document.getElementById('reservaForm');
  reservaForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Reserva enviada con éxito. Nos pondremos en contacto contigo.');
    reservaForm.reset();
  });
});
