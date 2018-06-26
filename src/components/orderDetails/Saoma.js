export default class Saoma {
    constructor(_el) {
        this.el = _el;
        this.canvas = document.getElementById(this.el);
        console.log(this.canvas);
        this.cxt = this.canvas.getContext("2d");

        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
        window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL;

        this.exArray = []; //存储设备源ID  
        MediaStreamTrack.getSources(function (sourceInfos) {
            for (let i = 0; i != sourceInfos.length; ++i) {
                let sourceInfo = sourceInfos[i];
                //这里会遍历audio,video，所以要加以区分  
                if (sourceInfo.kind === 'video') {
                    this.exArray.push(sourceInfo.id);
                }
            }
        });


    }


    getMedia() {
        if (navigator.getUserMedia) {
            navigator.getUserMedia({
                'video': {
                    'optional': [{
                        'sourceId': exArray[1] //0为前置摄像头，1为后置  
                    }]
                },
                'audio': true
            }, successFunc, errorFunc);    //success是获取成功的回调函数  
        }
        else {
            alert('Native device media streaming (getUserMedia) not supported in this browser.');
        }
    }


    successFunc(stream) {
        //alert('Succeed to get media!');  
        if (video.mozSrcObject !== undefined) {
            //Firefox中，video.mozSrcObject最初为null，而不是未定义的，我们可以靠这个来检测Firefox的支持  
            video.mozSrcObject = stream;
        }
        else {
            video.src = window.URL && window.URL.createObjectURL(stream) || stream;
        }

        //video.play();  

        // 音频  
        audio = new Audio();
        audioType = getAudioType(audio);
        if (audioType) {
            audio.src = 'polaroid.' + audioType;
            audio.play();
        }
    }
    errorFunc(e) {
        alert('Error！' + e);
    }


    // 将视频帧绘制到Canvas对象上,Canvas每60ms切换帧，形成肉眼视频效果  
    drawVideoAtCanvas(video, context) {
        window.setInterval(function () {
            context.drawImage(video, 0, 0, 90, 120);
        }, 60);
    }

    //获取音频格式  
    getAudioType(element) {
        if (element.canPlayType) {
            if (element.canPlayType('audio/mp4; codecs="mp4a.40.5"') !== '') {
                return ('aac');
            } else if (element.canPlayType('audio/ogg; codecs="vorbis"') !== '') {
                return ("ogg");
            }
        }
        return false;
    }


    //拍照  
    getPhoto() {
        context1.drawImage(video, 0, 0, 90, 120); //将video对象内指定的区域捕捉绘制到画布上指定的区域，实现拍照。  
    }

    //视频  
    getVedio() {
        drawVideoAtCanvas(video, context2);
    }

    videoShow() {
        alert("打开摄像头，并且将视频图像显示在蒙版背后。");
        this.cxt.beginPath(); //开始一条新的线
        this.cxt.moveTo(100, 100); //起始点
        this.cxt.lineTo(300, 200);
        this.cxt.lineTo(130, 350);
        this.cxt.strokeStyle = "red"; //描边颜色
        this.cxt.stroke(); //描边 动作
        this.cxt.fillStyle = "#32c3d1"; //填充颜色
        this.cxt.fill(); //填充 动作
        this.cxt.closePath(); //开始一条新的线
    }

}