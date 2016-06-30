  ccm.component( {
    name: 'componentbinder',
    config: {
      instance_messenger: [ ccm.instance, '../ab3/ccm.messenger.js' ],
        instance_item_verwaltung: [ ccm.instance,'http://www2.inf.fh-bonn-rhein-sieg.de/~mwelsc2s/w4/item-verwaltung.js'],
        style: [ccm.load,'./style.css']
        
    },
    Instance: function () {
      this.init = function ( callback ) {
        this.instance_messenger.element = ccm.helper.find( this, '.messenger' );
        this.instance_item_verwaltung.element = ccm.helper.find( this, '.item_verwaltung' );
        callback();
      };
      this.render = function ( callback ) {
        var element = ccm.helper.element( this );
        element.html( '<div class="messenger"></div><div class="item_verwaltung"></div>' );
        this.instance_messenger.render();
        this.instance_item_verwaltung.render();
        if ( callback ) callback();
      }
    }
} );