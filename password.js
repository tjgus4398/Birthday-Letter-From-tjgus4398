
        var password = prompt("PASSWORD 입력","")
        var total = password

        var originUrl = window.location.href;            // 현재 경로 추출
        var arrSplitUrl   = originUrl.split("/");        // "/" 스플릿하고 배열생성
        var nArLength    = arrSplitUrl.length;           
        var fileName   = arrSplitUrl[nArLength-1];       // 배열 중 마지막이 'fileName'

        message = {                                     // 객체 message
            "1.html":"우정이구나",
            "2.html":"장세희구나",
            "3.html":"조민주구나",
            "4.html":"최서희구나",
            "5.html":"김아주구나",
            "6.html":"허성희구나",
            "7.html":"김연선이구나",
            "8.html":"엄마 안녕"
            }

        message.show = function() {                     // 메소드 show: 객체 message의 모든 key값 추출 후 'fileName'과 같은지 검사
            for(var key in message) {
                if(fileName === key) {   
                    alert(message[key]);                // 같다면 축하 메세지 alert
                }
            }
        }

        if (password === null) { 
            location = "index.html"  
        }   else if (total === "1111" || total === "2222" || total === "3333" || total === "4444" || total === "5555" || total === "6666" || total === "7777" || total === "8888") {
            message.show();
        }   else { 
                alert("출입불가 에베베ㅔ 에에")
                // while (i < 3) {
                //    i = i++
                //    prompt(i + " 회 오류, 누구냐","")
                // }
                // var i = 0;
                location  = "index.html"   
        }    
        

        