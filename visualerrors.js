window.onerror = function(errorMsg, url, lineNumber){
    document.body.innerHTML = "<div><ul id='error-list'></ul></div>";

    li_msg = document.createElement('li');
    li_msg.setAttribute("id", "error-msg");
    li_msg.innerHTML = "Error message: " + errorMsg;

    li_url = document.createElement('li');
    li_url.setAttribute("id", "error-url");
    li_url.innerHTML = "URL: " + url;

    li_line_number = document.createElement('li');
    li_line_number.setAttribute("id", "error-line-number");
    li_line_number.innerHTML = "Line number: " + lineNumber;

    ul = document.getElementById('error-list');
    ul.appendChild(li_msg);
    ul.appendChild(li_url);
    ul.appendChild(li_line_number);
}


