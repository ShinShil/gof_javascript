class MovingImage {
    constructor(
        private x: number,
        private y: number,
        private imageState: ImageState) {
    }

    public get imageName(): string {
        return this.imageState.image;
    }

    public get imageStateId(): number {
        return this.imageState.id;
    }
}

class ImageState {
    private static constructorCallCounter = 0;
    public readonly id: number;
    constructor(public readonly image: string) {
        this.id = ImageState.constructorCallCounter;
        ImageState.constructorCallCounter++;
    }
}

class ImageFactory {
    private static imageStates: ImageState[] = [];
    static getMovingImage(x: number, y: number, image: string): MovingImage {
        let imageState = (this.imageStates as any)
            .find(imageState => imageState.image.toLowerCase() === image.toLowerCase());
        if (!imageState) {
            imageState = new ImageState(image);
            this.imageStates.push(imageState);
        }
        return new MovingImage(x, y, imageState);
    }
}

class ImageLogger {
    public static log(movingImage: MovingImage) {
        console.log('[imageLogger] ', movingImage.imageName, movingImage.imageStateId);
    }
}

console.log('Get two images');

const movingImages = [
    ImageFactory.getMovingImage(0,0,'cat'),
    ImageFactory.getMovingImage(0,0,'dog'),
    ImageFactory.getMovingImage(0,0,'dog'),
    ImageFactory.getMovingImage(0,0,'dog'),
    ImageFactory.getMovingImage(0,0,'dog')
]

movingImages.forEach(ImageLogger.log);

