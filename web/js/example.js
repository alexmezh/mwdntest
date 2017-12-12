/**
 * Created by amezheritsky on 12.12.17.
 */

var Example = function () {
    // some initialization
};

Example.prototype = {

    cssId: 'example-widget',
    cssPath: '/css/example.css',

    dataUrl: "/media",

    defaults: {
        containerId: "videoBox",
        width: '960px',
        height: '540px'
    },

    embed: function (params) {
        var self = this;

        params = params || self.defaults;

        params = self._extend(params, self.defaults);

        document.addEventListener('DOMContentLoaded', function() {

            self.applyStyle();

            self.getData(function (responseData) {
                self.showWidget(responseData, params);
            });

        });
    },
    bindSelectEvent: function (sidebarElement, videoElement, data) {
        sidebarElement.addEventListener('click', function(e) {
            e.preventDefault();
            if(e.target.classList.contains('thumb')) {
                var index = e.target.getAttribute('data-index');

                videoElement.src = data[index].video_file_path;
                videoElement.poster = data[index].thumbnail;

                var thumbsCollection = e.target.parentElement.getElementsByClassName('thumb');

                for (var i = 0; i < thumbsCollection.length; i++) {
                    thumbsCollection[i].classList.remove('active');
                }

                e.target.classList.add('active');
            }
        });
    },
    applyStyle: function () {
        var self = this;
        if (!document.getElementById(self.cssId)) {

            var head  = document.getElementsByTagName('head')[0];
            var link  = document.createElement('link');

            link.id   = self.cssId;
            link.rel  = 'stylesheet';
            link.type = 'text/css';
            link.href = self.cssPath;
            link.media = 'all';

            head.appendChild(link);
        }
    },
    showWidget: function (responseData, params) {
        var self = this;

        var elementsCollection = document.getElementsByClassName(params.containerId);

        for (var i = 0; i < elementsCollection.length; i++) {
            var widget = elementsCollection[i];

            if (responseData.length == 0) {
                widget.innerText = 'no items';
                continue;
            }

            widget.innerHtml = '';

            if (!widget.classList.contains('exampleWidget')) {
                widget.classList.add('exampleWidget');
            }

            var sidebar = document.createElement('div');
            sidebar.classList.add('sidebar');
            sidebar.style.height = params.height;

            responseData.map(function (item, index) {

                var thumb = document.createElement('div');
                thumb.classList.add('thumb');

                if (index == 0) thumb.classList.add('active');

                thumb.style.backgroundImage = "url('" + item.thumbnail + "')";

                thumb.setAttribute('data-index', index);

                sidebar.appendChild(thumb);
            });

            var video = document.createElement('video');
            video.src = responseData[0].video_file_path;
            video.poster = responseData[0].thumbnail;
            video.controls = true;
            video.setAttribute('width', params.width);
            video.setAttribute('height', params.height);

            self.bindSelectEvent(sidebar, video, responseData);

            widget.appendChild(sidebar);
            widget.appendChild(video);
        }
    },
    getData: function (callback) {
        var self = this;

        var Request = new XMLHttpRequest();

        Request.onreadystatechange = function() {
            if (Request.readyState == XMLHttpRequest.DONE) {
                if (Request.status == 200) {
                    var responseData = JSON.parse(Request.responseText);

                    callback(responseData);

                } else if (Request.status == 404) {
                    console.warn('Not found');
                } else {
                    console.error('Request failed');
                }
            }
        };

        Request.open("GET", self.dataUrl, true);
        Request.send();
    },
    _extend: function (a, b) {
        for(var key in b)
            if(!a.hasOwnProperty(key))
                a[key] = b[key];
        return a;
    }
};

Example = new Example();