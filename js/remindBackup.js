//提醒備份
$(document).ready(function () {
    var xsBackupClose = 0;
    var lgBackupClose = 0;
    $("#xsClose-btn").click(function () {
        $(".c-backup-xs").fadeOut();
        xsBackupClose = 1;
    });
    $("#lgClose-btn").click(function () {
        $(".c-backup-lg").fadeOut();
        lgBackupClose = 1;
    });
    $(window).on("scroll", function () {
        if ($(window).scrollTop() + $(window).height() == $(document).height() && lgBackupClose == 0 && xsBackupClose == 0) {
            $(".c-backup-lg").fadeIn();
        }
        else {
            $(".c-backup-lg").fadeOut();
        }
        if ($(window).scrollTop() > 1000 && $(".c-backup-lg").is(":hidden") == true && xsBackupClose == 0 && lgBackupClose == 0) {
            $(".c-backup-xs").slideDown(2000);
        }
        else {
            $(".c-backup-xs").fadeOut();
        }
    });
});