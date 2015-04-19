/**
 * @file throttle spec
 * @author hushicai(bluthcy@gmail.com)
 */

define(
    function (require) {
        var throttle = require('throttle');

        describe('throttle', function () {
            beforeEach(function () {
                jasmine.clock().install();
                jasmine.clock().mockDate();
            });
            afterEach(function () {
                jasmine.clock().uninstall();
            });

            it('should happen immediately', function () {
                var happened = false;
                var throttled = throttle(function () {
                    happened = true;
                }, 100);
                throttled();
                expect(happened).toBe(true);
            });
            it('should happen with trailing', function () {
                var cnt = 0;
                var throttled = throttle(function () {
                    cnt++;
                }, 100, true);
                throttled();
                throttled();
                throttled();
                throttled();
                throttled();
                jasmine.clock().tick(101);
                expect(cnt).toBe(2);
            });
            it('should happen without trailing', function () {
                var cnt = 0;
                var throttled = throttle(function () {
                    cnt++;
                }, 100, false);
                throttled();
                throttled();
                throttled();
                throttled();
                throttled();
                jasmine.clock().tick(101);
                expect(cnt).toBe(1);
            });
            it('should happen every 100 ms', function () {
                var cnt = 0;
                var throttled = throttle(function () {
                    cnt++;
                }, 100);
                throttled();
                expect(cnt).toBe(1);
                throttled();
                jasmine.clock().tick(101);
                expect(cnt).toBe(2);
                throttled();
                jasmine.clock().tick(101);
                expect(cnt).toBe(3);
            });
        });
    }
);
