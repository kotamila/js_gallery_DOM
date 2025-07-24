document.getElementById("thumbs").addEventListener("click",function(t){t.preventDefault();var e=event.target;if("IMG"===e.tagName&&(e=e.closest("a")),"A"!==e.tagName){var a=document.getElementById("largeImg"),n=e.getAttribute("href"),r=e.getAttribute("title");a.src=n,a.alt=r}});
//# sourceMappingURL=index.abe8410b.js.map
