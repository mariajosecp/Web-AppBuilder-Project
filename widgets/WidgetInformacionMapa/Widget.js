define(['dojo/_base/declare', 'jimu/BaseWidget'],
  function(declare, BaseWidget) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {
      // Custom widget code goes here

      baseClass: 'jimu-widget-informacionMapa',

      //methods to communication with app container:

      postCreate: function() {
         this.inherited(arguments);
         console.log('postCreate');
      },

      startup: function() {
        this.inherited(arguments);

        console.log('startup');

        this.infoTitle.innerHTML = "<p>Titulo</p>" + this.map.itemInfo.item.title;
        this.infoDescription.innerHTML = "<p>Descripcion</p>" + this.map.itemInfo.item.description;
        this.infoExtent.innerHTML = "<p>Extent</p>" + this.map.itemInfo.item.extent;
        this.infoId.innerHTML = "<p>Id</p>" + this.map.itemInfo.item.id;
        this.infoComentarios.innerHTML = "<p>Numero de comentarios</p>" + this.map.itemInfo.item.numComments;
        this.infoAccess.innerHTML = "<p>Acceso</p>" + this.map.itemInfo.item.access;
        this.infoCulture.innerHTML = "<p>Cultura</p>" + this.map.itemInfo.item.culture;
        this.infoLicence.innerHTML = "<p>Licencia</p>" + this.map.itemInfo.item.licenseInfo;

        var longitud = this.map.itemInfo.itemData.operationalLayers.length;

        if (longitud == 0) {

          this.infoLayers.innerHTML = "No tiene capas";

        } else {

          for (let index = 0; index < longitud; index++){
            this.infoLayers.innerHTML += "Capa " + index + ": " + this.map.itemInfo.itemData.operationalLayers[index].title + "<br>";
          }
        }

      },

      onOpen: function(){
         console.log('onOpen');
         console.log(this.map);
      },

      // onClose: function(){
      //   console.log('onClose');
      // },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

      //methods to communication between widgets:

    });
  });
