document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedback-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: form.name.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      // Here you would typically send the form data to your server
      // For now, we'll just log it and show a success message
      console.log("Form submitted:", formData);

      // Show success message
      alert("Thank you for your message! We will get back to you soon.");

      // Reset form
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Sorry, there was an error sending your message. Please try again later."
      );
    }
  });

  // Phone number validation
  const phoneInput = form.phone;
  phoneInput.addEventListener("input", (e) => {
    // Remove any non-digit characters
    let value = e.target.value.replace(/\D/g, "");

    // Format the phone number
    if (value.length > 0) {
      if (value.length <= 2) {
        value = `+${value}`;
      } else if (value.length <= 5) {
        value = `+${value.slice(0, 2)} ${value.slice(2)}`;
      } else if (value.length <= 8) {
        value = `+${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(5)}`;
      } else {
        value = `+${value.slice(0, 2)} ${value.slice(2, 5)} ${value.slice(
          5,
          8
        )} ${value.slice(8, 10)}`;
      }
    }

    e.target.value = value;
  });
});
