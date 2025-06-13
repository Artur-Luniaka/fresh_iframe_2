document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const notification = document.getElementById("form-notification");

  function showNotification(message, type) {
    notification.textContent = message;
    notification.className = "form-notification " + type;

    // Скрыть уведомление через 5 секунд
    setTimeout(() => {
      notification.className = "form-notification";
    }, 5000);
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Получаем данные формы
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Здесь будет код для отправки формы на сервер
    // Пока что просто имитируем успешную отправку
    console.log("Form data:", data);

    // Очищаем форму
    form.reset();

    // Показываем уведомление об успехе
    showNotification(
      "Thank you for your message! We will get back to you soon.",
      "success"
    );
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
