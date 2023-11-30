const scriptURL = 'https://script.google.com/macros/s/AKfycbwFlmtD-KCnAeGuMBBALrhbZvPyLaE5BpHCy73tBnPat_vQUfydDkOZoqtnDVaTRofn/exec'
const labels = document.querySelectorAll('.form-control label')    
const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    labels.forEach(label=>{
        label.innerHTML = label.innerText
            .split('')
            .map((letter,idx)=>`<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
            .join('')
    })


    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })