


$(window).scroll(checkBoxes)


function checkBoxes() {
    let trigger = $(window).innerHeight() / 5 * 4;
    $(".box").each(function () {
        const boxTop = this.getBoundingClientRect().top;
           if (boxTop < trigger) {
             $(this).addClass("show");
           } else {
             $(this).removeClass("show");
           }
     })
}
        
     
    
