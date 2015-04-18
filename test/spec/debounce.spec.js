/**
 * @file debounce spen
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var debounce = require('debounce');

        describe('debounce test suite', function () {
            beforeEach(function () {
                jasmine.clock().install();
                jasmine.clock().mockDate();
            });
            afterEach(function () {
                jasmine.clock().uninstall();
            });
            it('should not happen immediately', function () {
                var happened = false;
                var debounced = debounce(function () {
                    happened = true;
                }, 100);
                expect(happened).toBe(false);
                debounced();
                expect(happened).toBe(false);
            });

            it('should happen after a delay', function () {
                var happened = false;
                var debounced = debounce(function () {
                    happened = true;
                }, 100);
                debounced();
                expect(happened).toBe(false);
                jasmine.clock().tick(200);
                expect(happened).toBe(true);
            });

            it('should reset timer when continually invoke', function () {
                var happened = false;
                var debounced = debounce(function () {
                    happened = true;
                }, 100);
                debounced();
                jasmine.clock().tick(50);
                // restart timer
                debounced();
                jasmine.clock().tick(50);
                expect(happened).toBe(false);
                jasmine.clock().tick(51);
                expect(happened).toBe(true);
            });

            it('should happen once', function () {
                var count = 0;
                var debounced = debounce(function (val) {
                    count++;
                    expect(val).toBe(3);
                }, 100);
                debounced(1);
                debounced(2);
                debounced(3);
                jasmine.clock().tick(101);
                expect(count).toBe(1);
            });

            it('should happen immediately', function () {
                var happened = false;
                var debounced = debounce(function () {
                    happened = true;
                }, 100, true);
                debounced();
                expect(happened).toBe(true);
            });

            it('can debounce different functions', function () {
                var a = false;
                var b = false;

                var ad = debounce(function () {
                    a = true;
                }, 100);
                var bd = debounce(function () {
                    b = true;
                }, 100);

                ad();
                bd();

                jasmine.clock().tick(101);
                expect(a).toBe(true);
                expect(b).toBe(true);
            });
        });
    }
);
