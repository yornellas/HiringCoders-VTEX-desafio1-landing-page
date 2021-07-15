const form = document.querySelector('.email-submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let data = {
        name,
        email,
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);


    let newContent = document.querySelector('#submit-form');
    newContent.innerHTML = `<p>E-mail cadastrado!</p>`;
});