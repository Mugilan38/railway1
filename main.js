// scripts.js

document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form from submitting

    // Get form values
    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;
    const date = document.getElementById("date").value;
    const classOfTravel = document.getElementById("class").value;
    const passengerName = document.getElementById("passengerName").value;
    const idProof = document.getElementById("idProof").value;

    // Create ticket confirmation message
    const confirmationMessage = `
        Ticket Details:
        <ul>
            <li><strong>Passenger Name:</strong> ${passengerName}</li>
            <li><strong>Source Station:</strong> ${source}</li>
            <li><strong>Destination Station:</strong> ${destination}</li>
            <li><strong>Date of Travel:</strong> ${date}</li>
            <li><strong>Class of Travel:</strong> ${classOfTravel}</li>
            <li><strong>ID Proof Number:</strong> ${idProof}</li>
        </ul>
    `;
    
    // Display confirmation
    document.getElementById("ticketDetails").innerHTML = confirmationMessage;
    document.getElementById("confirmation").style.display = "block";

    // Optionally, reset the form after submission
    document.getElementById("bookingForm").reset();
});
