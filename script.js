const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value
    };
https://gxonhpaby0.execute-api.us-east-2.amazonaws.com
    try {

        const response = await fetch(
            "https://gxonhpaby0.execute-api.us-east-2.amazonaws.com/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }
        );

        if (response.ok) {
            alert("Thanks for signing up!");
            form.reset();
        }

    } catch (error) {
        console.error(error);
        alert("Something went wrong.");
    }
});