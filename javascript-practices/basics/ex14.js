/**
 * URL
 */

/**
 * 예1) redirect
 * location.href = url;
 *
 * 예2) ajax 통신
 * $.ajax(url)
 * fetch(url)
 * axios(url)
 */

var url = 'http://www.mysite.com/user?name=나루토&email=naruto@gmail.com';

// 1. escape : URL 전체를 encoding, 사용(x), deprecated
var url2 = escape(url);
console.log(url2);

// 2. encodeURI : URL 전체 중 파라미터만 encoding, url 전체를 encoding 해야 하는 경우 사용
var url3 = encodeURI(url);
console.log(url3);

// 3. encodeURIComponent : 값만 encoding해야 하는 경우 사용
// url 전체를 encoding 해야 하는 경우 사용 X
var url4 = encodeURIComponent(url);
console.log('잘못된 사용 예' + ' ' + url4);

// 4. encodeURIComponent 사용 예
// 만들어야 할 URL: http://www.mysite.com/user?name=나루토&email=naruto@gmail.com

var url = 'http://www.mysite.com/user';
var formData = {
    name: '나루토',
    email: 'naruto@gmail.com',
};

var toQueryString = function (o) {
    var qs = [];
    for (prop in o) {
        qs.push(prop + '=' + encodeURIComponent(o[prop]));
    }

    return qs.join('&');
};

console.log(url + '?' + toQueryString(formData));
