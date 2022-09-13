
let btns =document.querySelectorAll(".tab-btn")
let articles =document.querySelectorAll(".content")
let about =document.querySelector(".about")

about.addEventListener("click", function(e){
	// console.log(e.target.dataset.id)
	const id = e.target.dataset.id;
	if (id) {
		//remove active from all btns
		btns.forEach(function(btn){
			btn.classList.remove("active")
			e.target.classList.add("active")
		})
		//hide articles
		articles.forEach(function(article){
			article.classList.remove("active")
	})
	const element = document.getElementById(id);
	element.classList.add("active");
}
})
