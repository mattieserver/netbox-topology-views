(()=>{var l=(e,t,o)=>new Promise((n,r)=>{var c=s=>{try{i(o.next(s))}catch(a){r(a)}},g=s=>{try{i(o.throw(s))}catch(a){r(a)}},i=s=>s.done?n(s.value):Promise.resolve(s.value).then(c,g);i((o=o.apply(e,t)).next())});var d=e=>{if(!document.cookie)return;let t=null,o=document.cookie.split(";");for(let n=0;n<o.length;n++){let r=o[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t};var u={success:e=>{let t=document.querySelector("#topology-plugin-success-toast");if(!t)return console.error("Could not find toast component!");let o=t.querySelector("span");o.textContent=e,new window.Toast(t).show()},error:e=>{let t=document.querySelector("#topology-plugin-error-toast");if(!t)return console.error("Could not find toast component!");let o=t.querySelector("span");o.textContent=e,new window.Toast(t).show()}};var p={},m=d("csrftoken");document.querySelector("form#images").addEventListener("submit",e=>l(void 0,null,function*(){e.preventDefault();try{let t=yield fetch("/api/plugins/netbox_topology_views/images/",{method:"POST",body:JSON.stringify(p),headers:{"X-CSRFToken":m,"Content-Type":"application/json"}});if(!t.ok)throw new Error(yield t.text());u.success("Saved settings")}catch(t){console.dir(t),u.error(t.message)}}));document.querySelectorAll("form#images .dropdown-menu img").forEach(e=>{e.addEventListener("click",t=>{var c;if(!(t.currentTarget instanceof HTMLElement))return;let{dataset:{role:o,image:n}}=t.currentTarget;p[parseInt(o)]=n;let r=(c=t.currentTarget.closest(".dropdown"))==null?void 0:c.querySelector(`#dropdownMenuButton${o}`);r&&(r.innerHTML=`<img src="${n}" />`)})});})();
