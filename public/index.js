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

function editUser(userId){
  axios.get(`/expense/${userId}`)
  .then(response =>{
    const amount = document.getElementById('amount');
    const etype = document.getElementById('etype');
    const date = document.getElementById('date');

    amount.value = response.data.amount;
    etype.value= response.data.etype;
    date.value= response.data.date;

    const btn = document.getElementById('submit');
      btn.addEventListener('click', e => {
        e.preventDefault();

        const updateData = {
          amount: amount.value,
          etype: etype.value,
          date: date.value
        };

        axios.put(`/expense/edit-expense/${userId}`, updateData)
          .then(response => {
            console.log(response);
            location.reload();
          })
          .catch(error => {
            console.log(error);
          });
      });
    
  })
  .catch(error =>{
    console.log(error)
  })
}