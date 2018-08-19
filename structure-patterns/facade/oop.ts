class VideoConverter {
    private prepared = false;
    constructor(
        private videoConverter: VideoFormatsConverter
    ) { }

    public prepareToConvert() {
        console.log('preparing to convert...');
        this.prepared = true;
    }

    public convert(): number[] {
        if (!this.prepared) throw new Error('Should be prepared');
        this.prepared = false;
        return this.videoConverter.convert();
    }
}

class VideoWriter {
    public writeToFile(fileName: string, videoBytes: number[]) {
        console.log('Save video bytes to file: ', fileName);
    }
}

abstract class VideoFormatsConverter {
    constructor(public fileName: string) { }
    abstract convert(): number[];
}

class MP4Converter extends VideoFormatsConverter {
    constructor(fileName: string) {
        super(fileName);
    }

    convert() {
        console.log('Convert to mp4, file: ', this.fileName);
        return [];
    }
}

class MPEGConverter extends VideoFormatsConverter {
    constructor(fileName: string) {
        super(fileName);
    }

    convert() {
        console.log('Convert to mpeg, file: ', this.fileName);
        return [];
    }
}

class VideoFacade {
    public static SaveInMP4ToFile(inputFileName: string, outputFileName: string) {
        const videoConverter = new VideoConverter(new MP4Converter(inputFileName));
        const videoWriter = new VideoWriter();
        videoConverter.prepareToConvert();
        const bytesToWrite = videoConverter.convert();
        videoWriter.writeToFile(outputFileName, bytesToWrite);
    }
}

VideoFacade.SaveInMP4ToFile('input.mpeg', 'output.mp4');