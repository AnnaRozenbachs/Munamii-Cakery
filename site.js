$(function()
{
    $('#product-CupCakes').on('click', function(){
        $('#cupcakes').removeClass('product-hide');
        $('#cupcakes').addClass('product-active');
        $('#weddingcakes').removeClass('product-active');
        $('#weddingcakes').addClass('product-hide');
        $(this).addClass('active');
        $('#product-WeddingCakes').removeClass('active');
       
    });
    $('#product-WeddingCakes').on('click', function(){
       
        $('#weddingcakes').removeClass('product-hide');
        $('#weddingcakes').addClass('product-active');
        $('#cupcakes').removeClass('product-active');
        $('#cupcakes').addClass('product-hide');
        $(this).addClass('active');
        $('#product-CupCakes').removeClass('active'); 
       
    });
    
    
});

