const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

let filePath;
const rights=["-","-","-","-","-","-","-","-","-","-"];
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
    getInputValue();
    removeInput();
    await delay(150);
    new_line();
    filePath=saveFilePath();
    rights=saveRights();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function terminal(){
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "user@server";
  span1.textContent = ":~";
  span2.textContent = "$ alvi-cli -P 10.0.2.124";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  await delay(2100);
  createText("Initializing the machine...")
  await delay(2100);
  createText("Loading resources...")
  await delay(200);
  createText("Configuring the machine...")
  createText("Authenticating user...")
  await delay(1200);
  createText("Launching the machine...")
  createText("&nbsp")
  createText("&nbsp&nbsp&nbsp _ &nbsp_&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp_&nbsp _");
  createText("&nbsp&nbsp/&nbsp || |_ &nbsp&nbsp_ ___ _ _ _ &nbsp&nbsp&nbsp/&nbsp || |&nbsp&nbsp&nbsp ___&nbsp&nbsp&nbsp&nbsp&nbsp&nbspAlvi 20.04 64 bit");
  createText("&nbsp//_||| |\\ \\/// _ `/| ´/ &nbsp&nbsp//_||| &nbsp´\\ / _ \\ &nbsp&nbsp&nbsp&nbspRunning in standalone mode");
  createText("/_/|_||_| \\_/ \\_,_/ |_| &nbsp&nbsp/_/|_||_/|_|\\___/ &nbsp&nbsp&nbsp&nbspUnix base system");
  createText("&nbsp")
  await delay(1500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "user@alvi";
  span1.textContent = ":~";
  span2.textContent = "$";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);

  const div = document.createElement("div", { is:"inputfield"});
  div.setAttribute("class", "type")
  const input = document.createElement("input");
  div.appendChild(p);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}


