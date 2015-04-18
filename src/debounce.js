/**
 * @file 函数去抖
 * @author hushicai(bluthcy@gmail.com)
 */


// 函数在一个指定间隔之后只执行一次。
// 如果在一个指定间隔超时之前，又来了一个函数请求，则重新计时。
// 如果指定了immediate，则会在计时开始前就执行一次

define(
    function (require) {
        function debounce(fn, wait, immediate) {
            var context;
            var args;
            var timeout;
            var timestamp;

            var later = function () {
                var remaining = wait - (new Date() - timestamp);

                // 重新计时
                if (remaining > 0) {
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
