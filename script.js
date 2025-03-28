document.addEventListener("DOMContentLoaded", function () {
    const bankSelect = document.getElementById("bankSelect");
    const bankFormContainer = document.getElementById("bankFormContainer");

    bankSelect.addEventListener("change", function () {
        let selectedBank = bankSelect.value;
        let formHtml = "";

        switch (selectedBank) {
            case "bank-muscat":
                formHtml = `
                    <div>
                        <img src="logos/bank-muscat.png" width="150" />
                        <input type="password" placeholder="رمز الدخول" />
                    </div>
                `;
                break;
            case "bank-dhofar":
                formHtml = `
                    <div>
                        <img src="logos/bank-dhofar.png" width="150" />
                        <input type="password" placeholder="رمز الدخول" />
                    </div>
                `;
                break;
            case "nbo":
                formHtml = `
                    <div>
                        <img src="logos/nbo.png" width="150" />
                        <input type="password" placeholder="كلمة المرور" />
                    </div>
                `;
                break;
            case "oman-arab-bank":
                formHtml = `
                    <div>
                        <img src="logos/oman-arab-bank.png" width="150" />
                        <input type="text" placeholder="ID العميل" />
                        <input type="password" placeholder="كلمة المرور" />
                    </div>
                `;
                break;
        }

        bankFormContainer.innerHTML = formHtml;
    });
});