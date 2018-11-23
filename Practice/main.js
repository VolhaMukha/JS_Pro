let arrayLeft = null,
    arrayRight = [];
const promise = fetch('https://jsonplaceholder.typicode.com/todos');


const filter = function() {
  const editText = document.getElementById("search").value;
  const newArrayLeft = arrayLeft.filter(item => item.title.search(editText) !== -1);
  const newArrayRight = arrayRight.filter(item => item.title.search(editText) !== -1);  
  return [newArrayLeft, newArrayRight];
}

document.getElementById("search").addEventListener("keyup", function(event){
  appendOL(filter()[0], 0);
  appendOL(filter()[1], 1)
});

document.getElementById("sort").addEventListener("click", function(event) {
  arrayLeft.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
  arrayRight.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
  appendOL(filter()[0], 0);
  appendOL(filter()[1], 1)
});

promise
    .then(function (response) {
         return response.json();
    })
    .then(function (data) {
        arrayLeft = data;
        document.getElementsByTagName('section')[0].style.display = "block";
        appendOL(data, 0);
    })
    .catch(function (e) {
      alert(e.toString());
    });

const list = document.getElementsByTagName("ol");

// n = 0 (Left List), n = 1 (Right List)
const  appendOL = function(array, n){
  if (list[n].children.length){
        list[n].innerHTML = "";
    }
        const fragment = document.createDocumentFragment();
        const li = document.createElement('li');

    for (const item of array) {
            const cloneLi = li.cloneNode();
            cloneLi.innerText = item.title;
            fragment.appendChild(cloneLi);
            cloneLi.addEventListener("click", clickLi, false);
        }
        list[n].appendChild(fragment);
};

const clickLi = function (e) {
    let currArray = [];
    currArray = (document.getElementById("l") === e.target.parentNode)? arrayLeft : arrayRight;

    let filtered = currArray.filter(elem => elem.title != e.target.innerText.toString());
    let clicked = currArray.filter(elem => elem.title == e.target.innerText.toString());

    // Check 'L' or 'R' list was clicked
    if (document.getElementById("l") === e.target.parentNode) {
        arrayRight.push(...clicked);
        arrayLeft  = filtered;
    } else {
        arrayLeft.push(...clicked);
        arrayRight  = filtered;
    }

    appendOL(arrayLeft, 0);
    appendOL(arrayRight, 1);
};

// const func = async function () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         const json = await response.json();
//     } catch(e){
//
//     }
// };
// //
// // func();