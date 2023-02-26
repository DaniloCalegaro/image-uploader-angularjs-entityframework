(function () {
    var host = window.location.host;

    var routes = {
        Common: {
            Id: 1,
            Name: "UploaderImage",
            Url: "http://" + host
        },
        SistemaAtendimento: {
            Id: 4,
            Name: "Loading",
            Url: "http://" + host + "/loading/#/"
        },
        SistemaContabilidade: {
            Id: 11,
            Name: "FullLoad",
            Url: "http://" + host + "/fullload/#/"
        }
    };

    if (typeof window !== "undefined") {
        window.system_routes = routes;
    }

    if (typeof module !== "undefined") {
        module.exports = routes;
    }
})();