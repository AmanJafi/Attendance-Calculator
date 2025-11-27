const credits = {
    IHS111: 3,
    ICS112: 5,
    ICS111: 5,
    IMA111: 4,
    IHS112: 1,
    IEC111: 5
};

const translation ={
    IHS111: "COMMUNICATION SKILLS",
    ICS112: "COMPUTER PROGRAMMING",
    ICS111: "IT WORKSHOP",
    IMA111: "DISCRETE MATHEMATICS",
    IHS112: "FOREIGN LANGUAGE",
    IEC111: "ELECTRONIC CIRCUITS"
}

const totalClassesTaken = {
    ICS111: 54,
    ICS112: 49,
    IEC111: 50,
    IMA111: 41,
    IHS111: 28,
    IHS112: 8
};


function findsub() {
    
    const subject = localStorage.getItem("subject");

    if (!subject) {
        alert("ERROR: No subject found. Please go back and select a subject first.");
        return;
    }
    const percentage = Number(document.getElementById("percentage").value);

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

document.getElementById("final").innerHTML = (`
<table border="2" cellpadding="5px" align="center">
    <tr><th colspan="5"><b>${translation[subject]}</b></th></tr>
    <tr><th><b>Current Attendance</b></th><th><b>Classes Attended</b></th><th><b>Future Classes</b></th><th><b>More Classes Required</b></th><th><b>Missable</b></th></tr>
    <tr><td><b>${percentage}%</b></td><td><b>${attended.toFixed(0)}</b></td><td><b>${future}</b></td><td><b>${future-x}</b></td><td><b>${x}</b></td></tr>
</table>
    `);
}

