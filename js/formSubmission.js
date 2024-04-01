
    var form = document.getElementById("formspree-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
                status.className = "text-green-500";
            
          status.innerHTML = "Thanks for your message!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
                status.className = "text-red-500";
              status.innerHTML = "Oops! There was a problem sending your message"
            }
          })
        }
      }).catch(error => {
        status.className = "text-red-500";
        status.innerHTML = "Oops! There was a problem sending your message"

      });
    }
    form.addEventListener("submit", handleSubmit)