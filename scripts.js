// $(function () {
//     $.ajax({
//         url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
//         dataType: 'jsonp'
//     });

//     setInterval(function () {
//         $('.main').fadeOut("slow", function () {
//             $.ajax({
//                 url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=mycallback',
//                 dataType: 'jsonp'
//             });
//         })
//     }, 10000);
// });

// function mycallback(e) {
//     console.log(e)
//     $(".main div blockquote").empty();
//     $(".main div blockquote").append(e[0].content);
//     $(".mb-author").text("~" + e[0].title);
//     $(".main").fadeIn("slow", function () {
//         console.log("quote successfully loaded!")
//     });
// }
