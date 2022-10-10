
$('ul').on('click','li',function(){

    // for crossing the task done
    $(this).toggleClass('first'); 
})

$('ul').on('click', 'span' , function (){
    // for deleting the task done
    $(this).parent().fadeOut(1000,function(){  
        
        $(this).remove(); 

    })
    
})

$('input[type="text"]').keypress(function (e){
    // for appending a new task into the list
    if(e.which === 13){
        const todoText = $(this).val();
        const lis = `<li><span></span> ${todoText}</li>`
        $('ul').append(lis);
        $(this).val("");
    }
})
$('#plus').click(function(){
    $('input[type="text"]').fadeToggle(500);
})

