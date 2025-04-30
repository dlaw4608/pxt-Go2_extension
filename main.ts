namespace Dog_Commands_BT {
    const debounceInterval = 500;
    const moveDebounceInterval = 100;
    let lastCommandTime = 0;
    /**
     * Sends a command to the dog over Bluetooth
     */
    //% blockId=Go2_Command_BT
    //% block="Tell Dog over Bluetooth to %command"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=4
    //% command.fieldOptions.tooltips="false"
    //% command.fieldOptions.width="100"
    //% weight=100
    //% color="#66ccff"
    //% icon="\uf287"
    export function sendCommandBT(command: DogCommands_BT) {
        const currentTime = control.millis();
        if (currentTime - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime;
            switch (command) {
                case DogCommands_BT.Sit:
                    bluetooth.uartWriteString("Sit\n");
                    console.log("BT Command: Sit");
                    break;
                case DogCommands_BT.RiseSit:
                    bluetooth.uartWriteString("RiseSit\n");
                    console.log("BT Command: RiseSit");
                    break;
                case DogCommands_BT.StandUp:
                    bluetooth.uartWriteString("StandUp\n");
                    console.log("BT Command: StandUp");
                    break;
                case DogCommands_BT.StandDown:
                    bluetooth.uartWriteString("StandDown\n");
                    console.log("BT Command: StandDown");
                    break;
                case DogCommands_BT.Hello:
                    bluetooth.uartWriteString("Hello\n");
                    console.log("BT Command: Hello");
                    break;
                case DogCommands_BT.Stretch:
                    bluetooth.uartWriteString("Stretch\n");
                    console.log("BT Command: Stretch");
                    break;
                case DogCommands_BT.Wallow:
                    bluetooth.uartWriteString("Wallow\n");
                    console.log("BT Command: Wallow");
                    break;
                case DogCommands_BT.Dance1:
                    bluetooth.uartWriteString("Dance1\n");
                    console.log("BT Command: Dance1");
                    break;
                case DogCommands_BT.Dance2:
                    bluetooth.uartWriteString("Dance2\n");
                    console.log("BT Command: Dance2");
                    break;
                case DogCommands_BT.FrontJump:
                    bluetooth.uartWriteString("FrontJump\n");
                    console.log("BT Command: FrontJump");
                    break;
                case DogCommands_BT.FrontPounce:
                    bluetooth.uartWriteString("FrontPounce\n");
                    console.log("BT Command: FrontPounce");
                    break;
                default:
                    console.log("BT: Unknown command");
            }
        }
    }
    /**
     * Move Dog over Bluetooth
     */
    //% blockId=MoveGo2_BT
    //% block="Move Dog over Bluetooth x:%x y:%y z:%z"
    //% x.min=-1 x.max=1 x.defl=0
    //% y.min=-1 y.max=1 y.defl=0
    //% z.min=-1 z.max=1 z.defl=0
    //% weight=100
    //% color="#66ccff"
    //% icon="\uf287"
    export function moveDogBT(x: number, y: number, z: number) {
        const currentTime2 = control.millis();
        if (currentTime2 - lastCommandTime > moveDebounceInterval) {
            lastCommandTime = currentTime2;
            let command = `Move,${x},${y},${z}\n`;
            bluetooth.uartWriteString(command);
            console.log(`BT Move command sent: ${command}`);
        } else {
            console.log("BT Move command skipped due to debounce interval");
        }
    }
    /**
     * Mode Switcher over Bluetooth
     */
    //% blockId=Mode_Switcher_BT
    //% block="Change Bluetooth Mode to %mode"
    //% weight=100
    //% color="#66ccff"
    //% icon="\uf287"
    export function modeSwitchBT(mode: ModeSwitchBT) {
        const currentTime3 = control.millis();
        if (currentTime3 - lastCommandTime > debounceInterval) {
            lastCommandTime = currentTime3;
            switch (mode) {
                case ModeSwitchBT.Normal:
                    bluetooth.uartWriteString("normal\n");
                    console.log("BT Mode: Normal");
                    break;
                case ModeSwitchBT.AI:
                    bluetooth.uartWriteString("ai\n");
                    console.log("BT Mode: AI");
                    break;
                default:
                    console.log("BT: Unknown mode");
            }
        }
    }
    // ENUM for Commands
    export enum DogCommands_BT {
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
    // ENUM for Mode Switcher
    export enum ModeSwitchBT {
        //% block="Normal Mode"
        Normal,
        //% block="AI Mode"
        AI,
    }
}
