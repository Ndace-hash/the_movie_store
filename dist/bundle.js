(()=>{"use strict";const e="80620987d484f841a8e638e09a1b89ed";var n="",t="";let s;(async()=>{s=await async function(){const n=await fetch(`https://api.themoviedb.org/3/configuration?api_key=${e}`),{images:t}=await n.json();return t}().then((e=>(n=e.secure_base_url,t=e.still_sizes[3],n+t))).catch((e=>console.error(e)))})(),document.getElementById("search-bar");const a=document.getElementById("movie-list"),l=document.getElementById("search-btn");document.addEventListener("DOMContentLoaded",(()=>{(async function(){const n=await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${e}&language=en-US&page=1`),{results:t}=await n.json();return t})().then((async e=>{let n="";e.forEach((e=>{n+=`\n      <article class="movie-card" tabindex="0" id="${e.id}" onclick="return getDetail(${e.id})">\n      <div class="img-container mb-1">\n      <img src="${s+e.poster_path}" alt="${e.title}" class="img-fluid w-100">\n      </div>\n      <h4 class="title mb-1 p-0 ps-1">${e.title}</h4>\n      <P class="date p-0 ps-1">${e.release_date}</P>\n      </article>`,a.innerHTML=n}))})).catch((e=>{console.error(e)}))})),l.addEventListener("click",(function(){(async function(){let n=searchBar.value.trim().toLowerCase().replaceAll(" ","%20");if(n){const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${e}&language=en-US&query=${n}&page=1&include_adult=true`),s=await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${e}&language=en-US&query=${n}&page=1&include_adult=true`);return{movie:await t.json(),tv:await s.json()}}})().then((e=>{const n=e.movie,t=e.tv;let l="";n.results.forEach((e=>{l+=`\n                <article class="movie-card" tabindex="0" data-id="${e.id}" onclick="return getDetail(${e.id})">\n                <div class="img-container mb-1">\n                    <img src="${s+e.poster_path}" alt="${e.title}" class="img-fluid w-100">\n                </div>\n                <h4 class="title mb-1 p-0 ps-1">${e.title}</h4>\n                <P class="date p-0 ps-1">${e.release_date}</P>\n            </article>`})),t.results.forEach((e=>{l+=`\n                <article class="movie-card" tabindex="0" onclick="return getTvDetail(${e.id})">\n                <div class="img-container mb-1">\n                    <img src="${s+e.poster_path}" alt="${e.title}" class="img-fluid w-100">\n                </div>\n                <h4 class="title mb-1 p-0 ps-1">${e.name}</h4>\n                <P class="date p-0 ps-1">${e.first_air_date}</P>\n            </article>`})),a.innerHTML=l,console.log(n,t)})).catch((e=>console.log(e)))})),a.innerHTML='\n<div class="skeleton-card">\n      <div class="skeleton skeleton-img mb-1"></div>\n      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>\n      <p class="skeleton skeleton-date p-0 ps-1"></p>\n    </div>\n    <div class="skeleton-card">\n      <div class="skeleton skeleton-img mb-1"></div>\n      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>\n      <p class="skeleton skeleton-date p-0 ps-1"></p>\n    </div>\n    <div class="skeleton-card">\n      <div class="skeleton skeleton-img mb-1"></div>\n      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>\n      <p class="skeleton skeleton-date p-0 ps-1"></p>\n    </div>\n    <div class="skeleton-card">\n      <div class="skeleton skeleton-img mb-1"></div>\n      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>\n      <p class="skeleton skeleton-date p-0 ps-1"></p>\n    </div>\n    <div class="skeleton-card">\n      <div class="skeleton skeleton-img mb-1"></div>\n      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>\n      <p class="skeleton skeleton-date p-0 ps-1"></p>\n    </div>\n    <div class="skeleton-card">\n      <div class="skeleton skeleton-img mb-1"></div>\n      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>\n      <p class="skeleton skeleton-date p-0 ps-1"></p>\n    </div>\n    <div class="skeleton-card">\n      <div class="skeleton skeleton-img mb-1"></div>\n      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>\n      <p class="skeleton skeleton-date p-0 ps-1"></p>\n    </div>\n    <div class="skeleton-card">\n      <div class="skeleton skeleton-img mb-1"></div>\n      <h4 class="skeleton skeleton-title mb-1 p-0 ps-1"></h4>\n      <p class="skeleton skeleton-date p-0 ps-1"></p>\n    </div>\n<style>\n    .skeleton {\n        background-color: green;\n        border-radius: 7px;\n        animation: skeleton 2s ease infinite alternate;\n        opacity: 0.7;\n    }\n    .skeleton-card {\n        background-color: transparent;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-around;\n        padding: 0;\n    }\n    .skeleton-img {\n        height: 12rem;\n    }\n    .skeleton-title {\n        height: 1.4rem;\n        width: 10rem;\n    }\n    .skeleton-date {\n        height: 0.7rem;\n        width: 3rem;\n    }\n\n    @keyframes skeleton {\n        0% {\n            background: linear-gradient(to bottom right, #f1f1f1da, #7e7d7d);\n        }\n        15% {\n            background: linear-gradient(to bottom right, #e9e5e5ec, #929191ef);\n        }\n        24% {\n            background: linear-gradient(to bottom right, #d8d6d6ec, #9c9b9bef);\n        }\n        56% {\n            background: linear-gradient(to bottom right, #b4b3b3f3, #acaaaadc);\n        }\n        79% {\n            background: linear-gradient(to bottom right, #b4b2b2d0, #cecbcbc7);\n        }\n        87% {\n            background: linear-gradient(to bottom right, #a3a1a1d0, #dbd9d9c7);\n        }\n        100% {\n            background: linear-gradient(to bottom right, #a09e9ee3, #dbdadae3);\n        }\n    }\n</style>'})();