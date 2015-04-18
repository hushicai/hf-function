/**
 * @file partial
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function partial(fn) {
            var args = [].slice.call(arguments, 1);
            return function () {
                var len = args.length;
                var innerLen =  arguments.length;
                var arg = 0;
                for (var i = 0; i < len && arg < innerLen; i++) {
                    args[i] = arguments[arg++];
                }

                return fn.apply(this, args);
            };
        }
        return partial;
    }
);
