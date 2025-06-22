AFRAME.registerComponent('color-toggle',
    {
        init: function() {
           let el= this.el;
           this.toggleColor = function() {
            el.setAttribute('color','blue');
           };
           this.el.addEventListener('click',this.toggleColor);
        },
        remove: function() {
           this.el.removeEventListener('click',this.toggleColor);
        }
    }
);

AFRAME.registerComponent('target-marker', {
    init: function() {
        let target = this.target;

        this.addMarker = function(e) {
            let p = e.detail.intersection;
            let scene = document;
        };
    }
});

/*Cat animations*/

/*AFRAME.registerComponent('find-cat', {
  init: function() {
    let el=this.el;
    this.find-cat = function(stopAnimation) {
      el.setAttribute('animation','null');
    };
    this.el.addEventListener('click', this.find-cat);
    remove: function(finallyStop) {
           this.el.removeEventListener('click',this.find-cat);
  })*/

AFRAME.registerComponent('run-animation', {

  init: function () {
    let hidingSpot = ((Math.random()*10)+' '+(Math.random()*10)+' '+(Math.random()*10))
    const myTimeout = setInterval(run-animation, 5000);

    this.el.addEventListener('onload', () => {

      this.el.setAttribute('animation', {

        property: 'position',

        to: hidingSpot,

        loop: true,

        dur: 1000,

        pauseEvents:'click'

      });

    });

  }

});
