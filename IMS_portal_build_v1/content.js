//gets the array "dataofex" from App.js
chrome.runtime.onMessage.addListener(dataofex => {

    const nodeList = document.querySelectorAll('input[type="radio"]');
    nodeList.forEach(element => {
        if (element.id % 5 == (dataofex[0])-1) {
            element.setAttribute("checked", true);
        }
    });
    const nodelist2 = document.querySelectorAll('textarea[class="form-control"]');
nodelist2.forEach(element => { element.append(dataofex[1]) });
});