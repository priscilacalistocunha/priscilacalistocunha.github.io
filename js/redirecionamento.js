function redirecionarUrl(urlDispositivos, urlPadrao) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android|iPad|iPhone/.test(userAgent)) {
        return window.location.replace(urlDispositivos);
    }

    return window.location.replace(urlPadrao);
}