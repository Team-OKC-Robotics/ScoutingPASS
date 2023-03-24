function setUpGoogleSheets() {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwxYTdw7tkj9ZTOty313lcysZeAFJcTm5_YLTSGw9IAasg2LUpWfIyqNnk3q3a3EIQp/exec'
    const form = document.querySelector('#scoutingForm')
    const btn = document.querySelector('#submit')
 
    
    form.addEventListener('submit', e => {
      e.preventDefault()
      btn.disabled = true
      btn.innerHTML = "Sending..."

      let fd = getData(false)
      for (const [key, value] of fd) {
        console.log(`${key}: ${value}\n`);
      }

      fetch(scriptURL, { 
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'no-cors', 
        body: JSON.stringify(fd) 
      })
        .then(response => { 
              alert('Success!', response) })
        .catch(error => {
              alert('Error!', error.message)})

      btn.disabled = false
      btn.innerHTML = "Send to Google Sheets"
    })
}
