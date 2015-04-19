/**
 * @file curry
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function curry(fn) {
            var xargs = [].slice.call(arguments);
            return function () {
                return fn.apply(
                    this,
                    xargs.concat([].slice.call(arguments))
                );
            };
        }
        return curry;
    }
);
