 $(document).ready(function(){
    $('.parallax-bg').mousemove(function(e){
       var x = -(e.pageX + this.offsetLeft) / 45;
        var y = -(e.pageY + this.offsetTop) / 45;
        $(this).css('background-position', x + 'px ' + y + 'px');
    });    
});