const userProfile = {
    name: "Aknur",
    birthYear: 2008,
    isDeveloper: true,
    hobbies: ["Drawing", "Reading", "Coding"]
};

const currentYear = new Date().getFullYear();
const age = currentYear - userProfile.birthYear;
const hobbiesCount = userProfile.hobbies.length;

console.log("Name:", userProfile.name);
console.log("Age:", age);
console.log("Number of hobbies:", hobbiesCount);

const updateButton = document.getElementById("updateProfile");
const profileForm = document.getElementById("profileForm");

profileForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const birthYear = Number(document.getElementById("birthYear").value);

    userProfile.name = username;
    userProfile.birthYear = birthYear;

    const age = new Date().getFullYear() - userProfile.birthYear;

    document.getElementById("profileInfo").textContent =
        "Name: " + userProfile.name + ", Age: " + age;

    console.log("Name:", userProfile.name);
    console.log("Age:", age);

    document.getElementById("profileInfo").style.color = "darkblue";
    document.getElementById("profileInfo").style.fontWeight = "bold";
});


const hobbyList = document.getElementById("hobbyList");
const newItem = document.getElementById("newItem");

document.getElementById("addItem").addEventListener("click", function() {
    const itemText = newItem.value;

    if (itemText !== "") {
        const li = document.createElement("li");
        li.textContent = itemText;
        hobbyList.appendChild(li);
        newItem.value = "";
    }
});

document.getElementById("removeItem").addEventListener("click", function() {
    if (hobbyList.lastElementChild) {
        hobbyList.removeChild(hobbyList.lastElementChild);
    }
});
