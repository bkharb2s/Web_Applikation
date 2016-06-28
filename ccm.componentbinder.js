  ccm.component( {
    name: 'componentbinder',
    config: {
      instance_messengert: [ ccm.instance, 'http://www2.inf.fh-bonn-rhein-sieg.de/~bkharb2s/ab3/ccm.messenger.js' ],
      instance_calc: [ ccm.instance, 'http://johnjonnyjohn.github.io/ccm-components/resources/calculator/calculator.js' ]
    },
    Instance: function () {
      this.init = function ( callback ) {
        this.instance_messenger.element = ccm.helper.find( this, '.messenger' );
        this.instance_calc.element = ccm.helper.find( this, '.calc' );
        callback();
      };
      this.render = function ( callback ) {
        var element = ccm.helper.element( this );
        element.html( '<div class="messenger"></div><div class="calc"></div>' );
        this.instance_messenger.render();
        this.instance_calc.render();
        if ( callback ) callback();
      }
    }
} );