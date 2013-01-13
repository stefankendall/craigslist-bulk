(function () {
    var POST = {
        title:'How I Made $1000 in 1 Month on craigslist',
        price:"$9.99",
        description:("Using nothing but craigslist, I made $1000 in 1 month. NO special skills or knowledge are required.\n\n" +
            "I've created a book that walks you through every step of the process and every pitfall so you can get up and running as quickly as possible.\n\n" +
            "I've already made $200 this weekend trading iPods, iPads, and iPhones, and you can too.\n\n" +
            "If you want to make some money, pick up \"How I Made $1000 in One Month on Craigslist\" on Amazon.")
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