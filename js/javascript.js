var txt = document.getElementById('add_list');
var msg = document.getElementById('key-word');

//检测用户表单输入的时候
txt.oninput = function () {

    if (this.value == '') {
        msg.style.display = 'block'
    } else {
        msg.style.display = 'none'
    }
}

// 删除某任务
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// 已完成的任务
var done = document.getElementsByClassName("done");
var i;
for (i = 0; i < done.length; i++) {
    done[i].onclick = function () {

        var father = this.parentElement;
        console.log(father)
        var done_vaules = father.innerText;
        finally_word = done_vaules.substr(0, done_vaules.length - 2)
        // console.log(finally_word) 
        father.parentElement.removeChild(father)
        my_done(done_task = finally_word);
    }
}


function my_done(done_task) {
    var li = document.createElement("li");
    var inputValue = done_task
    var new_task = document.createElement("textarea");
    new_task.className = "task";
    new_task.value =inputValue
    li.appendChild(new_task)
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("donelist").appendChild(li);
    }

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}
// 创建新的元素
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("add_list").value;
    var new_task = document.createElement("textarea");
    new_task.className = "task";
    new_task.value =inputValue
    li.appendChild(new_task)
    // li.appendChild(t);
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("add_list").value = "";


    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    var done_work = document.createElement("SPAN");

    var add_key = document.createTextNode("√");

    done_work.className = "done";

    done_work.appendChild(add_key);

    li.appendChild(done_work);
    console.log(done.length, close.length)
    for (i = 0; i < done.length; i++) {
        done[i].onclick = function () {
            var father = this.parentElement;
            console.log(father)
            console.log(123)
            var done_vaules = father.firstChild.value;
            
            console.log(done_vaules) 
            console.log(123)
            father.parentElement.removeChild(father)
            my_done(done_task = done_vaules);
        }
    }


    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

}

// 清除所有任务
var kill = document.getElementById('clear')
kill.onclick = function clear(){
    console.log("hyc")
    var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
        var div = close[i].parentNode;
        console.log(div);
        div.style.display = "none";
 
}

}