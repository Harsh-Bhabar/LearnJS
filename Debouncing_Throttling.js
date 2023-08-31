
// q. create a btn UI and add debounce as follows -> 
	// show "btn pressed <x> times" everytime a btn is pressed
	// Increase "Triggerred <y> times" count after 800ms of debounce


let btn = document.querySelector(".increment_btn");
let btnPressed = document.querySelector(".increment_pressed")
let btnCnt = document.querySelector(".increment_cnt");
let throttle = document.querySelector(".increment_throttle");

let pressed = 0;
let eventCnt = 0;
let throttleCnt = 0;

const debounceCount = _.debounce(() => {
  btnCnt.innerHTML = ++eventCnt;
}, 800);

const throttleCount = _.throttle(() => {
	throttle.innerHTML = ++throttleCnt;
}, 800);

btn.addEventListener('click', ()=>{
	btnPressed.innerHTML = ++pressed;
	debounceCount();
	throttleCount();
})