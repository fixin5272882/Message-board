window.onload = function(){
    var Name = document.getElementById("Name");
    var contant = document.getElementById("contant");
    var postbtn = document.getElementById("postbtn");

    var card_contant = document.getElementById("card_contant");//所有新增的卡片放置的div區塊
    var cardid = 0
    var editcontant_value;


    postbtn.onclick = function(){
        if(Name.value && contant.value){

            cardid++;
            //寫入留言內容
            var divcol = document.createElement("div");
            divcol.setAttribute("id", "card:"+cardid);//設置編號
            divcol.className = "col";
            card_contant.appendChild(divcol)
            var divcard = document.createElement("div");
            divcard.className = "card container shadow-sm position-relative";
            divcol.appendChild(divcard)

            var divcard_body = document.createElement("div");
            divcard_body.className = "card-body";
            divcard_body.setAttribute("id", "card_body");
            divcard.appendChild(divcard_body)
            var card_title = document.createElement("h5");
            card_title.className = "card-title";
            card_title.innerHTML = Name.value;
            Name.value = "";
            divcard_body.appendChild(card_title)
            var card_text = document.createElement("p");
            card_text.className = "card-text";
            card_text.innerHTML = contant.value;
            contant.value = "";
            divcard_body.appendChild(card_text)
            var card_time = document.createElement("p");//新增時間
            card_time.className = "time h7";
            var myDate = new  Date();
            card_time.innerHTML = "留言時間："+myDate.toLocaleString();
            divcard_body.appendChild(card_time);
            var card_time_update = document.createElement("p");//新增更新時間
            card_time_update.className = "time h7";
            var myDate = new  Date();
            card_time_update.innerHTML = ""
            card_time.appendChild(card_time_update);
            var btn_group = document.createElement("div");//btngroup
            btn_group.className = "btn-group";
            divcard_body.appendChild(btn_group)
            var Editbtn = document.createElement("button");//Editbtn
            Editbtn.setAttribute("type", "button");
            Editbtn.className = "btn btn-sm btn-outline-primary";
            Editbtn.setAttribute("id", "Editbtn");
            Editbtn.innerHTML = 'Edit';
            btn_group.appendChild(Editbtn)
            var Deletebtn = document.createElement("button");//Deletebtn
            Deletebtn.setAttribute("type", "button");
            Deletebtn.className = "btn btn-sm btn-outline-danger";
            Deletebtn.setAttribute("id", "Deletebtn");
            Deletebtn.innerHTML = "Delet";
            btn_group.appendChild(Deletebtn)

            Editbtn.onclick = function(){//修改內容
                if (/.*Edit.*/.test(Editbtn.innerHTML)){

                    var editcontant = document.createElement("input");
                    editcontant.className = "form-control";
                    editcontant.setAttribute("type", "textarea");
                    editcontant.setAttribute("id", "editcontant");
                    editcontant.value =card_text.innerHTML;
                    card_text.innerHTML="";
                    // card_text.innerHTML =editcontant.value ;
                    card_text.appendChild(editcontant);
                    Editbtn.innerHTML= 'Save';
                }
                else{
                    editcontant_value = document.getElementById("editcontant");
                    var myDate = new  Date();
                    card_time_update.innerHTML = "更新時間："+myDate.toLocaleString();//更新時間
                    card_text.innerHTML = editcontant_value.value;
                    Editbtn.innerHTML= 'Edit';
                }
                
            }

            Deletebtn.onclick = function(){ //Deletebtn刪除物件

                var card_contant = document.getElementById("card_contant");
                card_contant.removeChild(divcol);
                
            }
        }  
    }

    

    

}