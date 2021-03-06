var utils = function() {
    "use strict";
    var r = {},
        n, e, t, f = 10,
        i, u, o;
    n = function(r, n, e) {
        var t, f = e;
        if (r.length <= n) {
            return r
        }
        if (typeof e !== "function") {
            f = function(r, n) {
                return r[n]
            }
        }
        for (t = n; t < r.length; t += 1) {
            if (f(r, t) !== f(r, n - 1)) {
                break
            }
        }
        return r.slice(0, t)
    };
    r.shorten = n;
    e = function(r, n) {
        var t, f = r;
        if (n === undefined) {
            return r
        }
        if (r === undefined) {
            return n
        }
        if (Array.isArray(r) || Array.isArray(n)) {
            return n
        }
        if (typeof n === "object") {
            if (typeof r !== "object") {
                f = {}
            }
            for (t in n) {
                if (n.hasOwnProperty(t) && typeof n[t] !== "function") {
                    f[t] = e(r[t], n[t])
                }
            }
        } else if (typeof n !== "function") {
            f = n
        }
        return f
    };
    r.deep_replace = e;
    t = function(r) {
        var n;
        n = function(r, e) {
            var t, i;
            if (typeof r === "string" || typeof r === "number" || typeof r === "boolean") {
                return r
            }
            if (e > f) {
                return undefined
            }
            if (Array.isArray(r)) {
                return r.map(function(r) {
                    return n(r, e + 1)
                })
            }
            if (typeof r === "object") {
                i = {};
                for (t in r) {
                    if (r.hasOwnProperty(t)) {
                        i[t] = n(r[t], e + 1)
                    }
                }
                return i
            }
            return r
        };
        return n(r, 0)
    };
    r.clone = t;
    i = function c(r, n) {
        return r < n ? -1 : r > n ? 1 : r >= n ? 0 : NaN
    };
    r.asc = i;
    u = function(r, n) {
        return n < r ? -1 : n > r ? 1 : n >= r ? 0 : NaN
    };
    r.desc = u;
    o = function(r) {
        var n = typeof r === "function" ? function(n, e) {
            return i(r(n), e)
        } : i;
        return function(r, e, t, f) {
            var i;
            if (arguments.length < 3) {
                t = 0
            }
            if (arguments.length < 4) {
                f = r.length
            }
            while (t < f) {
                i = t + f >>> 1;
                if (n(r[i], e) < 0) {
                    t = i + 1
                } else {
                    f = i
                }
            }
            return t
        }
    };
    r.bisector_left = o;
    r.bisect_left = r.bisector_left();
    return r
}();