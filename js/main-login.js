document.addEventListener("DOMContentLoaded", function() {
    // UI ������Ʈ �Լ�
    function updateUI() {
        var isLoggedIn = localStorage.getItem("isLoggedIn");

        if (isLoggedIn) {
            // �α��� ������ ��
            document.getElementById("login-section").style.display = "none";
            document.getElementById("dashboard-section").style.display = "block";
            document.getElementById("signup-section").style.display = "none";

            // �������� ǥ��
            var username = localStorage.getItem("username");
        } else {
            // �α׾ƿ� ������ ��
            document.getElementById("login-section").style.display = "block";
            document.getElementById("dashboard-section").style.display = "none";
            document.getElementById("signup-section").style.display = "block";
        }
    }

    // ������ �ε� �� UI ������Ʈ
    updateUI();

    // �α��� ��ư Ŭ�� ��
    document.getElementById("login-button").addEventListener("click", function() {

        // UI ������Ʈ
        // localStorage.setItem("isLoggedIn", true);
        updateUI();
    });

    // �α׾ƿ� ��ư Ŭ�� ��
    document.getElementById("logout-button").addEventListener("click", function() {
        // �α׾ƿ� ���� �߰� �۾� (��: �������� ���� ��)
        // ...

        // UI ������Ʈ
        localStorage.removeItem("isLoggedIn");
        updateUI();
    });
});