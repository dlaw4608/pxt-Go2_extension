namespace Dog_Commands {
    const debounceInterval = 500;
    const moveDebounceInterval = 100;
    let lastCommandTime = 0;

    
    /**
     * Sends a command to the dog
     */
    //% blockId=Go2_Command
    //% block="(normal) Tell Dog to %command"
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
                case DogCommands.Dance1:
                    radio.sendString("Dance1 \n");
                    console.log("Command: Dance 1");
                    break;
                case DogCommands.Dance2:
                    radio.sendString("Dance2 \n");
                    console.log("Command: Dance 2");
                    break;
                case DogCommands.FrontJump:
                    radio.sendString("FrontJump \n");
                    console.log("Command: Front Jump");
                    break;
                case DogCommands.FrontPounce:
                    radio.sendString("FrontPounce \n");
                    console.log("Command: Front Pounce");
                    break;
                default:
                    console.log("Unknown command");
            }
        }
    }

    /**
        * Sends a command to the dog (AI Only)
        */
    //% blockId=Go2_CommandAI
    //% block="(AI) Tell Dog to %command"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=4
    //% command.fieldOptions.tooltips="false"
    //% command.fieldOptions.width="100"
    //% weight=100 
    //% color="#ff6680" 
    //% icon="\uf021"
    export function sendAICommand(command: DogCommandsAI) {
        const currentTime2 = control.millis();
        if (currentTime2 - lastCommandTime > debounceInterval) {
            switch (command) {
                case DogCommandsAI.Handstand:
                    radio.sendString("Handstand \n");
                    console.log("Command: Handstand");
                    break;
                case DogCommandsAI.StandDown:
                    radio.sendString("StandDown \n");
                    console.log("Command: StandDown");
                    break;
                case DogCommandsAI.Bound:
                    radio.sendString("Bound \n");
                    console.log("Command: Bound");
                    break;
                case DogCommandsAI.BackFlip:
                    radio.sendString("BackFlip \n");
                    console.log("Command: BackFlip");
                    break;
                case DogCommandsAI.FrontFlip:
                    radio.sendString("FrontFlip \n");
                    console.log("Command: FrontFlip");
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
        //% block="Dance 1"
        Dance1,
        //% block="Dance 2"
        Dance2,
        //% block="Front Jump"
        FrontJump,
        //% block="Front Pounce"
        FrontPounce

    }

    export enum DogCommandsAI {
        //% block="Handstand"
        Handstand,
        //% block="StandDown"
        StandDown,
        //% block="Bound"
        Bound,
        //% block="BackFlip"
        BackFlip,
        //% block="FrontFlip"
        FrontFlip
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
        const currentTime22 = control.millis();
        if (currentTime22 - lastCommandTime > moveDebounceInterval) {
            lastCommandTime = currentTime22;
            let command = `Move,${x},${y},${z}\n`;
            radio.sendString(command);
            console.log('Move command sent: ${ command }');
        } else {
            console.log("Move command skipped due to debounce interval");
        }
    }

    export enum ModeSwitch {
        //% block="Normal Mode"
        Normal,
        //% block="AI Mode"
        AI,
    }

    export enum ObstacleAvoidance {
        //% block="Obstacle Avoidance On"
        ObstacleOn,
        //% block="Obstacle Avoidance Off"
        ObstacleOff
    }

    /**
     * Obstacle Avoidance Control
     */
    //% blockId=Obstacle_Avoidance_Control
    //% block="Set %mode"
    //% weight=99
    //% color="#33cc33"
    //% icon="\uf05b"
    export function obstacleAvoidanceControl(mode: ObstacleAvoidance) {
        const currentTime3 = control.millis();
        if (currentTime3 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime3;
            switch (mode) {
                case ObstacleAvoidance.ObstacleOn:
                    radio.sendString("ObstacleOn\n");
                    console.log("Obstacle Avoidance: Enabling");
                    break;
                case ObstacleAvoidance.ObstacleOff:
                    radio.sendString("ObstacleOff\n");
                    console.log("Obstacle Avoidance: Disabling");
                    break;
                default:
                    console.log("Unknown obstacle command");
            }
        }
    }


    /**
     * Mode Switcher
     */
    //% blockId=Mode_Switcher
    //% block="Change Mode to %mode"
    //% weight=100 
    //% color="#ff6680" 
    //% icon="\uf021"
    export function modeSwitch(mode: ModeSwitch) {
        const currentTime32 = control.millis();
        if (currentTime32 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime32;
            switch (mode) {
                case ModeSwitch.Normal:
                    radio.sendString("normal\n");
                    console.log("Mode: Changing to Normal mode");
                    break;
                case ModeSwitch.AI:
                    radio.sendString("ai\n");
                    console.log("Mode: Changing to AI Mode");
                    break;
                default:
                    console.log("Unknown command");
            }
        }
    }
}
