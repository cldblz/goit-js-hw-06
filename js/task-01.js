const categoriesRef = document.querySelector("#categories")
console.log("Number of categories:", categoriesRef.childElementCount)

for (const element of categoriesRef.children) {
    const categoryHeading = element.querySelector('h2').textContent
    const itemQuantity = element.querySelector('ul').childElementCount

    console.log("Category:", categoryHeading)
    console.log("Elements:", itemQuantity)
}