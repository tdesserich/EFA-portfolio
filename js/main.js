/* General jQuery & JS stuff goes here. */


jQuery(document).ready(function ($) {

    console.log("A starter template created by Eleven Fifty Academy under MIT Licensing.");

    // Initialize wowjs 
    new WOW().init();

    /*-------------------
    MAGNIFICO STARTER - 
    Code from a starter example by the creator. 
    https://codepen.io/dimsemenov/pen/hutrb
    -------------------*/
//     $('.with-caption').magnificPopup({
//         type: 'image',
//         closeBtnInside: false,
//         mainClass: 'mfp-with-zoom mfp-img-mobile',

//         image: {
//             verticalFit: true,
//             titleSrc: function (item) {
//                 //More could be done here......
//                 //Also doesn't fit so good on iPad.
//                 var caption = item.el.attr('title');
//                 return caption;
//             }
//         },

//         //This will let us click through images eventually....
//         gallery: {
//             enabled: true
//         },
//     });
// });


var myNavBar = {

    flagAdd: true,

    elements: [],

    init: function (elements) {
        this.elements = elements;
    },

    add : function() {
        if(this.flagAdd) {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className += " fixed-theme";
            }
            this.flagAdd = false;
        }
    },

    remove: function() {
        for(var i=0; i < this.elements.length; i++) {
            document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
        }
        this.flagAdd = true;
    }

};

/**
 * Init the object. Pass the object the array of elements
 * that we want to change when the scroll goes down
 */
myNavBar.init(  [
    "header",
    "header-container",
    "brand"
]);

/**
 * Function that manage the direction
 * of the scroll
 */
function offSetManager(){

    var yOffset = 0;
    var currYOffSet = window.pageYOffset;

    if(yOffset < currYOffSet) {
        myNavBar.add();
    }
    else if(currYOffSet == yOffset){
        myNavBar.remove();
    }

}

/**
 * bind to the document scroll detection
 */
window.onscroll = function(e) {
    offSetManager();
}

/**
 * We have to do a first detectation of offset because the page
 * could be load with scroll down set.
 */
offSetManager();
});
