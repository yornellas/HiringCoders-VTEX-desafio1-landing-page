const form = document.querySelector('.email-submit');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let courses = document.getElementsByName('option');
    let choice;

    for(let course of courses) {
        if(course.checked) {
            choice = course.value;
        }
    }

    let data = {
        name,
        email,
        choice
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);


    let newContent = document.querySelector('#submit-form');
    newContent.innerHTML = `<p>E-mail cadastrado!</p>`;
});