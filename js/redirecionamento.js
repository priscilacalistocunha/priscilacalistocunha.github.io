function redirecionarUrl(urlDispositivos, urlPadrao) {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Verifica se é um dispositivo Android
    if (/android/i.test(userAgent)) {
        window.location.replace(urlDispositivos);
    }
    // Verifica se é um dispositivo iOS
    else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        window.location.replace(urlDispositivos);
    }
    // Se não for Android nem iOS, redireciona para o URL padrão
    else {
        window.location.replace(urlPadrao);
    }
}