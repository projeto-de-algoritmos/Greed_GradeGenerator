function endTimeProperty() {
    return function(a, b) {
        return a.deadline - b.deadline;
    }
}

function addDays(d, days) {
    var date = new Date(d.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

export function minimizeLateness (data) {
	var d = [...data];
    d = d.sort(endTimeProperty());
	var answer = [];
	var t = new Date(new Date().toDateString());
	var s, f;

	for (let task of d){
		task.start = new Date(t.valueOf());
		task.end = addDays(task.start, task.duration);
		task.lateness = ((task.end - task.deadline) < 1)?(0):Math.floor((task.end - task.deadline)/(1000 * 3600 * 24));

		s = task.start;
		f = task.end;
		t = new Date(f.valueOf());
		
		answer.push(task);
	}

	return answer;
}

export function intervalScheduling (data) {
	var d = [...data];
    d = d.sort(endTimeProperty());
	var answer = [];
	var t = new Date(new Date().toDateString());
	var s;

	
	for (const task of d){
		s = new Date(task.deadline);
		s.setDate(s.getDate() - task.duration);
		if(!(answer.includes(task)) && s >= t){
			answer = [...answer, task];
			t = new Date(task.deadline);
		}
	}

	return answer;
}