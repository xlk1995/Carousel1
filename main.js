var allButton = $('#buttons>span')
for (let i = 0;i<allButton.length;i++){
    $(allButton[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var p = index * -300
        $(images).css({
            transform:'translate('+p+'px)'
        })
        n = index
        buttonsActive(allButton.eq(n))
    })
}
var n =0
var size = allButton.length
allButton.eq(n%size).trigger('click')
var timerId = setTimer()
$('.window').on('mouseenter',function(){
    clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
    timerId = setTimer()
})
function setTimer(){
    return setInterval(() => {
        n+=1
        allButton.eq(n%size).trigger('click')
        .addClass('red')
        .siblings('.red').removeClass('red')
    },2000)    
}
function buttonsActive ($button){
    $button.addClass('red')
    .siblings('.red').removeClass('red')
}