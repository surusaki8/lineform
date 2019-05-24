    var name = document.getElementById('name');
    var tel = document.getElementById('tel');
    var formText = document.getElementById('formText');
    function check(){
        if(name == "" || tel == "" || formText == "" ){
          window.alert('未入力項目があります。');
        } else {
          radioCheck();
        }
      }
    
    function radioCheck() {
      var flag = false;
      for(var i= 0; i<document.lineForm.formType.length; i++){
        if(document.lineForm.formType[i].checked){
          flag = true;
          formConfirm();
        } 
        if(!flag){
            window.alert('未入力項目があります。');
        }
      }
      
    }

    function formConfirm(){
        if(window.confirm('送信してよろしいですか？')){ // 確認ダイアログを表示
          window.alert('正常に送信されました。');
          sendGform(); // 「OK」時は送信+sendGform();を実行
        }
        else { // 「キャンセル」時の処理
          window.alert('キャンセルされました'); // 警告ダイアログを表示
           // 送信を中止
        }
    }

    function sendGform(){
          document.lineForm.submit();
          document.getElementById('formWrapper').style.display = 'none';
          document.getElementById('thxMessage').style.display = 'block';
    }

    