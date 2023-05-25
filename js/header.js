let includeHeader = document.querySelector('header_block');
includeHeader.insertAdjacentHTML("afterbegin",`
<div id="overlay">
    <a href="./">Главная</a>
    <a href="#">Персонажи</a>
    <a href="#">Кадры</a>
    <a href="#">Игра</a>
</div>
<div class="nav site_container">
    <div class="logo">
        <a href="./index.html" class="logo">
            <img src="./images/logoL.svg" alt="" class="logo-image" />
        </a>
    </div>
    <div id="hamburger">
        <div></div>
    </div>
</div>`);