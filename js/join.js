$(document).ready(function() {
    $('#btn1').click(function(event){
        //üũ�ڽ� üũ ���� Ȯ��
        if(!$('#check1').is(":checked") || !$('#check2').is(":checked")) {
            alert("�� üũ�ڽ� ��� üũ�ؾ� �մϴ�.");
            event.preventDefault();
        }
    });
});