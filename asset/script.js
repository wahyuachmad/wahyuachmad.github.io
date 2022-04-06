var mode_dark = document.getElementById('mode-dark');
var main_body = document.getElementsByTagName('body')[0];
var menu_button = document.getElementById('menu-button');
var nav_item = document.getElementById('nav-item');
var btn_allstyle = document.getElementById('btn-allstyle');
var all_style = document.getElementById('all-style');

if (typeof(Storage) !== "undefined") {
	if (localStorage.getItem("set_mode_dark") == "mode_dark_key_ON") {
		main_body.classList.add("Night");
		mode_dark.checked = true;
	} else {
		main_body.classList.remove("Night");
		mode_dark.checked = false;
	}
	mode_dark.onclick = function(){
		if(mode_dark.checked == true){
			console.log("checked");
			main_body.classList.add("Night");
			localStorage.setItem("set_mode_dark", "mode_dark_key_ON");
		} else {
			main_body.classList.remove("Night");
			localStorage.removeItem("set_mode_dark");
		}
	}
} else {
  console.log("Browser tidak Support untuk localStorage");
}

menu_button.onclick = function(){
	nav_item.classList.toggle("show");
	this.classList.toggle("show");
}

btn_allstyle.onclick = function(){
	all_style.classList.toggle("show");
	this.classList.toggle("show");
}