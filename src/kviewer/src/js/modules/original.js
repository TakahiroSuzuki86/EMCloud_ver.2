(function() {
  "use strict";

  //�Ј����y�[�W�֎����J�ځi�^���N���b�N�j
  kv.events.records.mounted = [function () {
    let mainarea = document.querySelector('main');
    let element = document.querySelector('.kv-table-view-content a');
    element.click();
  }];
})();


(function() {
  "use strict";

  kv.events.view.detail.mounted = [function () {
    let del_cont = document.querySelectorAll('div.label');
    const winsize = window.innerWidth;
    
    for (let i = 0; i < del_cont.length; i++){
        let val = del_cont[i].innerText;
        if(del_cont[i].innerText.length == 0 && winsize < 480){
            del_cont[i].remove();
        }
    }
    var new_element = document.createElement('div');
    new_element.id = "fambox"; 
    
    del_cont[7].appendChild(new_element);
    
    //�ҏW�{�^�����^���N���b�N
    let henshu_btn = document.querySelector('#linksmenu');
    let henshu_btn_def = document.querySelector('a.kv-fb-content');
    henshu_btn.addEventListener('click', () => {
        henshu_btn_def.click();
    });
  }];
})();
