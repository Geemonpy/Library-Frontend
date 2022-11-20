// change navbar style on scroll 

window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})


// Show/hide faq answers 

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
  faq.addEventListener('click', ()=>{
    faq.classList.toggle('open');

    // change icon 
    const icon = faq.querySelector('.faqs__icon i');
    if(icon.className === 'uil uil-plus'){
      icon.className = 'uil uil-minus';
    } else {
      icon.className = 'uil uil-plus';
    }
  } )
}) 


// Show/Hide nav menu 
const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', ()=>{
  menu.style.display = 'block';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
})

closeBtn.addEventListener('click', ()=>{
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
})

// // FORM VALIDATION //

// const name = document.querySelector('.name') || null;
// const email = document.querySelector('.email');
// const password = document.querySelector('.password');
// const submitBtn = document.get('submit-btn');

// if(name == null){

// } else{
//   submitBtn.addEventListener('click', () => {
//     fetch('/signup',{
//       method: 'post',
//       headers:new Headers({'Content-Type': 'application/json'}),
//       body: JSON.stringify({
//         name: name.value,
//         email: email.value,
//         password: password.value
//       })
//     })
//     .then(res => res.json())
//     .then(data => {
//       if(data.name){
//         alert('register succesful');
//       } else{
//         alert('data');
//       }
//     })
//   })
// }


// form validation

const name = document.querySelector('.name') || null;
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

if( name == null){ // means login page is open
    submitBtn.addEventListener('click', () => {
        fetch('/login-user',{
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })
} else{ // means register page is open

    submitBtn.addEventListener('click', () => {
        fetch('/signup-user', {
            method: 'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                password: password.value
            })
        })
        .then(res => res.json())
        .then(data => {
            validateData(data);
        })
    })

}
