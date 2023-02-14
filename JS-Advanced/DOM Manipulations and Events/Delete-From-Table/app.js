// function deleteByEmail() {
//     let emailInputElement = document.querySelector('input[name="email"')
//     let emailTdElements = document.querySelectorAll('tr td:nth-of-type(2)')
//     let resultElement = document.getElementById('result')

//     let emailElements = Array.from(emailTdElements)
//     let targetElement = emailElements.find(x => x.textContent == emailInputElement.value)


//     if (targetElement) {
//         targetElement.parentNode.remove()
//         resultElement.textContent = 'Deleted.'


//     } else {
//         resultElement.textContent = 'Not found'
//     }

// }

function deleteByEmail() {
    let email = document.getElementsByName("email")[0].value;
    let secondColumn = document.querySelectorAll(
      "#customers tr td:nth-child(2)");
    for (let td of secondColumn)
      if (td.textContent == email) {
        let row = td.parentNode;
        row.parentNode.removeChild(row);
        document.getElementById('result').
          textContent = "Deleted.";
        return;
      }
    document.getElementById('result').textContent = "Not found.";
}