function $$ (selectedElements) {
  const elements = document.querySelectorAll(selectedElements);

  function hide() {
    elements.forEach(element =>{
      element.style.display = 'none';
    });
    return this
  };

  function show() {
    elements.forEach(element =>{
      element.style.display = 'inital';
    });
    return this
  };

  function on(onEvent, callback) {
    elements.forEach(element => {
      element.addEventListener(onEvent, callback);
    });
    return this;
  }

  function addClass(className) {
    elements.forEach(element =>{
      element.classList.add(className);
    });
    return this;
  }
  function removeClass(className) {
    elements.forEach(element =>{
      element.classList.remove(className);
    });
    return this;
  }
  return {
    elements,
    hide,
    show,
    on,
    addClass,
    removeClass,
  }
}
const btns = $$('button');
//console.log(btns)

function handleClick(event) {
  console.log('Clicando. . .', event.target)
  btns.addClass('active');
}
btns.on('click', handleClick);
