interface TakePhoto{
    cameraMode: string;
    filter: string;
    burstMode: number;
}

interface story{
    createStory(): void;
}

class Instagram implements TakePhoto, story{
    constructor(public cameraMode: string, public filter: string, public burstMode: number){
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    createStory(){
        console.log('Story created');
    }
}