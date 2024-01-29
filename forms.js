 const form = document.querySelector("#forms");
        const email1 = document.querySelector("#email_input");
        const email2 = document.querySelector("#email_verify");

       
        form.addEventListener("submit", handleSubmit);
        function handleSubmit() {
            SubmitEvent.preventDefault();
            if (email1.value === email2.value) {
                email2.style.backround = "transparent";
            }
            else {
                email2.style.backround = "red";
                alert("The email is not the same");
            }
        }