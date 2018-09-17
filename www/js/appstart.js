    function checkConnection() {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN] = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI] = 'WiFi connection';
        states[Connection.CELL_2G] = 'Cell 2G connection';
        states[Connection.CELL_3G] = 'Cell 3G connection';
        states[Connection.CELL_4G] = 'Cell 4G connection';
        states[Connection.CELL] = 'Cell generic connection';
        states[Connection.NONE] = 'NoInternet';

        //alert('Connection type: ' + states[networkState]);
        return states[networkState];

    }
    function alertDismissed() {
        navigator.app.exitApp();
    }

    $(function () {
        $("#mapa").click(function () {
            getGeoLocation();
        });
    });
$(function () {
    $("#Bar>a").click(function () {
        $.ajax({
            url: 'https://gpromo.com.br/getcompanys.php?find=companys&cat=2',
            //url: 'https://materiales.canela.me/json_jquery/',
            type: 'GET',
            dataType: 'JSON',
            beforeSend: function (data) {
                $("#pBar").html('<div style="width:100%;text-align:center"><img src="img/ajax-loader.gif" /></div>');
            },
            success: function (data) {
                //alert(data);
                var canciones = "";
                for (var c = 0; c < data.length; c++) {
                    var infocancion = "<div class='sEmpresa'>" + data[c].nomeemp + "</div><div class='sInfo'><a href='tel:+55" + data[c].telefone + "'>" + data[c].telefone + "</a></div>";
                    canciones += infocancion;
                    console.log(infocancion);
                }
                canciones += "</ul>";
                $("#pBar").html(canciones);
            }
        })
    });
    $("#CorrectoresInmovel>a").click(function () {
        $.ajax({
            url: 'https://gpromo.com.br/getcompanys.php?find=companys&cat=18',
            type: 'GET',
            dataType: 'JSON',
            beforeSend: function (data) {
                $("#pCorrectoresInmovel").html('<div style="width:100%;text-align:center"><img src="img/ajax-loader.gif" /></div>');
            },
            success: function (data) {
                //alert(data);
                var canciones = "";
                for (var c = 0; c < data.length; c++) {
                    var infocancion = "<div class='sEmpresa'>" + data[c].nomeemp + "</div><div class='sInfo'><a href='tel:+55" + data[c].telefone + "'>" + data[c].telefone + "</a></div>";
                    canciones += infocancion;
                    console.log(infocancion);
                }
                canciones += "</ul>";
                $("#pCorrectoresInmovel").html(canciones);
            }
        })
    });
});