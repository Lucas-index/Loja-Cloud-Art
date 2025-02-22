// view.js

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Produto 1', price: 'R$ 100,00', description: 'Descrição do Produto 1' },
        { id: 2, name: 'Produto 2', price: 'R$ 200,00', description: 'Descrição do Produto 2' },
        { id: 3, name: 'Produto 3', price: 'R$ 300,00', description: 'Descrição do Produto 3' },
    ];

    const productContainer = document.getElementById('product-container');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';

        const productName = document.createElement('h2');
        productName.textContent = product.name;
        productElement.appendChild(productName);

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;
        productElement.appendChild(productPrice);

        const productDescription = document.createElement('p');
        productDescription.textContent = product.description;
        productElement.appendChild(productDescription);

        const productLink = document.createElement('a');
        productLink.href = `product.html?id=${product.id}`;
        productLink.textContent = 'Ver mais detalhes';
        productElement.appendChild(productLink);

        productContainer.appendChild(productElement);
    });
});
