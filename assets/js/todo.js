//check off specific todos by clicking

$("li").click(function(){
   $(this).toggleClass("completed");
});

//click on x to delete todo
$("span").click(function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation(); 
});

$("input[type='text'").keypress(function(event){
    if(event.which ===  13){
        //grabbing new todoText
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa-solid fa-trash'></i></span>"  +  todoText + "</li>")
    }
}) ;

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle()
});