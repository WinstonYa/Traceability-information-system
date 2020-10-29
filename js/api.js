const data = {
     // ip: "http://192.168.8.132:8766"
    // ip: "http://192.168.2.6:8766"
    //服务器地址
     ip: "http://192.168.8.166:8766",
     ip_2: "http://192.168.8.166:8766"

};

function doApi(sucFunc, errFunc, comFunc, url, type, params, contentType, async) {
    $.ajax({
        url: data.ip + url,
        data: params,
        type: type,
        async: async ? async : true,
        contentType: contentType,
        // async: true,
        success: sucFunc,
        error: function (res) {
            console.log(res)
        },
        complete: comFunc
    });
}

function doApiByJsonstr(sucFunc, errFunc, comFunc, url, type, params, async) {

    var jsonParams = null;
    if (params) {
        jsonParams = JSON.stringify(params);
    }
    doApi(sucFunc, errFunc, comFunc, url, type, jsonParams, 'application/json', async)
}
