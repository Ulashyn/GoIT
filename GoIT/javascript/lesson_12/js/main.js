var data = {
    headerTitle : 'Улашин Олександр Олівич',
    headerImgSrc : 'img/sasha.jpg',
    headerImgAlt : 'Мой портрет',
    headerImgTitle : 'Мой портрет',
    headerContent : 'Провідний програміст в Національному центрі Мала академія наук',
    contentTitle : 'Хочу вчити frontend, тому що:',
    contentList : ['нема професійного росту;', 'хочу займатись тим, чим горю;', 'не турбуватись про свій фінансовий стан.'],
    phoneTitle : 'Мій контактний телефон:',
    phone : '+380978630517',
    vkTitle : 'Мій профіль вконтакті',
    vkUrl : 'http://vk.com/id10763461',
    vk : 'vk.com',
    feedbackTitle : 'Мій feedback:',
    feedback : '"Дай таску сложную"',
    smileUrl : 'http://www.w3schools.com/charsets/ref_utf_symbols.asp'
}

var results = document.getElementById("results");
results.innerHTML = tmpl("cv", data);
