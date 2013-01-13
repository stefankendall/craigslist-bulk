(function () {
    var mainPageRedirection = function(){
        if (location.href.slice(-4) === 'org/') {
            location.href = "bka";
        }
    };

    var postInCategory = function(){
        if (location.href.slice(-4) === 'bka/') {
            location.href = $('a:contains("post")').first().attr('href');
        }
    };

    var chooseCategory = function(){
        if ($('b').text().indexOf("Please choose a category") !== -1) {
            $('label:contains("books & magazines - by owner")').find('input').attr('checked', true);
            $('button:contains("Continue")').click();
        }
    };

    mainPageRedirection();
    postInCategory();
    chooseCategory();
})();