var bookmarkNameInput = document.getElementById("bookmarkName");
var websiteURLInput = document.getElementById("websiteURL");
var displayedInfo = document.getElementById("bookInfoDisplayed");


var bookList = []
if(localStorage.getItem("ourBooks") !== null)
{
    bookList = JSON.parse(localStorage.getItem("ourBooks"))
    console.log(bookList)
    displayInfo()
}

function addBookInfo()
{
    var book = 
    {
        bookName : bookmarkNameInput.value,
        URL : websiteURLInput.value

    }
    bookList.push(book)
    localStorage.setItem("ourBooks",JSON.stringify(bookList))
    displayInfo()
    resetInfo()    
}
function resetInfo()
{
        bookmarkNameInput.value = null;
        websiteURLInput.value = null;     
}

function displayInfo()
{
    infoContainer = ''
    for(i=0 ; i<bookList.length ; i++)
    {
        infoContainer +=`   <tr>
        <td class="ps-2">${i+1}</td>
        <td>${bookList[i].bookName}</td>
        <td><button onclick="visitLink(${i})" class="text-white bg-success border-0 px-4 py-1" ><i class="fa-solid fa-eye text-white"></i>Visit</button></td>
        <td><button onclick="deleteInfo(${i})" class="text-white bg-danger border-0 px-4 py-1"><i class="fa-regular fa-trash-can text-white"></i>Delete</button></td>
      </tr>`

    }
    displayedInfo.innerHTML = infoContainer;

}
function deleteInfo(index)
{
            bookList.splice(index,1);
            localStorage.setItem("ourBooks",JSON.stringify(bookList))
            displayInfo()
  
}
function visitLink(urlIndex)
{
    if (bookList[urlIndex].URL != '')
    {
        window.location.href = bookList[urlIndex].URL;
    }
    else 
    {
        alert("Please enter a valid URL.");
    }
}

