import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from './gallery';
import SimpleLightbox from 'simplelightbox';

const gallery = document.querySelector('.gallery');
const gallaryItems = images
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" />
      </a>
    </li>`
  )
  .join('');

gallery.insertAdjacentHTML('beforeend', gallaryItems);

new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
