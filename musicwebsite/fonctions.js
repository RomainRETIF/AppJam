function getParameters(param)
{
    var urlParams,
        match,
        pl = "\+\g," // Regex for replacing addition symbol with a space
    search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, )); },
        query = window.location.search.substring(1);
    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
    return urlParams[param];
}

function getAutorisationCode(){
    window.location = 'https://accounts.spotify.com/authorize?response_type=code&client_id=7a6c1cdb23c8425ba198f86ca77ce41c&scope=user-top-read&redirect_uri=http%3A%2F%2Flocalhost/musicwebsite/page.html';
}
 function getToken(callback){
     const data = "grant_type=authorization_code&code="+getParameters('code')+"&redirect_uri=http%3A%2F%2Flocalhost/musicwebsite/page.html&client_id=7a6c1cdb23c8425ba198f86ca77ce41c&client_secret=3ba8ea388bd74637a308f893bd21cfbd";

     const xhr = new XMLHttpRequest();
     xhr.withCredentials = true;

     xhr.addEventListener("readystatechange", function () {
         if (this.readyState === this.DONE) {
             callback(JSON.parse(this.responseText));
         }
     });

     xhr.open("POST", "https://accounts.spotify.com/api/token");
     xhr.setRequestHeader("cookie", "__Host-device_id=AQDJ8TZL0piObHtKDUOPvFQptyd8NxOQP-8pMpWUz6gBBsOLcQ1ySzk51CDPtvctBDnhjh2Fzs86kVLF1QgdE1v85wqCLcVXzl0");
     xhr.setRequestHeader("authorization", "Basic N2E2YzFjZGIyM2M4NDI1YmExOThmODZjYTc3Y2U0MWM6M2JhOGVhMzg4YmQ3NDYzN2EzMDhmODkzYmQyMWNmYmQ=");
     xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");

     xhr.send(data);

 }