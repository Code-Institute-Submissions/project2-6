// console.log("hello");

function sendMail(contactForm) {
    emailjs.send("gmail", "farmhouse_goodies", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "phone": contactForm.phone.value,
        "customer_care_query": contactForm.customercarequery.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response); 
            window.location.reload();
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
        return false;  // To block from loading a new page

}