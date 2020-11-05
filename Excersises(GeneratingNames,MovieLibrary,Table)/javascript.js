
let names = ["Viktorija","Monika","Despina","Sara","Marija"];
let nameList = "";

function submit()
{
let name = document.getElementById("enter");
let theName = name.value;
names.push(theName);
nameList = "";
for (let i = 0; name = names[i]; i++) {
  nameList += "<li>" + name + "</li>";
}document.getElementById("name").innerHTML = nameList;
}

