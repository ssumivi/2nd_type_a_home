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
//   ============================================================================================
$(document).ready(function() {
    //�ߺ� Ȯ�� ���� ����
    var isIdChecked = false;
    // �ߺ� Ȯ�� ��� ���� (true: ��� ���� , false: ��� �Ұ�)
    var isIdAvailable = false;

    //ȸ������ �Լ�
    function signUp() {
        const id = $('#signUp-Id').val();
        const pw = $('#signUp-Pwd').val();
        // �ߺ� Ȯ���� ���� �ʾҰų�, ���̵� ��� �Ұ��� ���
        if(!isIdChecked || !isIdAvailable) {
            alert('���̵� �ߺ� Ȯ���� �ʿ��մϴ�.');
            return;
        }
        if (!id || !pw){
            alert('���̵�� ��й�ȣ�� ��� �Է����ּ���.');
            return;
        }
        localStorage.setItem(id, pw);
        alert('ȸ������');
        $(location).attr('href' , 'login.html'); // �α��� �������� �̵�
    }
    
    //ID �ߺ� Ȯ�� �Լ�
    function double_Check() {
        const id = $('#signUp-Id').val();
        if(!id) {
            alert('���̵� �Է��ϼ���.');
            isIdChecked = false;
            return;
        }
        if(localStorage.getItem(id) !== null) {
            alert('�̹� �����ϴ� ID�Դϴ�.');
            isIdAvailable = false;
        } else {
            alert('��� ������ ���̵� �Դϴ�.');
            isIdAvailable = true;
        }
        isIdChecked = true;
    }

    // ȸ������ ��ư Ŭ�� �̺�Ʈ
    $('#signUp_Btn').click(function() {
        signUp();
    });

    // �ߺ� Ȯ�� ��ư Ŭ�� �̺�Ʈ
    $('#double_Check_Btn').click(function() {
        double_Check();
    });

    // �α��� �������� �̵� Ŭ�� �̺�Ʈ
    $('#login_Btn').click(function() {
        $(location).attr('href' , 'login.html');
    });
});