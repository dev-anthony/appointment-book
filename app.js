var swiperStyle = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 90,
  loop: true,
  smooth: true,
  autoplay: {
    delay: 3000, // Slide changes every 3 seconds
    disableOnInteraction: false,
},
  centerSlide:'true',
  fade:'true',
  grabCursor:'true',
   pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    0:{
      slidesPerView:1,
    },
   
   
  },
});

//testimonials
var swiperTestimonial = new Swiper(".testimonial-content", {
  slidesPerView: 1,
  spaceBetween: 50,
  loop: true,
  smooth: true,
  autoplay: {
    delay: 3000, // Slide changes every 3 seconds
    disableOnInteraction: false,
},
  centerSlide:'true',
  fade:'true',
   pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets:true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiperWorks = new Swiper(".our-work-swiper", {
 spaceBetween:30,
 slidesPerView:"auto",
 loop:"true",
 speed:2000,
 freeMood:true,
 allowTouchMove:true,
autoplay:{
  delay:0.0,
},
});
//tabbed-services
const tabbeNav = new Swiper('.tnav', {
    spaceBetween: 20,
    slidesPerView: 5,
    centeredSlides:true,
    slidesPerGroup: false,
    
  });
const theTab = new Swiper('.tabbed-item', {
loop:true,
slidePerView: 1,
autoHeight:true,
thumbs: {
    swiper: tabbeNav,
}
});

//sidebar
const menu = document.querySelector ('.mobile-menu');
const sidebar = document.querySelector ('.sidebar');
const closeMenu = document.querySelector(".close-sidebar");
closeMenu.addEventListener('click', ()=>{
  sidebar.classList.remove('active')
})

menu.addEventListener('click', function() {
  sidebar.style.display = 'flex';
    sidebar.classList.add('active');
});

// Toggle Modal and Pages
const bookNowBtn = document.querySelectorAll("#bookNowBtn");
const authModal = document.getElementById("authModal");
const bookingPage = document.getElementById("bookingPage");
const closeBtn = document.querySelector(".close");
const loginForm = document.getElementById("loginForm");
const signUpForm = document.getElementById("signUpForm");
const showSignUp = document.getElementById("showSignUp");
const showLogin = document.getElementById("showLogin");


bookNowBtn.forEach((button)=>{
  button.addEventListener('click',()=>{
//authModal.style.display = "flex";
//loginForm.style.display="flex";
const user = localStorage.getItem("currentUser");
  if (user) {
    window.location.href='booking.html';
  } else {
    authModal.style.display = "flex";
    loginForm.style.display="flex";
    signUpForm.style.display="none";
  }
  });
});

closeBtn.addEventListener("click", () => {
  authModal.style.display = "none";
});

showSignUp.addEventListener("click", () => {
  loginForm.style.display="none";
  signUpForm.style.display="flex";
});

showLogin.addEventListener("click", () => {
  signUpForm.style.display="none";
  loginForm.style.display="flex";
});
// User Authentication
const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");


signUpBtn.addEventListener("click", () => {
    const username = document.getElementById("signUpUsername").value.trim();
    const password = document.getElementById("signUpPassword").value.trim();
    const email = document.getElementById("signUpEmail").value.trim();
    const error = document.querySelector('.error')
    // Validation checks
    if (!username || !password || !email) {
      //alert("Please fill all fields!");
      error.innerHTML = "Please fill in all fields";
      return;
    }
  
    if (username.length < 4 && username ==='') {
      //alert("Username must be at least 3 characters long.");
      document.querySelector('.nameError').innerHTML = 'Enter a valid name.';
      return;
    }
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
     // alert("Please enter a valid email address.");
     document.querySelector('.emailError').innerHTML = 'Enter a valid email.';
      return;
    }
  
    if (password.length < 6) {
      //alert("Password must be at least 6 characters long.");
      document.querySelector('.passwordError').innerHTML = 'Password must be atleast 6 characters long.';
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    if (users.find((user) => user.username === username)) {
    alert("User already exists!");
    }else{

      users.push({ username, password, email });
      localStorage.setItem("users", JSON.stringify(users));
      window.location.href = "booking.html";
    }
  
  });

loginBtn.addEventListener("click", () => {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const email = document.getElementById("loginEmail").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((user) => user.username === username && user.password === password && user.email === email);

  if (user) {
    //alert("Login successful!");
    localStorage.setItem("currentUser", JSON.stringify(user));
    authModal.style.display = "none";
    window.location.href = "booking.html";
  } else {
    //alert("Invalid credentials!");
    document.querySelector('.loginError').innerHTML = 'Invalid credentials!';
  }
});

function switchToLogin() {
  signUpForm.style.display="none";
  loginForm.style.display="flex";
}



    
