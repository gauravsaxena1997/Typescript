var Days;
(function (Days) {
    Days[Days["sun"] = 100] = "sun";
    Days[Days["mon"] = 101] = "mon";
    Days[Days["tue"] = 102] = "tue";
    Days[Days["wed"] = 103] = "wed";
    Days[Days["thu"] = 104] = "thu";
    Days[Days["fri"] = 105] = "fri";
    Days[Days["sat"] = 106] = "sat";
})(Days || (Days = {}));
var day;
day = Days.mon;
if (day === Days.mon) {
    console.log('Gotta go to work...');
}
