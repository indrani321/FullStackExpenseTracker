fetch('/expense')
.then(response => response.json())
.then(results =>{
  const userList = document.getElementById('result');
  results.forEach(user => {
    const userItem = document.createElement('li')
    userItem.innerHTML=`
    AMOUNT:${user.amount},
    EXPENSE-TYPE:${user.etype},
    DATE:${user.date}
    <button onclick="editUser(${user.id})">EDIT</button>
    <button onclick="deleteUser(${user.id})">DELETE</button>`;
     
    userList.appendChild(userItem);
    })
  })
.catch(error=>console.log(error));

function deleteUser(userId){
    axios.delete(`/expense/delete-expense/${userId}`)
    .then(response=>{
        console.log(response);
        location.reload();
    })
    .catch(error=>{
        console.log(error);
    })
}