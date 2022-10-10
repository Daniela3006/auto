arrLang = {
    'en': {
        'about': 'Service',
        'about_us': 'About us',
        'mail': 'Contact us',
        'intro__title': ' KEEPING YOU ON THE ROAD WITH SERVICE YOU CAN TRUST',
        'see_more': 'See more',
        'call': 'CALL US NOW (+373) 69-272746 ',
        'cons': ' Feel free to call us',
        'ap': 'GET FREE APPOITMET',
        'free': ' Free Diagnosis & Brake Checks',
        'find': ' FIND US ON MAP',
        'adress': " Chisinau, st.Luncii 2/1 Mon.-Frid: 9:00-18:00 Saturday:9:00-14:00 Sunday: free",
        'serv': 'OUR SERVICE',
        'tt': 'Interior tuning according to an exclusive design allows you to completely change the interior of your car',
        'tT': 'SALON TUNING',
        't1': 'Interior upholstery can change the design and add many new useful features to it elements',
        't2': 'INTERIOR RELOADING',
        't3': 'If you get into a car in winter and complain about the “chilling” seat under you, then, it will certainly be useful for you to know that we can easily install heated seats',
        't4': 'HEATED SEATS',
        't5': "Car seats suffer wear and tear to varying degrees. Most often in need of repair driver's seat",
        't6': 'SEAT REPAIR',
        't7': 'At your request, we can produce any professional embroidery and embossing logos, inscriptions or drawings on the cut, when hauling the interior',
        't8': 'embossing on leather',
        't9': 'Anyone who operates a car whose steering wheel rim is covered with real high-quality automotive leather knows well what driving pleasure is a car with a "leather" steering wheel is much higher than with a regular, plastic rim',
        't10': 'HARNESSING THE RUDDER',
        'about_block': 'WE UNDERSTAND THE IMPORTANCE OF FINDING THE RIGHT DEALER',
        'about_block_content': 'We confidently provide a guarantee for all leather interiors, subject to elementary rules. handling natural leather upholstery. We give a guarantee for both the automotive leather itself and for all seams, glue work, upholstery installation. The performance of elements and components of the automobile the interior is checked when the car is delivered to the client.',
        'easy': 'FAST & EASY',
        'works': 'Our works',
        'contact':'CONTACT US',
        'name':'Name',
        'Sname':'Last name',
        'email':'Email',
        'phone':'Phone',
        'mess':'Message',
        'submit':'Sent',


    },
    'ru': {
        'about': 'Услуги',
        'about_us': 'О нас',
        'mail': 'Связаться с нами',
        'intro__title': '    СЕРВИС, КАТОРОМУ МОЖНО ДОВЕРЯТЬ',
        'see_more': 'Показать больше',
        'call': '(+373) 69-272746',
        'cons': 'Качественная консультация',
        'ap': 'ПОЛУЧИТЬ БЕСПЛАТНУЮ ЗАЯВКУ',
        'free': 'Бесплатная диагностика',
        'find': ' НАЙТИ НАС НА КАРТЕ',
        'adress': '  Кишинёв, ул.Luncii 2/1 Пон.-Пятница: 9:00-18:00 Суббота:9:00-14:00 Воскресенье: выходной',
        'serv': ' НАШИ УСЛУГИ',
        'tt': ' Тюнинг салона по эксклюзивному дизайну позволяет полностью изменить интерьер вашегo автомобиля',
        'tT': 'ТЮНИНГ САЛОНА',
        't1': ' Перетяжка салона может изменить дизайн и добавить в него множество новых полезных элементов',
        't2': ' ПЕРЕТЯЖКА САЛОНА',
        't3': '     Если вы зимой садитесь в автомобиль и сетуете на «леденющее» сидение под вами, то, безусловно, вам будет полезно знать, что мы можем легко установить подогрев сидений ',
        't4': 'ПОДОГРЕВ СИДЕНИЙ',
        't5': 'Сиденья автомобиля страдают от износа в разной степени. Чаще всего требуют ремонта водительские сиденья',
        't6': ' РЕМОНТ СИДЕНИЙ',
        't7': '     По вашему желанию мы можем изготовить любую профессиональную вышивку и тиснениe логотипов ,надписей или рисунков на крое, при перетяжке салона',
        't8': '    ТИСНЕНИЕ НА КОЖЕ',
        't9': '     Тот, кто эксплуатирует автомобиль ,обод руля которого обтянут настоящей  высококачественной автомобильной кожей хорошо знает, что удовольствие от управления  авто с «кожаным» рулем намного выше, чем с обычным, пластиковым ободом',
        't10': 'ПЕРЕТЯЖКА РУЛЯ',
        'about_block': 'МЫ ПОНИМАЕМ, КАК ВАЖНО НАЙТИ ПРАВИЛЬНЫЙ АВТОСАЛОН',
        'about_block_content': '       Мы уверенно предоставляем гарантию на все кожаные салоны, при соблюдении элементарных правил обращения с натуральной кожаной обивкой. Мы даем гарантию как на саму автомобильную кожу, так и на все швы, клеевые работы, монтаж обивки. Работоспособность элементов и узлов автомобильного салона проверяется при выдаче автомобиля клиенту.',
        'easy': 'БЫСТРО & ПРОСТО',
        'works': 'наши работы',
        'contact': 'НАПИШИТЕ НАМ',
        'name':'Имя',
        'Sname':'Фамилия',
        'email':'Почта',
        'phone':'Телефон',
        'mess':'Сообщение',
        'submit':'Отправить',


    },
}
$(function () {
    $('.translate').click(function () {
        let lang = $(this).attr('id');

        $('.lang').each(function (index, item) {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    });
});