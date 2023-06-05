// DOM elements

const mainPage= document.querySelector(".main-page");
const loginPage = document.querySelector(".login-page");
const middleContent = document.querySelector(".middle-content");
const btnTop = document.querySelector(".btn-top");
const newsFeedPage = document.querySelector(".feeds-page");
const LoginModal = document.querySelector(".login-modal");
const LoginModalcroix = document.querySelector(".croix");
const LoginFormBtn = document.querySelector(".login-form-btn");
const PostBtn = document.querySelector(".post-btn");
const modalWrapper = document.querySelector(".modal-wrapper");
const modal = document.querySelector(".modal");
const modalExit = document.querySelector(".modal-header i");
const modalPostBtn = document.querySelector(".modal-header button");
const modalFooterPlus = document.querySelector(".modal-header span");
const modalInput = document.querySelector(".modal-input");
const user = document.querySelector(".user");
const sidebar = document.querySelector(".sidebar");
const sidebarwrapper = document.querySelector(".sidebar-wrapper");
const sidebarExit = document.querySelector(".sidebar-header i ");


// *****************************************************

// main page

const goToLoginPage=()=>{
    mainPage.style.display='none';
    loginPage.style.display='grid';
};

middleContent.addEventListener("click",(e)=>{
    if(e.target.classList[1]==="main-btn"){
        goToLoginPage();
    }

})


btnTop.addEventListener('click',()=>{
    const inputUserInfo=document.querySelector('.user-info');
    const inputPassword=document.querySelector('.password');
    
    if(inputUserInfo.value !=='' || inputPassword.value !==''){
        mainPage.style.display="none";
        newsFeedPage.style.display="block"
    }else{
        goToLoginPage();
        LoginModal.style.display="block";
    }
})

// login page
LoginModalcroix.addEventListener("click",()=>{
    LoginModal.style.display="none";
});

LoginFormBtn.addEventListener("click",()=>{
    const loginUserInfo=document.querySelector('.login-user-info');
    const loginPassword=document.querySelector('.login-password');

    if(loginUserInfo.value !=='' && loginPassword.value !==''){
        loginPage.style.display="none";
        newsFeedPage.style.display="block"
    }else{
        LoginModal.style.display="block";
    }
})

// post modal 

PostBtn.addEventListener("click",()=>{
    modal.style.display="block";
    modalWrapper.classList.add('modal-wrapper-display');
});

const changeOpacity= (x)=>{
    modalPostBtn.style.opacity=x;
    modalFooterPlus.style.opacity=x;
};

modalExit.addEventListener("click",()=>{
    modal.style.display="none";
    modalWrapper.classList.remove('modal-wrapper-display');

    if(modalInput.value !== ""){
        modalInput.value="";
        changeOpacity(.5);
    }
});

modalInput.addEventListener("keypress",(e)=>{
    if(e.target.value !== ""){
        changeOpacity(1);
    }
}
);

modalInput.addEventListener("blur",(e)=>{
    if(e.target.value === ""){
        changeOpacity(0.5);
    }
})

// sidebar 

user.addEventListener('click',()=>{
    sidebar.classList.toggle('sidebar-display');
    sidebarwrapper.classList.toggle('sidebar-wrapper-display');
})

sidebarExit.addEventListener('click',()=>{
    sidebar.classList.remove('sidebar-display');
    sidebarwrapper.classList.remove('sidebar-wrapper-display');
})