//actual dialog elements in customDialog[dialog]
const customDialogAlert = document.getElementById("customAlert");
const customDialogConfirm = document.getElementById("customConfirm");
const customDialogPrompt = document.getElementById("customPrompt");
//setting up cancel buttons and alert ok button and adding events to close modal for the specific dialogs
const cancelButtonConfirm = document.getElementById("cancelBtnConfirmC").addEventListener("click", () => {

    customDialogConfirm.close();
    outText2.innerHTML = `Confirm result: false`;

});
const cancelButtonPrompt = document.getElementById("cancelBtnPromptC").addEventListener("click", () => {

    customDialogPrompt.close();

});

const okBtnAlert = document.getElementById("okBtnAlertC").addEventListener("click", () => {

    customDialogAlert.close();

});

//setting up the ok buttons on the other modals
const okBtnConfirmC = document.getElementById("okBtnConfirmC").addEventListener("click", () => {

    customDialogConfirm.close();
    outText2.innerHTML = `Confirm result: true`;

});

const okBtnPromptC = document.getElementById("okBtnPromptC").addEventListener("click", () => {

    customDialogPrompt.close();
    let answer = DOMPurify.sanitize(document.getElementById("promptTextC").value);


        if(answer == "") {
            outText2.innerHTML = `Prompt result: User did not enter anything`;
        }
        else if (answer == null) {
            return;
        } 
        else {
    //Inputting the name...which can output cross attacks
    outText2.innerHTML = `Prompt result: ${answer}`;
        }
});




