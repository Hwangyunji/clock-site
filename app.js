// app.js

$(function(){

    // 시간재생 - 매 1초마다 재생
    setInterval(function(){

        let d = new Date();
        let h = d.getHours(); // 시간
        let m = d.getMinutes(); // 분
        let s = d.getSeconds(); // 초
    
        let month = d.getMonth() + 1;
        let date = d.getDate();

        $('.month').html(month);
        $('.date').html(date);

        let week = d.getDay();
        
        if(week == 0) {week = 'SUN'};
        if(week == 1) {week = 'MON'};
        if(week == 2) {week = 'TUE'};
        if(week == 3) {week = 'WED'};
        if(week == 4) {week = 'THU'};
        if(week == 5) {week = 'FRI'};
        if(week == 6) {week = 'SAT'};

        $('.week').html(week);

        // 0 ~ 9까지는 앞에 0 표시
        if(s < 10) {
            s = '0' + s;
        }
        if(m < 10) {
            m = '0' + m;
        }
        if(h < 10) {
            h = '0' + h;
        }
        
        // 오전/오후 표시
        if(h < 12) {
            h = 'AM ' + h;
        }
        else {
            h = 'PM ' + h;
        }

        

        // 시간표시
        $('.hour').html(h);
        $('.min').html(m);
        $('.sec').html(s);

    }, 1000);


    var hour = function() {
		var fname ="";
		var today =new Date();
		var h = today.getHours();
		// if(h>=7 && h<=17)
		// {
		// 	fname="img/sun.png";
		// }
		// else
		// {
		// 	fname="img/moon.png";
		// }

        if(h > 6) {
			fname="images/morning.jpg";
		}
        if(h < 12) {
            fname="images/sky.jpg";
        }
		

		// if(s < 10) {
        //     s = '0' + s;
        // }
        // if(m < 10) {
        //     m = '0' + m;
        // }
        // if(h < 10) {
        //     h = '0' + h;
        // }
		document.getElementById("time").src=fname;
	}
});