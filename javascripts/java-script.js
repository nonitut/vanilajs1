document.addEventListener("DOMContentLoaded", function() {
    var nameInput = document.getElementById("nameInput");
    var addButton = document.getElementById("addButton");
    var nameSpan = document.getElementById("nameSpan");

    if (addButton !== null) {
    addButton.addEventListener("click", function() {
        var name = nameInput.value;
        nameSpan.textContent = name;
    });
    } else {
    console.error("Элемент с идентификатором 'addButton' не найден.");
    }
    //Выводим текст с блока ввода имени в наш span по нажатию кнопки
});

//Если хотим испозьзовать несколько функций, пример
(function() {
    // Код функции 1, так ты можешь разделять функции
})();

(function() {
    // Код функции 2
})();


document.addEventListener("DOMContentLoaded", function() {
    // используй эту функцию, для элементов которые должны быть выполнены после загрузки HTML
    // Это как Document ready 
});

document.addEventListener("DOMContentLoaded", function() {
    var sumForm = document.getElementById("sumForm");
    var resultElement = document.getElementById("result");

    sumForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var sum = num1 + num2;

    resultElement.textContent = "Сумма: " + sum;
    });
});

//Теории немного

//getElementById - Это(ID) - Он возвращает только один элемент (первый элемент с указанным ID) или `null`, если элемент не найден.
// пример 
var element = document.getElementById("myElement");

//querySelector - вызываеем по классу элемент - Он возвращает первый элемент, соответствующий селектору, или null, если элемент не найден.
// пример 
var element = document.querySelector(".myClass");

//querySelectorAll - Он возвращает список всех элементов, соответствующих селектору, в виде коллекции NodeList (псевдомассива)
// пример 
var elements = document.querySelectorAll("p");


document.addEventListener("DOMContentLoaded", function() {
    var heading = document.getElementById("myHeading");
    heading.textContent = "Привет, JavaScript!";
    //Замняем текст по id / Пример изменения заголовка

    var div = document.getElementById("myDiv");
    div.innerHTML = "<h2>Добро пожаловать!</h2><p>Это пример добавления HTML-содержимого в элемент.</p>";
    //добавляем текст в див / Пример добавления HTML-содержимого

    var button = document.getElementById("myButton");
    button.innerHTML = "Укуси меня - новый текст";
    //Заменяем текст на новый внутри кнопки / Пример изменения содержимого кнопки

    var button = document.getElementById("myButton");
    button.addEventListener("click", function() {
    button.classList.toggle("active");
    });
    // Переключение класса активного состояния кнопки
    //Свойство класс было добавлено в css 

    var paragraph = document.getElementById("myParagraph");
    paragraph.addEventListener("mouseenter", function() {
    paragraph.classList.add("highlight");
    });

    paragraph.addEventListener("mouseleave", function() {
    paragraph.classList.remove("highlight");
    });
    //Добавление класса при наведении на элемент и так же убираем класс когда не наведено )

    var text = document.getElementById("myText");
    var button = document.getElementById("myButton");

    button.addEventListener("click", function() {
    text.classList.toggle("big");
    text.classList.toggle("bold");
    });
    //Изменение стиля элемента с помощью классов при клике на кнопку
});


document.addEventListener("DOMContentLoaded", function() {
    //element.addEventListener(listener);
    //Обработчик события является механизмом реакции интерфейса на действия пользователя. 
    //Когда пользователь выполняет определенное действие, например, кликает на кнопку или наводит курсор на элемент, возникает соответствующее событие. 
    //Приимер
    window.addEventListener("load", function() {
        console.log("Страница полностью загружена,мяу");
    });
    // То есть произошло событие, страница загрузилась и нам в консоль выводит текст


    var element = document.getElementById("myElement");

    element.addEventListener("mouseenter", function() {
    console.log("Курсор наведен на элемент");
    });

    element.addEventListener("mouseleave", function() {
    console.log("Курсор покинул элемент");
    });
    // Каждый раз у нас будет срабатывать событие, все выводиться в консоль


    var element = document.getElementById("myElement");

    element.addEventListener("mouseenter", function() {
    // изменить стили элемента при наведении курсора
    element.classList.add("light");
    });

    element.addEventListener("mouseleave", function() {
    // вернуть исходные стили элемента при уходе курсора
    element.classList.remove("light");
    });



    
});


// Разница между методами `getElementsByTagName` и `querySelector` заключается в способе выбора элементов на странице.

// Метод `getElementsByTagName` используется для выбора всех элементов, соответствующих указанному тегу. 
// Он возвращает коллекцию элементов (HTMLCollection), которые можно перебирать с помощью цикла или обращаться к ним по индексу. 
// Например, `document.getElementsByTagName('div')` вернет все элементы `<div>` на странице.

