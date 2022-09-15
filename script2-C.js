
function mySubmit(){
    var val1 = document.frmMain.sct1.value;
    var myURL;



    switch(val1){


            case "1":
            myURL = "C2-A1.mp4"
            break;

            case "2":
            myURL = "C2-B1.mp4"
            break;

            case "3":
            myURL = "C2-C1.mp4"
            break;

            case "4":
            myURL = "C2-D1.mp4"
            break;

            case "5":
            myURL = "2c-a.mp4"
            break;

            case "6":
            myURL = "2c-b.mp4"
            break;

            case "7":
                myURL = "2F.jpg"
                alert("目的地は現在地と同じ2階A階段(赤)エリアです。\n okボタンをクリックし、マップから目的地をご確認ください。");
                break;


            case "8":
            myURL = "2F.jpg"
            alert("2階行動はB階段（黄色）エリアの先にあります。マップアニメーションからご確認ください。");
            break;


            case "9":
            myURL = "2c-d.mp4"
            break;



            case "10":
                alert("3階行動はB階段（黄色）エリアの先にあります。マップアニメーションからご確認ください。");
            myURL = "C2-B3.mp4"
            break;

            case "11":
            myURL = "C2-A3.mp4"
            break;

            case "12":
            myURL = "C2-B3.mp4"
            break;

            case "13":
            myURL = "C2-D3.mp4"
            break;

            case "14":
            myURL = "C2-A4.mp4"
            break;

            case "15":
            myURL = "C2-B4.mp4"
            break;

            case "16":
            myURL = "C2-D4.mp4"
            break;

            
            




            

            






        }
    
        location.href = myURL;
        return 0;
        }
    