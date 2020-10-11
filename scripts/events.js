{

	let header = document.getElementsByTagName('header')[0];
	let head_activator = document.getElementById('head-activator');

	let headerHeight = header.offsetHeight;
    

    function ScrollEvent() {

        if (pageYOffset > headerHeight) {
			header.className = 'under-start-page';

			//console.log("offsetHeight = " + header.offsetHeight);
		}

		if (pageYOffset < headerHeight) {
			header.className = '';
        }
        
        //alert("hello");
    }
    
    window.removeEventListener("scroll", GlobalScrollEvent);
    
    GlobalScrollEvent = ScrollEvent;

    window.addEventListener("scroll", ScrollEvent);





	/*function ActivarorInEvent() {

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

	head_activator.addEventListener('mouseout', ActivarorOutEvent);*/
}