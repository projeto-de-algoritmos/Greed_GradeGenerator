function endTimeProperty() {
    return function(a, b) {
        return a.endTime - b.endTime || a.days[0] - b.days[0];
    }
}
export default function intervalScheduling (data) {
    data.sort(endTimeProperty());
	var answer = {};
	var rejected = {};
	var filled = {};
	var temp = {};
	var valid = true;

	for (const subject of data) {
		if(!answer[subject.name]) {
			valid = true;
			for(const [day, hours] of Object.entries(subject.combinations)) {
				if(!filled[day] 
					|| (filled[day][0] >= subject.endTime && filled[day][1] >= subject.startTime)
					|| (filled[day][0] <= subject.endTime && filled[day][1] <= subject.startTime)) {
						temp[day] = hours;
					}
					else {
						rejected[subject.name] = subject;
						valid = false;
						break;
					}
				}
				if(valid) {
					for(const [day, hours] of Object.entries(temp)) {
						filled[day] = hours;
					}
					answer[subject.name] = subject;
				}
		}
	}

	console.log('ANSWER:');
	console.log(answer);

	console.log('REJECTED:')
	console.log(rejected);

}