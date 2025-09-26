abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: number
    ){
    }
    abstract getSepia(): void
    getRealTime(){
        console.log('Real Time filter applied');
    }
} 


class facebook extends TakePhoto{
    constructor(cameraMode: string, filter: string, burstMode: number){
        super(cameraMode, filter, burstMode);
    }
    getSepia(){
        console.log('Sepia filter applied');
    }
}


const  shivesh = new facebook('Portrait', 'Normal', 10);
shivesh.getRealTime();