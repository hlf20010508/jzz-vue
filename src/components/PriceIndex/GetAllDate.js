export function get(day1, day2) {
    var getDate = function (str) {
        var tempDate = new Date();
        var list = str.split("-");
        tempDate.setFullYear(list[0]);
        tempDate.setMonth(list[1] - 1);
        tempDate.setDate(list[2]);
        return tempDate;
    }
    var date1 = getDate(day1);
    var date2 = getDate(day2);
    if (date1 > date2) {
        var tempDate = date1;
        date1 = date2;
        date2 = tempDate;
    }
    date1.setDate(date1.getDate() + 1);
    var dateArr = [];
    var i = 0;
    while (!(date1.getFullYear() == date2.getFullYear()
        && date1.getMonth() == date2.getMonth() && date1.getDate() == date2
            .getDate())) {
        var dayStr = date1.getDate().toString();
        if (dayStr.length == 1) {
            dayStr = "0" + dayStr;
        }
        let curr_month=String(date1.getMonth()+1)
        curr_month.length < 2 ? (curr_month = "0" + curr_month) : curr_month;
        dateArr[i] = date1.getFullYear() + "-" + curr_month + "-"
            + dayStr;
        i++;
        /*  
         * document.write("<div style='display:block'>" + date1.getFullYear() +  
         * "-" + (date1.getMonth() + 1) + "-" + date1.getDate() + "</div>");  
         */
        // document.write(dateArr[i] + "<br>");   
        date1.setDate(date1.getDate() + 1);
    }
    dateArr.splice(0, 0, day1)
    dateArr.push(day2);
    return dateArr;
}

export function format(d) {
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    String(curr_month).length < 2 ? (curr_month = "0" + curr_month) : curr_month;
    String(curr_date).length < 2 ? (curr_date = "0" + curr_date) : curr_date;
    var yyyyMMdd = curr_year + "-" + curr_month + "-" + curr_date;
    return yyyyMMdd;
}