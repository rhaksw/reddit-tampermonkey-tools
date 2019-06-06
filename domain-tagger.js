// ==UserScript==
// @name         domain tagger
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*.reddit.com/*
// @match        https://reddit.com/*
// @grant        none
// ==/UserScript==

(function() {

    let domains = ['intelligenthq.com', 'reuters.com'];
    let domainColor = 'red';
    let words = ['temtum', 'supercalifragilisticexpialidocious'];
    let wordColor = 'red';

    $.expr[':'].icontains = function(a, i, m) {
        return $(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    $.each(domains, function(i, domain) {
        $(`a[href^="/domain/${domain}"]`).css('color', domainColor);
    });

    $.each(words, function(i, word) {
        console.log(word);
        $(`a:icontains(${word})`).replaceWith(function(){
            this.innerHTML = this.innerHTML.replace(word, `<span style="color: ${wordColor}">${word}</span>`);
            console.log(this);
            return $(this).html();
        });
    });
})();
