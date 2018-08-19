class ImageState {
    private static constructorCallCounter = 0;
    public readonly id: number;
    constructor(public readonly image: string) {
        this.id = ImageState.constructorCallCounter;
        ImageState.constructorCallCounter++;
    }
}

const images: ImageState[] = [new ImageState('test')];
console.log((images as any).find(imageState => imageState.image === 'test').image);
