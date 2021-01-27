// questions
let question = document.querySelectorAll('.q-container');
//toggle arrrows
let arrow = document.querySelectorAll('.toggle');
// answers
let answer = document.querySelectorAll('.a-container');
//identify active number
let active;
let lastActive;

//onlick events
for(let i = 0 ; i < 5 ; i++){
	question[i].onclick = () => {
		active = i;
		toggleActive();
		
		if(lastActive !== i || lastActive === undefined){
			hideLastActive();
		}
		lastActive = i;
	}
}

//show activate answer
function toggleActive(){
	answer[active].classList.toggle('active');
	question[active].classList.toggle('active');
}

//hide lastactive
function hideLastActive(){
	if(lastActive !== undefined){
		answer[lastActive].classList.remove('active');
		question[lastActive].classList.remove('active');
	}
}