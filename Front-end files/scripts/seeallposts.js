/* style the content for every category */
var optionFromLocalStorage = localStorage.getItem("vLocalStorage");
var option = optionFromLocalStorage;

var twitter = 'twitter';
if(option === twitter) {
    /* add right title */
    document.getElementById("platform_name").innerHTML = 'Twitter';
    var elem;
    elem = document.querySelector(".platform_name");
    elem.classList.toggle('twitter');

    /* add right styled posts */
    var list;
    list = document.querySelectorAll(".platform");
    for(index = 0; index < list.length; index++)
        list[index].classList.toggle('twitter');
    list = document.querySelectorAll(".platform_post");
    for(index = 0; index < list.length; index++)
        list[index].classList.toggle('twitter_post');

    /* add right href attributes */
    var a = document.querySelectorAll(".post");
    for(index = 0; index < a.length; index++)
        a[index].setAttribute("href", "twitterpost.html");
}
var reddit = 'reddit';
if(option === reddit) {
    document.getElementById("platform_name").innerHTML = 'Reddit';
    var elem;
    elem = document.querySelector(".platform_name");
    elem.classList.toggle('reddit');

    var list;
    list = document.querySelectorAll(".platform");
    for(index = 0; index < list.length; index++)
        list[index].classList.toggle('reddit');
    list = document.querySelectorAll(".platform_post");
    for(index = 0; index < list.length; index++)
        list[index].classList.toggle('reddit_post');

    var a = document.querySelectorAll(".post");
    for(index = 0; index < a.length; index++)
        a[index].setAttribute("href", "redditpost.html");
}
var youtube = 'youtube';
if(option === youtube) {
    document.getElementById("platform_name").innerHTML = 'YouTube';
    var elem;
    elem = document.querySelector(".platform_name");
    elem.classList.toggle('youtube');

    var list;
    list = document.querySelectorAll(".platform");
    for(index = 0; index < list.length; index++)
        list[index].classList.toggle('youtube');
    list = document.querySelectorAll(".platform_post");
    for(index = 0; index < list.length; index++)
        list[index].classList.toggle('youtube_post');
}