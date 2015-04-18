/**
 * @file 函数去抖
 * @author hushicai(bluthcy@gmail.com)
 */


// 函数在指定间隔内只执行一次
// 如果在一个时间间隔内，又触发了一次函数请求，则重新计时，直至超时。
// 如果指定了immediate，则在计时开始之前，立即执行一次函数，然后开始计时，等待下一次函数请求。

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
