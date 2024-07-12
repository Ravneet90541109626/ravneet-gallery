document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');

    const images = [
        { src: 'images/image1.jpg', hdSrc: 'images/hd/image1.jpg', title: 'Image 1', description: 'Van Gogh Oil Painting' },
        { src: 'images/image2.jpg', hdSrc: 'images/hd/image2.jpg', title: 'Image 2', description: 'Creative graffiti wall with portrait of Frida Kahlo' },
        { src: 'images/image3.jpg', hdSrc: 'images/hd/image3.jpg', title: 'Image 3', description: 'Colorful Sunflowers' },
        { src: 'images/image4.jpg', hdSrc: 'images/hd/image4.jpg', title: 'Image 4', description: 'Colorful Abstract Art' },
        { src: 'images/image5.jpg', hdSrc: 'images/hd/image5.jpg', title: 'Image 5', description: 'Blue and Pink Paint Abstract Artwork' },
        { src: 'images/image6.jpg', hdSrc: 'images/hd/image6.jpg', title: 'Image 6', description: 'Multicolored Abstract Painting With Brown Frame' },
        { src: 'images/image7.jpg', hdSrc: 'images/hd/image7.jpg', title: 'Image 7', description: 'White, Orange, Blue, and Red Color Artwork' },
        { src: 'images/image8.jpg', hdSrc: 'images/hd/image8.jpg', title: 'Image 8', description: 'Painters Brushes in a Jar' },
        { src: 'images/image9.jpg', hdSrc: 'images/hd/image9.jpg', title: 'Image 9', description: 'Glass Artwork in the Chihuly Garden and Glass Museum' },
        { src: 'images/image10.jpg', hdSrc: 'images/hd/image10.jpg', title: 'Image 10', description: 'Glass Artworks in an Ecosystem in the Chihuly Garden and Glass Museum' },
        { src: 'images/image11.jpg', hdSrc: 'images/hd/image11.jpg', title: 'Image 11', description: 'Puzzle on Globe' },
        { src: 'images/image12.jpg', hdSrc: 'images/hd/image12.jpg', title: 'Image 12', description: 'an illustration off an eye' },
        { src: 'images/image13.jpg', hdSrc: 'images/hd/image13.jpg', title: 'Image 13', description: 'An Abstract Artwork' },
        { src: 'images/image14.jpg', hdSrc: 'images/hd/image14.jpg', title: 'Image 14', description: 'Ceramic Vases on a White Surface' },
        { src: 'images/image15.jpg', hdSrc: 'images/hd/image15.jpg', title: 'Image 15', description: 'Human Hands Painting' },
        { src: 'images/image16.jpg', hdSrc: 'images/hd/image16.jpg', title: 'Image 16', description: 'Shallow Focus Photography of Paintbrush' },
        { src: 'images/image17.jpg', hdSrc: 'images/hd/image17.jpg', title: 'Image 17', description: 'Woman Face With Bare Tree Artwork' },
        { src: 'images/image18.jpg', hdSrc: 'images/hd/image18.jpg', title: 'Image 18', description: 'Pied Piper of Hamelin Artwork ' },
        { src: 'images/image19.jpg', hdSrc: 'images/hd/image19.jpg', title: 'Image 19', description: 'Pink Flower Artwork' },
        { src: 'images/image20.jpg', hdSrc: 'images/hd/image20.jpg', title: 'Image 20', description: 'Person Painting an Artwork' },
    ];

    images.forEach((image, index) => {
        const container = document.createElement('div');
        container.classList.add('image-container');
        container.dataset.index = index;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.title;

        container.appendChild(img);
        gallery.appendChild(container);
    });

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');

    gallery.addEventListener('click', (event) => {
        const target = event.target.closest('.image-container');
        if (target) {
            const index = target.dataset.index;
            const image = images[index];
            modal.style.display = 'block';
            modalImg.src = image.hdSrc;
            captionText.innerHTML = <h2>${image.title}</h2><p>${image.description}</p>;
        }
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
