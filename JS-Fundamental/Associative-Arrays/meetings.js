function meetings(arr) {

    let meetingInfo = {}
    for (let info of arr) {
        let [dayOfWeek, name] = info.split(" ")
        if (meetingInfo.hasOwnProperty(dayOfWeek)) {
            console.log(`Conflict on ${dayOfWeek}!`);

        } else {
            meetingInfo[dayOfWeek] = name
            console.log(`Scheduled for ${dayOfWeek}`);

        }


    }
    for (let key in meetingInfo) {
        console.log(`${key} -> ${meetingInfo[key]}`);
    }

}



meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)