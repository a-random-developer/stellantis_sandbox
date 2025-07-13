let dropdowns = [
    { name: "Current Customers", options: [ { tag: "Manage Account", link: "" }, { tag: "Lease End Options", link: "" }, { tag: "Stellantis Insurance", link: "" } ] },
    { name: "Resources", options: [ { tag: "Learning Center", link: "" }, { tag: "Find a Dealer", link: "" } ] },
    { name: "Our Company", options: [ { tag: "About Us", link: "" }, { tag: "Carrers", link: "" } ] },
    { name: "Support", options: [ { tag: "FAQs", link: "" }, { tag: "Document Library", link: "" }, { tag: "Contact Us", link: "" } ] }
];

let carLogos = [
    "https://brandlogos.net/wp-content/uploads/2022/10/alfa_romeo_black-logo_brandlogos.net_f3e8a-512x512.png",
    "https://www.designyourway.net/blog/wp-content/uploads/2023/06/Chrysler-Logo.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRmyIFincMhw-Lu5wDeVRHZJsELJzO2ZCYKg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsJ1zpqVSVEBudCbwCiK9g3JH7XWE8dVgVQQ&s",
    "https://static.vecteezy.com/system/resources/thumbnails/020/500/247/small_2x/jeep-brand-logo-car-symbol-black-design-usa-automobile-illustration-free-vector.jpg",
    "https://www.pngplay.com/wp-content/uploads/13/RAM-Logo-Transparent-File.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9NkCnpxHLJVQ-NKmfPfOl00z2G_qUaJZ9Kw&s"
]

let footerListItems = [
    { listName: "Resources", options: [ { tag: "Learning Center", link: "" }, { tag: "FAQs", link: "" }, { tag: "Document Library", link: "" }, { tag: "Find a Dealer", link: "" } ] },
    { listName: "Dealers", options: [ { tag: "Dealer Services", link: "" }, { tag: "Commercial Lending", link: "" }, { tag: "Contact Info", link: "" } ] },
    { listName: "Legal", options: [ { tag: "Online Privacy Terms & Condition", link: "" }, { tag: "SMS Terms & Condition", link: "" }, { tag: "Privacy Policy", link: "" }, { tag: "Important Disclosures", link: "" }, { tag: "Security", link: "" }, { tag: "Consumer Concerns", link: "" }, { tag: "Accessibility", link: "" } ] }
];



function loadDropdows() {
    const dropdownElement = document.getElementById('dropdowns');

    dropdowns.forEach((item, index) => {
    

    const uniqueId = `dropdownMenuButton${index}`;

    let template = `<div class="dropdown me-2">
      <button class="btn dropdown-toggle" type="button" id="${uniqueId}" data-bs-toggle="dropdown" aria-expanded="false">
        ${item.name}
      </button>
      <div class="dropdown-menu p-0 m-0" aria-labelledby="${uniqueId}">
        <|OPTIONS|>
      </div>
    </div>`;

    let optionsElement = "";
    item.options.forEach((option) => {
        optionsElement += `<a class="dropdown-item" href="${option.link}">${option.tag}</a>`;
    });

    template = template.replace('<|OPTIONS|>', optionsElement);
    dropdownElement.innerHTML += template;
});

}

function loadBrandLogos() {
    const logoContainer = document.getElementById('brand-logos');
    carLogos.forEach((logo) => {
        const element = document.createElement('img');
        element.src = logo;
        element.className = "brand-logo"
        
        logoContainer.appendChild(element);
    })
}


function loadListsInFooter() {
    const footerList = document.getElementById('right-section-footer');


    footerListItems.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML += `<label class="ul-legend">${item.listName}</label>`
        div.className = 'ul-container'
        const ul = document.createElement('ul');
        item.options.forEach((value) => {
            ul.innerHTML += `<li style="list-style-type: none;""><a class="dropdown-item" href="${value.link}">${value.tag}</a></li>`
        })
        div.appendChild(ul);
        footerList.appendChild(div);
    })
}


       function showContent() {
            var zip ="94016";
            var make ="jeep"

            var iframe = document.getElementById("dealerFrame");
            var content = document.getElementById("content");

            var url = "https://mcdvpdvn7mflllsyk23pt4zl28c4.pub.sfmc-content.com/stjqsrq1ynb" + "?zip=" + zip + "&make=" + make;
            console.log("url", url);

            iframe.src = url;
 
            const contentDiv = document.getElementById("content");
            contentDiv.style.display="block"
            
        }

        
