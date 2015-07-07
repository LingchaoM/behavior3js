this.b3 = this.b3 || {};

(function() {
  "use strict";

  /**
   * Composite is the base class for all composite nodes. Thus, if you want to 
   * create new custom composite nodes, you need to inherit from this class. 
   * 
   * When creating composite nodes, you will need to propagate the tick signal to
   * the children nodes manually. To do that, override the `tick` method and call 
   * the `_execute` method on all nodes. For instance, take a look at how the 
   * Sequence node inherit this class and how it call its children:
   *
   *
   *     // Inherit from Composite, using the util function Class.
   *     var Sequence = b3.Class(b3.Composite);
   *     var p = Sequence.prototype;
   *
   *         // Remember to set the name of the node. 
   *         p.name = 'Sequence';
   *         
   *         // Override the tick function
   *         p.tick = function(tick) {
   *
   *             // Iterates over the children
   *             for (var i=0; i<this.children.length; i++) {
   *
   *                 // Propagate the tick
   *                 var status = this.children[i]._execute(tick);
   * 
   *                 if (status !== b3.SUCCESS) {
   *                     return status;
   *                 }
   *             }
   *
   *             return b3.SUCCESS;
   *         }
   *
   * @class Composite
   * @extends BaseNode
  **/
  var Composite = b3.Class(b3.BaseNode);

  var p = Composite.prototype;

    /**
     * Node category. Default to `b3.COMPOSITE`.
     *
     * @property category
     * @type {String}
     * @readonly
    **/
    p.category = b3.COMPOSITE;

    p.__BaseNode_initialize = p.initialize;
    /**
     * Initialization method.
     *
     * @method initialize
     * @constructor
    **/
    p.initialize = function(settings) {
      settings = settings || {};

      this.__BaseNode_initialize();

      this.children = (settings.children || []).slice(0);
    };

  b3.Composite = Composite;

})();