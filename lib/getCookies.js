module.exports = function(){
    return browser.getCookie().map(cookie=>{return cookie.name + '=' + cookie.value}).join(';');
};