const getIP = () => {
    fetch('https://ipapi.co/json').then((response) => {
        response.json().then((data) => {
            if (data.country && data.country === 'US') {
                document.getElementsByClassName('container')[0].classList.remove('hide');
                
            } else {
                document.body.innerHTML = `<div class="blocked-wrapper">
  <div class="blocked-card">
    <svg class="blocked-icon" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/>
      <line x1="5" y1="5" x2="19" y2="19" stroke="currentColor" stroke-width="2"/>
    </svg>

    <h1>Service Unavailable</h1>
    <p>
      Sorry, this service is not available in your country.<br>
      If you believe this is an error, please contact&nbsp;
      <a href="mailto:support@example.com">support@example.com</a>.
    </p>
    <button onclick="location.href='https://example.com/help';">
      Learn More
    </button>
  </div>
</div>

<style>
  /* resets */
  *{box-sizing:border-box;margin:0;padding:0;font-family:system-ui,Helvetica,Arial,sans-serif;}

  /* page wrapper */
  .blocked-wrapper{
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    background:
      linear-gradient(135deg,#f8f8f8 0%,#e9eef4 100%);
    padding:1rem;
  }

  /* card */
  .blocked-card{
    text-align:center;
    max-width:26rem;
    width:100%;
    background:#fff;
    border-radius:1rem;
    padding:2.5rem 2rem;
    box-shadow:
      0 8px 16px rgba(0,0,0,.08),
      0 2px 4px rgba(0,0,0,.06);
    animation:fadeIn .6s ease;
  }

  /* icon */
  .blocked-icon{
    width:5rem;
    height:5rem;
    color:#ff4d4d;
    margin-bottom:1.25rem;
  }

  /* headings & text */
  h1{
    font-size:1.8rem;
    margin-bottom:.75rem;
    color:#333;
  }
  p{
    font-size:1rem;
    line-height:1.5;
    color:#555;
    margin-bottom:1.5rem;
  }
  a{color:#0077cc;text-decoration:none;}
  a:hover{text-decoration:underline;}

  /* button */
  button{
    padding:.75rem 1.5rem;
    font-size:1rem;
    border:none;
    border-radius:.5rem;
    background:#0077cc;
    color:#fff;
    cursor:pointer;
    transition:background .25s ease;
  }
  button:hover{background:#005fa3;}

  /* simple fade‑in */
  @keyframes fadeIn{
    from{opacity:0;transform:translateY(8px);}
    to{opacity:1;transform:translateY(0);}
  }

  /* dark‑mode (prefers‑color‑scheme) */
  @media (prefers-color-scheme: dark){
    .blocked-wrapper{background:#13171f;}
    .blocked-card{background:#1c2230;color:#e3e7ee;}
    h1{color:#e3e7ee;}
    p{color:#bfc6d4;}
    .blocked-icon{color:#ff7373;}
  }
</style>
`;
            }
        })

    })
}



const checkSession=()=>{
  console.log("Checking session:",window.location.search);
  
  const params=new URLSearchParams(window.location.search);
  console.log("Params");
  const sessionTime=parseInt(params.get('session'));
  const SESSION_LIMIT=20*1000
  const NOW=Date.now()
  if(NOW-sessionTime>SESSION_LIMIT){
    document.body.innerHTML="Link expired please authorize again"
    setTimeout(()=>{
      window.location.replace("https://a-random-developer.github.io/ip_gateway_test/")
    },2000);
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if (
      e.keyCode == 123 || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) || // Ctrl+Shift+I
      (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) // Ctrl+U
    ) {
      return false;
    }
  };


checkSession();
getIP();
loadListsInFooter();
loadDropdows()
loadBrandLogos();
