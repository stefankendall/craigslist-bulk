(function () {
    var POST = {
        title:'How I Made $1000 in 1 Month on craigslist',
        price:"$9.99",
        description:("Using nothing but craigslist, I made $1000 in 1 month. NO special skills or knowledge are required.\n\n" +
        "I've created a book that walks through every step of the process and every pitfall so you can get up and running as quickly as possible.\n\n" +
        "I've already made $500 this week making trades, and you can too. If you want to make some serious money, contact me and I'll get you the book.")
    };

    var findInputFor = function (text) {
        return $('span').filter(function () {
            return $(this).text().indexOf(text) !== -1
        }).nextAll('input,textarea').first();
    };

    var postInput = findInputFor("Posting Title");
    if (postInput.length !== 0) {
        postInput.val(POST.title);
        findInputFor("Price").val(POST.price);
        findInputFor("Posting Description").val(POST.description);
        $('button:contains("Continue")').click();
    }
})();