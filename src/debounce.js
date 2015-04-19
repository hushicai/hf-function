/**
 * @file 函数去抖
 * @author hushicai(bluthcy@gmail.com)
 */


define(
    function (require) {
        function debounce(fn, wait, leading) {
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
                    // 不重复执行
                    if (!leading) {
                        fn.apply(context, args);
                        context = args = null;
                    }
                }
            };

            return function () {
                context = this;
                args = arguments;
                timestamp = new Date();

                var isCallNow = leading && !timeout;

                if (!timeout) {
                    timeout = setTimeout(later, wait);
                }

                if (isCallNow) {
                    fn.apply(context, args);
                    context = args = null;
                }
            };
        }
        return debounce;
    }
);
