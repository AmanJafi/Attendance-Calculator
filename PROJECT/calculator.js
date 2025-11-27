const credits = {
    IHS111: 3,
    ICS112: 5,
    ICS111: 5,
    IMA111: 4,
    IHS112: 1,
    IEC112: 5
};
const totalClassesTaken = {
    ICS111: 48,
    ICS112: 31,
    IEC111: 53,
    IMA111: 38,
    IHS111: 32,
    IHS112: 8
};

function findsub() {
    const subject = document.getElementById("selectedsubject").value;

    const percentage = Number(prompt("Enter your current attendance percentage:"));

    const totalTaken = totalClassesTaken[subject];

    const attended = (percentage / 100) * totalTaken;

    const future = credits[subject];

    let x = 0;

    while (true) {
        let finalAttendance = (attended + (future - x)) / (totalTaken + future);
        if (finalAttendance <= 0.80) break;
        x++;
        if (x > future) break;
    }

    x = x - 1;

    alert(
`For ${subject}

It looks like
Your Current Attendance Percentage is ${percentage}%
So the classes you attended so far: ${attended.toFixed(0)} 
There are ${future} more classes
You have to attend ${future-x} more classess to safely land at ${(((attended+future-x)/(totalTaken+future))*100).toFixed(2)}%
Maximum future classes you can miss: ${x}`
    );
}

