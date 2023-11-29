export function createCookie(cookieName: string, cookieValue: string, expire: string) {
    const date = new Date(expire);
    document.cookie = cookieName + " = " + cookieValue + "; expires = " + date.toString();
}

export function getCookie(cookieName: string) {
    const name = cookieName + "=";
    const allCookieArray = document.cookie.split(';');
    let i = 0;
    for (i; i < allCookieArray.length; i += 1) {
        const temp = allCookieArray[i].trim();
        if (temp.indexOf(name) === 0)
            return temp.substring(name.length, temp.length);
    }
    return '';
}

export function deleteCookie(cookieName: string) {
    document.cookie = cookieName + " = ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
}