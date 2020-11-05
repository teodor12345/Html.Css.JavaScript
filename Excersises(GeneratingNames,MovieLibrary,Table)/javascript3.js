let settings = {

    submitButton: "#submitButton",
    deleteButton: ".deleteButton",
    tableName: "#tablehook",
    reminderTextBox: "input.reminder",
    priorityTextBox: "input.priority",
    colorTextBox: "input.color",
    descriptionTextBox: "input.description"

};

const modal = document.getElementById('myModal'),
    btn = document.getElementById("submitButton"),
    span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

let reminder = (function () {

    let reminderList = [],
        addReminder,
        deleteReminder,
        config = {
            //buttons
            submitButton: "",
            deleteButton: "",

            //Dom elements
            tableName: "",
            reminderTextBox: "",
            priorityTextBox: "",
            colorTextBox: "",
            descriptionTextBox: ""
        }

    addReminder = function () {
        reminderList.push(
            {
                reminderText: document.querySelector('input.reminder').value, reminderPriority: document.querySelector('input.priority').value, reminderColor: document.querySelector("input.color").value, reminderDescription: document.querySelector("input.description").value,
            }
        );
        redrawReminders(reminderList, config.tableName);

    }

    deleteReminder = function (id) {
        console.log("deleting... " + id);
        reminderList.splice(id, 1);
        redrawReminders(reminderList, config.tableName);
    }


    redrawReminders = function (array, tableId) {

        let tableInsertPoint = document.querySelector(tableId);

        while (tableInsertPoint.childNodes.length > 2) {
            tableInsertPoint.removeChild(tableInsertPoint.lastChild);
        }

        let ArrayToHTML = array.map(function (cur, i, arr) {

            return `
                    <td class='editable'> ${cur.reminderText}</td>
                    <td class='editable'> ${cur.reminderPriority}</td>
                    <td class='editable'> ${cur.reminderColor}</td>
                    <td class='editable'> ${cur.reminderDescription}</td>
                    <td data-delete='${(i)}' class='deleteButton'><button>Delete</button></td>`

        }).forEach(element => {
            let newTr = document.createElement('tr');
            newTr.innerHTML = element;
            tableInsertPoint.appendChild(newTr);
        });

        // Assign new event handlers
        dynamicEvents();

    }

    setConfig = function (settings) {

        config.submitButton = settings.submitButton;
        config.deleteButton = settings.deleteButton;
        config.tableName = settings.tableName;
        config.reminderTextBox = settings.reminderTextBox;
        config.priorityTextBox = settings.priorityTextBox;
        config.colorTextBox = settings.colorTextBox;
        config.descriptionTextBox = settings.descriptionTextBox;


    }


    init = function () {

        let addButton = document.querySelector(config.submitButton);
        let clearDefault = document.querySelector('.reminder');
        // let updateSubmit = document.querySelector('#updateReminder');

        addButton.addEventListener('click', function () {
            addReminder();
        });

        //Clear placeholder text
        clearDefault.addEventListener('focus', function () {
            clearDefault.value = " ";
        })


    }

    function dynamicEvents() {


        let deleteButton = document.querySelectorAll(config.deleteButton);

        deleteButton.forEach(function (item) {
            item.addEventListener('click', function (e) {
                deleteReminder(e.target.parentElement.getAttribute('data-delete'));
            })
        })


    }

    return {
        add: addReminder,
        delete: deleteReminder,
        setConfig: setConfig,
        // getConfig: getConfig,
        init: init
    }
})();



reminder.setConfig(settings);
reminder.init();