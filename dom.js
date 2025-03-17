
const titles=document.querySelectorAll("h1")
// adding attributes
titles[4].setAttribute('class','title')
console.log(titles.length)
// adding class using the class list
titles[0].classList.add('title','header-title')
console.log(titles.length)
// removing is also similars to the adding methode
titles[0].classList.remove('title','title-header')
// adding text to the html elements in javascripts
titles[4].classList.remove('title','ti')
titles[4].textContent="this the text that are added by using the javascripts"
console.log(titles[4].textContent)
// traversing the javacript DOM which means the navigation of from one node to other
// traversing fromchild to parent id
const child=document.getElementById("child")
console.log(child.parentNode.id)
const childs=document.getElementById("list")
console.log(childs.childNodes.length)
child.style.color='blue'
titles[0].classList.remove('title')
// removing child from the list
const ul=document.querySelectorAll('li')
console.log(ul.textContent)
// ul.style.color='red'
ul.remove.childNodes(list)
