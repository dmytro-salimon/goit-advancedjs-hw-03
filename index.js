import{S as u,i as m}from"./assets/vendor-B07T6_gy.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const p="48288540-d41f150545e6f7b8d91ef3882",g="https://pixabay.com/api/",h=(r,s=1)=>{const o=`${g}?key=${p}&q=${encodeURIComponent(r)}&image_type=photo&orientation=horizontal&safesearch=true&per_page=20&page=${s}`;return fetch(o).then(i=>{if(!i.ok)throw new Error(`Error: ${i.status}`);return i.json()})},y=r=>r.reduce((s,o)=>s+`
      <li class="gallery-card">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img class="gallery-image" src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="gallery-info">
          <div class="info-block">
            <p class="info-block-title">Likes:</p>
            <p class="info-block-value">${o.likes}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Views:</p>
            <p class="info-block-value">${o.views}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Comments:</p>
            <p class="info-block-value">${o.comments}</p>
          </div>
          <div class="info-block">
            <p class="info-block-title">Downloads:</p>
            <p class="info-block-value">${o.downloads}</p>
          </div>
        </div>
      </li>
      `,""),b=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),f=document.querySelector(".js-loader");console.log(f);let l="",c=1;const v=new u(".gallery a"),a=(r,s="info")=>{m[s]({title:s==="error"?"Error":"Info",message:r,position:"topRight",timeout:3e3})},L=r=>{if(r.preventDefault(),l=r.currentTarget.elements.query.value.trim(),l===""){a("The search field cannot be empty.","error");return}d.innerHTML="",c=1,k(),f.classList.remove("is-hidden")},k=()=>{h(l,c).finally(()=>{f.classList.add("is-hidden")}).then(r=>{if(r.hits.length===0&&c===1){a("No images found. Please try another search.","info");return}d.insertAdjacentHTML("beforeend",y(r.hits)),v.refresh()}).catch(r=>{console.error("Error fetching images:",r),a("An error occurred while fetching images.","error")})};b.addEventListener("submit",L);
//# sourceMappingURL=index.js.map
