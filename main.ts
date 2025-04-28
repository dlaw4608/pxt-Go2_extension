namespace Dog_Commands {
    const debounceInterval = 500;
    const moveDebounceInterval = 100;
    let lastCommandTime = 0;

    
    /**
     * Sends a command to the dog
     */
    //% blockId=Go2_Command
    //% block="Tell Dog to %command"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=4
    //% command.fieldOptions.tooltips="false"
    //% command.fieldOptions.width="100"
    //% weight=100 
    //% color="#ff6680" 
    //% icon="\uf021"
    export function sendCommand(command: DogCommands) {
        const currentTime = control.millis();
        if (currentTime - lastCommandTime > debounceInterval) {
            switch (command) {
                case DogCommands.Sit:
                    radio.sendString("Sit \n");
                    console.log("Command: Sit");
                    break;
                case DogCommands.RiseSit:
                    radio.sendString("RiseSit \n");
                    console.log("Command: RiseSit");
                    break;
                case DogCommands.StandUp:
                    radio.sendString("StandUp \n");
                    console.log("Command: StandUp");
                    break;
                case DogCommands.StandDown:
                    radio.sendString("StandDown \n");
                    console.log("Command: StandDown");
                    break;
                case DogCommands.Hello:
                    radio.sendString("Hello \n");
                    console.log("Command: Hello");
                    break;
                case DogCommands.Stretch:
                    radio.sendString("Stretch \n");
                    console.log("Command: Stretch");
                    break;
                case DogCommands.Wallow:
                    radio.sendString("Wallow \n");
                    console.log("Command: Wallow");
                    break;
                default:
                    console.log("Unknown command");
            }
        }
    }

    export enum DogCommands {
        //% block="Sit"
        Sit,
        //% block="RiseSit"
        RiseSit,
        //% block="StandUp"
        StandUp,
        //% block="StandDown"
        StandDown,
        //% block="Hello"
        Hello,
        //% block="Stretch"
        Stretch,
        //% block="Wallow"
        Wallow,
    }


    //% blockId=MoveGo2
    //% block="Move Dog x:%x y:%y z:%z"
    //% x.min=-1 x.max=1 x.defl=0
    //% y.min=-1 y.max=1 y.defl=0
    //% z.min=-1 z.max=1 z.defl=0
    //% weight=100 
    //% color="#ff6680" 
    //% icon="\uf021"
    export function moveDog(x: number, y: number, z: number) {
        const currentTime2 = control.millis();
        if (currentTime2 - lastCommandTime > moveDebounceInterval) {
            lastCommandTime = currentTime2;
            let command = 'Move, ${ x }, ${ y }, ${ z }\n';
            radio.sendString(command);
            console.log('Move command sent: ${ command }');
        } else {
            console.log("Move command skipped due to debounce interval");
        }
    }
}