async function getInputValue(newPath){
  
  const value = document.querySelector("input").value;

  if(value === "help"){
    trueValue(value);
    
    createCode("commands", "user can use basic Unix commands");
    createCode("examples", "cd, ls, pwd, cat, wget, chmod, man");
  }
 
  else if(value === ""){
    trueValue(value);
  }
  else if(value === "cd"){
    trueValue(value);
    filePath = "/";
  }
  else if(value === "cd \\"){
    trueValue(value);
    filePath = "/";
  }
  else if(value === "pwd"){
    trueValue(value);
    if(filePath === undefined){
        filePath = "/";
    }
    createText(filePath);
  }
  else if(value === "ls"){
    trueValue(value);
    if(filePath === "/home/"){
        createText("socials.txt");
        createText("cv.txt");
        createText("work.txt");
        createText("secrets.txt");
        createText("webserverData.csv");
        createText("credits.txt");
    }
    else{
        createText("home");
    }
  }
  else if(value.startsWith("cp") === true){
    trueValue(value);
    createText("User does not posess privileges")
  }
  else if(value.startsWith("mkdir") === true){
    trueValue(value);
    createText("User does not posess privileges")
  }
  else if(value.startsWith("rm") === true){
    trueValue(value);
    createText("User does not posess privileges")
  }
  else if(value.startsWith("mv") === true){
    trueValue(value);
    createText("User does not posess privileges")
  }
  else if(value.startsWith("wget") === true){
    trueValue(value);
    createText("User does not posess privileges")
  }
  else if(value.startsWith("chmod") === true){
    trueValue(value)
    if(value.includes("secrets.txt")){
        if (value === ("chmod u+x secrets.txt")){
            rights[3]="x"
        }
        else if(value ===("chmod u+r secrets.txt")){
            rights[1]="r"
        }
        else if(value === ("chmod u+w secrets.txt")){
            rights[2]="w"
        }
        else if(value ===("chmod u+rw secrets.txt")){
            rights[1]="r"
            rights[2]="w"
        }
        else if(value === ("chmod u+wx secrets.txt")){
            rights[2]="w"
            rights[3]="x"
        }
        else if(value ===("chmod u+rwx secrets.txt")){
            rights[1]="r"
            rights[2]="w"
            rights[3]="x"
        }
        else if (value === ("chmod u=x secrets.txt")){
            rights[3]="x"
        }
        else if(value ===("chmod u=r secrets.txt")){
            rights[1]="r"
        }
        else if(value === ("chmod u=w secrets.txt")){
            rights[2]="w"
        }
        else if(value ===("chmod u=rw secrets.txt")){
            rights[1]="r"
            rights[2]="w"
        }
        else if(value === ("chmod u=wx secrets.txt")){
            rights[2]="w"
            rights[3]="x"
        }
        else if(value ===("chmod u=rwx secrets.txt")){
            rights[1]="r"
            rights[2]="w"
            rights[3]="x"
        }
        else if (value === ("chmod u-x secrets.txt")){
            rights[3]="-"
        }
        else if(value ===("chmod u-r secrets.txt")){
            rights[1]="-"
        }
        else if(value === ("chmod u-w secrets.txt")){
            rights[2]="-"
        }
        else if(value ===("chmod u-rw secrets.txt")){
            rights[1]="-"
            rights[2]="-"
        }
        else if(value === ("chmod u-wx secrets.txt")){
            rights[2]="-"
            rights[3]="-"
        }
        else if(value ===("chmod u-rwx secrets.txt")){
            rights[1]="-"
            rights[2]="-"
            rights[3]="-"
        }
        else if (value === ("chmod g+x secrets.txt")){
            rights[6]="x"
        }
        else if(value ===("chmod g+r secrets.txt")){
            rights[4]="r"
        }
        else if(value === ("chmod g+w secrets.txt")){
            rights[5]="w"
        }
        else if(value ===("chmod g+rw secrets.txt")){
            rights[4]="r"
            rights[5]="w"
        }
        else if(value === ("chmod g+wx secrets.txt")){
            rights[5]="w"
            rights[6]="x"
        }
        else if(value ===("chmod g+rwx secrets.txt")){
            rights[4]="r"
            rights[5]="w"
            rights[6]="x"
        }
        else if (value === ("chmod g=x secrets.txt")){
            rights[6]="x"
        }
        else if(value ===("chmod g=r secrets.txt")){
            rights[4]="r"
        }
        else if(value === ("chmod g=w secrets.txt")){
            rights[5]="w"
        }
        else if(value ===("chmod g=rw secrets.txt")){
            rights[4]="r"
            rights[5]="w"
        }
        else if(value === ("chmod g=wx secrets.txt")){
            rights[5]="w"
            rights[6]="x"
        }
        else if(value ===("chmod g=rwx secrets.txt")){
            rights[4]="r"
            rights[5]="w"
            rights[6]="x"
        }
        else if (value === ("chmod g-x secrets.txt")){
            rights[6]="-"
        }
        else if(value ===("chmod g-r secrets.txt")){
            rights[4]="-"
        }
        else if(value === ("chmod g-w secrets.txt")){
            rights[5]="-"
        }
        else if(value ===("chmod g-rw secrets.txt")){
            rights[4]="-"
            rights[5]="-"
        }
        else if(value === ("chmod g-wx secrets.txt")){
            rights[5]="-"
            rights[6]="-"
        }
        else if(value ===("chmod g-rwx secrets.txt")){
            rights[4]="-"
            rights[5]="-"
            rights[6]="-"
        }

        else if (value === ("chmod o+x secrets.txt")){
            rights[9]="x"
        }
        else if(value ===("chmod o+r secrets.txt")){
            rights[7]="r"
        }
        else if(value === ("chmod o+w secrets.txt")){
            rights[8]="w"
        }
        else if(value ===("chmod o+rw secrets.txt")){
            rights[7]="r"
            rights[8]="w"
        }
        else if(value === ("chmod o+wx secrets.txt")){
            rights[8]="w"
            rights[9]="x"
        }
        else if(value ===("chmod o+rwx secrets.txt")){
            rights[7]="r"
            rights[8]="w"
            rights[9]="x"
        }
        else if (value === ("chmod o=x secrets.txt")){
            rights[9]="x"
        }
        else if(value ===("chmod o=r secrets.txt")){
            rights[7]="r"
        }
        else if(value === ("chmod o=w secrets.txt")){
            rights[8]="w"
        }
        else if(value ===("chmod o=rw secrets.txt")){
            rights[7]="r"
            rights[8]="w"
        }
        else if(value === ("chmod o=wx secrets.txt")){
            rights[8]="w"
            rights[9]="x"
        }
        else if(value ===("chmod o=rwx secrets.txt")){
            rights[7]="r"
            rights[8]="w"
            rights[9]="x"
        }
        else if (value === ("chmod o-x secrets.txt")){
            rights[6]="-"
        }
        else if(value ===("chmod o-r secrets.txt")){
            rights[7]="-"
        }
        else if(value === ("chmod o-w secrets.txt")){
            rights[8]="-"
        }
        else if(value ===("chmod o-rw secrets.txt")){
            rights[7]="-"
            rights[8]="-"
        }
        else if(value === ("chmod o-wx secrets.txt")){
            rights[8]="-"
            rights[9]="-"
        }
        else if(value ===("chmod o-rwx secrets.txt")){
            rights[7]="-"
            rights[8]="-"
            rights[9]="-"
        }

        else if (value === ("chmod a+x secrets.txt")){
            rights[3]="x"
            rights[6]="x"
            rights[9]="x"
        }
        else if(value ===("chmod a+r secrets.txt")){
            rights[1]="r"
            rights[4]="r"
            rights[7]="r"
        }
        else if(value === ("chmod a+w secrets.txt")){
            rights[2]="w"
            rights[5]="w"
            rights[8]="w"
        }
        else if(value ===("chmod a+rw secrets.txt")){
            rights[1]="r"
            rights[2]="w"
            rights[4]="r"
            rights[5]="w"
            rights[7]="r"
            rights[8]="w"
        }
        else if(value === ("chmod a+wx secrets.txt")){
            rights[2]="w"
            rights[3]="x"
            rights[5]="w"
            rights[6]="x"
            rights[8]="w"
            rights[9]="x"

        }
        else if(value ===("chmod a+rwx secrets.txt")){
            rights[1]="r"
            rights[2]="w"
            rights[3]="x"
            rights[4]="r"
            rights[5]="w"
            rights[6]="x"
            rights[7]="r"
            rights[8]="w"
            rights[9]="x"
        }
        else if (value === ("chmod a=x secrets.txt")){
            rights[3]="x"
            rights[6]="x"
            rights[9]="x"
        }
        else if(value ===("chmod a=r secrets.txt")){
            rights[1]="r"
            rights[4]="r"
            rights[7]="r"
        }
        else if(value === ("chmod a=w secrets.txt")){
            rights[2]="w"
            rights[5]="w"
            rights[8]="w"
        }
        else if(value ===("chmod a=rw secrets.txt")){
            rights[1]="r"
            rights[2]="w"
            rights[4]="r"
            rights[5]="w"
            rights[7]="r"
            rights[8]="w"
        }
        else if(value === ("chmod a=wx secrets.txt")){
            rights[2]="w"
            rights[3]="x"
            rights[5]="w"
            rights[6]="x"
            rights[8]="w"
            rights[9]="x"

        }
        else if(value ===("chmod a=rwx secrets.txt")){
            rights[1]="r"
            rights[2]="w"
            rights[3]="x"
            rights[4]="r"
            rights[5]="w"
            rights[6]="x"
            rights[7]="r"
            rights[8]="w"
            rights[9]="x"
        }
        else if (value === ("chmod a-x secrets.txt")){
            rights[3]="-"
            rights[6]="-"
            rights[9]="-"
        }
        else if(value ===("chmod a-r secrets.txt")){
            rights[1]="-"
            rights[4]="-"
            rights[7]="-"
        }
        else if(value === ("chmod a-w secrets.txt")){
            rights[2]="-"
            rights[5]="-"
            rights[8]="-"
        }
        else if(value ===("chmod a-rw secrets.txt")){
            rights[1]="-"
            rights[2]="-"
            rights[4]="-"
            rights[5]="-"
            rights[7]="-"
            rights[8]="-"
        }
        else if(value === ("chmod a-wx secrets.txt")){
            rights[2]="-"
            rights[3]="-"
            rights[5]="-"
            rights[6]="-"
            rights[8]="-"
            rights[9]="-"

        }
        else if(value ===("chmod a-rwx secrets.txt")){
            rights[1]="-"
            rights[2]="-"
            rights[3]="-"
            rights[4]="-"
            rights[5]="-"
            rights[6]="-"
            rights[7]="-"
            rights[8]="-"
            rights[9]="-"
        } else{
            createText("revise your command")
            createText("if necessary, check man command for chmod")
        }
    } else {
        trueValue(value);
        createText("you do not posess privileges")
    }
  }

  else if(value.startsWith("man") === true){
    trueValue(value);
    if(value.includes("man chmod") === true){
        createText("NAME");
        createText("chmod - command to change files privileges");
        createText("&nbsp");
        createText("OPTIONS");
        createText("chmod u+r example.txt &nbsp&nbsp- give user(u) reading rights to example.txt");
        createText("chmod g=wx example.txt &nbsp- set writing and executing rights to group (g)");
        createText("chmod a-rwx example.txt - take all rights from users, groups and others")
  }
    else if(value.includes("man ls")==true){
        createText("NAME");
        createText("ls - command to list the files in the current directory");
        createText("&nbsp");
        createText("OPTIONS");
        createText("ls &nbsp&nbsp&nbsp- command to list the files in the current directory");
        createText("ls -l - command to list more detailed version of regular command");
  }
    else if(value.includes("man cd")==true){
        createText("NAME");
        createText("cd - command to move between directories");
        createText("&nbsp");
        createText("OPTIONS");
        createText("cd &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- command to change to default directory");
        createText("cd example - command to change to directory named example");
        createText("cd \\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- command to change to root directory");
        createText("cd ..&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp- command to change to next sub-directory");
}
    else if(value.includes("man pwd")==true){
        createText("NAME");
        createText("pwd - command to print the filepath of current directory");
        createText("&nbsp");
        createText("OPTIONS");
        createText("pwd pwd - command to print the filepath of current directory");
}
    else if(value.includes("man cat")==true){
        createText("NAME");
        createText("cat - command to show content of a file");
        createText("&nbsp");
        createText("OPTIONS");
        createText("cat example.txt - command to show content of a file named example.txt");
}
    else if(value.includes("man cat")==true){
        createText("NAME");
        createText("cat - command to show content of a file");
        createText("&nbsp");
        createText("OPTIONS");
        createText("cat example.txt - command to show content of a file named example.txt");
}   
    else if(value.includes("man clear")==true){
        createText("NAME");
        createText("clear - command to clean terminal");
        createText("&nbsp");
        createText("OPTIONS");
        createText("clear - command to clean terminal");
        createText("clr&nbsp&nbsp - command to clean terminal");
}   
}
  else if(value.startsWith("cat ") === true){
    trueValue(value);
    if(filePath === "/home/"){
        if(value.includes("cat socials.txt") === true){
            createText("my linkedin is alvar-aho");
        }


        else if(value.includes("cat cv.txt") === true){
            createText("i have done work");
        }


        else if(value.includes("cat webserverData.csv") === true){
            createText("user, hash")
            createText("alvi, ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f");
        }


        else if(value.includes("cat credits.txt") === true){
            createText("this project has taken inspiration from following sources:");
            createText("github: heberleonard2");
            createText("github: m4tt72");
            createText("github: Pradyuman7")
        }


        else if(value.includes("cat work.txt") === true){
            createText("i have done work")
            createText("i excel at ML, DL and scientific computing, and i naturally hate front-end work.")
            createText("coding this was constant pain, but working with terminal helped")
        }


        else if(value.includes("secrets.txt") === true){
            if(rights[1]==="r"){
                createLink("http://127.0.0.1:5500/webserver.html", "private-webserver.com")
            }
            else{
            createText("user does not have permission to read file")
            }
        }


        else{
            createText("file could not be found")
        }

    
    }
    else{
        createText("home");
    }
  }

else if(value === "cd home"){
    trueValue(value);
    filePath = "/home/";
  }
  else if(value === "cd .."){
    trueValue(value);
    filePath = "/home/";
  }

else if(value ==="ls -l"){
    trueValue(value);
    if(filePath === "/home/"){
        var chmodRights = rights.join('')
        createText("total 6");
        createText("-rwxr-xr-x root root &nbsp 1024 Sep &nbsp 5 17.05 socials.txt");
        createText("-rwxr-xr-x root root &nbsp 1024 Sep &nbsp 5 17.05 cv.txt");
        createText("-rwxr-xr-x root root &nbsp 1024 Sep &nbsp 5 17.05 work.txt");
        createText(`${chmodRights} user root &nbsp&nbsp 512 Sep &nbsp 5 17.05 secrets.txt`);
        createText("-rwxr-xr-x root root &nbsp&nbsp 512 Sep &nbsp 5 17.05 webserverData.csv");
        createText("-rwxr-xr-x root root &nbsp&nbsp 512 Sep &nbsp 5 17.05 credits.txt");
    
    }
    else{
        createText("total 7");
        createText("drwxr-xr-x root root &nbsp 5120 Sep &nbsp 5 17.05 home");
    }
}
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }

  else if(value === "whoami"){
    trueValue(value);
    createText("user")
  }
  else if(value === "ip a"){
    trueValue(value);
    createText("10.0.2.124")
  }
  else if(value === "ip addr"){
    trueValue(value);
    createText("10.0.2.124")
  }
  else if(value === "ifconfig"){
    trueValue(value);
    createText("10.0.2.124")
  }  
  else if(value === "quit"){
    trueValue(value);
    createText("please do not")
  }  
  else if(value === "exit"){
    trueValue(value);
    createText("please do not")
  }  
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "user@alvi";
  span1.textContent = ":~";
  span2.textContent = "$";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);

  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(p);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "user@alvi";
  span1.textContent = ":~";
  span2.textContent = "$";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(p);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML = text;
  app.appendChild(p);
}
function createLink(link, placeholder){
    const l = document.createElement("a")
    l.setAttribute('href', link);
    l.textContent = placeholder;
    app.appendChild(l)
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function saveFilePath(){
    return filePath;
}
function saveRights(){
    return rights
}

function toggleContainer() {
    var container = document.getElementById("downloadContainer");
    if (container.style.display === "none") {
      container.style.display = "block";
    } else {
      container.style.display = "none";
      }
    }
terminal();
