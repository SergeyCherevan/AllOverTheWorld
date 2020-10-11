let opasity = 300;

function HideAndBlock(e, op = opasity) {

	Unvisible(e);

	setTimeout(Block, op, e);
}

function UnblockAndShow(e, op = opasity) {

	Unvisible(e);

	setTimeout(Show, op, e);
}



	

function Show(e) {

	e.classList.remove('unvisible');
	e.classList.add('visible');
}

function Unvisible(e) {

	e.classList.remove('visible');
	e.classList.add('unvisible');
}

function Block(e) {

	e.classList.remove('visible', 'unvisible');
}





let GlobalScrollEvent;

{

	let header = document.getElementsByTagName('header')[0];
	let start_page = document.getElementById('Start-page');
	let head_activator = document.getElementById('head-activator');

	let headerHeight = header.offsetHeight;
	let startHeight = start_page.offsetHeight;





	function ScrollEvent() {

		if (pageYOffset > (startHeight - headerHeight)) {
			header.className = 'under-start-page';

			//console.log("offsetHeight = " + header.offsetHeight);
		}

		if (pageYOffset < (startHeight - headerHeight)) {
			header.className = '';
		}

	}

	GlobalScrollEvent = ScrollEvent;

	window.addEventListener('scroll', ScrollEvent);





	function ActivarorInEvent() {

		if (pageYOffset > (startHeight - headerHeight)) {
			header.className = 'under-start-page activated';

			//console.log("offsetHeight = " + header.offsetHeight);
		}

	}

	head_activator.addEventListener('mouseover', ActivarorInEvent);





	function ActivarorOutEvent() {

		if (pageYOffset > (startHeight - headerHeight)) {
			header.className = 'under-start-page';

			//console.log("offsetHeight = " + header.offsetHeight);
		}

	}

	head_activator.addEventListener('mouseout', ActivarorOutEvent);


}










{
	let opasity = 300;

	let teacher_blocks = document.getElementsByClassName('teacher-block');

	let arrow_right = document.getElementById('arrow-right');
	let arrow_left = document.getElementById('arrow-left');

	let NumOfVisue = teacher_blocks.length - 1;

	for (; NumOfVisue > -1; NumOfVisue--) {
		if (teacher_blocks[NumOfVisue].className == 'teacher-block visible') break;
	}


	arrow_right.addEventListener('click', RightArrowEvent);
	arrow_left.addEventListener('click', LeftArrowEvent);




	function RightArrowEvent() {

		HideAndBlock(teacher_blocks[NumOfVisue], opasity);

		NumOfVisue = (NumOfVisue + 1) % teacher_blocks.length;

		setTimeout(UnblockAndShow, opasity, teacher_blocks[NumOfVisue], opasity);
	}

	function LeftArrowEvent() {

		HideAndBlock(teacher_blocks[NumOfVisue], opasity);

		NumOfVisue = (teacher_blocks.length + NumOfVisue - 1) % teacher_blocks.length;

		setTimeout(UnblockAndShow, opasity, teacher_blocks[NumOfVisue], opasity);
	}

}








{
	let I_want = document.getElementsByClassName('I-want');
	let Form = document.getElementById('Form-I-want-to-learn');
	let Close = document.getElementById('close-Form-I-want');

	/*for (let i = 0; i < I_want.length; i++) {
		I_want[i].addEventListener('click', Show_Form);
	}*/

	Close.addEventListener('click', Hide_Form);

	function Show_Form() {
		UnblockAndShow(Form, 500);
	}

	function Hide_Form() {
		HideAndBlock(Form, 500);
	}
}