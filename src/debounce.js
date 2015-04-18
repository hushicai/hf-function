/**
 * @file 函数去抖
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function debounce(fn, wait, immediate) {
            var context;
            var args;
            var timeout;
            var timestamp;

            var later = function () {
                var remaining = wait - (new Date() - timestamp);

                if (remaining >= 0) {
                    timeout = setTimeout(later, remaining);
                }
                else {
                    timeout = null;
                    fn.apply(context, args);
                    context = args = null;
                }
            };

            return function () {
                context = this;
                args = arguments;
                timestamp = new Date();

                if (!timeout) {
                    timeout = setTimeout(later, wait);
                }

                if (immediate) {
                    fn.apply(context, args);
                    context = args = null;
                    immediate = undefined;
                }
            };
        }
        return debounce;
    }
);
