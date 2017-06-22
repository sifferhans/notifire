(function(){

  function Notifire(options){
    if(!options) options = {};

    var model = {
      icon: 'fa-check',
      type: 'success',
      title: 'Success',
      description: 'Notifire',
      duration: 5000
    }

    var newObject = Object.assign({}, model, options);

    var container = document.querySelector('.notifire-container');

    function notification(){
      var notifire = document.createElement('div');
      notifire.classList.add('notifire','n-' + newObject.type);
      notifire.innerHTML = '<div class="icon"><i class="fa ' + newObject.icon + '"></i></div><div class="content"><h2>' + newObject.title + '</h2><p>' + newObject.description + '</p></div>';

      if(container) container.insertBefore(notifire, container.children[0]);
      else {
        container = document.createElement('div');
        container.classList.add('notifire-container');
        document.body.appendChild(container);
        container.appendChild(notifire);
      }

      setTimeout(function(){
        removeNotification(notifire);
      }, newObject.duration);
    }

    function removeNotification(el){
      el.classList.add('n-remove');
      setTimeout(function(){
        container.removeChild(el);
        if(container.children.length == 0) document.body.removeChild(container);
      }, 500);

    }

    notification();

  }

  if(!window.Notifire) window.Notifire = Notifire;

})();
