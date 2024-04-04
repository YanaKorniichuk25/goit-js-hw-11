import { getDataFromAPI } from './js/pixabay-api';
import { renderGalleryImg } from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import iconError from './img/icon-error.svg';

const apiKey = '43227230-2cc9b082dfeccb819f6787c2c';
const baseUrl = 'https://pixabay.com/api/';

const searchFormEl = document.querySelector('.search-box');
const imageGalleryEl = document.querySelector('.main-gallery');
const loaderWrapperEl = document.querySelector('.loader-wrapper ');

searchFormEl.addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
  e.preventDefault();
  imageGalleryEl.innerHTML = '';
  loaderWrapperEl.classList.remove('is-hidden');

  const inputValue = e.currentTarget.search.value.trim();

  if (!inputValue) {
    displayErrorMessage('Please enter a value in the field!', 'Error');
    e.currentTarget.reset();
    loaderWrapperEl.classList.add('is-hidden');
    return;
  }

  getDataFromAPI(baseUrl, apiKey, inputValue)
    .then(data => {
      const formData = data.hits;
      if (formData.length === 0) {
        displayErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );

        loaderWrapperEl.classList.add('is-hidden');
        return;
      }

      renderGalleryImg(imageGalleryEl, formData);
      loaderWrapperEl.classList.add('is-hidden');
    })
    .catch(error => {
      displayErrorMessage(
        'Error fetching data. Please try again later',
        'Error'
      );
      console.error('Error fetching data:', error);
    });

  e.currentTarget.reset();
}

const iziToastConfig = {
  position: 'topRight',
  titleColor: '#FFF',
  titleSize: '16',
  titleLineHeight: '24',
  messageColor: '#FFF',
  messageSize: '16',
  messageLineHeight: '24',
};

function displayErrorMessage(message, title) {
  iziToast.error({
    ...iziToastConfig,
    title: title || '',
    message: `${message}`,
    backgroundColor: '#EF4040',
    iconUrl: iconError,
  });
}
