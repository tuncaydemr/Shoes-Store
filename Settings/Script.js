$(document).ready(function(){

    $("#HeaderMenuButtonArea").on("click", function(){

        $("#HeaderMenuButtonMenuBorderArea").slideToggle("slow");

    });

    var DokumanWidth            =   $(window).outerWidth();

    if (!$("#HeaderMessageArea").length) {

        if (DokumanWidth >= 1200) { /* XL */

            var OfsetValue      =   207;

        } else if ((DokumanWidth >= 992) && (DokumanWidth <= 1199)) { /* L */

            var OfsetValue      =   192;

        } else if ((DokumanWidth >= 768) && (DokumanWidth <= 991)) { /* M */

            var OfsetValue      =   177;

        } else if ((DokumanWidth >= 576) && (DokumanWidth <= 767)) { /* S */

            var OfsetValue      =   162;

        } else if (DokumanWidth <= 574) { /* XS */

            var OfsetValue      =   152;

        }

    }

    $("main").css("top", OfsetValue);

    $("footer").css("top", OfsetValue);


    $(window).resize(function () {

        var DokumanWidth            =   $(window).outerWidth();

    if (!$("#HeaderMessageArea").length) {

        if (DokumanWidth >= 1200) { /* XL */

            var OfsetValue      =   207;

        } else if ((DokumanWidth >= 992) && (DokumanWidth <= 1199)) { /* L */

            var OfsetValue      =   192;

        } else if ((DokumanWidth >= 768) && (DokumanWidth <= 991)) { /* M */

            var OfsetValue      =   177;

        } else if ((DokumanWidth >= 576) && (DokumanWidth <= 767)) { /* S */

            var OfsetValue      =   162;

        } else if (DokumanWidth <= 574) { /* XS */

            var OfsetValue      =   152;

        }

    }

    $("main").css("top", OfsetValue);

    $("footer").css("top", OfsetValue);

    });


    $.ProductDetailManImageChange      =   function(ImageValue){

        var ChangeImageFilePath     =   "Images/Product Images/Man/";

        var CreateImage             =   ChangeImageFilePath + ImageValue;


        $("#BigImage").attr("src", CreateImage);

    }

    $.ProductDetailWomanImageChange      =   function(ImageValue){

        var ChangeImageFilePath     =   "Images/Product Images/Woman/";

        var CreateImage             =   ChangeImageFilePath + ImageValue;


        $("#BigImage").attr("src", CreateImage);

    }

    $.ProductDetailChildImageChange      =   function(ImageValue){

        var ChangeImageFilePath     =   "Images/Product Images/Child/";

        var CreateImage             =   ChangeImageFilePath + ImageValue;


        $("#BigImage").attr("src", CreateImage);

    }


    $(function(){

        var     SlideElement        =   $(".SlideCoverageArea");

        var     SlideListCreate     =   SlideElement.find(".SlideImageArea");

        var     SlideImageLength    =   SlideListCreate.find(".SlideImage").length;

        var     SlideImageWidth     =   SlideElement.outerWidth();

        var     TotalWidth          =   SlideImageLength * SlideImageWidth;

        var     ImageSequence       =   0;

        var     PreviousArea        =   0;


        SlideListCreate.find(".SlideImage").width(SlideImageWidth).end().width(TotalWidth);

        $(window).resize(function(){

            SlideElement        =   $(".SlideCoverageArea");

            SlideListCreate     =   SlideElement.find(".SlideImageArea");

            SlideImageLength    =   SlideListCreate.find(".SlideImage").length;

            SlideImageWidth     =   SlideElement.outerWidth();

            TotalWidth          =   SlideImageLength * SlideImageWidth;


            SlideListCreate.find(".SlideImage").width(SlideImageWidth).end().width(TotalWidth).css("margin-left", "-" + (ImageSequence * SlideImageWidth) + "px");

        });

        $.AutomaticChange       =   function(){

            if (ImageSequence < SlideImageLength - 1) {

                ImageSequence++;

                PreviousArea    =   "-" + (ImageSequence * SlideImageWidth) + "px";

            } else {

                ImageSequence   =   0;

                PreviousArea    =   0;

            }

            SlideListCreate.stop().animate({marginLeft:PreviousArea}, 500, function(){

                SlideElement        =   $(".SlideCoverageArea");

                SlideListCreate     =   SlideElement.find(".SlideImageArea");

                SlideImageLength    =   SlideListCreate.find(".SlideImage").length;

                SlideImageWidth     =   SlideElement.outerWidth();

                TotalWidth          =   SlideImageLength * SlideImageWidth;


                SlideListCreate.find(".SlideImage").width(SlideImageWidth).end().width(TotalWidth).css("margin-left", "-" + (ImageSequence * SlideImageWidth) + "px");

            });

        }

        var     SlidePlay       =   setInterval("$.AutomaticChange()", 3000);

    });

});
