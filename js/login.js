document.addEventListener("DOMContentLoaded", function() {
    var menuList = document.querySelector(".login-menu ul");
    var listItems = menuList.querySelectorAll("li");

    listItems.forEach(function(item, index) {
        item.addEventListener("click", function() {
            // �� ��° ��Ҵ� ȸ�������̹Ƿ� �� ��° ��Ҹ� Ŭ������ ���� ó��
            if (index === 1) {
                window.location.href = "login.html"; // �� ��° li�� Ŭ���ϸ� login.html�� �̵�
            } else if (index === 2) {
                window.location.href = "join.html"; // �� ��° li�� Ŭ���ϸ� join.html�� �̵�
            }
        });
    });
});
// ========================================================================
$(document).ready(function() {
    $('#login_Btn').click(function() { // �α��� ��ư�� ���� Ŭ�� �̺�Ʈ ���ε�
        const id = $('#login-Id').val(); // �ʵ� ���̵� �� ��������
        const pw = $('#login-Pwd').val(); // �ʵ� ��й�ȣ �� ��������

        const storedPw = localStorage.getItem(id); // �ʵ� ���̵� ���� ���� ����� ��й�ȣ ��������

        if(!id || !pw) {
            alert('���̵�� ��й�ȣ�� ��� �Է����ּ���.');
        } else if(pw === storedPw) {
            alert('�α��� ����');
            localStorage.setItem('loginUser' , id); // �α����� ����� ���̵� ���� ���丮���� ����
            $(location).attr('href' , 'index.html'); // �α��� ���� �������� �̵�
        } else {
            alert('���̵� �Ǵ� ��й�ȣ�� �߸��Ǿ����ϴ�.');
        }
    });

    // ȸ������ �������� �̵��ϴ� �̺�Ʈ ��ư
    $('#signUp_Btn').click(function() {
        $(location).attr('href' , 'signUp.html');
    });
});