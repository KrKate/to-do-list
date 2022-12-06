$(function(){
//создаем функцию, которая будет переносить значения 
//из addCaseInput в showInput, а из addCaseTextarea в showTextarea
    function addCase() {
//создаем переменные, чтобы избавиться от громоздких конструкций
        var addCaseInput = $('.addCaseInput').val(),
            addCaseTextarea = $('.addCaseTextarea').val();
//задаем условие, при котором длина строки в input и textarea
//не равны нулю, т.е. не пустые
        if (addCaseInput.length !== 0 && addCaseTextarea.length !== 0) {
//скрываем надпись "Список пуст..."       
        $('.emptyList').hide(),
//добавляем новое содержимое
        $('.showForm').append(`
            <div class="showContainer">
            <span class=showInput>${addCaseInput}</span>
            <button class="clearButton"></button>
             <button class="showButton"></button>
             <div class="showTextarea">${addCaseTextarea}</div>
            </div>
        `);
//конвертируем значения переменных в строки с помощью ''
        $('.addCaseInput').val('');
        $('.addCaseTextarea').val('');
    }

//вывод сообщения браузера (alert)
//если переменной не присвоено какое-либо значение
        if(!addCaseInput) {
            alert('Введите наименование вашего дела!')
            //отмена действия браузера, т.е. отмена hide и append
            return false
        }
        else if (!addCaseTextarea) {
            alert('Введите описание для вашего дела!')
            return false
        }
}
//функция сработает при клике на addCaseButton
    $('.addCaseButton').on('click', addCase);

/*
$( selector ).on( events, selector, data, handler ) 

events - String 
selector - String
data - Anything
handler - Function( Event eventObject, Anything extraParams )
*/

//удаление при клике на clearButton
    $('body').on('click', '.clearButton', function(){
        var show = $(this).parents('.showContainer');
        show.remove();
        
    var show = $('.showContainer')
    if (show.length == 0) {
        $('.emptyList').show();
    } 
    });



    $('body').on('click', '.showButton', function() {
        $(this).parents('.showContainer').find('.showTextarea').slideToggle('');
    });
});


      
