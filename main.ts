namespace Dog_Commands {
    const debounceInterval = 500;
    const moveDebounceInterval = 100;
    let lastCommandTime = 0;

    // ========= PINK COLOR FUNCTIONS (MOVEMENT & MODE) =========

    // Movement Command
    //% group="Movement"
    //% blockId=MoveGo2
    //% block="Move Dog x:%x y:%y z:%z"
    //% x.min=-1 x.max=1 x.defl=0
    //% y.min=-1 y.max=1 y.defl=0
    //% z.min=-1 z.max=1 z.defl=0
    //% weight=100 
    //% color="#ff6680" 
    //% icon="\uf021"
    export function moveDog(x: number, y: number, z: number) {
        const currentTime = control.millis();
        if (currentTime - lastCommandTime > moveDebounceInterval) {
            lastCommandTime = currentTime;
            let command = `Move,${x},${y},${z}\n`;
            radio.sendString(command);
            console.log(`Move command sent: ${command}`);
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

    /**
     * Mode Switcher
     */
    //% blockId=Mode_Switcher
    //% group="Mode Switch"
    //% block="Change Mode to %mode"
    //% weight=100 
    //% color="#ff6680" 
    //% icon="\uf021"
    export function modeSwitch(mode: ModeSwitch) {
        const currentTime2 = control.millis();
        if (currentTime2 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime2;
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
                    console.log("Unknown mode command");
            }
        }
    }

    // ========= NORMAL & AI COMMAND FUNCTIONS =========
    
    // Normal Mode Commands
    export enum NormalCommands {
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

    //% blockId=Normal_Command
    //% block="(Normal) Tell Dog to %command"
    //% group="Commands"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=4
    //% command.fieldOptions.tooltips="false"
    //% command.fieldOptions.width="100"
    //% weight=98 
    //% color="#9370DB" 
    //% icon="\uf021"
    export function sendNormalCommand(command: NormalCommands) {
        const currentTime3 = control.millis();
        if (currentTime3 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime3;
            switch (command) {
                case NormalCommands.Sit:
                    radio.sendString("Sit \n");
                    console.log("Command: Sit");
                    break;
                case NormalCommands.RiseSit:
                    radio.sendString("RiseSit \n");
                    console.log("Command: RiseSit");
                    break;
                case NormalCommands.StandUp:
                    radio.sendString("StandUp \n");
                    console.log("Command: StandUp");
                    break;
                case NormalCommands.StandDown:
                    radio.sendString("StandDown \n");
                    console.log("Command: StandDown");
                    break;
                case NormalCommands.Hello:
                    radio.sendString("Hello \n");
                    console.log("Command: Hello");
                    break;
                case NormalCommands.Stretch:
                    radio.sendString("Stretch \n");
                    console.log("Command: Stretch");
                    break;
                case NormalCommands.Wallow:
                    radio.sendString("Wallow \n");
                    console.log("Command: Wallow");
                    break;
                case NormalCommands.Dance1:
                    radio.sendString("Dance1 \n");
                    console.log("Command: Dance 1");
                    break;
                case NormalCommands.Dance2:
                    radio.sendString("Dance2 \n");
                    console.log("Command: Dance 2");
                    break;
                case NormalCommands.FrontJump:
                    radio.sendString("FrontJump \n");
                    console.log("Command: Front Jump");
                    break;
                case NormalCommands.FrontPounce:
                    radio.sendString("FrontPounce \n");
                    console.log("Command: Front Pounce");
                    break;
                default:
                    console.log("Unknown command");
            }
        }
    }

    // AI Mode Commands
    export enum AICommands {
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

    //% blockId=AI_Command
    //% block="(AI) Tell Dog to %command"
    //% group="Commands"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=4
    //% command.fieldOptions.tooltips="false"
    //% command.fieldOptions.width="100"
    //% weight=97 
    //% color="#9370DB"
    //% icon="\uf021"
    export function sendAICommand(command: AICommands) {
        const currentTime4 = control.millis();
        if (currentTime4 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime4;
            switch (command) {
                case AICommands.Handstand:
                    radio.sendString("Handstand \n");
                    console.log("Command: Handstand");
                    break;
                case AICommands.StandDown:
                    radio.sendString("StandDown \n");
                    console.log("Command: StandDown");
                    break;
                case AICommands.Bound:
                    radio.sendString("Bound \n");
                    console.log("Command: Bound");
                    break;
                case AICommands.BackFlip:
                    radio.sendString("BackFlip \n");
                    console.log("Command: BackFlip");
                    break;
                case AICommands.FrontFlip:
                    radio.sendString("FrontFlip \n");
                    console.log("Command: FrontFlip");
                    break;
                default:
                    console.log("Unknown command");
            }
        }
    }

    // ========= GREEN COLOR FUNCTIONS (ON/OFF TOGGLES) =========

    export enum ObstacleAvoidance {
        //% block="Obstacle Avoidance On"
        ObstacleOn,
        //% block="Obstacle Avoidance Off"
        ObstacleOff
    }

    export enum FreeAvoidance {
        //% block="Free Avoidance On"
        FreeAvoidOn,
        //% block="Free Avoidance Off"
        FreeAvoidOff
    }

    export enum StairWalking {
        //% block="Stair Walking On"
        StairWalkOn,
        //% block="Stair Walking Off"
        StairWalkOff
    }

    export enum LeadFollow {
        //% block="Lead Follow On"
        LeadFollowOn,
        //% block="Lead Follow Off"
        LeadFollowOff
    }

    export enum FreeBound {
        //% block="Free Bound On"
        FreeBoundOn,
        //% block="Free Bound Off"
        FreeBoundOff
    }

    export enum FreeJump {
        //% block="Free Jump On"
        FreeJumpOn,
        //% block="Free Jump Off"
        FreeJumpOff
    }

    /**
     * Obstacle Avoidance Control
     */
    //% blockId=Obstacle_Avoidance_Control
    //% block="Set %mode"
    //% weight=99
    //% group="Motion Control"
    //% color="#33cc33"
    //% icon="\uf05b"
    export function obstacleAvoidanceControl(mode: ObstacleAvoidance) {
        const currentTime5 = control.millis();
        if (currentTime5 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime5;
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
     * Free Avoidance Control 
     */
    //% blockId=Free_Avoidance_Control
    //% block="Set %mode"
    //% weight=98
    //% color="#33cc33"
    //% icon="\uf05b"
    export function freeAvoidanceControl(mode: FreeAvoidance) {
        const currentTime6 = control.millis();
        if (currentTime6 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime6;
            switch (mode) {
                case FreeAvoidance.FreeAvoidOn:
                    radio.sendString("FreeAvoidOn\n");
                    console.log("Free Avoidance: Enabling");
                    break;
                case FreeAvoidance.FreeAvoidOff:
                    radio.sendString("FreeAvoidOff\n");
                    console.log("Free Avoidance: Disabling");
                    break;
                default:
                    console.log("Unknown free avoidance command");
            }
        }
    }

    /**
     * Stair Walking Control 
     */
    //% blockId=Stair_Walking_Control
    //% block="Set %mode"
    //% weight=97
    //% color="#33cc33"
    //% icon="\uf05b"
    export function stairWalkingControl(mode: StairWalking) {
        const currentTime7 = control.millis();
        if (currentTime7 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime7;
            switch (mode) {
                case StairWalking.StairWalkOn:
                    radio.sendString("StairWalkOn\n");
                    console.log("Stair Walking: Enabling");
                    break;
                case StairWalking.StairWalkOff:
                    radio.sendString("StairWalkOff\n");
                    console.log("Stair Walking: Disabling");
                    break;
                default:
                    console.log("Unknown stair walking command");
            }
        }
    }

    /**
     * Lead Follow Control 
     */
    //% blockId=Lead_Follow_Control
    //% block="Set %mode"
    //% weight=96
    //% color="#33cc33"
    //% icon="\uf05b"
    export function leadFollowControl(mode: LeadFollow) {
        const currentTime8 = control.millis();
        if (currentTime8 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime8;
            switch (mode) {
                case LeadFollow.LeadFollowOn:
                    radio.sendString("LeadFollowOn\n");
                    console.log("Lead Follow: Enabling");
                    break;
                case LeadFollow.LeadFollowOff:
                    radio.sendString("LeadFollowOff\n");
                    console.log("Lead Follow: Disabling");
                    break;
                default:
                    console.log("Unknown lead follow command");
            }
        }
    }

    /**
     * Free Bound Control 
     */
    //% blockId=Free_Bound_Control
    //% block="Set %mode"
    //% weight=95
    //% color="#33cc33"
    //% icon="\uf05b"
    export function freeBoundControl(mode: FreeBound) {
        const currentTime9 = control.millis();
        if (currentTime9 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime9;
            switch (mode) {
                case FreeBound.FreeBoundOn:
                    radio.sendString("FreeBoundOn\n");
                    console.log("Free Bound: Enabling");
                    break;
                case FreeBound.FreeBoundOff:
                    radio.sendString("FreeBoundOff\n");
                    console.log("Free Bound: Disabling");
                    break;
                default:
                    console.log("Unknown free bound command");
            }
        }
    }

    /**
     * Free Jump Control 
     */
    //% blockId=Free_Jump_Control
    //% block="Set %mode"
    //% weight=94
    //% color="#33cc33"
    //% icon="\uf05b"
    export function freeJumpControl(mode: FreeJump) {
        const currentTime10 = control.millis();
        if (currentTime10 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime10;
            switch (mode) {
                case FreeJump.FreeJumpOn:
                    radio.sendString("FreeJumpOn\n");
                    console.log("Free Jump: Enabling");
                    break;
                case FreeJump.FreeJumpOff:
                    radio.sendString("FreeJumpOff\n");
                    console.log("Free Jump: Disabling");
                    break;
                default:
                    console.log("Unknown free jump command");
            }
        }
    }
}
