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
