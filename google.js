const loginBtn = document.getElementById("login")
const cmt = document.getElementById("loginCmt")

function signIn(){
    console.log("아무거나 출력")
    

    if (loginBtn.innerHTML === "로그인") {
        let id= prompt("로그인을 해주세요")
        console.log(id)
        cmt.innerHTML = "로그인이 됐습니다"
        loginBtn.innerHTML = "로그아웃"
    } else if(loginBtn.innerHTML === "로그아웃") {
        cmt.innerHTML = " "
        loginBtn.innerHTML = "로그인"

    } 
}

loginBtn.addEventListener("click",signIn)