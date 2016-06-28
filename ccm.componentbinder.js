  ccm.component( {
    name: 'componentbinder',
    config: {
      instance_messenger: [ ccm.instance, '../ab3/ccm.messenger.js' ],
      instance_calc: [ ccm.instance, 'http://johnjonnyjohn.github.io/ccm-components/resources/calculator/calculator.js' ],
        instance_clock: [ ccm.instance,'http://mkaul.github.io/ccm-components/resources/clock/ccm.clock.js'],
        style: [ccm.load,'./style.css']
        
    },
    Instance: function () {
      this.init = function ( callback ) {
        this.instance_messenger.element = ccm.helper.find( this, '.messenger' );
        this.instance_clock.element = ccm.helper.find( this, '.clock' );
        this.instance_calc.element = ccm.helper.find( this, '.calc' );  
        callback();
      };
      this.render = function ( callback ) {
        var element = ccm.helper.element( this );
        element.html( '<div class="messenger"></div><div class="clock"></div><div class="calc"></div>' );
        this.instance_messenger.render();
        this.instance_clock.render();
        this.instance_calc.render();
        if ( callback ) callback();
      }
    }
} );