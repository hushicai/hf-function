/**
 * @file 函数节流
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        function throttle(fn, wait, trailing) {
            // 默认trailing为true
            // 不考虑leading情况
            trailing = trailing === undefined ? true : trailing;

            var context;
            var args;
            var timeout;
            var lastTimestamp = 0;

            var later = function () {
                lastTimestamp = new Date();
                fn.apply(context, args);
                timeout = null;
                context = null;
                args = null;
            };


            return function () {
                context = this;
                args = arguments;

                var timestamp = new Date();

                var remaining = wait - (timestamp - lastTimestamp);
                if (remaining <= 0) {
                    if (timeout) {
                        clearTimeout(timeout);
                        timeout = null;
                    }
                    lastTimestamp = timestamp;
                    fn.apply(context, args);
                    context = null;
                    args = null;
                }
                else if (!timeout && trailing === true) {
                    timeout = setTimeout(later, wait);
                }
            };
        }
        return throttle;
    }
);
