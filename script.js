var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <!------<a target='_blank' href='tel:+601137655273'> <div class='socialItem' id='call'><img class='socialItemI' src='images/phone.svg'/><label class='number'>+601137655273</label></div> </a> ------> <a href='mailto:m.ariful@live.utm.my'> <div class='socialItem'><img class='socialItemI' src='images/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://github.com/arifulatwork'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/601137655273'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <!--------------<a target='_blank' href='#'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> ------> <!-------<a target='_blank' href='https://instagram.com/vinayak_patil_09'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a> ---------> <a href='https://www.linkedin.com/in/md-ariful-islam-b531a5110/' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='images/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Ariful Resume.pdf</label></div><a href='assets/Md Ariful Islam Resume.pdf#39;s Resume.pdf' download='Md_Ariful_Islam_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.1552265149617!2d103.61608989536761!3d1.5752747517045762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da779c272ca27d%3A0x79a2380e5c5291c!2sBus%20Stop%20Kolej%20Dato%20Onn%20Jaafar%20XB2!5e0!3m2!1sen!2smy!4v1661412829606!5m2!1sen!2smy' class='map'></iframe></div><label class='add'><address>KDOJ<br>UTM<br>Skudai, Johor, Malaysia 81310</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello there 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Md Ariful Islam</a>.</span><br><br>I am a Software Engineering student at <span class='bold'>Universiti Teknologi Malaysia 👨🏻‍💻📚</span><br><br>I am eager to hear about potential career opportunities, so I would be pleased to chat about job openings in the engineering sphere.<br><br>Send <span class='bold'>'proceed'</span> to know more about me.<br>");
            }, 2000);
            break;
        case "proceed":
            sendTextMessage("<span class='sk'>Send Keyword to get what you want to know about me...<br>e.g<br><span class='bold'>'skills'</span> - to know my skills<br> <span class ='bold'> 'interest' </span> - to know my interest<br><span class='bold'>'resume'</span> - to get my resume<br><span class='bold'>'education'</span> - to get my education details<br><span class='bold'>'address'</span> - to get my address<br><span class='bold'>'contact'</span> - to get ways to connect with me<br><span class='bold'>'projects'</span> - to get details of my projects<br><span class='bold'>'clear'</span> - to clear conversation<br><span class='bold'>'about'</span> - to know about this site</span>");
            break;
        case "resume":
            sendTextMessage(resumeString);
            break;
        case "skills":
            sendTextMessage("<span class='sk'>I am currently pursuing my undergraduate degree in Computer Science (Software Engineering).<br><br>I can comfortably write code in following languages :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>JS<br>Dart<br>Python<br>C#</span><br><br>I've experiance with following frameworks :<span class='bold'><br>Angular<br>Flutter<br>ReactJs<br>ASP.NET<br>SpringBoot <br> JSP/Servlet</span><br><br>I use <span class='bold'>Windows 10</span> as daily driver on my acer Aspire 5 A515-51G-54RN<br>OS:Windows 10 <!------<br>DE:Gnome(More often) Kde(often)-----><br>Favourite IDE:VSCode</span>");
            break;

        case "education":
            sendTextMessage("I am currently pursuing my undergraduate degree in Computer Science (Software Engineering) at <br> University Teknologi Malaysia <br>Passing Year : 2023<br><br>I have completed my Higher Secondary School Certificate from Residential Laboratory College <br>Passing Year:August 2016<br>Result:GPA 4.5 out of GPA 5<br><br>I have completed my Secondary School Certificate from Rayenda Pilot High School <br>Passing Year:2014<br>Result:GPA 4.19 out of GPA 5<br>");
            break;

            case "interest":
                sendTextMessage("I like learning and studying new languages and frameworks. It is interesting and keeps me up to date as these new things generally introduce new ways of thinking. However, I also have a number of favorite topics and I am very interested in working on these topics <br> <br> 📄 Software Documentation <br> 📃 Software Testing <br> 👨 Human Computer Interaction 💻<br> 🖥️ Application Development <br> 📃 Software Architecture <br> 🗣 Artificial Intelligence <br>");
                break;

        case "address":
            sendTextMessage(addressString);
            break;
        case "clear":
            clearChat();
            break;
        case "about":
            sendTextMessage("I have a comprehensive understanding of software development life cycles. Experienced the entire project lifecycle from design to implementation integration. I have successfully designed developed a live-use application and got positive remarks from my supervisor and stakeholders. As a person, I am an optimist and I always strive continually for excellence and I never compromise with the tasks that are assigned to me.<br><br>👨🏻‍💻 Designed and Developed by <a class='alink' target='_blank' href='https://github.com/arifulatwork'><span class='bold'>Md Ariful Islam</a> with ❤️</span>");
            break;
        case "contact":
            sendTextMessage(contactString);
            break;
        case "projects":
            sendTextMessage("You want to check my projects? Then just jump into my Github Accounts.<br><br><div class='social'><a target='_blank' href='https://github.com/arifulatwork'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a><br><a target='_blank' href='https://github.com/arifulwork'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a> <br> <a target='_blank' href='https://github.com/arifulUTM'> <div class='socialItem'><img class='socialItemI' src='images/github.svg' alt=''></div> </a></div>");
            break;
        case "new":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Hey I couldn't catch you...😢<br>Send 'help' to know more about usage.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
