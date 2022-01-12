
        var password = prompt("PASSWORD 입력","")
        var total = password

        var originUrl = window.location.href;            // 현재 경로 추출
        var arrSplitUrl = originUrl.split("/");        // "/" 스플릿하고 배열생성
        var nArLength = arrSplitUrl.length;           
        var fileName = arrSplitUrl[nArLength-1];       // 배열 중 마지막이 'fileName'

        message = {                                     // 객체 message
            "1.html":"우정이구나 안녕",
            "2.html":"장세희 하이",
            "3.html":"조민주 하이",
            "4.html":"최서희 하이",
            "5.html":"김아주구나",
            "6.html":"허성희구나",
            "7.html":"김연선 하2",
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
        }   else if (total === "0111" || total === "5") {
            message.show();
        }   else { 
                alert("출입불가 에베베ㅔ 에에")
                location  = "index.html"   
        }

        

        const a = "6dfdf4ae77bc817ae825858884e68c016fbf36298e793";
        const b = "00000000000000000006dfdf4ae77bc817ae825858884e68c016fbf36298e793";
        
        const c = "112ff0e413ce7a4ca7c03c6e1069d3295e373195f2a739f71e2666fba905267c";

        console.log(a.length, b.length, c.length);
