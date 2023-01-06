const categoriesRef = document.querySelector("#categories")
console.log("Number of categories:", categoriesRef.children.length)

const categoryHeadingsRef = document.querySelectorAll(".item h2")
const categoryItemsRef = document.querySelectorAll(".item ul")

for (let i = 0; i <= 2; i += 1) {
    console.log("Category:", categoryHeadingsRef[i].textContent)
    console.log("Elements:", categoryItemsRef[i].children.length)
}