// Метод `querySelector` используется для выбора элементов с использованием CSS-подобного селектора. 
// Он возвращает первый элемент, соответствующий указанному селектору. 
// Если соответствующих элементов не найдено, метод возвращает `null`. 
// Например, `document.querySelector('div')` вернет первый элемент `<div>` на странице.

// Метод `querySelectorAll` аналогичен методу `querySelector`, но возвращает все элементы, соответствующие указанному селектору в виде статической коллекции (NodeList). 
// Например, `document.querySelectorAll('div')` вернет все элементы `<div>` на странице.

// Методы `querySelector` и `querySelectorAll` позволяют более гибко выбирать элементы, так как вы можете использовать 
// CSS-селекторы для указания конкретных критериев выбора элементов.

// `document.getElementById('id')`: Получает элемент по его уникальному идентификатору.

// `document.getElementsByTagName('tagname')`: Получает коллекцию элементов по их имени тега.

// `document.getElementsByClassName('classname')`: Получает коллекцию элементов по их классу.

// `document.querySelector('selector')`: Возвращает первый элемент, соответствующий указанному CSS-селектору.

// `document.querySelectorAll('selector')`: Возвращает все элементы, соответствующие указанному CSS-селектору.

// `document.createElement('tagname')`: Создает новый элемент с указанным именем тега.

// `element.appendChild(child)`: Добавляет дочерний элемент в конец указанного родительского элемента.

// `element.removeChild(child)`: Удаляет указанный дочерний элемент из родительского элемента.

// `element.classList.add('classname')`: Добавляет указанный класс к элементу.

// `element.classList.remove('classname')`: Удаляет указанный класс из элемента.

// `element.classList.toggle('classname')`: Если класс уже присутствует, то удаляет его, иначе добавляет.

// `element.innerHTML`: Получает или устанавливает HTML-содержимое элемента.

// `element.textContent`: Получает или устанавливает текстовое содержимое элемента.

// `element.getAttribute('attribute')`: Получает значение указанного атрибута элемента.

// `element.setAttribute('attribute', 'value')`: Устанавливает значение указанного атрибута элемента.

// `element.getAttribute('attribute')`: Получает значение указанного атрибута элемента.

// `element.setAttribute('attribute', 'value')`: Устанавливает значение указанного атрибута элемента.

// `element.removeAttribute('attribute')`: Удаляет указанный атрибут из элемента.

// `element.style`: Получает или устанавливает CSS-стили элемента.

// `element.addEventListener('event', callback)`: Добавляет обработчик события к элементу.

// `element.removeEventListener('event', callback)`: Удаляет обработчик события из элемента.

// `element.appendChild(child)`: Добавляет дочерний элемент в конец указанного родительского элемента.

// `element.insertBefore(newNode, referenceNode)`: Вставляет новый элемент перед указанным элементом в родительском элементе.

// `element.removeChild(child)`: Удаляет указанный дочерний элемент из родительского элемента.

// `element.cloneNode(deep)`: Создает копию элемента, включая все его дочерние элементы.

// `element.classList`: Предоставляет доступ к классам элемента и методам для их добавления, удаления и переключения.

// `element.dataset`: Предоставляет доступ к атрибутам данных (data-*) элемента.

// `element.scrollTop`: Получает или устанавливает вертикальную прокрутку элемента.

// `element.offsetLeft` и `element.offsetTop`: Получают позицию элемента относительно его родительского элемента.

// `element.offsetWidth` и `element.offsetHeight`: Получают ширину и высоту элемента, включая границы и прокрутку, но не включая отступы.

// `element.clientWidth` и `element.clientHeight`: Получают внутреннюю ширину и высоту элемента, включая прокрутку, но не включая границы и отступы.

// `element.getBoundingClientRect()`: Получает координаты и размеры элемента относительно окна просмотра.

// `element.style.display = 'none'`: Скрывает элемент, устанавливая его стиль `display` в `'none'`.

// `element.style.display = 'block'`: Отображает скрытый элемент, устанавливая его стиль `display` в `'block'`.

// `element.style.backgroundColor`: Получает или устанавливает цвет фона элемента.

// `element.style.color`: Получает или устанавливает цвет текста элемента.

// `element.innerHTML`: Получает или устанавливает HTML-содержимое элемента.

// `element.innerText`: Получает или устанавливает текстовое содержимое элемента.

// `element.value`: Получает или устанавливает значение элемента формы, например, для `<input>` или `<select>`.

// `element.setAttribute(name, value)`: Устанавливает атрибут элемента с указанным именем и значением.

