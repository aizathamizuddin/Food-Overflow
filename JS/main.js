//for main.html

function openProfile(){
    alert("You haven't signed in. Please login to your account.");
    openLogin();
}

function openLogin() {
    window.open("login.html", "_self");
}

function openSignup() {
    window.open("signup.html", "_self");
}

function openAskQuestion() {
    window.open("askquestion.html", "_self");
}

function openAbout() {
    window.open("about.html", "_self");
}

function openSettings(){
    alert("Sorry, the Settings page is not ready for use.");
}

function fnBrowserDetect(){
    let userAgent = navigator.userAgent;
    let browserName;
    
    if(userAgent.match(/edg/i)){
        browserName = "edge";
    }else if(userAgent.match(/firefox|fxios/i)){
        browserName = "firefox";
    }  else if(userAgent.match(/safari/i)){
        browserName = "safari";
    }else if(userAgent.match(/opr\//i)){
        browserName = "opera";
    } else if(userAgent.match(/chrome|chromium|crios/i)){
        browserName = "chrome";
    }else{
        browserName="No browser detection";
    }
    alert("You are using " + browserName + " browser");
}