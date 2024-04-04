import{S as f,i as g}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();function d(t,r,a){const o=p(t,r,a);return fetch(o).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).catch(e=>(console.log("ERROR:",e),Promise.reject(e)))}function p(t,r,a){const o=new URLSearchParams({key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return`${t}?${o}`}const m=new f(".main-gallery a",{captionsData:"alt",captionDelay:250});function h(t,r){t.innerHTML=y(r),m.refresh()}function y(t){return t.map(({webformatURL:r,largeImageURL:a,tags:o,likes:e,views:i,comments:s,downloads:u})=>` <li class="gallery-item-container">
      <a class="gallery-link" href="${a}">
        <figure class="gallery-figure">
          <img class="gallery-image" src="${r}" alt="${o}" width="360" />
          <figcaption class="gallery-figcaption">
            <ul class="gallery-info">
              <li>
                <span>Likes</span>
                <p>${e}</p>
              </li>
              <li>
                <span>Views</span>
                <p>${i}</p>
              </li>
              <li>
                <span>Comments</span>
                <p>${s}</p>
              </li>
              <li>
                <span>Downloads</span>
                <p>${u}</p>
              </li>
            </ul>
          </figcaption>
        </figure>
      </a>
    </li>`).join(" ")}const L="/goit-js-hw-11/assets/icon-error-4f06a8ee.svg",b="43227230-2cc9b082dfeccb819f6787c2c",E="https://pixabay.com/api/",F=document.querySelector(".search-box"),c=document.querySelector(".main-gallery"),n=document.querySelector(".loader-wrapper ");F.addEventListener("submit",S);function S(t){t.preventDefault(),c.innerHTML="",n.classList.remove("is-hidden");const r=t.currentTarget.search.value.trim();if(!r){l("Please enter a value in the field!","Error"),t.currentTarget.reset(),n.classList.add("is-hidden");return}d(E,b,r).then(a=>{const o=a.hits;if(o.length===0){l("Sorry, there are no images matching your search query. Please try again!"),n.classList.add("is-hidden");return}h(c,o),n.classList.add("is-hidden")}).catch(a=>{l("Error fetching data. Please try again later","Error"),console.error("Error fetching data:",a)}),t.currentTarget.reset()}const P={position:"topRight",titleColor:"#FFF",titleSize:"16",titleLineHeight:"24",messageColor:"#FFF",messageSize:"16",messageLineHeight:"24"};function l(t,r){g.error({...P,title:r||"",message:`${t}`,backgroundColor:"#EF4040",iconUrl:L})}
//# sourceMappingURL=commonHelpers.js.map
