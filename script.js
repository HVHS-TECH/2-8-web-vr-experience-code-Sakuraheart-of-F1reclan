AFRAME.registerComponent('color-toggle',
    {
        init: function() {
           let el= this.el;
           this.toggleColor = function() {
            el.setAttribute('color','blue')
           }
           this.el.addEventListener('click',this.toggleColor);
        },
        remove: function() {
           this.el.removeEventListener('click',this.toggleColor);
        }
    }
)

AFRAME.registerComponent('target-marker', {
    init: function() {
        let target = this.target;

        this.addMarker = function(e) {
            let p = e.detail.intersection;
            let scene = document
        }
    }
})