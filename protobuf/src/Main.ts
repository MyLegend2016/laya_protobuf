

class Main {

	constructor() {
		Laya.init(750, 1334, laya.webgl.WebGL);
		Laya.stage.frameRate = Laya.Stage.FRAME_FAST;
		Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO; //设置缩放模式
		Laya.stage.on(Laya.Event.CLICK, this, this.onClick);
	}

	private onLoaded(data: any): void {
		let ProtoBufRoot = new protobuf.Root();
		protobuf.parse(data, ProtoBufRoot);


		const Login = ProtoBufRoot.lookupType("pb.HD_LoginReq");

		let message = Login.create({ Account: "qiu"});
		console.log(`message = ${JSON.stringify(message)}`);

		let buffer = Login.encode(message).finish();
		console.log(`buffer = ${Array.prototype.toString.call(buffer)}`);

		let decoded = Login.decode(buffer);
		console.log(`decoded = ${JSON.stringify(decoded)}`);
	}

	private onClick(): void {
		Laya.loader.load("proto/cs.proto", Laya.Handler.create(this, this.onLoaded));
	}
}

new Main();