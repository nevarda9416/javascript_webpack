var services = {
    apiUrl: "https://616d228137f997001745d882.mockapi.io/Product",
    request: function (requestType, url, data) {
        var ajaxOptions = {
            url: this.apiUrl + url,
            type: requestType,
            dataType: "json",
            contentType: "application/json;charset=utf-8",
            data: null
        };
        if (ajaxOptions.type.toUpperCase() == "GET") {
            ajaxOptions.data = data;
        } else if (ajaxOptions.contentType == "application/json;charset=utf-8") {
            ajaxOptions.data = data ? JSON.stringify(data) : null;
        }
        return $.ajax(ajaxOptions);
    },
    get: function (url, data) {
        return this.request("GET", url, data);
    },
    post: function (url, data) {
        return this.request("POST", url, data);
    },
    put: function (url, data) {
        return this.request("PUT", url, data);
    },
    delete: function (url, data) {
        return this.request("DELETE", url, data);
    }
};
services.request();