/**
 * @file bind
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function bind(fn, context) {
            var args = [].slice.call(arguments, 2);
            return function () {
                return fn.apply(
                    context,
                    args.concat([].slice.call(arguments))
                );
            };
        }
        return bind;
    }
);
