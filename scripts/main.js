let myButton = document.querySelector('button')
        let myHeading = document.querySelector('h3')

        function setUserName() {
            let myName = prompt('请输入你的名字:')
            if (!myName) {
                setUserName();
            } else {
                localStorage.setItem('name', myName)
                myHeading.textContent = "It’s a picture-postcard scene!" + myName
            }
        }
        myButton.onclick = function () {
            setUserName()
        }