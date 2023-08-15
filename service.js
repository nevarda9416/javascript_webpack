var services = {
    apiUrl: 'https://616d228137f997001745d882.mockapi.io/Product/',
    request: function (requestType, url, data) {
        var ajaxOptions = {
            url: this.apiUrl + url,
            type: requestType,
            dataType: 'json',
            contentType: 'application/json;charset=utf-8',
            data: null
        };
        if (ajaxOptions.type.toUpperCase() == 'GET') {
            ajaxOptions.data = data;
        } else if (ajaxOptions.contentType == 'application/json;charset=utf-8') {
            ajaxOptions.data = data ? JSON.stringify(data) : null;
        }
        return $.ajax(ajaxOptions);
    },
    get: function (url, data) {
        return this.request('GET', url, data);
    },
    post: function (url, data) {
        return this.request('POST', url, data);
    },
    put: function (url, data) {
        return this.request('PUT', url, data);
    },
    delete: function (url, data) {
        return this.request('DELETE', url, data);
    },
    requestWithAuthentication: function (requestType, url, data) {
        //5. Lấy access token
        var token = this.getAccessToken();
        //6. Kiểm tra token hết hạn hay chưa
        if (token) {
            // Nếu access token hết hạn, gửi refresh token để lấy access token mới
            if (new Date(token['expires']) <= new Date() && token.refresh_token) {
                this.refreshToken(token.refresh_token);
                window.location.href = 'Product.html';
            }
        }
        //7. Gửi access token cùng request
        var ajaxOptions = {
            url: this.apiUrl + url,
            type: requestType,
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            data: data,
            // Set Bearer token vào header của request
            headers: {
                'authorization': `Bearer ${token.access_token}`
            }
        };
        if (ajaxOptions.type.toUpperCase() == 'GET') {
            ajaxOptions.data = data;
        } else if (ajaxOptions.contentType == 'application/x-www-form-urlencoded') {
            ajaxOptions.data = data ? JSON.stringify(data) : null;
        }
        return $.ajax(ajaxOptions);
    },
    getWithAuthentication: function (url, data) {
        return this.requestWithAuthentication('GET', url, data);
    },
    postWithAuthentication: function (url, data) {
        return this.requestWithAuthentication('POST', url, data);
    },
    login: function (username, password) {
        var self = this;
        var userInfo = {
            userName: username,
            passWord: password
        };
        //1. Call api để xác thực người dùng
        return $.ajax({
            url: this.apiUrl + 'auth',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            data: userInfo,
            //2. Trả về thông tin của token
            success: function (token) {
                //3. Lưu thông tin token
                self.setAccessToken(token);
                // Xóa message lỗi nếu có
                $('#messageLoginError').html('');
                //4. Chuyển về trang sản phẩm
                window.location.href = 'Product.html';
            },
            error: function (response) {
                // Hiển thị lỗi nếu login không thành công
                $('#messageLoginError').html(response.responseJSON);
            }
        });
    },
    getAccessToken: function () {
        return JSON.parse(sessionStorage.getItem('_accessToken'));
    },
    setAccessToken: function (token) {
        sessionStorage.setItem('_accessToken', JSON.stringify(token));
    },
    refreshToken: function (refreshToken) {
        var self = this;
        // Remove current access token
        self.setAccessToken(null);
        // Refresh the access token
        var data = {
            grant_type: 'refresh_token',
            refresh_token: refreshToken
        };
        return $.ajax({
            url: this.apiUrl + 'auth',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/x-www-form-urlencoded',
            data: data
        }).success(function (token) {
            self.setAccessToken(token);
        });
    }
};
services.login();
