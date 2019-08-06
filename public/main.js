const socket = io.connect('http://localhost:3000', {'forceNew' : true});

socket.on('messages', (data) =>{
  console.log(data);
  render(data);
})

function render(data) {
  let html = data.map(function(elem, index){
    return(`<div>
            <strong>${elem.author}</strong>:
            <em>${elem.text}</em>
            </div>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function  addMessage (e) {
  let payload ={
    author:document.getElementById('username').value,
    text: document.getElementById('texto').value,
  };

  socket.emit('new-message', payload);
  return false;
}