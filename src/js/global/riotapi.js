function generateFullRiotApiRequestURL(server, isRegionalServer, url, params = "") {
    return `https://${determineServerUrl(server, isRegionalServer)}.api.riotgames.com${url}?api_key=${window.riotApiKey}${params}`;
}

function determineServerUrl(serverName, isRegional = false) {
    if (isRegional) {
        switch (serverName) {
            case "br1":
            case "la1":
            case "la2":
            case "na1":
                return "americas";
            case "jp1":
            case "kr":
                return "asia";
            case "eun1":
            case "euw1":
            case "tr1":
            case "ru":
                return "europe";
            case "oc1":
            case "ph2":
            case "sg2":
            case "tw2":
            case "th2":
            case "vn2":
                return "sea";
        }
    }

    return window.appSettings.user.region;
}

function handleRiotApiError(statusCode) {
    const confirmModalMessage = jQuery("#simpleConfirmModal_messageArea");

    switch (statusCode) {
        case 403:
            confirmModalMessage.html("Les serveurs de Riot Games n'autorisent pas la connexion du client. Réessayez ultérieurement. Si le problème persiste, pensez à vérifier la validité de la clé d'API utilisée.");
            break;
        case 404:
            confirmModalMessage.html("Aucun compte n'a été trouvé pour ce Riot ID. Vérifiez votre saisie et réessayez.");
            break;
        default:
            confirmModalMessage.html("Une erreur inconnue est survenue. Veuillez réessayer.");
            break;
    }

    setTimeout(() => {
        jQuery("#simpleConfirmModal").fadeIn(250);
    }, 250);
}

export { generateFullRiotApiRequestURL, handleRiotApiError }