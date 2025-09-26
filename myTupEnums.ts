const user: string[] = ["Shivesh", "Shivam", "Shubham"];

//tupless
let admin: [string, number, boolean]

admin = ["Shivesh", 26, true]

let rgb: [number, number, number] = [255, 0, 0]

//enum - retrict the values to a set of predefined values
enum Weekdays {  
    SUN = "sunday",
    MON = "monday",
    TUE = "tuesday",
    WED = "wednesday",
    THU = "thursday",
    FRI = "friday",
    SAT = "saturday"
}

let day: Weekdays = Weekdays.MON

enum SeatChoice {
    ASILE ,
    MIDDLE ,
    WINDOW
}

const hcseat: SeatChoice = SeatChoice.ASILE 