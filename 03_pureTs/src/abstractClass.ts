abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }
    abstract getSepia(): void
    getReelTime(): number {
        // some complex calculation
        return 8
    }
}

class InstagramApp extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

// const hc = new TakePhoto("test","Test") // Not valid

// const hc = new InstagramApp("test","Test")

const hc = new InstagramApp("test", "Test", 3)
hc.getReelTime()