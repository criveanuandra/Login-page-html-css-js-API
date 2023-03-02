const form = document.getElementById("sign-up-form");

form.onsubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  
  fetch('./user.json', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(Object.fromEntries(formData)),
  }).then((res) => res.json())
  .then((data) => console.log(data));
};