// `element.getAttribute(name)`: Получает значение атрибута элемента с указанным именем.

// `element.removeAttribute(name)`: Удаляет атрибут элемента с указанным именем.

// `element.classList`: Предоставляет доступ к классам элемента и позволяет добавлять, удалять или переключать классы.

// `element.addEventListener(event, handler)`: Регистрирует обработчик события для элемента.

// `element.removeChild(child)`: Удаляет указанный дочерний элемент из элемента-родителя.

// `element.appendChild(child)`: Добавляет указанный элемент в качестве дочернего элемента в элемент-родитель.

// `element.cloneNode(deep)`: Создает копию элемента, включая его потомков, если `deep` равно `true`.

// `element.scrollIntoView(options)`: Прокручивает содержимое страницы так, чтобы элемент был видимым в окне просмотра.

// `element.focus()`: Устанавливает фокус на элементе, делая его активным для взаимодействия пользователя.

// `element.blur()`: Убирает фокус с элемента, делая его неактивным для взаимодействия пользователя.

// `element.style`: Предоставляет доступ к стилям элемента и позволяет изменять их.

// `element.offsetWidth` и `element.offsetHeight`: Возвращают ширину и высоту элемента, включая границы и полосы прокрутки.

// `element.clientWidth` и `element.clientHeight`: Возвращают ширину и высоту содержимого элемента без учета границ и полос прокрутки.

// `element.getBoundingClientRect()`: Возвращает размеры и позицию элемента относительно окна просмотра.

// `element.setAttributeNS(namespace, name, value)`: Устанавливает атрибут элемента с указанным именем и значением в указанном пространстве имен.

// `element.addEventListener(event, handler, options)`: Регистрирует обработчик события для элемента с дополнительными параметрами в объекте `options`.

// `element.querySelector(selector)`: Возвращает первый элемент, соответствующий указанному селектору.

// `element.querySelectorAll(selector)`: Возвращает все элементы, соответствующие селектору.

// `element.matches(selector)`: Проверяет, соответствует ли элемент указанному селектору.

// `element.closest(selector)`: Возвращает ближайший родительский элемент, соответствующий указанному селектору.

// `element.contains(child)`: Проверяет, содержит ли элемент указанный дочерний элемент.

// `element.cloneNode(deep)`: Создает копию элемента, включая все его дочерние элементы, если `deep` равно `true`.

// `element.scrollIntoView(options)`: Прокручивает содержимое страницы так, чтобы элемент был видимым.


// `element.setAttribute(name, value)`: Устанавливает значение атрибута элемента с указанным именем.

// `element.removeAttribute(name)`: Удаляет указанный атрибут у элемента.

// `element.dataset`: Предоставляет доступ к пользовательским атрибутам данных (data-*) элемента.

// `element.scrollLeft` и `element.scrollTop`: Возвращают или устанавливают значение прокрутки по горизонтали и вертикали соответственно.

// `element.scrollWidth` и `element.scrollHeight`: Возвращают полную ширину и высоту элемента, включая прокручиваемую область.

// `element.contentEditable`: Устанавливает элемент в режим редактирования содержимого.

// `element.insertAdjacentHTML(position, html)`: Вставляет HTML-код относительно указанной позиции в элементе.

// `element.animate(keyframes, options)`: Создает анимацию на основе заданных ключевых кадров и параметров.

// `element.getBoundingClientRect()`: Возвращает размеры и координаты элемента относительно видимой области окна.

// `element.classList`: Предоставляет доступ к классам элемента и позволяет добавлять, удалять или переключать классы.

// `element.style`: Предоставляет доступ к стилям элемента и позволяет изменять их значения.

// `element.addEventListener(event, handler)`: Добавляет обработчик события для элемента.

// `element.removeEventListener(event, handler)`: Удаляет обработчик события для элемента.

// `element.dispatchEvent(event)`: Генерирует указанное событие на элементе.

// `element.scrollIntoView(options)`: Прокручивает содержимое страницы так, чтобы элемент был видимым.

// `element.scrollLeft` и `element.scrollTop`: Возвращают или устанавливают значение прокрутки по горизонтали и вертикали соответственно.

// `element.scrollWidth` и `element.scrollHeight`: Возвращают полную ширину и высоту элемента, включая прокручиваемую область.

// `element.tabIndex`: Устанавливает порядок фокусировки элемента при навигации с помощью клавиатуры.

// `element.remove()`: Удаляет элемент из DOM-дерева.

// `element.appendChild(child)`: Добавляет дочерний элемент в конец списка дочерних элементов.

// `element.insertBefore(newElement, referenceElement)`: Вставляет новый элемент перед указанным элементом в списке дочерних элементов.

