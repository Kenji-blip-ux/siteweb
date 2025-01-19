window.onload = function() {
    const message = document.getElementById("message");
    setTimeout(() => {
        message.style.opacity = 1; // جعل الرسالة مرئية
        message.style.transform = "translateY(0)"; // إعادة الرسالة إلى موضعها الأصلي
    }, 500); // تأخير الرسوم المتحركة لمدة نصف ثانية

    // إضافة تأثير اهتزاز بسيط بعد ظهور الرسالة
    setTimeout(() => {
        message.classList.add("shake"); // إضافة فئة الاهتزاز
    }, 1300); // بعد 1.3 ثانية من تحميل الصفحة
};