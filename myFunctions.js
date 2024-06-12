

$(document).ready(function() {
    // إظهار التفاصيل عند النقر على الزر
    $(".show-details").on("click", function() {
        // الحصول على الصف التالي الذي يحتوي على التفاصيل
        var detailsRow = $(this).closest("tr").next(".details-row");
        detailsRow.toggle();
    });

    // متابعة الزر
    $("#continue-btn").on("click", function() {
        // التحقق من اختيار عقار
        if ($(".property-select:checked").length > 0) {
            $("#application-form").show();
        } else {
            alert("يرجى اختيار عقار.");
        }
        //التمرير للأسفل عند الضغط
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    });
    // التحقق من النموذج قبل الإرسال
    $("form").on("submit", function(event) {
        // هنا يمكنك إضافة تحقق إضافي إذا لزم الأمر
        alert("تم إرسال النموذج بنجاح!");
        event.preventDefault();
    });
});
//التحقق من الكابتشة
$('myForm').on('submit', function(event) {
    event.preventDefault();
    if (grecaptcha.getResponse().length === 0) {
        alert('Please complete the CAPTCHA');
    } else {
        alert('Form submitted successfully!');
        this.reset();
        grecaptcha.reset();
    }
});
