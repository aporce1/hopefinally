var app = {
    
    initialize: function() {
        this.initFastClick();
        this.bindEvents();
    },
    
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    initFastClick : function() {
        window.addEventListener('load', function() {
            FastClick.attach(document.body);
        }, false);
    },

    onDeviceReady: function () {

        //chequeo si tienen internet
        if (checkConnection() == 'NoInternet') {
            navigator.notification.alert(
                'Sentimos mas o app so funciona com Acceso a Internet por enquanto',  // message
                alertDismissed,         // callback
                'Sem Internet',            // title
                'Tchau'                  // buttonName
            );
        }

        //Listo las categorias activas en el panel
        GetCategories();

    }
};