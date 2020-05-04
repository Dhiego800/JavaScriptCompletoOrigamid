export default function initAccordion() {
	const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
	const activeClass = 'ativo';

	if(accordionList.length) {
		accordionList[0].classList.add(activeClass);
		accordionList[0].nextElementSibling.classList.add(activeClass);

		function activeAcccordion() {
			this.classList.toggle(activeClass);
			this.nextElementSibling.classList.toggle(activeClass);
		}

		accordionList.forEach((item) =>{
			item.addEventListener('click', activeAcccordion);
		})
	}
}