/**
 * @file debounce spen
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var debounce = require('debounce');

        describe('debounce test suite', function () {
            it('should not execute immediately', function () {
                var happened = false;
                var debounced = debounce(function () {
                    happened = true;
                }, 100);
                expect(happened).toBe(false);
                debounced();
                expect(happened).toBe(false);
            });

            it('should execute after a delay', function () {
                jasmine.clock().install();
                var happened = false;
                jasmine.clock().mockDate();
                var debounced = debounce(function () {
                    happened = true;
                }, 100);
                debounced();
                expect(happened).toBe(false);
                jasmine.clock().tick(101);
                expect(happened).toBe(true);
                jasmine.clock().uninstall();
            });
        });
    }
);
