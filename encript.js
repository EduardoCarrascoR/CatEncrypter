const textEncript = () => {
    let str = document.getElementById("text").value,
    strEncript = encript(str, "encript");
    createElement(str, strEncript)
}

const textDesencript = () => {
    let str = document.getElementById("text").value,
    strEncript = encript(str, "desencript");
    createElement(str, strEncript)
}

const createElement = (str, str2) => {
    if (str !== "") {
          let element = document.createElement('textarea'),
          buttonFound = document.getElementById("button"),
          aside = document.getElementById("secundaria_content"),
          secund = document.getElementById("secundaria"),
          spam = document.getElementById("text_spam");
          element.setAttribute("id", "textChanged");
          secund.replaceChild(aside, secund.firstElementChild);
          
          if (!buttonFound) {
                let button = document.createElement("button");
                secund.appendChild(button, secund.lastElementChild);
                button.innerHTML = "Copy"
                button.getAttribute("onclick")
                button.setAttribute("onclick", "copyText()")
                button.setAttribute("id", "button")
                button.className = "copyText button"
                
                aside.removeChild(spam)
          }
          element.className = "textChanged"
          aside.replaceChild(element, aside.firstElementChild)
          document.querySelector(".textChanged").innerHTML = str2
    }
}

const copyText = () => {
    let contentText = document.querySelector(".textChanged")
    contentText.select()
    document.execCommand("copy")
}

const encript = (str, method) => {

    let text

    switch (method) {
          case "encript":
                text = str.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("a", "ai").replaceAll("o", "ober").replaceAll("u", "ufat");
                break;
    
          case "desencript":
                text = str.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ai", "a").replaceAll("ober", "o").replaceAll("ufat", "u");
                break;
    }

    return text
}