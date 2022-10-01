import data from '../footer.json' assert {type: 'json'};

const footerInfo = document.querySelector('.footer__info');

data.forEach( element=>{
    console.log(element);
    footerInfo.innerHTML += `
    <div class="footer__titulo">
        <p>${element.title}</p>
        <div class="footer__sub">
        <nav class="footer__nav--sub">
            <a href="#">${element.sub1}</a>
            <a href="#">${element.sub2}</a>
            <a href="#">${element.sub3}</a>
            <a href="#">${element.sub4}</a>
        </nav>
        </div>
    </div>`
} )
// console.log(data);