var Main = (function () {
    function Main() {
        Laya.init(750, 1334, laya.webgl.WebGL);
        Laya.stage.frameRate = Laya.Stage.FRAME_FAST;
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO; //设置缩放模式
        Laya.stage.on(Laya.Event.CLICK, this, this.onClick);
    }
    Main.prototype.onLoaded = function (data) {
        var ProtoBufRoot = new protobuf.Root();
        protobuf.parse(data, ProtoBufRoot);
        var Login = ProtoBufRoot.lookupType("pb.HD_LoginReq");
        var message = Login.create({ Account: "qiu" });
        console.log("message = " + JSON.stringify(message));
        var buffer = Login.encode(message).finish();
        console.log("buffer = " + Array.prototype.toString.call(buffer));
        var decoded = Login.decode(buffer);
        console.log("decoded = " + JSON.stringify(decoded));
    };
    Main.prototype.onClick = function () {
        Laya.loader.load("proto/cs.proto", Laya.Handler.create(this, this.onLoaded));
    };
    return Main;
}());
new Main();
//# sourceMappingURL=Main.js.map