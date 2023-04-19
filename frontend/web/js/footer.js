$(document).ready(function () {
    /*<![CDATA[*/
    /*;window.Modernizr = function (a, b, c) {
        function B(a) {
            j.cssText = a
        }

        function C(a, b) {
            return B(n.join(a + ";") + (b || ""))
        }

        function D(a, b) {
            return typeof a === b
        }

        function E(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function F(a, b) {
            for (var d in a) {
                var e = a[d];
                if (!E(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
            }
            return !1
        }

        function G(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : D(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }

        function H(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + p.join(d + " ") + d).split(" ");
            return D(b, "string") || D(b, "undefined") ? F(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), G(e, b, c))
        }

        function I() {
            e.input = function (c) {
                for (var d = 0, e = c.length; d < e; d++) t[c[d]] = c[d] in k;
                return t.list && (t.list = !!b.createElement("datalist") && !!a.HTMLDataListElement), t
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), e.inputtypes = function (a) {
                for (var d = 0, e, f, h, i = a.length; d < i; d++) k.setAttribute("type", f = a[d]), e = k.type !== "text", e && (k.value = l, k.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && k.style.WebkitAppearance !== c ? (g.appendChild(k), h = b.defaultView, e = h.getComputedStyle && h.getComputedStyle(k, null).WebkitAppearance !== "textfield" && k.offsetHeight !== 0, g.removeChild(k)) : /^(search|tel)$/.test(f) || (/^(url|email)$/.test(f) ? e = k.checkValidity && k.checkValidity() === !1 : e = k.value != l)), s[a[d]] = !!e;
                return s
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))
        }

        var d = "2.7.1", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style,
            k = b.createElement("input"), l = ":)", m = {}.toString, n = " -webkit- -moz- -o- -ms- ".split(" "),
            o = "Webkit Moz O ms", p = o.split(" "), q = o.toLowerCase().split(" "), r = {}, s = {}, t = {}, u = [],
            v = u.slice, w, x = function (a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
                if (parseInt(d, 10)) while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            }, y = function (b) {
                var c = a.matchMedia || a.msMatchMedia;
                if (c) return c(b).matches;
                var d;
                return x("@media " + b + " { #" + h + " { position: absolute; } }", function (b) {
                    d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
                }), d
            }, z = {}.hasOwnProperty, A;
        !D(z, "undefined") && !D(z.call, "undefined") ? A = function (a, b) {
            return z.call(a, b)
        } : A = function (a, b) {
            return b in a && D(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function (b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = v.call(arguments, 1), e = function () {
                if (this instanceof e) {
                    var a = function () {
                    };
                    a.prototype = c.prototype;
                    var f = new a, g = c.apply(f, d.concat(v.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return c.apply(b, d.concat(v.call(arguments)))
            };
            return e
        }), r.canvas = function () {
            var a = b.createElement("canvas");
            return !!a.getContext && !!a.getContext("2d")
        }, r.touch = function () {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : x(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
                c = a.offsetTop === 9
            }), c
        }, r.boxshadow = function () {
            return H("boxShadow")
        }, r.cssanimations = function () {
            return H("animationName")
        }, r.cssgradients = function () {
            var a = "background-image:", b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
                c = "linear-gradient(left top,#9f9, white);";
            return B((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), E(j.backgroundImage, "gradient")
        }, r.csstransforms = function () {
            return !!H("transform")
        }, r.csstransforms3d = function () {
            var a = !!H("perspective");
            return a && "webkitPerspective" in g.style && x("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (b, c) {
                a = b.offsetLeft === 9 && b.offsetHeight === 3
            }), a
        }, r.csstransitions = function () {
            return H("transition")
        }, r.generatedcontent = function () {
            var a;
            return x(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function (b) {
                a = b.offsetHeight >= 3
            }), a
        };
        for (var J in r) A(r, J) && (w = J.toLowerCase(), e[w] = r[J](), u.push((e[w] ? "" : "no-") + w));
        return e.input || I(), e.addTest = function (a, b) {
            if (typeof a == "object") for (var d in a) A(a, d) && e.addTest(d, a[d]); else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
            }
            return e
        }, B(""), i = k = null, function (a, b) {
            function l(a, b) {
                var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
                return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
            }

            function m() {
                var a = s.elements;
                return typeof a == "string" ? a.split(" ") : a
            }

            function n(a) {
                var b = j[a[h]];
                return b || (b = {}, i++, a[h] = i, j[i] = b), b
            }

            function o(a, c, d) {
                c || (c = b);
                if (k) return c.createElement(a);
                d || (d = n(c));
                var g;
                return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
            }

            function p(a, c) {
                a || (a = b);
                if (k) return a.createDocumentFragment();
                c = c || n(a);
                var d = c.frag.cloneNode(), e = 0, f = m(), g = f.length;
                for (; e < g; e++) d.createElement(f[e]);
                return d
            }

            function q(a, b) {
                b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                    return s.shivMethods ? o(c, a, b) : b.createElem(c)
                }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function (a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(s, b.frag)
            }

            function r(a) {
                a || (a = b);
                var c = n(a);
                return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
            }

            var c = "3.7.0", d = a.html5 || {},
                e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                g, h = "_html5shiv", i = 0, j = {}, k;
            (function () {
                try {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function () {
                        b.createElement("a");
                        var a = b.createDocumentFragment();
                        return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                    }()
                } catch (c) {
                    g = !0, k = !0
                }
            })();
            var s = {
                elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: c,
                shivCSS: d.shivCSS !== !1,
                supportsUnknownElements: k,
                shivMethods: d.shivMethods !== !1,
                type: "default",
                shivDocument: r,
                createElement: o,
                createDocumentFragment: p
            };
            a.html5 = s, r(b)
        }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = y, e.testProp = function (a) {
            return F([a])
        }, e.testAllProps = H, e.testStyles = x, e.prefixed = function (a, b, c) {
            return b ? H(a, b, c) : H(a, "pfx")
        }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + u.join(" ") : ""), e
    }(this, this.document), function (a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {
        }

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function () {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function () {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }

            var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {load: j, i: 0}, a
        }

        var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [],
            q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
                return "[object Array]" == o.call(a)
            }, x = [], y = {}, z = {
                timeout: function (a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            }, A, B;
        B = function (a) {
            function b(a) {
                var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {url: c, origUrl: c, prefixes: a}, e,
                    f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a), j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function () {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h); else if (Object(a) === a) for (n in m = function () {
                            var b = 0, c;
                            for (c in a) a.hasOwnProperty(c) && b++;
                            return b
                        }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        } : j[n] = function (a) {
                            return function () {
                                var b = [].slice.call(arguments);
                                a && a.apply(this, b), l()
                            }
                        }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }

                var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }

            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0); else if (w(a)) for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
        }, B.addPrefix = function (a, b) {
            z[a] = b
        }, B.addFilter = function (a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
            var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function () {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
            var e = b.createElement("link"), j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function () {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("csscalc", function () {
        var a = "width:", b = "calc(10px);", c = document.createElement("div");
        return c.style.cssText = a + Modernizr._prefixes.join(b + a), !!c.style.length
    }), Modernizr.addTest("lastchild", function () {
        return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}", function (a) {
            return a.lastChild.offsetWidth > a.firstChild.offsetWidth
        }, 2)
    }), Modernizr.addTest("overflowscrolling", function () {
        return Modernizr.testAllProps("overflowScrolling")
    }), Modernizr.addTest("placeholder", function () {
        return "placeholder" in (Modernizr.input || document.createElement("input")) && "placeholder" in (Modernizr.textarea || document.createElement("textarea"))
    });*/

    !function (t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function (t, e) {
        function n(t) {
            var e = "length" in t && t.length, n = ot.type(t);
            return "function" !== n && !ot.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t))
        }

        function i(t, e, n) {
            if (ot.isFunction(e)) return ot.grep(t, function (t, i) {
                return !!e.call(t, i, t) !== n
            });
            if (e.nodeType) return ot.grep(t, function (t) {
                return t === e !== n
            });
            if ("string" == typeof e) {
                if (ht.test(e)) return ot.filter(e, t, n);
                e = ot.filter(e, t)
            }
            return ot.grep(t, function (t) {
                return ot.inArray(t, e) >= 0 !== n
            })
        }

        function o(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function r(t) {
            var e = wt[t] = {};
            return ot.each(t.match(bt) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function a() {
            ft.addEventListener ? (ft.removeEventListener("DOMContentLoaded", s, !1), t.removeEventListener("load", s, !1)) : (ft.detachEvent("onreadystatechange", s), t.detachEvent("onload", s))
        }

        function s() {
            (ft.addEventListener || "load" === event.type || "complete" === ft.readyState) && (a(), ot.ready())
        }

        function l(t, e, n) {
            if (void 0 === n && 1 === t.nodeType) {
                var i = "data-" + e.replace(kt, "-$1").toLowerCase();
                if (n = t.getAttribute(i), "string" == typeof n) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : St.test(n) ? ot.parseJSON(n) : n)
                    } catch (t) {
                    }
                    ot.data(t, e, n)
                } else n = void 0
            }
            return n
        }

        function c(t) {
            var e;
            for (e in t) if (("data" !== e || !ot.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function u(t, e, n, i) {
            if (ot.acceptData(t)) {
                var o, r, a = ot.expando, s = t.nodeType, l = s ? ot.cache : t, c = s ? t[a] : t[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = s ? t[a] = X.pop() || ot.guid++ : a), l[c] || (l[c] = s ? {} : {toJSON: ot.noop}), "object" != typeof e && "function" != typeof e || (i ? l[c] = ot.extend(l[c], e) : l[c].data = ot.extend(l[c].data, e)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[ot.camelCase(e)] = n), "string" == typeof e ? (o = r[e], null == o && (o = r[ot.camelCase(e)])) : o = r, o
            }
        }

        function d(t, e, n) {
            if (ot.acceptData(t)) {
                var i, o, r = t.nodeType, a = r ? ot.cache : t, s = r ? t[ot.expando] : ot.expando;
                if (a[s]) {
                    if (e && (i = n ? a[s] : a[s].data)) {
                        ot.isArray(e) ? e = e.concat(ot.map(e, ot.camelCase)) : e in i ? e = [e] : (e = ot.camelCase(e), e = e in i ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete i[e[o]];
                        if (n ? !c(i) : !ot.isEmptyObject(i)) return
                    }
                    (n || (delete a[s].data, c(a[s]))) && (r ? ot.cleanData([t], !0) : nt.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function h() {
            return !0
        }

        function p() {
            return !1
        }

        function f() {
            try {
                return ft.activeElement
            } catch (t) {
            }
        }

        function m(t) {
            var e = Ot.split("|"), n = t.createDocumentFragment();
            if (n.createElement) for (; e.length;) n.createElement(e.pop());
            return n
        }

        function g(t, e) {
            var n, i, o = 0,
                r = typeof t.getElementsByTagName !== _t ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== _t ? t.querySelectorAll(e || "*") : void 0;
            if (!r) for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || ot.nodeName(i, e) ? r.push(i) : ot.merge(r, g(i, e));
            return void 0 === e || e && ot.nodeName(t, e) ? ot.merge([t], r) : r
        }

        function v(t) {
            zt.test(t.type) && (t.defaultChecked = t.checked)
        }

        function y(t, e) {
            return ot.nodeName(t, "table") && ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function b(t) {
            return t.type = (null !== ot.find.attr(t, "type")) + "/" + t.type, t
        }

        function w(t) {
            var e = Vt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function x(t, e) {
            for (var n, i = 0; null != (n = t[i]); i++) ot._data(n, "globalEval", !e || ot._data(e[i], "globalEval"))
        }

        function C(t, e) {
            if (1 === e.nodeType && ot.hasData(t)) {
                var n, i, o, r = ot._data(t), a = ot._data(e, r), s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s) for (i = 0, o = s[n].length; i < o; i++) ot.event.add(e, n, s[n][i])
                }
                a.data && (a.data = ot.extend({}, a.data))
            }
        }

        function _(t, e) {
            var n, i, o;
            if (1 === e.nodeType) {
                if (n = e.nodeName.toLowerCase(), !nt.noCloneEvent && e[ot.expando]) {
                    o = ot._data(e);
                    for (i in o.events) ot.removeEvent(e, i, o.handle);
                    e.removeAttribute(ot.expando)
                }
                "script" === n && e.text !== t.text ? (b(e).text = t.text, w(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), nt.html5Clone && t.innerHTML && !ot.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && zt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
            }
        }

        function S(e, n) {
            var i, o = ot(n.createElement(e)).appendTo(n.body),
                r = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(o[0])) ? i.display : ot.css(o[0], "display");
            return o.detach(), r
        }

        function k(t) {
            var e = ft, n = Jt[t];
            return n || (n = S(t, e), "none" !== n && n || (Zt = (Zt || ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (Zt[0].contentWindow || Zt[0].contentDocument).document, e.write(), e.close(), n = S(t, e), Zt.detach()), Jt[t] = n), n
        }

        function T(t, e) {
            return {
                get: function () {
                    var n = t();
                    if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function E(t, e) {
            if (e in t) return e;
            for (var n = e.charAt(0).toUpperCase() + e.slice(1), i = e, o = he.length; o--;) if (e = he[o] + n, e in t) return e;
            return i
        }

        function I(t, e) {
            for (var n, i, o, r = [], a = 0, s = t.length; a < s; a++) i = t[a], i.style && (r[a] = ot._data(i, "olddisplay"), n = i.style.display, e ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && It(i) && (r[a] = ot._data(i, "olddisplay", k(i.nodeName)))) : (o = It(i), (n && "none" !== n || !o) && ot._data(i, "olddisplay", o ? n : ot.css(i, "display"))));
            for (a = 0; a < s; a++) i = t[a], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[a] || "" : "none"));
            return t
        }

        function A(t, e, n) {
            var i = le.exec(e);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
        }

        function z(t, e, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; r < 4; r += 2) "margin" === n && (a += ot.css(t, n + Et[r], !0, o)), i ? ("content" === n && (a -= ot.css(t, "padding" + Et[r], !0, o)), "margin" !== n && (a -= ot.css(t, "border" + Et[r] + "Width", !0, o))) : (a += ot.css(t, "padding" + Et[r], !0, o), "padding" !== n && (a += ot.css(t, "border" + Et[r] + "Width", !0, o)));
            return a
        }

        function j(t, e, n) {
            var i = !0, o = "width" === e ? t.offsetWidth : t.offsetHeight, r = te(t),
                a = nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, r);
            if (o <= 0 || null == o) {
                if (o = ee(t, e, r), (o < 0 || null == o) && (o = t.style[e]), ie.test(o)) return o;
                i = a && (nt.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + z(t, e, n || (a ? "border" : "content"), i, r) + "px"
        }

        function M(t, e, n, i, o) {
            return new M.prototype.init(t, e, n, i, o)
        }

        function P() {
            return setTimeout(function () {
                pe = void 0
            }), pe = ot.now()
        }

        function N(t, e) {
            var n, i = {height: t}, o = 0;
            for (e = e ? 1 : 0; o < 4; o += 2 - e) n = Et[o], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function L(t, e, n) {
            for (var i, o = (be[e] || []).concat(be["*"]), r = 0, a = o.length; r < a; r++) if (i = o[r].call(n, e, t)) return i
        }

        function O(t, e, n) {
            var i, o, r, a, s, l, c, u, d = this, h = {}, p = t.style, f = t.nodeType && It(t),
                m = ot._data(t, "fxshow");
            n.queue || (s = ot._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
                s.unqueued || l()
            }), s.unqueued++, d.always(function () {
                d.always(function () {
                    s.unqueued--, ot.queue(t, "fx").length || s.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = ot.css(t, "display"), u = "none" === c ? ot._data(t, "olddisplay") || k(t.nodeName) : c, "inline" === u && "none" === ot.css(t, "float") && (nt.inlineBlockNeedsLayout && "inline" !== k(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", nt.shrinkWrapBlocks() || d.always(function () {
                p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
            }));
            for (i in e) if (o = e[i], me.exec(o)) {
                if (delete e[i], r = r || "toggle" === o, o === (f ? "hide" : "show")) {
                    if ("show" !== o || !m || void 0 === m[i]) continue;
                    f = !0
                }
                h[i] = m && m[i] || ot.style(t, i)
            } else c = void 0;
            if (ot.isEmptyObject(h)) "inline" === ("none" === c ? k(t.nodeName) : c) && (p.display = c); else {
                m ? "hidden" in m && (f = m.hidden) : m = ot._data(t, "fxshow", {}), r && (m.hidden = !f), f ? ot(t).show() : d.done(function () {
                    ot(t).hide()
                }), d.done(function () {
                    var e;
                    ot._removeData(t, "fxshow");
                    for (e in h) ot.style(t, e, h[e])
                });
                for (i in h) a = L(f ? m[i] : 0, i, d), i in m || (m[i] = a.start, f && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function D(t, e) {
            var n, i, o, r, a;
            for (n in t) if (i = ot.camelCase(n), o = e[i], r = t[n], ot.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), a = ot.cssHooks[i], a && "expand" in a) {
                r = a.expand(r), delete t[i];
                for (n in r) n in t || (t[n] = r[n], e[n] = o)
            } else e[i] = o
        }

        function H(t, e, n) {
            var i, o, r = 0, a = ye.length, s = ot.Deferred().always(function () {
                delete l.elem
            }), l = function () {
                if (o) return !1;
                for (var e = pe || P(), n = Math.max(0, c.startTime + c.duration - e), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; a < l; a++) c.tweens[a].run(r);
                return s.notifyWith(t, [c, r, n]), r < 1 && l ? n : (s.resolveWith(t, [c]), !1)
            }, c = s.promise({
                elem: t,
                props: ot.extend({}, e),
                opts: ot.extend(!0, {specialEasing: {}}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: pe || P(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = ot.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0, i = e ? c.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; n < i; n++) c.tweens[n].run(1);
                    return e ? s.resolveWith(t, [c, e]) : s.rejectWith(t, [c, e]), this
                }
            }), u = c.props;
            for (D(u, c.opts.specialEasing); r < a; r++) if (i = ye[r].call(c, t, u, c.opts)) return i;
            return ot.map(u, L, c), ot.isFunction(c.opts.start) && c.opts.start.call(t, c), ot.fx.timer(ot.extend(l, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function W(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var i, o = 0, r = e.toLowerCase().match(bt) || [];
                if (ot.isFunction(n)) for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
            }
        }

        function q(t, e, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, ot.each(t[s] || [], function (t, s) {
                    var c = s(e, n, i);
                    return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (e.dataTypes.unshift(c), o(c), !1)
                }), l
            }

            var r = {}, a = t === Be;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function R(t, e) {
            var n, i, o = ot.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
            return n && ot.extend(!0, t, n), t
        }

        function F(t, e, n) {
            for (var i, o, r, a, s = t.contents, l = t.dataTypes; "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
            if (o) for (a in s) if (s[a] && s[a].test(o)) {
                l.unshift(a);
                break
            }
            if (l[0] in n) r = l[0]; else {
                for (a in n) {
                    if (!l[0] || t.converters[a + " " + l[0]]) {
                        r = a;
                        break
                    }
                    i || (i = a)
                }
                r = r || i
            }
            if (r) return r !== l[0] && l.unshift(r), n[r]
        }

        function B(t, e, n, i) {
            var o, r, a, s, l, c = {}, u = t.dataTypes.slice();
            if (u[1]) for (a in t.converters) c[a.toLowerCase()] = t.converters[a];
            for (r = u.shift(); r;) if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift()) if ("*" === r) r = l; else if ("*" !== l && l !== r) {
                if (a = c[l + " " + r] || c["* " + r], !a) for (o in c) if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                    a === !0 ? a = c[o] : c[o] !== !0 && (r = s[0], u.unshift(s[1]));
                    break
                }
                if (a !== !0) if (a && t.throws) e = a(e); else try {
                    e = a(e)
                } catch (t) {
                    return {state: "parsererror", error: a ? t : "No conversion from " + l + " to " + r}
                }
            }
            return {state: "success", data: e}
        }

        function $(t, e, n, i) {
            var o;
            if (ot.isArray(e)) ot.each(e, function (e, o) {
                n || Ue.test(t) ? i(t, o) : $(t + "[" + ("object" == typeof o ? e : "") + "]", o, n, i)
            }); else if (n || "object" !== ot.type(e)) i(t, e); else for (o in e) $(t + "[" + o + "]", e[o], n, i)
        }

        function Q() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {
            }
        }

        function U() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {
            }
        }

        function V(t) {
            return ot.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
        }

        var X = [], Y = X.slice, G = X.concat, K = X.push, Z = X.indexOf, J = {}, tt = J.toString,
            et = J.hasOwnProperty, nt = {}, it = "1.11.3", ot = function (t, e) {
                return new ot.fn.init(t, e)
            }, rt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, at = /^-ms-/, st = /-([\da-z])/gi, lt = function (t, e) {
                return e.toUpperCase()
            };
        ot.fn = ot.prototype = {
            jquery: it, constructor: ot, selector: "", length: 0, toArray: function () {
                return Y.call(this)
            }, get: function (t) {
                return null != t ? t < 0 ? this[t + this.length] : this[t] : Y.call(this)
            }, pushStack: function (t) {
                var e = ot.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            }, each: function (t, e) {
                return ot.each(this, t, e)
            }, map: function (t) {
                return this.pushStack(ot.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(Y.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor(null)
            }, push: K, sort: X.sort, splice: X.splice
        }, ot.extend = ot.fn.extend = function () {
            var t, e, n, i, o, r, a = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || ot.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++) if (null != (o = arguments[s])) for (i in o) t = a[i], n = o[i], a !== n && (c && n && (ot.isPlainObject(n) || (e = ot.isArray(n))) ? (e ? (e = !1, r = t && ot.isArray(t) ? t : []) : r = t && ot.isPlainObject(t) ? t : {}, a[i] = ot.extend(c, r, n)) : void 0 !== n && (a[i] = n));
            return a
        }, ot.extend({
            expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === ot.type(t)
            }, isArray: Array.isArray || function (t) {
                return "array" === ot.type(t)
            }, isWindow: function (t) {
                return null != t && t == t.window
            }, isNumeric: function (t) {
                return !ot.isArray(t) && t - parseFloat(t) + 1 >= 0
            }, isEmptyObject: function (t) {
                var e;
                for (e in t) return !1;
                return !0
            }, isPlainObject: function (t) {
                var e;
                if (!t || "object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
                try {
                    if (t.constructor && !et.call(t, "constructor") && !et.call(t.constructor.prototype, "isPrototypeOf")) return !1
                } catch (t) {
                    return !1
                }
                if (nt.ownLast) for (e in t) return et.call(t, e);
                for (e in t) ;
                return void 0 === e || et.call(t, e)
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? J[tt.call(t)] || "object" : typeof t
            }, globalEval: function (e) {
                e && ot.trim(e) && (t.execScript || function (e) {
                    t.eval.call(t, e)
                })(e)
            }, camelCase: function (t) {
                return t.replace(at, "ms-").replace(st, lt)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e, i) {
                var o, r = 0, a = t.length, s = n(t);
                if (i) {
                    if (s) for (; r < a && (o = e.apply(t[r], i), o !== !1); r++) ; else for (r in t) if (o = e.apply(t[r], i), o === !1) break
                } else if (s) for (; r < a && (o = e.call(t[r], r, t[r]), o !== !1); r++) ; else for (r in t) if (o = e.call(t[r], r, t[r]), o === !1) break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(rt, "")
            }, makeArray: function (t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? ot.merge(i, "string" == typeof t ? [t] : t) : K.call(i, t)), i
            }, inArray: function (t, e, n) {
                var i;
                if (e) {
                    if (Z) return Z.call(e, t, n);
                    for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++) if (n in e && e[n] === t) return n
                }
                return -1
            }, merge: function (t, e) {
                for (var n = +e.length, i = 0, o = t.length; i < n;) t[o++] = e[i++];
                if (n !== n) for (; void 0 !== e[i];) t[o++] = e[i++];
                return t.length = o, t
            }, grep: function (t, e, n) {
                for (var i, o = [], r = 0, a = t.length, s = !n; r < a; r++) i = !e(t[r], r), i !== s && o.push(t[r]);
                return o
            }, map: function (t, e, i) {
                var o, r = 0, a = t.length, s = n(t), l = [];
                if (s) for (; r < a; r++) o = e(t[r], r, i), null != o && l.push(o); else for (r in t) o = e(t[r], r, i), null != o && l.push(o);
                return G.apply([], l)
            }, guid: 1, proxy: function (t, e) {
                var n, i, o;
                if ("string" == typeof e && (o = t[e], e = t, t = o), ot.isFunction(t)) return n = Y.call(arguments, 2), i = function () {
                    return t.apply(e || this, n.concat(Y.call(arguments)))
                }, i.guid = t.guid = t.guid || ot.guid++, i
            }, now: function () {
                return +new Date
            }, support: nt
        }), ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
            J["[object " + e + "]"] = e.toLowerCase()
        });
        var ct = function (t) {
            function e(t, e, n, i) {
                var o, r, a, s, l, c, d, p, f, m;
                if ((e ? e.ownerDocument || e : q) !== M && j(e), e = e || M, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
                if (!i && N) {
                    if (11 !== s && (o = yt.exec(t))) if (a = o[1]) {
                        if (9 === s) {
                            if (r = e.getElementById(a), !r || !r.parentNode) return n;
                            if (r.id === a) return n.push(r), n
                        } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(a)) && H(e, r) && r.id === a) return n.push(r), n
                    } else {
                        if (o[2]) return Z.apply(n, e.getElementsByTagName(t)), n;
                        if ((a = o[3]) && x.getElementsByClassName) return Z.apply(n, e.getElementsByClassName(a)), n
                    }
                    if (x.qsa && (!L || !L.test(t))) {
                        if (p = d = W, f = e, m = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
                            for (c = k(t), (d = e.getAttribute("id")) ? p = d.replace(wt, "\\$&") : e.setAttribute("id", p), p = "[id='" + p + "'] ", l = c.length; l--;) c[l] = p + h(c[l]);
                            f = bt.test(t) && u(e.parentNode) || e, m = c.join(",")
                        }
                        if (m) try {
                            return Z.apply(n, f.querySelectorAll(m)), n
                        } catch (t) {
                        } finally {
                            d || e.removeAttribute("id")
                        }
                    }
                }
                return E(t.replace(lt, "$1"), e, n, i)
            }

            function n() {
                function t(n, i) {
                    return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = i
                }

                var e = [];
                return t
            }

            function i(t) {
                return t[W] = !0, t
            }

            function o(t) {
                var e = M.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function r(t, e) {
                for (var n = t.split("|"), i = t.length; i--;) C.attrHandle[n[i]] = e
            }

            function a(t, e) {
                var n = e && t,
                    i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || V) - (~t.sourceIndex || V);
                if (i) return i;
                if (n) for (; n = n.nextSibling;) if (n === e) return -1;
                return t ? 1 : -1
            }

            function s(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return "input" === n && e.type === t
                }
            }

            function l(t) {
                return function (e) {
                    var n = e.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && e.type === t
                }
            }

            function c(t) {
                return i(function (e) {
                    return e = +e, i(function (n, i) {
                        for (var o, r = t([], n.length, e), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function u(t) {
                return t && "undefined" != typeof t.getElementsByTagName && t
            }

            function d() {
            }

            function h(t) {
                for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
                return i
            }

            function p(t, e, n) {
                var i = e.dir, o = n && "parentNode" === i, r = F++;
                return e.first ? function (e, n, r) {
                    for (; e = e[i];) if (1 === e.nodeType || o) return t(e, n, r)
                } : function (e, n, a) {
                    var s, l, c = [R, r];
                    if (a) {
                        for (; e = e[i];) if ((1 === e.nodeType || o) && t(e, n, a)) return !0
                    } else for (; e = e[i];) if (1 === e.nodeType || o) {
                        if (l = e[W] || (e[W] = {}), (s = l[i]) && s[0] === R && s[1] === r) return c[2] = s[2];
                        if (l[i] = c, c[2] = t(e, n, a)) return !0
                    }
                }
            }

            function f(t) {
                return t.length > 1 ? function (e, n, i) {
                    for (var o = t.length; o--;) if (!t[o](e, n, i)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, n, i) {
                for (var o = 0, r = n.length; o < r; o++) e(t, n[o], i);
                return i
            }

            function g(t, e, n, i, o) {
                for (var r, a = [], s = 0, l = t.length, c = null != e; s < l; s++) (r = t[s]) && (n && !n(r, i, o) || (a.push(r), c && e.push(s)));
                return a
            }

            function v(t, e, n, o, r, a) {
                return o && !o[W] && (o = v(o)), r && !r[W] && (r = v(r, a)), i(function (i, a, s, l) {
                    var c, u, d, h = [], p = [], f = a.length, v = i || m(e || "*", s.nodeType ? [s] : s, []),
                        y = !t || !i && e ? v : g(v, h, t, s, l), b = n ? r || (i ? t : f || o) ? [] : a : y;
                    if (n && n(y, b, s, l), o) for (c = g(b, p), o(c, [], s, l), u = c.length; u--;) (d = c[u]) && (b[p[u]] = !(y[p[u]] = d));
                    if (i) {
                        if (r || t) {
                            if (r) {
                                for (c = [], u = b.length; u--;) (d = b[u]) && c.push(y[u] = d);
                                r(null, b = [], c, l)
                            }
                            for (u = b.length; u--;) (d = b[u]) && (c = r ? tt(i, d) : h[u]) > -1 && (i[c] = !(a[c] = d))
                        }
                    } else b = g(b === a ? b.splice(f, b.length) : b), r ? r(null, a, b, l) : Z.apply(a, b)
                })
            }

            function y(t) {
                for (var e, n, i, o = t.length, r = C.relative[t[0].type], a = r || C.relative[" "], s = r ? 1 : 0, l = p(function (t) {
                    return t === e
                }, a, !0), c = p(function (t) {
                    return tt(e, t) > -1
                }, a, !0), u = [function (t, n, i) {
                    var o = !r && (i || n !== I) || ((e = n).nodeType ? l(t, n, i) : c(t, n, i));
                    return e = null, o
                }]; s < o; s++) if (n = C.relative[t[s].type]) u = [p(f(u), n)]; else {
                    if (n = C.filter[t[s].type].apply(null, t[s].matches), n[W]) {
                        for (i = ++s; i < o && !C.relative[t[i].type]; i++) ;
                        return v(s > 1 && f(u), s > 1 && h(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(lt, "$1"), n, s < i && y(t.slice(s, i)), i < o && y(t = t.slice(i)), i < o && h(t))
                    }
                    u.push(n)
                }
                return f(u)
            }

            function b(t, n) {
                var o = n.length > 0, r = t.length > 0, a = function (i, a, s, l, c) {
                    var u, d, h, p = 0, f = "0", m = i && [], v = [], y = I, b = i || r && C.find.TAG("*", c),
                        w = R += null == y ? 1 : Math.random() || .1, x = b.length;
                    for (c && (I = a !== M && a); f !== x && null != (u = b[f]); f++) {
                        if (r && u) {
                            for (d = 0; h = t[d++];) if (h(u, a, s)) {
                                l.push(u);
                                break
                            }
                            c && (R = w)
                        }
                        o && ((u = !h && u) && p--, i && m.push(u))
                    }
                    if (p += f, o && f !== p) {
                        for (d = 0; h = n[d++];) h(m, v, a, s);
                        if (i) {
                            if (p > 0) for (; f--;) m[f] || v[f] || (v[f] = G.call(l));
                            v = g(v)
                        }
                        Z.apply(l, v), c && !i && v.length > 0 && p + n.length > 1 && e.uniqueSort(l)
                    }
                    return c && (R = w, I = y), m
                };
                return o ? i(a) : a
            }

            var w, x, C, _, S, k, T, E, I, A, z, j, M, P, N, L, O, D, H, W = "sizzle" + 1 * new Date, q = t.document,
                R = 0, F = 0, B = n(), $ = n(), Q = n(), U = function (t, e) {
                    return t === e && (z = !0), 0
                }, V = 1 << 31, X = {}.hasOwnProperty, Y = [], G = Y.pop, K = Y.push, Z = Y.push, J = Y.slice,
                tt = function (t, e) {
                    for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
                    return -1
                },
                et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ot = it.replace("w", "w#"),
                rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ot + "))|)" + nt + "*\\]",
                at = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
                st = new RegExp(nt + "+", "g"),
                lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                ct = new RegExp("^" + nt + "*," + nt + "*"),
                ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                dt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ht = new RegExp(at),
                pt = new RegExp("^" + ot + "$"), ft = {
                    ID: new RegExp("^#(" + it + ")"),
                    CLASS: new RegExp("^\\.(" + it + ")"),
                    TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + rt),
                    PSEUDO: new RegExp("^" + at),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + et + ")$", "i"),
                    needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, vt = /^[^{]+\{\s*\[native \w/,
                yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, bt = /[+~]/, wt = /'|\\/g,
                xt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), Ct = function (t, e, n) {
                    var i = "0x" + e - 65536;
                    return i !== i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                }, _t = function () {
                    j()
                };
            try {
                Z.apply(Y = J.call(q.childNodes), q.childNodes), Y[q.childNodes.length].nodeType
            } catch (t) {
                Z = {
                    apply: Y.length ? function (t, e) {
                        K.apply(t, J.call(e))
                    } : function (t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++];) ;
                        t.length = n - 1
                    }
                }
            }
            x = e.support = {}, S = e.isXML = function (t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, j = e.setDocument = function (t) {
                var e, n, i = t ? t.ownerDocument || t : q;
                return i !== M && 9 === i.nodeType && i.documentElement ? (M = i, P = i.documentElement, n = i.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), N = !S(i), x.attributes = o(function (t) {
                    return t.className = "i", !t.getAttribute("className")
                }), x.getElementsByTagName = o(function (t) {
                    return t.appendChild(i.createComment("")), !t.getElementsByTagName("*").length
                }), x.getElementsByClassName = vt.test(i.getElementsByClassName), x.getById = o(function (t) {
                    return P.appendChild(t).id = W, !i.getElementsByName || !i.getElementsByName(W).length
                }), x.getById ? (C.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && N) {
                        var n = e.getElementById(t);
                        return n && n.parentNode ? [n] : []
                    }
                }, C.filter.ID = function (t) {
                    var e = t.replace(xt, Ct);
                    return function (t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete C.find.ID, C.filter.ID = function (t) {
                    var e = t.replace(xt, Ct);
                    return function (t) {
                        var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                        return n && n.value === e
                    }
                }), C.find.TAG = x.getElementsByTagName ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                } : function (t, e) {
                    var n, i = [], o = 0, r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, C.find.CLASS = x.getElementsByClassName && function (t, e) {
                    if (N) return e.getElementsByClassName(t)
                }, O = [], L = [], (x.qsa = vt.test(i.querySelectorAll)) && (o(function (t) {
                    P.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + W + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + W + "+*").length || L.push(".#.+[+~]")
                }), o(function (t) {
                    var e = i.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                })), (x.matchesSelector = vt.test(D = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && o(function (t) {
                    x.disconnectedMatch = D.call(t, "div"), D.call(t, "[s!='']:x"), O.push("!=", at)
                }), L = L.length && new RegExp(L.join("|")), O = O.length && new RegExp(O.join("|")), e = vt.test(P.compareDocumentPosition), H = e || vt.test(P.contains) ? function (t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t, i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function (t, e) {
                    if (e) for (; e = e.parentNode;) if (e === t) return !0;
                    return !1
                }, U = e ? function (t, e) {
                    if (t === e) return z = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === q && H(q, t) ? -1 : e === i || e.ownerDocument === q && H(q, e) ? 1 : A ? tt(A, t) - tt(A, e) : 0 : 4 & n ? -1 : 1)
                } : function (t, e) {
                    if (t === e) return z = !0, 0;
                    var n, o = 0, r = t.parentNode, s = e.parentNode, l = [t], c = [e];
                    if (!r || !s) return t === i ? -1 : e === i ? 1 : r ? -1 : s ? 1 : A ? tt(A, t) - tt(A, e) : 0;
                    if (r === s) return a(t, e);
                    for (n = t; n = n.parentNode;) l.unshift(n);
                    for (n = e; n = n.parentNode;) c.unshift(n);
                    for (; l[o] === c[o];) o++;
                    return o ? a(l[o], c[o]) : l[o] === q ? -1 : c[o] === q ? 1 : 0
                }, i) : M
            }, e.matches = function (t, n) {
                return e(t, null, null, n)
            }, e.matchesSelector = function (t, n) {
                if ((t.ownerDocument || t) !== M && j(t), n = n.replace(dt, "='$1']"), x.matchesSelector && N && (!O || !O.test(n)) && (!L || !L.test(n))) try {
                    var i = D.call(t, n);
                    if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                } catch (t) {
                }
                return e(n, M, null, [t]).length > 0
            }, e.contains = function (t, e) {
                return (t.ownerDocument || t) !== M && j(t), H(t, e)
            }, e.attr = function (t, e) {
                (t.ownerDocument || t) !== M && j(t);
                var n = C.attrHandle[e.toLowerCase()],
                    i = n && X.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !N) : void 0;
                return void 0 !== i ? i : x.attributes || !N ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, e.error = function (t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function (t) {
                var e, n = [], i = 0, o = 0;
                if (z = !x.detectDuplicates, A = !x.sortStable && t.slice(0), t.sort(U), z) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return A = null, t
            }, _ = e.getText = function (t) {
                var e, n = "", i = 0, o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else for (; e = t[i++];) n += _(e);
                return n
            }, C = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: ft,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {dir: "parentNode", first: !0},
                    " ": {dir: "parentNode"},
                    "+": {dir: "previousSibling", first: !0},
                    "~": {dir: "previousSibling"}
                },
                preFilter: {
                    ATTR: function (t) {
                        return t[1] = t[1].replace(xt, Ct), t[3] = (t[3] || t[4] || t[5] || "").replace(xt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    }, CHILD: function (t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    }, PSEUDO: function (t) {
                        var e, n = !t[6] && t[2];
                        return ft.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function (t) {
                        var e = t.replace(xt, Ct).toLowerCase();
                        return "*" === t ? function () {
                            return !0
                        } : function (t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    }, CLASS: function (t) {
                        var e = B[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && B(t, function (t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    }, ATTR: function (t, n, i) {
                        return function (o) {
                            var r = e.attr(o, t);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    }, CHILD: function (t, e, n, i, o) {
                        var r = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                        return 1 === i && 0 === o ? function (t) {
                            return !!t.parentNode
                        } : function (e, n, l) {
                            var c, u, d, h, p, f, m = r !== a ? "nextSibling" : "previousSibling", g = e.parentNode,
                                v = s && e.nodeName.toLowerCase(), y = !l && !s;
                            if (g) {
                                if (r) {
                                    for (; m;) {
                                        for (d = e; d = d[m];) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;
                                        f = m = "only" === t && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [a ? g.firstChild : g.lastChild], a && y) {
                                    for (u = g[W] || (g[W] = {}), c = u[t] || [], p = c[0] === R && c[1], h = c[0] === R && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();) if (1 === d.nodeType && ++h && d === e) {
                                        u[t] = [R, p, h];
                                        break
                                    }
                                } else if (y && (c = (e[W] || (e[W] = {}))[t]) && c[0] === R) h = c[1]; else for (; (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++h || (y && ((d[W] || (d[W] = {}))[t] = [R, h]), d !== e));) ;
                                return h -= o, h === i || h % i === 0 && h / i >= 0
                            }
                        }
                    }, PSEUDO: function (t, n) {
                        var o, r = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return r[W] ? r(n) : r.length > 1 ? (o = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                            for (var i, o = r(t, n), a = o.length; a--;) i = tt(t, o[a]), t[i] = !(e[i] = o[a])
                        }) : function (t) {
                            return r(t, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function (t) {
                        var e = [], n = [], o = T(t.replace(lt, "$1"));
                        return o[W] ? i(function (t, e, n, i) {
                            for (var r, a = o(t, null, i, []), s = t.length; s--;) (r = a[s]) && (t[s] = !(e[s] = r))
                        }) : function (t, i, r) {
                            return e[0] = t, o(e, null, r, n), e[0] = null, !n.pop()
                        }
                    }), has: i(function (t) {
                        return function (n) {
                            return e(t, n).length > 0
                        }
                    }), contains: i(function (t) {
                        return t = t.replace(xt, Ct), function (e) {
                            return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
                        }
                    }), lang: i(function (t) {
                        return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(xt, Ct).toLowerCase(), function (e) {
                            var n;
                            do if (n = N ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }), target: function (e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    }, root: function (t) {
                        return t === P
                    }, focus: function (t) {
                        return t === M.activeElement && (!M.hasFocus || M.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    }, enabled: function (t) {
                        return t.disabled === !1
                    }, disabled: function (t) {
                        return t.disabled === !0
                    }, checked: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    }, selected: function (t) {
                        return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                    }, empty: function (t) {
                        for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                        return !0
                    }, parent: function (t) {
                        return !C.pseudos.empty(t)
                    }, header: function (t) {
                        return gt.test(t.nodeName)
                    }, input: function (t) {
                        return mt.test(t.nodeName)
                    }, button: function (t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    }, text: function (t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    }, first: c(function () {
                        return [0]
                    }), last: c(function (t, e) {
                        return [e - 1]
                    }), eq: c(function (t, e, n) {
                        return [n < 0 ? n + e : n]
                    }), even: c(function (t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }), odd: c(function (t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }), lt: c(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                        return t
                    }), gt: c(function (t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }, C.pseudos.nth = C.pseudos.eq;
            for (w in {radio: !0, checkbox: !0, file: !0, password: !0, image: !0}) C.pseudos[w] = s(w);
            for (w in {submit: !0, reset: !0}) C.pseudos[w] = l(w);
            return d.prototype = C.filters = C.pseudos, C.setFilters = new d, k = e.tokenize = function (t, n) {
                var i, o, r, a, s, l, c, u = $[t + " "];
                if (u) return n ? 0 : u.slice(0);
                for (s = t, l = [], c = C.preFilter; s;) {
                    i && !(o = ct.exec(s)) || (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = ut.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(lt, " ")
                    }), s = s.slice(i.length));
                    for (a in C.filter) !(o = ft[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(),
                        r.push({value: i, type: a, matches: o}), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? e.error(t) : $(t, l).slice(0)
            }, T = e.compile = function (t, e) {
                var n, i = [], o = [], r = Q[t + " "];
                if (!r) {
                    for (e || (e = k(t)), n = e.length; n--;) r = y(e[n]), r[W] ? i.push(r) : o.push(r);
                    r = Q(t, b(o, i)), r.selector = t
                }
                return r
            }, E = e.select = function (t, e, n, i) {
                var o, r, a, s, l, c = "function" == typeof t && t, d = !i && k(t = c.selector || t);
                if (n = n || [], 1 === d.length) {
                    if (r = d[0] = d[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && x.getById && 9 === e.nodeType && N && C.relative[r[1].type]) {
                        if (e = (C.find.ID(a.matches[0].replace(xt, Ct), e) || [])[0], !e) return n;
                        c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                    }
                    for (o = ft.needsContext.test(t) ? 0 : r.length; o-- && (a = r[o], !C.relative[s = a.type]);) if ((l = C.find[s]) && (i = l(a.matches[0].replace(xt, Ct), bt.test(r[0].type) && u(e.parentNode) || e))) {
                        if (r.splice(o, 1), t = i.length && h(r), !t) return Z.apply(n, i), n;
                        break
                    }
                }
                return (c || T(t, d))(i, e, !N, n, bt.test(t) && u(e.parentNode) || e), n
            }, x.sortStable = W.split("").sort(U).join("") === W, x.detectDuplicates = !!z, j(), x.sortDetached = o(function (t) {
                return 1 & t.compareDocumentPosition(M.createElement("div"))
            }), o(function (t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function (t, e, n) {
                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), x.attributes && o(function (t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || r("value", function (t, e, n) {
                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
            }), o(function (t) {
                return null == t.getAttribute("disabled")
            }) || r(et, function (t, e, n) {
                var i;
                if (!n) return t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }), e
        }(t);
        ot.find = ct, ot.expr = ct.selectors, ot.expr[":"] = ot.expr.pseudos, ot.unique = ct.uniqueSort, ot.text = ct.getText, ot.isXMLDoc = ct.isXML, ot.contains = ct.contains;
        var ut = ot.expr.match.needsContext, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^.[^:#\[\.,]*$/;
        ot.filter = function (t, e, n) {
            var i = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ot.find.matchesSelector(i, t) ? [i] : [] : ot.find.matches(t, ot.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, ot.fn.extend({
            find: function (t) {
                var e, n = [], i = this, o = i.length;
                if ("string" != typeof t) return this.pushStack(ot(t).filter(function () {
                    for (e = 0; e < o; e++) if (ot.contains(i[e], this)) return !0
                }));
                for (e = 0; e < o; e++) ot.find(t, i[e], n);
                return n = this.pushStack(o > 1 ? ot.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            }, filter: function (t) {
                return this.pushStack(i(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(i(this, t || [], !0))
            }, is: function (t) {
                return !!i(this, "string" == typeof t && ut.test(t) ? ot(t) : t || [], !1).length
            }
        });
        var pt, ft = t.document, mt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, gt = ot.fn.init = function (t, e) {
            var n, i;
            if (!t) return this;
            if ("string" == typeof t) {
                if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : mt.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || pt).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof ot ? e[0] : e, ot.merge(this, ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : ft, !0)), dt.test(n[1]) && ot.isPlainObject(e)) for (n in e) ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if (i = ft.getElementById(n[2]), i && i.parentNode) {
                    if (i.id !== n[2]) return pt.find(t);
                    this.length = 1, this[0] = i
                }
                return this.context = ft, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ot.isFunction(t) ? "undefined" != typeof pt.ready ? pt.ready(t) : t(ot) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), ot.makeArray(t, this))
        };
        gt.prototype = ot.fn, pt = ot(ft);
        var vt = /^(?:parents|prev(?:Until|All))/, yt = {children: !0, contents: !0, next: !0, prev: !0};
        ot.extend({
            dir: function (t, e, n) {
                for (var i = [], o = t[e]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !ot(o).is(n));) 1 === o.nodeType && i.push(o), o = o[e];
                return i
            }, sibling: function (t, e) {
                for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                return n
            }
        }), ot.fn.extend({
            has: function (t) {
                var e, n = ot(t, this), i = n.length;
                return this.filter(function () {
                    for (e = 0; e < i; e++) if (ot.contains(this, n[e])) return !0
                })
            }, closest: function (t, e) {
                for (var n, i = 0, o = this.length, r = [], a = ut.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0; i < o; i++) for (n = this[i]; n && n !== e; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ot.find.matchesSelector(n, t))) {
                    r.push(n);
                    break
                }
                return this.pushStack(r.length > 1 ? ot.unique(r) : r)
            }, index: function (t) {
                return t ? "string" == typeof t ? ot.inArray(this[0], ot(t)) : ot.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(ot.unique(ot.merge(this.get(), ot(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ot.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return ot.dir(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return ot.dir(t, "parentNode", n)
            }, next: function (t) {
                return o(t, "nextSibling")
            }, prev: function (t) {
                return o(t, "previousSibling")
            }, nextAll: function (t) {
                return ot.dir(t, "nextSibling")
            }, prevAll: function (t) {
                return ot.dir(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return ot.dir(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return ot.dir(t, "previousSibling", n)
            }, siblings: function (t) {
                return ot.sibling((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return ot.sibling(t.firstChild)
            }, contents: function (t) {
                return ot.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ot.merge([], t.childNodes)
            }
        }, function (t, e) {
            ot.fn[t] = function (n, i) {
                var o = ot.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (o = ot.filter(i, o)), this.length > 1 && (yt[t] || (o = ot.unique(o)), vt.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var bt = /\S+/g, wt = {};
        ot.Callbacks = function (t) {
            t = "string" == typeof t ? wt[t] || r(t) : ot.extend({}, t);
            var e, n, i, o, a, s, l = [], c = !t.once && [], u = function (r) {
                for (n = t.memory && r, i = !0, a = s || 0, s = 0, o = l.length, e = !0; l && a < o; a++) if (l[a].apply(r[0], r[1]) === !1 && t.stopOnFalse) {
                    n = !1;
                    break
                }
                e = !1, l && (c ? c.length && u(c.shift()) : n ? l = [] : d.disable())
            }, d = {
                add: function () {
                    if (l) {
                        var i = l.length;
                        !function e(n) {
                            ot.each(n, function (n, i) {
                                var o = ot.type(i);
                                "function" === o ? t.unique && d.has(i) || l.push(i) : i && i.length && "string" !== o && e(i)
                            })
                        }(arguments), e ? o = l.length : n && (s = i, u(n))
                    }
                    return this
                }, remove: function () {
                    return l && ot.each(arguments, function (t, n) {
                        for (var i; (i = ot.inArray(n, l, i)) > -1;) l.splice(i, 1), e && (i <= o && o--, i <= a && a--)
                    }), this
                }, has: function (t) {
                    return t ? ot.inArray(t, l) > -1 : !(!l || !l.length)
                }, empty: function () {
                    return l = [], o = 0, this
                }, disable: function () {
                    return l = c = n = void 0, this
                }, disabled: function () {
                    return !l
                }, lock: function () {
                    return c = void 0, n || d.disable(), this
                }, locked: function () {
                    return !c
                }, fireWith: function (t, n) {
                    return !l || i && !c || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? c.push(n) : u(n)), this
                }, fire: function () {
                    return d.fireWith(this, arguments), this
                }, fired: function () {
                    return !!i
                }
            };
            return d
        }, ot.extend({
            Deferred: function (t) {
                var e = [["resolve", "done", ot.Callbacks("once memory"), "resolved"], ["reject", "fail", ot.Callbacks("once memory"), "rejected"], ["notify", "progress", ot.Callbacks("memory")]],
                    n = "pending", i = {
                        state: function () {
                            return n
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, then: function () {
                            var t = arguments;
                            return ot.Deferred(function (n) {
                                ot.each(e, function (e, r) {
                                    var a = ot.isFunction(t[e]) && t[e];
                                    o[r[1]](function () {
                                        var t = a && a.apply(this, arguments);
                                        t && ot.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? ot.extend(t, i) : i
                        }
                    }, o = {};
                return i.pipe = i.then, ot.each(e, function (t, r) {
                    var a = r[2], s = r[3];
                    i[r[1]] = a.add, s && a.add(function () {
                        n = s
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function () {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e, n, i, o = 0, r = Y.call(arguments), a = r.length,
                    s = 1 !== a || t && ot.isFunction(t.promise) ? a : 0, l = 1 === s ? t : ot.Deferred(),
                    c = function (t, n, i) {
                        return function (o) {
                            n[t] = this, i[t] = arguments.length > 1 ? Y.call(arguments) : o, i === e ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1) for (e = new Array(a), n = new Array(a), i = new Array(a); o < a; o++) r[o] && ot.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, e)) : --s;
                return s || l.resolveWith(i, r), l.promise()
            }
        });
        var xt;
        ot.fn.ready = function (t) {
            return ot.ready.promise().done(t), this
        }, ot.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? ot.readyWait++ : ot.ready(!0)
            }, ready: function (t) {
                if (t === !0 ? !--ot.readyWait : !ot.isReady) {
                    if (!ft.body) return setTimeout(ot.ready);
                    ot.isReady = !0, t !== !0 && --ot.readyWait > 0 || (xt.resolveWith(ft, [ot]), ot.fn.triggerHandler && (ot(ft).triggerHandler("ready"), ot(ft).off("ready")))
                }
            }
        }), ot.ready.promise = function (e) {
            if (!xt) if (xt = ot.Deferred(), "complete" === ft.readyState) setTimeout(ot.ready); else if (ft.addEventListener) ft.addEventListener("DOMContentLoaded", s, !1), t.addEventListener("load", s, !1); else {
                ft.attachEvent("onreadystatechange", s), t.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == t.frameElement && ft.documentElement
                } catch (t) {
                }
                n && n.doScroll && !function t() {
                    if (!ot.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (e) {
                            return setTimeout(t, 50)
                        }
                        a(), ot.ready()
                    }
                }()
            }
            return xt.promise(e)
        };
        var Ct, _t = "undefined";
        for (Ct in ot(nt)) break;
        nt.ownLast = "0" !== Ct, nt.inlineBlockNeedsLayout = !1, ot(function () {
            var t, e, n, i;
            n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== _t && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", nt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }), function () {
            var t = ft.createElement("div");
            if (null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete t.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
            t = null
        }(), ot.acceptData = function (t) {
            var e = ot.noData[(t.nodeName + " ").toLowerCase()], n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || e !== !0 && t.getAttribute("classid") === e)
        };
        var St = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, kt = /([A-Z])/g;
        ot.extend({
            cache: {},
            noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
            hasData: function (t) {
                return t = t.nodeType ? ot.cache[t[ot.expando]] : t[ot.expando], !!t && !c(t)
            },
            data: function (t, e, n) {
                return u(t, e, n)
            },
            removeData: function (t, e) {
                return d(t, e)
            },
            _data: function (t, e, n) {
                return u(t, e, n, !0)
            },
            _removeData: function (t, e) {
                return d(t, e, !0)
            }
        }), ot.fn.extend({
            data: function (t, e) {
                var n, i, o, r = this[0], a = r && r.attributes;
                if (void 0 === t) {
                    if (this.length && (o = ot.data(r), 1 === r.nodeType && !ot._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) a[n] && (i = a[n].name, 0 === i.indexOf("data-") && (i = ot.camelCase(i.slice(5)), l(r, i, o[i])));
                        ot._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof t ? this.each(function () {
                    ot.data(this, t)
                }) : arguments.length > 1 ? this.each(function () {
                    ot.data(this, t, e)
                }) : r ? l(r, t, ot.data(r, t)) : void 0
            }, removeData: function (t) {
                return this.each(function () {
                    ot.removeData(this, t)
                })
            }
        }), ot.extend({
            queue: function (t, e, n) {
                var i;
                if (t) return e = (e || "fx") + "queue", i = ot._data(t, e), n && (!i || ot.isArray(n) ? i = ot._data(t, e, ot.makeArray(n)) : i.push(n)), i || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = ot.queue(t, e), i = n.length, o = n.shift(), r = ot._queueHooks(t, e), a = function () {
                    ot.dequeue(t, e)
                };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, a, r)), !i && r && r.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return ot._data(t, n) || ot._data(t, n, {
                    empty: ot.Callbacks("once memory").add(function () {
                        ot._removeData(t, e + "queue"), ot._removeData(t, n)
                    })
                })
            }
        }), ot.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ot.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = ot.queue(this, t, e);
                    ot._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ot.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    ot.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, i = 1, o = ot.Deferred(), r = this, a = this.length, s = function () {
                    --i || o.resolveWith(r, [r])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;) n = ot._data(r[a], t + "queueHooks"), n && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(e)
            }
        });
        var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Et = ["Top", "Right", "Bottom", "Left"],
            It = function (t, e) {
                return t = e || t, "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
            }, At = ot.access = function (t, e, n, i, o, r, a) {
                var s = 0, l = t.length, c = null == n;
                if ("object" === ot.type(n)) {
                    o = !0;
                    for (s in n) ot.access(t, e, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, ot.isFunction(i) || (a = !0), c && (a ? (e.call(t, i), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(ot(t), n)
                })), e)) for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
                return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
            }, zt = /^(?:checkbox|radio)$/i;
        !function () {
            var t = ft.createElement("input"), e = ft.createElement("div"), n = ft.createDocumentFragment();
            if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", nt.leadingWhitespace = 3 === e.firstChild.nodeType, nt.tbody = !e.getElementsByTagName("tbody").length, nt.htmlSerialize = !!e.getElementsByTagName("link").length, nt.html5Clone = "<:nav></:nav>" !== ft.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), nt.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, nt.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
                nt.noCloneEvent = !1
            }), e.cloneNode(!0).click()), null == nt.deleteExpando) {
                nt.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    nt.deleteExpando = !1
                }
            }
        }(), function () {
            var e, n, i = ft.createElement("div");
            for (e in {
                submit: !0,
                change: !0,
                focusin: !0
            }) n = "on" + e, (nt[e + "Bubbles"] = n in t) || (i.setAttribute(n, "t"), nt[e + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
        var jt = /^(?:input|select|textarea)$/i, Mt = /^key/, Pt = /^(?:mouse|pointer|contextmenu)|click/,
            Nt = /^(?:focusinfocus|focusoutblur)$/, Lt = /^([^.]*)(?:\.(.+)|)$/;
        ot.event = {
            global: {},
            add: function (t, e, n, i, o) {
                var r, a, s, l, c, u, d, h, p, f, m, g = ot._data(t);
                if (g) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = ot.guid++), (a = g.events) || (a = g.events = {}), (u = g.handle) || (u = g.handle = function (t) {
                        return typeof ot === _t || t && ot.event.triggered === t.type ? void 0 : ot.event.dispatch.apply(u.elem, arguments)
                    }, u.elem = t), e = (e || "").match(bt) || [""], s = e.length; s--;) r = Lt.exec(e[s]) || [], p = m = r[1], f = (r[2] || "").split(".").sort(), p && (c = ot.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = ot.event.special[p] || {}, d = ot.extend({
                        type: p,
                        origType: m,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && ot.expr.match.needsContext.test(o),
                        namespace: f.join(".")
                    }, l), (h = a[p]) || (h = a[p] = [], h.delegateCount = 0, c.setup && c.setup.call(t, i, f, u) !== !1 || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), ot.event.global[p] = !0);
                    t = null
                }
            },
            remove: function (t, e, n, i, o) {
                var r, a, s, l, c, u, d, h, p, f, m, g = ot.hasData(t) && ot._data(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(bt) || [""], c = e.length; c--;) if (s = Lt.exec(e[c]) || [], p = m = s[1], f = (s[2] || "").split(".").sort(), p) {
                        for (d = ot.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, h = u[p] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) a = h[r], !o && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(r, 1), a.selector && h.delegateCount--, d.remove && d.remove.call(t, a));
                        l && !h.length && (d.teardown && d.teardown.call(t, f, g.handle) !== !1 || ot.removeEvent(t, p, g.handle), delete u[p])
                    } else for (p in u) ot.event.remove(t, p + e[c], n, i, !0);
                    ot.isEmptyObject(u) && (delete g.handle, ot._removeData(t, "events"))
                }
            },
            trigger: function (e, n, i, o) {
                var r, a, s, l, c, u, d, h = [i || ft], p = et.call(e, "type") ? e.type : e,
                    f = et.call(e, "namespace") ? e.namespace.split(".") : [];
                if (s = u = i = i || ft, 3 !== i.nodeType && 8 !== i.nodeType && !Nt.test(p + ot.event.triggered) && (p.indexOf(".") >= 0 && (f = p.split("."), p = f.shift(), f.sort()), a = p.indexOf(":") < 0 && "on" + p, e = e[ot.expando] ? e : new ot.Event(p, "object" == typeof e && e), e.isTrigger = o ? 2 : 3, e.namespace = f.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), n = null == n ? [e] : ot.makeArray(n, [e]), c = ot.event.special[p] || {}, o || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                    if (!o && !c.noBubble && !ot.isWindow(i)) {
                        for (l = c.delegateType || p, Nt.test(l + p) || (s = s.parentNode); s; s = s.parentNode) h.push(s), u = s;
                        u === (i.ownerDocument || ft) && h.push(u.defaultView || u.parentWindow || t)
                    }
                    for (d = 0; (s = h[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : c.bindType || p, r = (ot._data(s, "events") || {})[e.type] && ot._data(s, "handle"), r && r.apply(s, n), r = a && s[a], r && r.apply && ot.acceptData(s) && (e.result = r.apply(s, n), e.result === !1 && e.preventDefault());
                    if (e.type = p, !o && !e.isDefaultPrevented() && (!c._default || c._default.apply(h.pop(), n) === !1) && ot.acceptData(i) && a && i[p] && !ot.isWindow(i)) {
                        u = i[a], u && (i[a] = null), ot.event.triggered = p;
                        try {
                            i[p]()
                        } catch (t) {
                        }
                        ot.event.triggered = void 0, u && (i[a] = u)
                    }
                    return e.result
                }
            },
            dispatch: function (t) {
                t = ot.event.fix(t);
                var e, n, i, o, r, a = [], s = Y.call(arguments), l = (ot._data(this, "events") || {})[t.type] || [],
                    c = ot.event.special[t.type] || {};
                if (s[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = ot.event.handlers.call(this, t, l), e = 0; (o = a[e++]) && !t.isPropagationStopped();) for (t.currentTarget = o.elem, r = 0; (i = o.handlers[r++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(i.namespace) || (t.handleObj = i, t.data = i.data, n = ((ot.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function (t, e) {
                var n, i, o, r, a = [], s = e.delegateCount, l = t.target;
                if (s && l.nodeType && (!t.button || "click" !== t.type)) for (; l != this; l = l.parentNode || this) if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
                    for (o = [], r = 0; r < s; r++) i = e[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? ot(n, this).index(l) >= 0 : ot.find(n, this, null, [l]).length), o[n] && o.push(i);
                    o.length && a.push({elem: l, handlers: o})
                }
                return s < e.length && a.push({elem: this, handlers: e.slice(s)}), a
            },
            fix: function (t) {
                if (t[ot.expando]) return t;
                var e, n, i, o = t.type, r = t, a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Pt.test(o) ? this.mouseHooks : Mt.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, t = new ot.Event(r), e = i.length; e--;) n = i[e], t[n] = r[n];
                return t.target || (t.target = r.srcElement || ft), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "), filter: function (t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function (t, e) {
                    var n, i, o, r = e.button, a = e.fromElement;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || ft, o = i.documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
                }
            },
            special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== f() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {
                        }
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === f() && this.blur) return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if (ot.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                    }, _default: function (t) {
                        return ot.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function (t, e, n, i) {
                var o = ot.extend(new ot.Event, n, {type: t, isSimulated: !0, originalEvent: {}});
                i ? ot.event.trigger(o, null, e) : ot.event.dispatch.call(e, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, ot.removeEvent = ft.removeEventListener ? function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        } : function (t, e, n) {
            var i = "on" + e;
            t.detachEvent && (typeof t[i] === _t && (t[i] = null), t.detachEvent(i, n))
        }, ot.Event = function (t, e) {
            return this instanceof ot.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? h : p) : this.type = t, e && ot.extend(this, e), this.timeStamp = t && t.timeStamp || ot.now(), void (this[ot.expando] = !0)) : new ot.Event(t, e)
        }, ot.Event.prototype = {
            isDefaultPrevented: p,
            isPropagationStopped: p,
            isImmediatePropagationStopped: p,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = h, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = h, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = h, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ot.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            ot.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, i = this, o = t.relatedTarget, r = t.handleObj;
                    return o && (o === i || ot.contains(i, o)) || (t.type = r.origType, n = r.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), nt.submitBubbles || (ot.event.special.submit = {
            setup: function () {
                return !ot.nodeName(this, "form") && void ot.event.add(this, "click._submit keypress._submit", function (t) {
                    var e = t.target, n = ot.nodeName(e, "input") || ot.nodeName(e, "button") ? e.form : void 0;
                    n && !ot._data(n, "submitBubbles") && (ot.event.add(n, "submit._submit", function (t) {
                        t._submit_bubble = !0
                    }), ot._data(n, "submitBubbles", !0))
                })
            }, postDispatch: function (t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ot.event.simulate("submit", this.parentNode, t, !0))
            }, teardown: function () {
                return !ot.nodeName(this, "form") && void ot.event.remove(this, "._submit")
            }
        }), nt.changeBubbles || (ot.event.special.change = {
            setup: function () {
                return jt.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ot.event.add(this, "propertychange._change", function (t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ot.event.add(this, "click._change", function (t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ot.event.simulate("change", this, t, !0)
                })), !1) : void ot.event.add(this, "beforeactivate._change", function (t) {
                    var e = t.target;
                    jt.test(e.nodeName) && !ot._data(e, "changeBubbles") && (ot.event.add(e, "change._change", function (t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ot.event.simulate("change", this.parentNode, t, !0)
                    }), ot._data(e, "changeBubbles", !0))
                })
            }, handle: function (t) {
                var e = t.target;
                if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
            }, teardown: function () {
                return ot.event.remove(this, "._change"), !jt.test(this.nodeName)
            }
        }), nt.focusinBubbles || ot.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                ot.event.simulate(e, t.target, ot.event.fix(t), !0)
            };
            ot.event.special[e] = {
                setup: function () {
                    var i = this.ownerDocument || this, o = ot._data(i, e);
                    o || i.addEventListener(t, n, !0), ot._data(i, e, (o || 0) + 1)
                }, teardown: function () {
                    var i = this.ownerDocument || this, o = ot._data(i, e) - 1;
                    o ? ot._data(i, e, o) : (i.removeEventListener(t, n, !0), ot._removeData(i, e))
                }
            }
        }), ot.fn.extend({
            on: function (t, e, n, i, o) {
                var r, a;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e, e = void 0);
                    for (r in t) this.on(r, e, n, t[r], o);
                    return this
                }
                if (null == n && null == i ? (i = e, n = e = void 0) : null == i && ("string" == typeof e ? (i = n, n = void 0) : (i = n, n = e, e = void 0)), i === !1) i = p; else if (!i) return this;
                return 1 === o && (a = i, i = function (t) {
                    return ot().off(t), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = ot.guid++)), this.each(function () {
                    ot.event.add(this, t, i, n, e)
                })
            }, one: function (t, e, n, i) {
                return this.on(t, e, n, i, 1)
            }, off: function (t, e, n) {
                var i, o;
                if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ot(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof t) {
                    for (o in t) this.off(o, e, t[o]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = p), this.each(function () {
                    ot.event.remove(this, t, n, e)
                })
            }, trigger: function (t, e) {
                return this.each(function () {
                    ot.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n) return ot.event.trigger(t, e, n, !0)
            }
        });
        var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Dt = / jQuery\d+="(?:null|\d+)"/g, Ht = new RegExp("<(?:" + Ot + ")[\\s/>]", "i"), Wt = /^\s+/,
            qt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Rt = /<([\w:]+)/,
            Ft = /<tbody/i, Bt = /<|&#?\w+;/, $t = /<(?:script|style|link)/i, Qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ut = /^$|\/(?:java|ecma)script/i, Vt = /^true\/(.*)/, Xt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Yt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: nt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            }, Gt = m(ft), Kt = Gt.appendChild(ft.createElement("div"));
        Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td, ot.extend({
            clone: function (t, e, n) {
                var i, o, r, a, s, l = ot.contains(t.ownerDocument, t);
                if (nt.html5Clone || ot.isXMLDoc(t) || !Ht.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (Kt.innerHTML = t.outerHTML, Kt.removeChild(r = Kt.firstChild)), !(nt.noCloneEvent && nt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ot.isXMLDoc(t))) for (i = g(r), s = g(t), a = 0; null != (o = s[a]); ++a) i[a] && _(o, i[a]);
                if (e) if (n) for (s = s || g(t), i = i || g(r), a = 0; null != (o = s[a]); a++) C(o, i[a]); else C(t, r);
                return i = g(r, "script"), i.length > 0 && x(i, !l && g(t, "script")), i = s = o = null, r
            }, buildFragment: function (t, e, n, i) {
                for (var o, r, a, s, l, c, u, d = t.length, h = m(e), p = [], f = 0; f < d; f++) if (r = t[f], r || 0 === r) if ("object" === ot.type(r)) ot.merge(p, r.nodeType ? [r] : r); else if (Bt.test(r)) {
                    for (s = s || h.appendChild(e.createElement("div")), l = (Rt.exec(r) || ["", ""])[1].toLowerCase(), u = Yt[l] || Yt._default, s.innerHTML = u[1] + r.replace(qt, "<$1></$2>") + u[2], o = u[0]; o--;) s = s.lastChild;
                    if (!nt.leadingWhitespace && Wt.test(r) && p.push(e.createTextNode(Wt.exec(r)[0])), !nt.tbody) for (r = "table" !== l || Ft.test(r) ? "<table>" !== u[1] || Ft.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) ot.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (ot.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = h.lastChild
                } else p.push(e.createTextNode(r));
                for (s && h.removeChild(s), nt.appendChecked || ot.grep(g(p, "input"), v), f = 0; r = p[f++];) if ((!i || ot.inArray(r, i) === -1) && (a = ot.contains(r.ownerDocument, r), s = g(h.appendChild(r), "script"), a && x(s), n)) for (o = 0; r = s[o++];) Ut.test(r.type || "") && n.push(r);
                return s = null, h
            }, cleanData: function (t, e) {
                for (var n, i, o, r, a = 0, s = ot.expando, l = ot.cache, c = nt.deleteExpando, u = ot.event.special; null != (n = t[a]); a++) if ((e || ot.acceptData(n)) && (o = n[s], r = o && l[o])) {
                    if (r.events) for (i in r.events) u[i] ? ot.event.remove(n, i) : ot.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== _t ? n.removeAttribute(s) : n[s] = null, X.push(o))
                }
            }
        }), ot.fn.extend({
            text: function (t) {
                return At(this, function (t) {
                    return void 0 === t ? ot.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ft).createTextNode(t))
                }, null, t, arguments.length)
            }, append: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return this.domManip(arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = y(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return this.domManip(arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, remove: function (t, e) {
                for (var n, i = t ? ot.filter(t, this) : this, o = 0; null != (n = i[o]); o++) e || 1 !== n.nodeType || ot.cleanData(g(n)), n.parentNode && (e && ot.contains(n.ownerDocument, n) && x(g(n, "script")), n.parentNode.removeChild(n));
                return this
            }, empty: function () {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ot.cleanData(g(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && ot.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return ot.clone(this, t, e)
                })
            }, html: function (t) {
                return At(this, function (t) {
                    var e = this[0] || {}, n = 0, i = this.length;
                    if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Dt, "") : void 0;
                    if ("string" == typeof t && !$t.test(t) && (nt.htmlSerialize || !Ht.test(t)) && (nt.leadingWhitespace || !Wt.test(t)) && !Yt[(Rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(qt, "<$1></$2>");
                        try {
                            for (; n < i; n++) e = this[n] || {}, 1 === e.nodeType && (ot.cleanData(g(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = arguments[0];
                return this.domManip(arguments, function (e) {
                    t = this.parentNode, ot.cleanData(g(this)), t && t.replaceChild(e, this)
                }), t && (t.length || t.nodeType) ? this : this.remove()
            }, detach: function (t) {
                return this.remove(t, !0)
            }, domManip: function (t, e) {
                t = G.apply([], t);
                var n, i, o, r, a, s, l = 0, c = this.length, u = this, d = c - 1, h = t[0], p = ot.isFunction(h);
                if (p || c > 1 && "string" == typeof h && !nt.checkClone && Qt.test(h)) return this.each(function (n) {
                    var i = u.eq(n);
                    p && (t[0] = h.call(this, n, i.html())), i.domManip(t, e)
                });
                if (c && (s = ot.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (r = ot.map(g(s, "script"), b), o = r.length; l < c; l++) i = s, l !== d && (i = ot.clone(i, !0, !0), o && ot.merge(r, g(i, "script"))), e.call(this[l], i, l);
                    if (o) for (a = r[r.length - 1].ownerDocument, ot.map(r, w), l = 0; l < o; l++) i = r[l], Ut.test(i.type || "") && !ot._data(i, "globalEval") && ot.contains(a, i) && (i.src ? ot._evalUrl && ot._evalUrl(i.src) : ot.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Xt, "")));
                    s = n = null
                }
                return this
            }
        }), ot.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            ot.fn[t] = function (t) {
                for (var n, i = 0, o = [], r = ot(t), a = r.length - 1; i <= a; i++) n = i === a ? this : this.clone(!0), ot(r[i])[e](n), K.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Zt, Jt = {};
        !function () {
            var t;
            nt.shrinkWrapBlocks = function () {
                if (null != t) return t;
                t = !1;
                var e, n, i;
                return n = ft.getElementsByTagName("body")[0], n && n.style ? (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), typeof e.style.zoom !== _t && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(ft.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(i), t) : void 0
            }
        }();
        var te, ee, ne = /^margin/, ie = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
            oe = /^(top|right|bottom|left)$/;
        t.getComputedStyle ? (te = function (e) {
            return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
        }, ee = function (t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || te(t), a = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== a || ot.contains(t.ownerDocument, t) || (a = ot.style(t, e)), ie.test(a) && ne.test(e) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a,
                a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : ft.documentElement.currentStyle && (te = function (t) {
            return t.currentStyle
        }, ee = function (t, e, n) {
            var i, o, r, a, s = t.style;
            return n = n || te(t), a = n ? n[e] : void 0, null == a && s && s[e] && (a = s[e]), ie.test(a) && !oe.test(e) && (i = s.left, o = t.runtimeStyle, r = o && o.left, r && (o.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
        }), function () {
            function e() {
                var e, n, i, o;
                n = ft.getElementsByTagName("body")[0], n && n.style && (e = ft.createElement("div"), i = ft.createElement("div"), i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = a = !1, l = !0, t.getComputedStyle && (r = "1%" !== (t.getComputedStyle(e, null) || {}).top, a = "4px" === (t.getComputedStyle(e, null) || {width: "4px"}).width, o = e.appendChild(ft.createElement("div")), o.style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", o.style.marginRight = o.style.width = "0", e.style.width = "1px", l = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight), e.removeChild(o)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = e.getElementsByTagName("td"), o[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === o[0].offsetHeight, s && (o[0].style.display = "", o[1].style.display = "none", s = 0 === o[0].offsetHeight), n.removeChild(i))
            }

            var n, i, o, r, a, s, l;
            n = ft.createElement("div"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", o = n.getElementsByTagName("a")[0], i = o && o.style, i && (i.cssText = "float:left;opacity:.5", nt.opacity = "0.5" === i.opacity, nt.cssFloat = !!i.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", nt.clearCloneStyle = "content-box" === n.style.backgroundClip, nt.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing, ot.extend(nt, {
                reliableHiddenOffsets: function () {
                    return null == s && e(), s
                }, boxSizingReliable: function () {
                    return null == a && e(), a
                }, pixelPosition: function () {
                    return null == r && e(), r
                }, reliableMarginRight: function () {
                    return null == l && e(), l
                }
            }))
        }(), ot.swap = function (t, e, n, i) {
            var o, r, a = {};
            for (r in e) a[r] = t.style[r], t.style[r] = e[r];
            o = n.apply(t, i || []);
            for (r in e) t.style[r] = a[r];
            return o
        };
        var re = /alpha\([^)]*\)/i, ae = /opacity\s*=\s*([^)]*)/, se = /^(none|table(?!-c[ea]).+)/,
            le = new RegExp("^(" + Tt + ")(.*)$", "i"), ce = new RegExp("^([+-])=(" + Tt + ")", "i"),
            ue = {position: "absolute", visibility: "hidden", display: "block"},
            de = {letterSpacing: "0", fontWeight: "400"}, he = ["Webkit", "O", "Moz", "ms"];
        ot.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = ee(t, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: nt.cssFloat ? "cssFloat" : "styleFloat"},
            style: function (t, e, n, i) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var o, r, a, s = ot.camelCase(e), l = t.style;
                    if (e = ot.cssProps[s] || (ot.cssProps[s] = E(l, s)), a = ot.cssHooks[e] || ot.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(t, !1, i)) ? o : l[e];
                    if (r = typeof n, "string" === r && (o = ce.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(ot.css(t, e)), r = "number"), null != n && n === n && ("number" !== r || ot.cssNumber[s] || (n += "px"), nt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(t, n, i))))) try {
                        l[e] = n
                    } catch (t) {
                    }
                }
            },
            css: function (t, e, n, i) {
                var o, r, a, s = ot.camelCase(e);
                return e = ot.cssProps[s] || (ot.cssProps[s] = E(t.style, s)), a = ot.cssHooks[e] || ot.cssHooks[s], a && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = ee(t, e, i)), "normal" === r && e in de && (r = de[e]), "" === n || n ? (o = parseFloat(r), n === !0 || ot.isNumeric(o) ? o || 0 : r) : r
            }
        }), ot.each(["height", "width"], function (t, e) {
            ot.cssHooks[e] = {
                get: function (t, n, i) {
                    if (n) return se.test(ot.css(t, "display")) && 0 === t.offsetWidth ? ot.swap(t, ue, function () {
                        return j(t, e, i)
                    }) : j(t, e, i)
                }, set: function (t, n, i) {
                    var o = i && te(t);
                    return A(t, n, i ? z(t, e, i, nt.boxSizing && "border-box" === ot.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), nt.opacity || (ot.cssHooks.opacity = {
            get: function (t, e) {
                return ae.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            }, set: function (t, e) {
                var n = t.style, i = t.currentStyle, o = ot.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (e >= 1 || "" === e) && "" === ot.trim(r.replace(re, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = re.test(r) ? r.replace(re, o) : r + " " + o)
            }
        }), ot.cssHooks.marginRight = T(nt.reliableMarginRight, function (t, e) {
            if (e) return ot.swap(t, {display: "inline-block"}, ee, [t, "marginRight"])
        }), ot.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            ot.cssHooks[t + e] = {
                expand: function (n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) o[t + Et[i] + e] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, ne.test(t) || (ot.cssHooks[t + e].set = A)
        }), ot.fn.extend({
            css: function (t, e) {
                return At(this, function (t, e, n) {
                    var i, o, r = {}, a = 0;
                    if (ot.isArray(e)) {
                        for (i = te(t), o = e.length; a < o; a++) r[e[a]] = ot.css(t, e[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? ot.style(t, e, n) : ot.css(t, e)
                }, t, e, arguments.length > 1)
            }, show: function () {
                return I(this, !0)
            }, hide: function () {
                return I(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    It(this) ? ot(this).show() : ot(this).hide()
                })
            }
        }), ot.Tween = M, M.prototype = {
            constructor: M, init: function (t, e, n, i, o, r) {
                this.elem = t, this.prop = n, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (ot.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = M.propHooks[this.prop];
                return t && t.get ? t.get(this) : M.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = M.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ot.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
            }
        }, M.prototype.init.prototype = M.prototype, M.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ot.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                }, set: function (t) {
                    ot.fx.step[t.prop] ? ot.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ot.cssProps[t.prop]] || ot.cssHooks[t.prop]) ? ot.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ot.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ot.fx = M.prototype.init, ot.fx.step = {};
        var pe, fe, me = /^(?:toggle|show|hide)$/, ge = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
            ve = /queueHooks$/, ye = [O], be = {
                "*": [function (t, e) {
                    var n = this.createTween(t, e), i = n.cur(), o = ge.exec(e),
                        r = o && o[3] || (ot.cssNumber[t] ? "" : "px"),
                        a = (ot.cssNumber[t] || "px" !== r && +i) && ge.exec(ot.css(n.elem, t)), s = 1, l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], o = o || [], a = +i || 1;
                        do s = s || ".5", a /= s, ot.style(n.elem, t, a + r); while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        ot.Animation = ot.extend(H, {
            tweener: function (t, e) {
                ot.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var n, i = 0, o = t.length; i < o; i++) n = t[i], be[n] = be[n] || [], be[n].unshift(e)
            }, prefilter: function (t, e) {
                e ? ye.unshift(t) : ye.push(t)
            }
        }), ot.speed = function (t, e, n) {
            var i = t && "object" == typeof t ? ot.extend({}, t) : {
                complete: n || !n && e || ot.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !ot.isFunction(e) && e
            };
            return i.duration = ot.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ot.fx.speeds ? ot.fx.speeds[i.duration] : ot.fx.speeds._default, null != i.queue && i.queue !== !0 || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
                ot.isFunction(i.old) && i.old.call(this), i.queue && ot.dequeue(this, i.queue)
            }, i
        }, ot.fn.extend({
            fadeTo: function (t, e, n, i) {
                return this.filter(It).css("opacity", 0).show().end().animate({opacity: e}, t, n, i)
            }, animate: function (t, e, n, i) {
                var o = ot.isEmptyObject(t), r = ot.speed(e, n, i), a = function () {
                    var e = H(this, ot.extend({}, t), r);
                    (o || ot._data(this, "finish")) && e.stop(!0)
                };
                return a.finish = a, o || r.queue === !1 ? this.each(a) : this.queue(r.queue, a)
            }, stop: function (t, e, n) {
                var i = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, o = null != t && t + "queueHooks", r = ot.timers, a = ot._data(this);
                    if (o) a[o] && a[o].stop && i(a[o]); else for (o in a) a[o] && a[o].stop && ve.test(o) && i(a[o]);
                    for (o = r.length; o--;) r[o].elem !== this || null != t && r[o].queue !== t || (r[o].anim.stop(n), e = !1, r.splice(o, 1));
                    !e && n || ot.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = ot._data(this), i = n[t + "queue"], o = n[t + "queueHooks"], r = ot.timers,
                        a = i ? i.length : 0;
                    for (n.finish = !0, ot.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                    delete n.finish
                })
            }
        }), ot.each(["toggle", "show", "hide"], function (t, e) {
            var n = ot.fn[e];
            ot.fn[e] = function (t, i, o) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(N(e, !0), t, i, o)
            }
        }), ot.each({
            slideDown: N("show"),
            slideUp: N("hide"),
            slideToggle: N("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            ot.fn[t] = function (t, n, i) {
                return this.animate(e, t, n, i)
            }
        }), ot.timers = [], ot.fx.tick = function () {
            var t, e = ot.timers, n = 0;
            for (pe = ot.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
            e.length || ot.fx.stop(), pe = void 0
        }, ot.fx.timer = function (t) {
            ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop()
        }, ot.fx.interval = 13, ot.fx.start = function () {
            fe || (fe = setInterval(ot.fx.tick, ot.fx.interval))
        }, ot.fx.stop = function () {
            clearInterval(fe), fe = null
        }, ot.fx.speeds = {slow: 600, fast: 200, _default: 400}, ot.fn.delay = function (t, e) {
            return t = ot.fx ? ot.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
                var i = setTimeout(e, t);
                n.stop = function () {
                    clearTimeout(i)
                }
            })
        }, function () {
            var t, e, n, i, o;
            e = ft.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], n = ft.createElement("select"), o = n.appendChild(ft.createElement("option")), t = e.getElementsByTagName("input")[0], i.style.cssText = "top:1px", nt.getSetAttribute = "t" !== e.className, nt.style = /top/.test(i.getAttribute("style")), nt.hrefNormalized = "/a" === i.getAttribute("href"), nt.checkOn = !!t.value, nt.optSelected = o.selected, nt.enctype = !!ft.createElement("form").enctype, n.disabled = !0, nt.optDisabled = !o.disabled, t = ft.createElement("input"), t.setAttribute("value", ""), nt.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), nt.radioValue = "t" === t.value
        }();
        var we = /\r/g;
        ot.fn.extend({
            val: function (t) {
                var e, n, i, o = this[0];
                {
                    if (arguments.length) return i = ot.isFunction(t), this.each(function (n) {
                        var o;
                        1 === this.nodeType && (o = i ? t.call(this, n, ot(this).val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : ot.isArray(o) && (o = ot.map(o, function (t) {
                            return null == t ? "" : t + ""
                        })), e = ot.valHooks[this.type] || ot.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, o, "value") || (this.value = o))
                    });
                    if (o) return e = ot.valHooks[o.type] || ot.valHooks[o.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(we, "") : null == n ? "" : n)
                }
            }
        }), ot.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = ot.find.attr(t, "value");
                        return null != e ? e : ot.trim(ot.text(t))
                    }
                }, select: {
                    get: function (t) {
                        for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, a = r ? null : [], s = r ? o + 1 : i.length, l = o < 0 ? s : r ? o : 0; l < s; l++) if (n = i[l], (n.selected || l === o) && (nt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ot.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ot(n).val(), r) return e;
                            a.push(e)
                        }
                        return a
                    }, set: function (t, e) {
                        for (var n, i, o = t.options, r = ot.makeArray(e), a = o.length; a--;) if (i = o[a], ot.inArray(ot.valHooks.option.get(i), r) >= 0) try {
                            i.selected = n = !0
                        } catch (t) {
                            i.scrollHeight
                        } else i.selected = !1;
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), ot.each(["radio", "checkbox"], function () {
            ot.valHooks[this] = {
                set: function (t, e) {
                    if (ot.isArray(e)) return t.checked = ot.inArray(ot(t).val(), e) >= 0
                }
            }, nt.checkOn || (ot.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var xe, Ce, _e = ot.expr.attrHandle, Se = /^(?:checked|selected)$/i, ke = nt.getSetAttribute, Te = nt.input;
        ot.fn.extend({
            attr: function (t, e) {
                return At(this, ot.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    ot.removeAttr(this, t)
                })
            }
        }), ot.extend({
            attr: function (t, e, n) {
                var i, o, r = t.nodeType;
                if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === _t ? ot.prop(t, e, n) : (1 === r && ot.isXMLDoc(t) || (e = e.toLowerCase(), i = ot.attrHooks[e] || (ot.expr.match.bool.test(e) ? Ce : xe)), void 0 === n ? i && "get" in i && null !== (o = i.get(t, e)) ? o : (o = ot.find.attr(t, e), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(t, n, e)) ? o : (t.setAttribute(e, n + ""), n) : void ot.removeAttr(t, e))
            }, removeAttr: function (t, e) {
                var n, i, o = 0, r = e && e.match(bt);
                if (r && 1 === t.nodeType) for (; n = r[o++];) i = ot.propFix[n] || n, ot.expr.match.bool.test(n) ? Te && ke || !Se.test(n) ? t[i] = !1 : t[ot.camelCase("default-" + n)] = t[i] = !1 : ot.attr(t, n, ""), t.removeAttribute(ke ? n : i)
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }
        }), Ce = {
            set: function (t, e, n) {
                return e === !1 ? ot.removeAttr(t, n) : Te && ke || !Se.test(n) ? t.setAttribute(!ke && ot.propFix[n] || n, n) : t[ot.camelCase("default-" + n)] = t[n] = !0, n
            }
        }, ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = _e[e] || ot.find.attr;
            _e[e] = Te && ke || !Se.test(e) ? function (t, e, i) {
                var o, r;
                return i || (r = _e[e], _e[e] = o, o = null != n(t, e, i) ? e.toLowerCase() : null, _e[e] = r), o
            } : function (t, e, n) {
                if (!n) return t[ot.camelCase("default-" + e)] ? e.toLowerCase() : null
            }
        }), Te && ke || (ot.attrHooks.value = {
            set: function (t, e, n) {
                return ot.nodeName(t, "input") ? void (t.defaultValue = e) : xe && xe.set(t, e, n)
            }
        }), ke || (xe = {
            set: function (t, e, n) {
                var i = t.getAttributeNode(n);
                if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
            }
        }, _e.id = _e.name = _e.coords = function (t, e, n) {
            var i;
            if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
        }, ot.valHooks.button = {
            get: function (t, e) {
                var n = t.getAttributeNode(e);
                if (n && n.specified) return n.value
            }, set: xe.set
        }, ot.attrHooks.contenteditable = {
            set: function (t, e, n) {
                xe.set(t, "" !== e && e, n)
            }
        }, ot.each(["width", "height"], function (t, e) {
            ot.attrHooks[e] = {
                set: function (t, n) {
                    if ("" === n) return t.setAttribute(e, "auto"), n
                }
            }
        })), nt.style || (ot.attrHooks.style = {
            get: function (t) {
                return t.style.cssText || void 0
            }, set: function (t, e) {
                return t.style.cssText = e + ""
            }
        });
        var Ee = /^(?:input|select|textarea|button|object)$/i, Ie = /^(?:a|area)$/i;
        ot.fn.extend({
            prop: function (t, e) {
                return At(this, ot.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return t = ot.propFix[t] || t, this.each(function () {
                    try {
                        this[t] = void 0, delete this[t]
                    } catch (t) {
                    }
                })
            }
        }), ot.extend({
            propFix: {for: "htmlFor", class: "className"}, prop: function (t, e, n) {
                var i, o, r, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !ot.isXMLDoc(t), r && (e = ot.propFix[e] || e, o = ot.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = ot.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ee.test(t.nodeName) || Ie.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), nt.hrefNormalized || ot.each(["href", "src"], function (t, e) {
            ot.propHooks[e] = {
                get: function (t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), nt.optSelected || (ot.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ot.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            ot.propFix[this.toLowerCase()] = this
        }), nt.enctype || (ot.propFix.enctype = "encoding");
        var Ae = /[\t\r\n\f]/g;
        ot.fn.extend({
            addClass: function (t) {
                var e, n, i, o, r, a, s = 0, l = this.length, c = "string" == typeof t && t;
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).addClass(t.call(this, e, this.className))
                });
                if (c) for (e = (t || "").match(bt) || []; s < l; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : " ")) {
                    for (r = 0; o = e[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                    a = ot.trim(i), n.className !== a && (n.className = a)
                }
                return this
            }, removeClass: function (t) {
                var e, n, i, o, r, a, s = 0, l = this.length, c = 0 === arguments.length || "string" == typeof t && t;
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).removeClass(t.call(this, e, this.className))
                });
                if (c) for (e = (t || "").match(bt) || []; s < l; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ae, " ") : "")) {
                    for (r = 0; o = e[r++];) for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                    a = t ? ot.trim(i) : "", n.className !== a && (n.className = a)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ot.isFunction(t) ? this.each(function (n) {
                    ot(this).toggleClass(t.call(this, n, this.className, e), e)
                }) : this.each(function () {
                    if ("string" === n) for (var e, i = 0, o = ot(this), r = t.match(bt) || []; e = r[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e); else n !== _t && "boolean" !== n || (this.className && ot._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ot._data(this, "__className__") || "")
                })
            }, hasClass: function (t) {
                for (var e = " " + t + " ", n = 0, i = this.length; n < i; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ae, " ").indexOf(e) >= 0) return !0;
                return !1
            }
        }), ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
            ot.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), ot.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }, bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, i) {
                return this.on(e, t, n, i)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
        var ze = ot.now(), je = /\?/,
            Me = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ot.parseJSON = function (e) {
            if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
            var n, i = null, o = ot.trim(e + "");
            return o && !ot.trim(o.replace(Me, function (t, e, o, r) {
                return n && e && (i = 0), 0 === i ? t : (n = o || e, i += !r - !o, "")
            })) ? Function("return " + o)() : ot.error("Invalid JSON: " + e)
        }, ot.parseXML = function (e) {
            var n, i;
            if (!e || "string" != typeof e) return null;
            try {
                t.DOMParser ? (i = new DOMParser, n = i.parseFromString(e, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(e))
            } catch (t) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ot.error("Invalid XML: " + e), n
        };
        var Pe, Ne, Le = /#.*$/, Oe = /([?&])_=[^&]*/, De = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            He = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, We = /^(?:GET|HEAD)$/, qe = /^\/\//,
            Re = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Fe = {}, Be = {}, $e = "*/".concat("*");
        try {
            Ne = location.href
        } catch (t) {
            Ne = ft.createElement("a"), Ne.href = "", Ne = Ne.href
        }
        Pe = Re.exec(Ne.toLowerCase()) || [], ot.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ne,
                type: "GET",
                isLocal: He.test(Pe[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": $e,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /xml/, html: /html/, json: /json/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": ot.parseJSON, "text xml": ot.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? R(R(t, ot.ajaxSettings), e) : R(ot.ajaxSettings, t)
            },
            ajaxPrefilter: W(Fe),
            ajaxTransport: W(Be),
            ajax: function (t, e) {
                function n(t, e, n, i) {
                    var o, u, v, y, w, C = e;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", x.readyState = t > 0 ? 4 : 0, o = t >= 200 && t < 300 || 304 === t, n && (y = F(d, x, n)), y = B(d, y, x, o), o ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ot.lastModified[r] = w), w = x.getResponseHeader("etag"), w && (ot.etag[r] = w)), 204 === t || "HEAD" === d.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = y.state, u = y.data, v = y.error, o = !v)) : (v = C, !t && C || (C = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || C) + "", o ? f.resolveWith(h, [u, C, x]) : f.rejectWith(h, [x, C, v]), x.statusCode(g), g = void 0, l && p.trigger(o ? "ajaxSuccess" : "ajaxError", [x, d, o ? u : v]), m.fireWith(h, [x, C]), l && (p.trigger("ajaxComplete", [x, d]), --ot.active || ot.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, r, a, s, l, c, u, d = ot.ajaxSetup({}, e), h = d.context || d,
                    p = d.context && (h.nodeType || h.jquery) ? ot(h) : ot.event, f = ot.Deferred(),
                    m = ot.Callbacks("once memory"), g = d.statusCode || {}, v = {}, y = {}, b = 0, w = "canceled",
                    x = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (2 === b) {
                                if (!u) for (u = {}; e = De.exec(a);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        }, getAllResponseHeaders: function () {
                            return 2 === b ? a : null
                        }, setRequestHeader: function (t, e) {
                            var n = t.toLowerCase();
                            return b || (t = y[n] = y[n] || t, v[t] = e), this
                        }, overrideMimeType: function (t) {
                            return b || (d.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t) if (b < 2) for (e in t) g[e] = [g[e], t[e]]; else x.always(t[x.status]);
                            return this
                        }, abort: function (t) {
                            var e = t || w;
                            return c && c.abort(e), n(0, e), this
                        }
                    };
                if (f.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, d.url = ((t || d.url || Ne) + "").replace(Le, "").replace(qe, Pe[1] + "//"), d.type = e.method || e.type || d.method || d.type, d.dataTypes = ot.trim(d.dataType || "*").toLowerCase().match(bt) || [""], null == d.crossDomain && (i = Re.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Pe[1] && i[2] === Pe[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pe[3] || ("http:" === Pe[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = ot.param(d.data, d.traditional)), q(Fe, d, e, x), 2 === b) return x;
                l = ot.event && d.global, l && 0 === ot.active++ && ot.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !We.test(d.type), r = d.url, d.hasContent || (d.data && (r = d.url += (je.test(r) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = Oe.test(r) ? r.replace(Oe, "$1_=" + ze++) : r + (je.test(r) ? "&" : "?") + "_=" + ze++)), d.ifModified && (ot.lastModified[r] && x.setRequestHeader("If-Modified-Since", ot.lastModified[r]), ot.etag[r] && x.setRequestHeader("If-None-Match", ot.etag[r])), (d.data && d.hasContent && d.contentType !== !1 || e.contentType) && x.setRequestHeader("Content-Type", d.contentType), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + $e + "; q=0.01" : "") : d.accepts["*"]);
                for (o in d.headers) x.setRequestHeader(o, d.headers[o]);
                if (d.beforeSend && (d.beforeSend.call(h, x, d) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (o in {success: 1, error: 1, complete: 1}) x[o](d[o]);
                if (c = q(Be, d, e, x)) {
                    x.readyState = 1, l && p.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
                        x.abort("timeout")
                    }, d.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (t) {
                        if (!(b < 2)) throw t;
                        n(-1, t)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function (t, e, n) {
                return ot.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return ot.get(t, void 0, e, "script")
            }
        }), ot.each(["get", "post"], function (t, e) {
            ot[e] = function (t, n, i, o) {
                return ot.isFunction(n) && (o = o || i, i = n, n = void 0), ot.ajax({
                    url: t,
                    type: e,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), ot._evalUrl = function (t) {
            return ot.ajax({url: t, type: "GET", dataType: "script", async: !1, global: !1, throws: !0})
        }, ot.fn.extend({
            wrapAll: function (t) {
                if (ot.isFunction(t)) return this.each(function (e) {
                    ot(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ot(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            }, wrapInner: function (t) {
                return ot.isFunction(t) ? this.each(function (e) {
                    ot(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = ot(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = ot.isFunction(t);
                return this.each(function (n) {
                    ot(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function () {
                return this.parent().each(function () {
                    ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes)
                }).end()
            }
        }), ot.expr.filters.hidden = function (t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !nt.reliableHiddenOffsets() && "none" === (t.style && t.style.display || ot.css(t, "display"))
        }, ot.expr.filters.visible = function (t) {
            return !ot.expr.filters.hidden(t)
        };
        var Qe = /%20/g, Ue = /\[\]$/, Ve = /\r?\n/g, Xe = /^(?:submit|button|image|reset|file)$/i,
            Ye = /^(?:input|select|textarea|keygen)/i;
        ot.param = function (t, e) {
            var n, i = [], o = function (t, e) {
                e = ot.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
            if (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional), ot.isArray(t) || t.jquery && !ot.isPlainObject(t)) ot.each(t, function () {
                o(this.name, this.value)
            }); else for (n in t) $(n, t[n], e, o);
            return i.join("&").replace(Qe, "+")
        }, ot.fn.extend({
            serialize: function () {
                return ot.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = ot.prop(this, "elements");
                    return t ? ot.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !ot(this).is(":disabled") && Ye.test(this.nodeName) && !Xe.test(t) && (this.checked || !zt.test(t))
                }).map(function (t, e) {
                    var n = ot(this).val();
                    return null == n ? null : ot.isArray(n) ? ot.map(n, function (t) {
                        return {name: e.name, value: t.replace(Ve, "\r\n")}
                    }) : {name: e.name, value: n.replace(Ve, "\r\n")}
                }).get()
            }
        }), ot.ajaxSettings.xhr = void 0 !== t.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Q() || U()
        } : Q;
        var Ge = 0, Ke = {}, Ze = ot.ajaxSettings.xhr();
        t.attachEvent && t.attachEvent("onunload", function () {
            for (var t in Ke) Ke[t](void 0, !0)
        }), nt.cors = !!Ze && "withCredentials" in Ze, Ze = nt.ajax = !!Ze, Ze && ot.ajaxTransport(function (t) {
            if (!t.crossDomain || nt.cors) {
                var e;
                return {
                    send: function (n, i) {
                        var o, r = t.xhr(), a = ++Ge;
                        if (r.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) r[o] = t.xhrFields[o];
                        t.mimeType && r.overrideMimeType && r.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(t.hasContent && t.data || null), e = function (n, o) {
                            var s, l, c;
                            if (e && (o || 4 === r.readyState)) if (delete Ke[a], e = void 0, r.onreadystatechange = ot.noop, o) 4 !== r.readyState && r.abort(); else {
                                c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                try {
                                    l = r.statusText
                                } catch (t) {
                                    l = ""
                                }
                                s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                            }
                            c && i(s, l, c, r.getAllResponseHeaders())
                        }, t.async ? 4 === r.readyState ? setTimeout(e) : r.onreadystatechange = Ke[a] = e : e()
                    }, abort: function () {
                        e && e(void 0, !0)
                    }
                }
            }
        }), ot.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /(?:java|ecma)script/},
            converters: {
                "text script": function (t) {
                    return ot.globalEval(t), t
                }
            }
        }), ot.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ot.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n = ft.head || ot("head")[0] || ft.documentElement;
                return {
                    send: function (i, o) {
                        e = ft.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                            (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || o(200, "success"))
                        }, n.insertBefore(e, n.firstChild)
                    }, abort: function () {
                        e && e.onload(void 0, !0)
                    }
                }
            }
        });
        var Je = [], tn = /(=)\?(?=&|$)|\?\?/;
        ot.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = Je.pop() || ot.expando + "_" + ze++;
                return this[t] = !0, t
            }
        }), ot.ajaxPrefilter("json jsonp", function (e, n, i) {
            var o, r, a,
                s = e.jsonp !== !1 && (tn.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0]) return o = e.jsonpCallback = ot.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(tn, "$1" + o) : e.jsonp !== !1 && (e.url += (je.test(e.url) ? "&" : "?") + e.jsonp + "=" + o), e.converters["script json"] = function () {
                return a || ot.error(o + " was not called"), a[0]
            }, e.dataTypes[0] = "json", r = t[o], t[o] = function () {
                a = arguments
            }, i.always(function () {
                t[o] = r, e[o] && (e.jsonpCallback = n.jsonpCallback, Je.push(o)), a && ot.isFunction(r) && r(a[0]), a = r = void 0
            }), "script"
        }), ot.parseHTML = function (t, e, n) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (n = e, e = !1), e = e || ft;
            var i = dt.exec(t), o = !n && [];
            return i ? [e.createElement(i[1])] : (i = ot.buildFragment([t], e, o), o && o.length && ot(o).remove(), ot.merge([], i.childNodes))
        };
        var en = ot.fn.load;
        ot.fn.load = function (t, e, n) {
            if ("string" != typeof t && en) return en.apply(this, arguments);
            var i, o, r, a = this, s = t.indexOf(" ");
            return s >= 0 && (i = ot.trim(t.slice(s, t.length)), t = t.slice(0, s)), ot.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), a.length > 0 && ot.ajax({
                url: t,
                type: r,
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, a.html(i ? ot("<div>").append(ot.parseHTML(t)).find(i) : t)
            }).complete(n && function (t, e) {
                a.each(n, o || [t.responseText, e, t])
            }), this
        }, ot.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            ot.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), ot.expr.filters.animated = function (t) {
            return ot.grep(ot.timers, function (e) {
                return t === e.elem
            }).length
        };
        var nn = t.document.documentElement;
        ot.offset = {
            setOffset: function (t, e, n) {
                var i, o, r, a, s, l, c, u = ot.css(t, "position"), d = ot(t), h = {};
                "static" === u && (t.style.position = "relative"), s = d.offset(), r = ot.css(t, "top"), l = ot.css(t, "left"), c = ("absolute" === u || "fixed" === u) && ot.inArray("auto", [r, l]) > -1, c ? (i = d.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), ot.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (h.top = e.top - s.top + a), null != e.left && (h.left = e.left - s.left + o), "using" in e ? e.using.call(t, h) : d.css(h)
            }
        }, ot.fn.extend({
            offset: function (t) {
                if (arguments.length) return void 0 === t ? this : this.each(function (e) {
                    ot.offset.setOffset(this, t, e)
                });
                var e, n, i = {top: 0, left: 0}, o = this[0], r = o && o.ownerDocument;
                if (r) return e = r.documentElement, ot.contains(e, o) ? (typeof o.getBoundingClientRect !== _t && (i = o.getBoundingClientRect()), n = V(r), {
                    top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                    left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                }) : i
            }, position: function () {
                if (this[0]) {
                    var t, e, n = {top: 0, left: 0}, i = this[0];
                    return "fixed" === ot.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ot.nodeName(t[0], "html") || (n = t.offset()), n.top += ot.css(t[0], "borderTopWidth", !0), n.left += ot.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - ot.css(i, "marginTop", !0),
                        left: e.left - n.left - ot.css(i, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent || nn; t && !ot.nodeName(t, "html") && "static" === ot.css(t, "position");) t = t.offsetParent;
                    return t || nn
                })
            }
        }), ot.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = /Y/.test(e);
            ot.fn[t] = function (i) {
                return At(this, function (t, i, o) {
                    var r = V(t);
                    return void 0 === o ? r ? e in r ? r[e] : r.document.documentElement[i] : t[i] : void (r ? r.scrollTo(n ? ot(r).scrollLeft() : o, n ? o : ot(r).scrollTop()) : t[i] = o)
                }, t, i, arguments.length, null)
            }
        }), ot.each(["top", "left"], function (t, e) {
            ot.cssHooks[e] = T(nt.pixelPosition, function (t, n) {
                if (n) return n = ee(t, e), ie.test(n) ? ot(t).position()[e] + "px" : n
            })
        }), ot.each({Height: "height", Width: "width"}, function (t, e) {
            ot.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, i) {
                ot.fn[i] = function (i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (i === !0 || o === !0 ? "margin" : "border");
                    return At(this, function (e, n, i) {
                        var o;
                        return ot.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement,
                            Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? ot.css(e, n, a) : ot.style(e, n, i, a)
                    }, e, r ? i : void 0, r, null)
                }
            })
        }), ot.fn.size = function () {
            return this.length
        }, ot.fn.andSelf = ot.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
            return ot
        });
        var on = t.jQuery, rn = t.$;
        return ot.noConflict = function (e) {
            return t.$ === ot && (t.$ = rn), e && t.jQuery === ot && (t.jQuery = on), ot
        }, typeof e === _t && (t.jQuery = t.$ = ot), ot
    }), function () {
        var t = this, e = t._, n = {}, i = Array.prototype, o = Object.prototype, r = Function.prototype, a = i.push,
            s = i.slice, l = i.concat, c = o.toString, u = o.hasOwnProperty, d = i.forEach, h = i.map, p = i.reduce,
            f = i.reduceRight, m = i.filter, g = i.every, v = i.some, y = i.indexOf, b = i.lastIndexOf,
            w = Array.isArray, x = Object.keys, C = r.bind, _ = function (t) {
                return t instanceof _ ? t : this instanceof _ ? void (this._wrapped = t) : new _(t)
            };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = _), exports._ = _) : t._ = _, _.VERSION = "1.6.0";
        var S = _.each = _.forEach = function (t, e, i) {
            if (null == t) return t;
            if (d && t.forEach === d) t.forEach(e, i); else if (t.length === +t.length) {
                for (var o = 0, r = t.length; r > o; o++) if (e.call(i, t[o], o, t) === n) return
            } else for (var a = _.keys(t), o = 0, r = a.length; r > o; o++) if (e.call(i, t[a[o]], a[o], t) === n) return;
            return t
        };
        _.map = _.collect = function (t, e, n) {
            var i = [];
            return null == t ? i : h && t.map === h ? t.map(e, n) : (S(t, function (t, o, r) {
                i.push(e.call(n, t, o, r))
            }), i)
        };
        var k = "Reduce of empty array with no initial value";
        _.reduce = _.foldl = _.inject = function (t, e, n, i) {
            var o = arguments.length > 2;
            if (null == t && (t = []), p && t.reduce === p) return i && (e = _.bind(e, i)), o ? t.reduce(e, n) : t.reduce(e);
            if (S(t, function (t, r, a) {
                o ? n = e.call(i, n, t, r, a) : (n = t, o = !0)
            }), !o) throw new TypeError(k);
            return n
        }, _.reduceRight = _.foldr = function (t, e, n, i) {
            var o = arguments.length > 2;
            if (null == t && (t = []), f && t.reduceRight === f) return i && (e = _.bind(e, i)), o ? t.reduceRight(e, n) : t.reduceRight(e);
            var r = t.length;
            if (r !== +r) {
                var a = _.keys(t);
                r = a.length
            }
            if (S(t, function (s, l, c) {
                l = a ? a[--r] : --r, o ? n = e.call(i, n, t[l], l, c) : (n = t[l], o = !0)
            }), !o) throw new TypeError(k);
            return n
        }, _.find = _.detect = function (t, e, n) {
            var i;
            return T(t, function (t, o, r) {
                return e.call(n, t, o, r) ? (i = t, !0) : void 0
            }), i
        }, _.filter = _.select = function (t, e, n) {
            var i = [];
            return null == t ? i : m && t.filter === m ? t.filter(e, n) : (S(t, function (t, o, r) {
                e.call(n, t, o, r) && i.push(t)
            }), i)
        }, _.reject = function (t, e, n) {
            return _.filter(t, function (t, i, o) {
                return !e.call(n, t, i, o)
            }, n)
        }, _.every = _.all = function (t, e, i) {
            e || (e = _.identity);
            var o = !0;
            return null == t ? o : g && t.every === g ? t.every(e, i) : (S(t, function (t, r, a) {
                return (o = o && e.call(i, t, r, a)) ? void 0 : n
            }), !!o)
        };
        var T = _.some = _.any = function (t, e, i) {
            e || (e = _.identity);
            var o = !1;
            return null == t ? o : v && t.some === v ? t.some(e, i) : (S(t, function (t, r, a) {
                return o || (o = e.call(i, t, r, a)) ? n : void 0
            }), !!o)
        };
        _.contains = _.include = function (t, e) {
            return null != t && (y && t.indexOf === y ? t.indexOf(e) != -1 : T(t, function (t) {
                return t === e
            }))
        }, _.invoke = function (t, e) {
            var n = s.call(arguments, 2), i = _.isFunction(e);
            return _.map(t, function (t) {
                return (i ? e : t[e]).apply(t, n)
            })
        }, _.pluck = function (t, e) {
            return _.map(t, _.property(e))
        }, _.where = function (t, e) {
            return _.filter(t, _.matches(e))
        }, _.findWhere = function (t, e) {
            return _.find(t, _.matches(e))
        }, _.max = function (t, e, n) {
            if (!e && _.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.max.apply(Math, t);
            var i = -1 / 0, o = -1 / 0;
            return S(t, function (t, r, a) {
                var s = e ? e.call(n, t, r, a) : t;
                s > o && (i = t, o = s)
            }), i
        }, _.min = function (t, e, n) {
            if (!e && _.isArray(t) && t[0] === +t[0] && t.length < 65535) return Math.min.apply(Math, t);
            var i = 1 / 0, o = 1 / 0;
            return S(t, function (t, r, a) {
                var s = e ? e.call(n, t, r, a) : t;
                o > s && (i = t, o = s)
            }), i
        }, _.shuffle = function (t) {
            var e, n = 0, i = [];
            return S(t, function (t) {
                e = _.random(n++), i[n - 1] = i[e], i[e] = t
            }), i
        }, _.sample = function (t, e, n) {
            return null == e || n ? (t.length !== +t.length && (t = _.values(t)), t[_.random(t.length - 1)]) : _.shuffle(t).slice(0, Math.max(0, e))
        };
        var E = function (t) {
            return null == t ? _.identity : _.isFunction(t) ? t : _.property(t)
        };
        _.sortBy = function (t, e, n) {
            return e = E(e), _.pluck(_.map(t, function (t, i, o) {
                return {value: t, index: i, criteria: e.call(n, t, i, o)}
            }).sort(function (t, e) {
                var n = t.criteria, i = e.criteria;
                if (n !== i) {
                    if (n > i || void 0 === n) return 1;
                    if (i > n || void 0 === i) return -1
                }
                return t.index - e.index
            }), "value")
        };
        var I = function (t) {
            return function (e, n, i) {
                var o = {};
                return n = E(n), S(e, function (r, a) {
                    var s = n.call(i, r, a, e);
                    t(o, s, r)
                }), o
            }
        };
        _.groupBy = I(function (t, e, n) {
            _.has(t, e) ? t[e].push(n) : t[e] = [n]
        }), _.indexBy = I(function (t, e, n) {
            t[e] = n
        }), _.countBy = I(function (t, e) {
            _.has(t, e) ? t[e]++ : t[e] = 1
        }), _.sortedIndex = function (t, e, n, i) {
            n = E(n);
            for (var o = n.call(i, e), r = 0, a = t.length; a > r;) {
                var s = r + a >>> 1;
                n.call(i, t[s]) < o ? r = s + 1 : a = s
            }
            return r
        }, _.toArray = function (t) {
            return t ? _.isArray(t) ? s.call(t) : t.length === +t.length ? _.map(t, _.identity) : _.values(t) : []
        }, _.size = function (t) {
            return null == t ? 0 : t.length === +t.length ? t.length : _.keys(t).length
        }, _.first = _.head = _.take = function (t, e, n) {
            return null == t ? void 0 : null == e || n ? t[0] : 0 > e ? [] : s.call(t, 0, e)
        }, _.initial = function (t, e, n) {
            return s.call(t, 0, t.length - (null == e || n ? 1 : e))
        }, _.last = function (t, e, n) {
            return null == t ? void 0 : null == e || n ? t[t.length - 1] : s.call(t, Math.max(t.length - e, 0))
        }, _.rest = _.tail = _.drop = function (t, e, n) {
            return s.call(t, null == e || n ? 1 : e)
        }, _.compact = function (t) {
            return _.filter(t, _.identity)
        };
        var A = function (t, e, n) {
            return e && _.every(t, _.isArray) ? l.apply(n, t) : (S(t, function (t) {
                _.isArray(t) || _.isArguments(t) ? e ? a.apply(n, t) : A(t, e, n) : n.push(t)
            }), n)
        };
        _.flatten = function (t, e) {
            return A(t, e, [])
        }, _.without = function (t) {
            return _.difference(t, s.call(arguments, 1))
        }, _.partition = function (t, e) {
            var n = [], i = [];
            return S(t, function (t) {
                (e(t) ? n : i).push(t)
            }), [n, i]
        }, _.uniq = _.unique = function (t, e, n, i) {
            _.isFunction(e) && (i = n, n = e, e = !1);
            var o = n ? _.map(t, n, i) : t, r = [], a = [];
            return S(o, function (n, i) {
                (e ? i && a[a.length - 1] === n : _.contains(a, n)) || (a.push(n), r.push(t[i]))
            }), r
        }, _.union = function () {
            return _.uniq(_.flatten(arguments, !0))
        }, _.intersection = function (t) {
            var e = s.call(arguments, 1);
            return _.filter(_.uniq(t), function (t) {
                return _.every(e, function (e) {
                    return _.contains(e, t)
                })
            })
        }, _.difference = function (t) {
            var e = l.apply(i, s.call(arguments, 1));
            return _.filter(t, function (t) {
                return !_.contains(e, t)
            })
        }, _.zip = function () {
            for (var t = _.max(_.pluck(arguments, "length").concat(0)), e = new Array(t), n = 0; t > n; n++) e[n] = _.pluck(arguments, "" + n);
            return e
        }, _.object = function (t, e) {
            if (null == t) return {};
            for (var n = {}, i = 0, o = t.length; o > i; i++) e ? n[t[i]] = e[i] : n[t[i][0]] = t[i][1];
            return n
        }, _.indexOf = function (t, e, n) {
            if (null == t) return -1;
            var i = 0, o = t.length;
            if (n) {
                if ("number" != typeof n) return i = _.sortedIndex(t, e), t[i] === e ? i : -1;
                i = 0 > n ? Math.max(0, o + n) : n
            }
            if (y && t.indexOf === y) return t.indexOf(e, n);
            for (; o > i; i++) if (t[i] === e) return i;
            return -1
        }, _.lastIndexOf = function (t, e, n) {
            if (null == t) return -1;
            var i = null != n;
            if (b && t.lastIndexOf === b) return i ? t.lastIndexOf(e, n) : t.lastIndexOf(e);
            for (var o = i ? n : t.length; o--;) if (t[o] === e) return o;
            return -1
        }, _.range = function (t, e, n) {
            arguments.length <= 1 && (e = t || 0, t = 0), n = arguments[2] || 1;
            for (var i = Math.max(Math.ceil((e - t) / n), 0), o = 0, r = new Array(i); i > o;) r[o++] = t, t += n;
            return r
        };
        var z = function () {
        };
        _.bind = function (t, e) {
            var n, i;
            if (C && t.bind === C) return C.apply(t, s.call(arguments, 1));
            if (!_.isFunction(t)) throw new TypeError;
            return n = s.call(arguments, 2), i = function () {
                if (!(this instanceof i)) return t.apply(e, n.concat(s.call(arguments)));
                z.prototype = t.prototype;
                var o = new z;
                z.prototype = null;
                var r = t.apply(o, n.concat(s.call(arguments)));
                return Object(r) === r ? r : o
            }
        }, _.partial = function (t) {
            var e = s.call(arguments, 1);
            return function () {
                for (var n = 0, i = e.slice(), o = 0, r = i.length; r > o; o++) i[o] === _ && (i[o] = arguments[n++]);
                for (; n < arguments.length;) i.push(arguments[n++]);
                return t.apply(this, i)
            }
        }, _.bindAll = function (t) {
            var e = s.call(arguments, 1);
            if (0 === e.length) throw new Error("bindAll must be passed function names");
            return S(e, function (e) {
                t[e] = _.bind(t[e], t)
            }), t
        }, _.memoize = function (t, e) {
            var n = {};
            return e || (e = _.identity), function () {
                var i = e.apply(this, arguments);
                return _.has(n, i) ? n[i] : n[i] = t.apply(this, arguments)
            }
        }, _.delay = function (t, e) {
            var n = s.call(arguments, 2);
            return setTimeout(function () {
                return t.apply(null, n)
            }, e)
        }, _.defer = function (t) {
            return _.delay.apply(_, [t, 1].concat(s.call(arguments, 1)))
        }, _.throttle = function (t, e, n) {
            var i, o, r, a = null, s = 0;
            n || (n = {});
            var l = function () {
                s = n.leading === !1 ? 0 : _.now(), a = null, r = t.apply(i, o), i = o = null
            };
            return function () {
                var c = _.now();
                s || n.leading !== !1 || (s = c);
                var u = e - (c - s);
                return i = this, o = arguments, 0 >= u ? (clearTimeout(a), a = null, s = c, r = t.apply(i, o), i = o = null) : a || n.trailing === !1 || (a = setTimeout(l, u)), r
            }
        }, _.debounce = function (t, e, n) {
            var i, o, r, a, s, l = function () {
                var c = _.now() - a;
                e > c ? i = setTimeout(l, e - c) : (i = null, n || (s = t.apply(r, o), r = o = null))
            };
            return function () {
                r = this, o = arguments, a = _.now();
                var c = n && !i;
                return i || (i = setTimeout(l, e)), c && (s = t.apply(r, o), r = o = null), s
            }
        }, _.once = function (t) {
            var e, n = !1;
            return function () {
                return n ? e : (n = !0, e = t.apply(this, arguments), t = null, e)
            }
        }, _.wrap = function (t, e) {
            return _.partial(e, t)
        }, _.compose = function () {
            var t = arguments;
            return function () {
                for (var e = arguments, n = t.length - 1; n >= 0; n--) e = [t[n].apply(this, e)];
                return e[0]
            }
        }, _.after = function (t, e) {
            return function () {
                return --t < 1 ? e.apply(this, arguments) : void 0
            }
        }, _.keys = function (t) {
            if (!_.isObject(t)) return [];
            if (x) return x(t);
            var e = [];
            for (var n in t) _.has(t, n) && e.push(n);
            return e
        }, _.values = function (t) {
            for (var e = _.keys(t), n = e.length, i = new Array(n), o = 0; n > o; o++) i[o] = t[e[o]];
            return i
        }, _.pairs = function (t) {
            for (var e = _.keys(t), n = e.length, i = new Array(n), o = 0; n > o; o++) i[o] = [e[o], t[e[o]]];
            return i
        }, _.invert = function (t) {
            for (var e = {}, n = _.keys(t), i = 0, o = n.length; o > i; i++) e[t[n[i]]] = n[i];
            return e
        }, _.functions = _.methods = function (t) {
            var e = [];
            for (var n in t) _.isFunction(t[n]) && e.push(n);
            return e.sort()
        }, _.extend = function (t) {
            return S(s.call(arguments, 1), function (e) {
                if (e) for (var n in e) t[n] = e[n]
            }), t
        }, _.pick = function (t) {
            var e = {}, n = l.apply(i, s.call(arguments, 1));
            return S(n, function (n) {
                n in t && (e[n] = t[n])
            }), e
        }, _.omit = function (t) {
            var e = {}, n = l.apply(i, s.call(arguments, 1));
            for (var o in t) _.contains(n, o) || (e[o] = t[o]);
            return e
        }, _.defaults = function (t) {
            return S(s.call(arguments, 1), function (e) {
                if (e) for (var n in e) void 0 === t[n] && (t[n] = e[n])
            }), t
        }, _.clone = function (t) {
            return _.isObject(t) ? _.isArray(t) ? t.slice() : _.extend({}, t) : t
        }, _.tap = function (t, e) {
            return e(t), t
        };
        var j = function (t, e, n, i) {
            if (t === e) return 0 !== t || 1 / t == 1 / e;
            if (null == t || null == e) return t === e;
            t instanceof _ && (t = t._wrapped), e instanceof _ && (e = e._wrapped);
            var o = c.call(t);
            if (o != c.call(e)) return !1;
            switch (o) {
                case"[object String]":
                    return t == String(e);
                case"[object Number]":
                    return t != +t ? e != +e : 0 == t ? 1 / t == 1 / e : t == +e;
                case"[object Date]":
                case"[object Boolean]":
                    return +t == +e;
                case"[object RegExp]":
                    return t.source == e.source && t.global == e.global && t.multiline == e.multiline && t.ignoreCase == e.ignoreCase
            }
            if ("object" != typeof t || "object" != typeof e) return !1;
            for (var r = n.length; r--;) if (n[r] == t) return i[r] == e;
            var a = t.constructor, s = e.constructor;
            if (a !== s && !(_.isFunction(a) && a instanceof a && _.isFunction(s) && s instanceof s) && "constructor" in t && "constructor" in e) return !1;
            n.push(t), i.push(e);
            var l = 0, u = !0;
            if ("[object Array]" == o) {
                if (l = t.length, u = l == e.length) for (; l-- && (u = j(t[l], e[l], n, i));) ;
            } else {
                for (var d in t) if (_.has(t, d) && (l++, !(u = _.has(e, d) && j(t[d], e[d], n, i)))) break;
                if (u) {
                    for (d in e) if (_.has(e, d) && !l--) break;
                    u = !l
                }
            }
            return n.pop(), i.pop(), u
        };
        _.isEqual = function (t, e) {
            return j(t, e, [], [])
        }, _.isEmpty = function (t) {
            if (null == t) return !0;
            if (_.isArray(t) || _.isString(t)) return 0 === t.length;
            for (var e in t) if (_.has(t, e)) return !1;
            return !0
        }, _.isElement = function (t) {
            return !(!t || 1 !== t.nodeType)
        }, _.isArray = w || function (t) {
            return "[object Array]" == c.call(t)
        }, _.isObject = function (t) {
            return t === Object(t)
        }, S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (t) {
            _["is" + t] = function (e) {
                return c.call(e) == "[object " + t + "]"
            }
        }), _.isArguments(arguments) || (_.isArguments = function (t) {
            return !(!t || !_.has(t, "callee"))
        }), "function" != typeof /./ && (_.isFunction = function (t) {
            return "function" == typeof t
        }), _.isFinite = function (t) {
            return isFinite(t) && !isNaN(parseFloat(t))
        }, _.isNaN = function (t) {
            return _.isNumber(t) && t != +t
        }, _.isBoolean = function (t) {
            return t === !0 || t === !1 || "[object Boolean]" == c.call(t)
        }, _.isNull = function (t) {
            return null === t
        }, _.isUndefined = function (t) {
            return void 0 === t
        }, _.has = function (t, e) {
            return u.call(t, e)
        }, _.noConflict = function () {
            return t._ = e, this
        }, _.identity = function (t) {
            return t
        }, _.constant = function (t) {
            return function () {
                return t
            }
        }, _.property = function (t) {
            return function (e) {
                return e[t]
            }
        }, _.matches = function (t) {
            return function (e) {
                if (e === t) return !0;
                for (var n in t) if (t[n] !== e[n]) return !1;
                return !0
            }
        }, _.times = function (t, e, n) {
            for (var i = Array(Math.max(0, t)), o = 0; t > o; o++) i[o] = e.call(n, o);
            return i
        }, _.random = function (t, e) {
            return null == e && (e = t, t = 0), t + Math.floor(Math.random() * (e - t + 1))
        }, _.now = Date.now || function () {
            return (new Date).getTime()
        };
        var M = {escape: {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;"}};
        M.unescape = _.invert(M.escape);
        var P = {
            escape: new RegExp("[" + _.keys(M.escape).join("") + "]", "g"),
            unescape: new RegExp("(" + _.keys(M.unescape).join("|") + ")", "g")
        };
        _.each(["escape", "unescape"], function (t) {
            _[t] = function (e) {
                return null == e ? "" : ("" + e).replace(P[t], function (e) {
                    return M[t][e]
                })
            }
        }), _.result = function (t, e) {
            if (null != t) {
                var n = t[e];
                return _.isFunction(n) ? n.call(t) : n
            }
        }, _.mixin = function (t) {
            S(_.functions(t), function (e) {
                var n = _[e] = t[e];
                _.prototype[e] = function () {
                    var t = [this._wrapped];
                    return a.apply(t, arguments), H.call(this, n.apply(_, t))
                }
            })
        };
        var N = 0;
        _.uniqueId = function (t) {
            var e = ++N + "";
            return t ? t + e : e
        }, _.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var L = /(.)^/,
            O = {"'": "'", "\\": "\\", "\r": "r", "\n": "n", "\t": "t", "\u2028": "u2028", "\u2029": "u2029"},
            D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
        _.template = function (t, e, n) {
            var i;
            n = _.defaults({}, n, _.templateSettings);
            var o = new RegExp([(n.escape || L).source, (n.interpolate || L).source, (n.evaluate || L).source].join("|") + "|$", "g"),
                r = 0, a = "__p+='";
            t.replace(o, function (e, n, i, o, s) {
                return a += t.slice(r, s).replace(D, function (t) {
                    return "\\" + O[t]
                }), n && (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), o && (a += "';\n" + o + "\n__p+='"), r = s + e.length, e
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                i = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            if (e) return i(e, _);
            var s = function (t) {
                return i.call(this, t, _)
            };
            return s.source = "function(" + (n.variable || "obj") + "){\n" + a + "}", s
        }, _.chain = function (t) {
            return _(t).chain()
        };
        var H = function (t) {
            return this._chain ? _(t).chain() : t
        };
        _.mixin(_), S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (t) {
            var e = i[t];
            _.prototype[t] = function () {
                var n = this._wrapped;
                return e.apply(n, arguments), "shift" != t && "splice" != t || 0 !== n.length || delete n[0], H.call(this, n)
            }
        }), S(["concat", "join", "slice"], function (t) {
            var e = i[t];
            _.prototype[t] = function () {
                return H.call(this, e.apply(this._wrapped, arguments))
            }
        }), _.extend(_.prototype, {
            chain: function () {
                return this._chain = !0, this
            }, value: function () {
                return this._wrapped
            }
        }), "function" == typeof define && define.amd && define("underscore", [], function () {
            return _
        })
    }.call(this), !function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        function e(e, i) {
            var o, r, a, s = e.nodeName.toLowerCase();
            return "area" === s ? (o = e.parentNode, r = o.name, !(!e.href || !r || "map" !== o.nodeName.toLowerCase()) && (a = t("img[usemap='#" + r + "']")[0], !!a && n(a))) : (/^(input|select|textarea|button|object)$/.test(s) ? !e.disabled : "a" === s ? e.href || i : i) && n(e)
        }

        function n(e) {
            return t.expr.filters.visible(e) && !t(e).parents().addBack().filter(function () {
                return "hidden" === t.css(this, "visibility")
            }).length
        }

        t.ui = t.ui || {}, t.extend(t.ui, {
            version: "1.11.4",
            keyCode: {
                BACKSPACE: 8,
                COMMA: 188,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                LEFT: 37,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SPACE: 32,
                TAB: 9,
                UP: 38
            }
        }), t.fn.extend({
            scrollParent: function (e) {
                var n = this.css("position"), i = "absolute" === n, o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    r = this.parents().filter(function () {
                        var e = t(this);
                        return (!i || "static" !== e.css("position")) && o.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
                    }).eq(0);
                return "fixed" !== n && r.length ? r : t(this[0].ownerDocument || document)
            }, uniqueId: function () {
                var t = 0;
                return function () {
                    return this.each(function () {
                        this.id || (this.id = "ui-id-" + ++t)
                    })
                }
            }(), removeUniqueId: function () {
                return this.each(function () {
                    /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
                })
            }
        }), t.extend(t.expr[":"], {
            data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
                return function (n) {
                    return !!t.data(n, e)
                }
            }) : function (e, n, i) {
                return !!t.data(e, i[3])
            }, focusable: function (n) {
                return e(n, !isNaN(t.attr(n, "tabindex")))
            }, tabbable: function (n) {
                var i = t.attr(n, "tabindex"), o = isNaN(i);
                return (o || i >= 0) && e(n, !o)
            }
        }), t("<a>").outerWidth(1).jquery || t.each(["Width", "Height"], function (e, n) {
            function i(e, n, i, r) {
                return t.each(o, function () {
                    n -= parseFloat(t.css(e, "padding" + this)) || 0, i && (n -= parseFloat(t.css(e, "border" + this + "Width")) || 0), r && (n -= parseFloat(t.css(e, "margin" + this)) || 0)
                }), n
            }

            var o = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"], r = n.toLowerCase(), a = {
                innerWidth: t.fn.innerWidth,
                innerHeight: t.fn.innerHeight,
                outerWidth: t.fn.outerWidth,
                outerHeight: t.fn.outerHeight
            };
            t.fn["inner" + n] = function (e) {
                return void 0 === e ? a["inner" + n].call(this) : this.each(function () {
                    t(this).css(r, i(this, e) + "px")
                })
            }, t.fn["outer" + n] = function (e, o) {
                return "number" != typeof e ? a["outer" + n].call(this, e) : this.each(function () {
                    t(this).css(r, i(this, e, !0, o) + "px")
                })
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (t.fn.removeData = function (e) {
            return function (n) {
                return arguments.length ? e.call(this, t.camelCase(n)) : e.call(this)
            }
        }(t.fn.removeData)), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), t.fn.extend({
            focus: function (e) {
                return function (n, i) {
                    return "number" == typeof n ? this.each(function () {
                        var e = this;
                        setTimeout(function () {
                            t(e).focus(), i && i.call(e)
                        }, n)
                    }) : e.apply(this, arguments)
                }
            }(t.fn.focus), disableSelection: function () {
                var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function () {
                    return this.bind(t + ".ui-disableSelection", function (t) {
                        t.preventDefault()
                    })
                }
            }(), enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }, zIndex: function (e) {
                if (void 0 !== e) return this.css("zIndex", e);
                if (this.length) for (var n, i, o = t(this[0]); o.length && o[0] !== document;) {
                    if (n = o.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (i = parseInt(o.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    o = o.parent()
                }
                return 0
            }
        }), t.ui.plugin = {
            add: function (e, n, i) {
                var o, r = t.ui[e].prototype;
                for (o in i) r.plugins[o] = r.plugins[o] || [], r.plugins[o].push([n, i[o]])
            }, call: function (t, e, n, i) {
                var o, r = t.plugins[e];
                if (r && (i || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (o = 0; o < r.length; o++) t.options[r[o][0]] && r[o][1].apply(t.element, n)
            }
        }
    }), !function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        var e = 0, n = Array.prototype.slice;
        return t.cleanData = function (e) {
            return function (n) {
                var i, o, r;
                for (r = 0; null != (o = n[r]); r++) try {
                    i = t._data(o, "events"), i && i.remove && t(o).triggerHandler("remove")
                } catch (t) {
                }
                e(n)
            }
        }(t.cleanData), t.widget = function (e, n, i) {
            var o, r, a, s, l = {}, c = e.split(".")[0];
            return e = e.split(".")[1], o = c + "-" + e, i || (i = n, n = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
                return !!t.data(e, o)
            }, t[c] = t[c] || {}, r = t[c][e], a = t[c][e] = function (t, e) {
                return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new a(t, e)
            }, t.extend(a, r, {
                version: i.version,
                _proto: t.extend({}, i),
                _childConstructors: []
            }), s = new n, s.options = t.widget.extend({}, s.options), t.each(i, function (e, i) {
                return t.isFunction(i) ? void (l[e] = function () {
                    var t = function () {
                        return n.prototype[e].apply(this, arguments)
                    }, o = function (t) {
                        return n.prototype[e].apply(this, t)
                    };
                    return function () {
                        var e, n = this._super, r = this._superApply;
                        return this._super = t, this._superApply = o, e = i.apply(this, arguments), this._super = n, this._superApply = r, e
                    }
                }()) : void (l[e] = i)
            }), a.prototype = t.widget.extend(s, {widgetEventPrefix: r ? s.widgetEventPrefix || e : e}, l, {
                constructor: a,
                namespace: c,
                widgetName: e,
                widgetFullName: o
            }), r ? (t.each(r._childConstructors, function (e, n) {
                var i = n.prototype;
                t.widget(i.namespace + "." + i.widgetName, a, n._proto)
            }), delete r._childConstructors) : n._childConstructors.push(a), t.widget.bridge(e, a), a
        }, t.widget.extend = function (e) {
            for (var i, o, r = n.call(arguments, 1), a = 0, s = r.length; s > a; a++) for (i in r[a]) o = r[a][i], r[a].hasOwnProperty(i) && void 0 !== o && (e[i] = t.isPlainObject(o) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], o) : t.widget.extend({}, o) : o);
            return e
        }, t.widget.bridge = function (e, i) {
            var o = i.prototype.widgetFullName || e;
            t.fn[e] = function (r) {
                var a = "string" == typeof r, s = n.call(arguments, 1), l = this;
                return a ? this.each(function () {
                    var n, i = t.data(this, o);
                    return "instance" === r ? (l = i, !1) : i ? t.isFunction(i[r]) && "_" !== r.charAt(0) ? (n = i[r].apply(i, s), n !== i && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, !1) : void 0) : t.error("no such method '" + r + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + r + "'")
                }) : (s.length && (r = t.widget.extend.apply(null, [r].concat(s))), this.each(function () {
                    var e = t.data(this, o);
                    e ? (e.option(r || {}), e._init && e._init()) : t.data(this, o, new i(r, this))
                })), l
            }
        }, t.Widget = function () {
        }, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {disabled: !1, create: null},
            _createWidget: function (n, i) {
                i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = e++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function (t) {
                        t.target === i && this.destroy()
                    }
                }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), n), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
            },
            _getCreateOptions: t.noop,
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function () {
                this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
            },
            _destroy: t.noop,
            widget: function () {
                return this.element
            },
            option: function (e, n) {
                var i, o, r, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e) if (a = {}, i = e.split("."), e = i.shift(), i.length) {
                    for (o = a[e] = t.widget.extend({}, this.options[e]), r = 0; r < i.length - 1; r++) o[i[r]] = o[i[r]] || {}, o = o[i[r]];
                    if (e = i.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                    o[e] = n
                } else {
                    if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                    a[e] = n
                }
                return this._setOptions(a), this
            },
            _setOptions: function (t) {
                var e;
                for (e in t) this._setOption(e, t[e]);
                return this
            },
            _setOption: function (t, e) {
                return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!e), e && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
            },
            enable: function () {
                return this._setOptions({disabled: !1})
            },
            disable: function () {
                return this._setOptions({disabled: !0})
            },
            _on: function (e, n, i) {
                var o, r = this;
                "boolean" != typeof e && (i = n, n = e, e = !1), i ? (n = o = t(n), this.bindings = this.bindings.add(n)) : (i = n, n = this.element, o = this.widget()), t.each(i, function (i, a) {
                    function s() {
                        return e || r.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? r[a] : a).apply(r, arguments) : void 0
                    }

                    "string" != typeof a && (s.guid = a.guid = a.guid || s.guid || t.guid++);
                    var l = i.match(/^([\w:-]*)\s*(.*)$/), c = l[1] + r.eventNamespace, u = l[2];
                    u ? o.delegate(u, c, s) : n.bind(c, s)
                })
            },
            _off: function (e, n) {
                n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(n).undelegate(n), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
            },
            _delay: function (t, e) {
                function n() {
                    return ("string" == typeof t ? i[t] : t).apply(i, arguments)
                }

                var i = this;
                return setTimeout(n, e || 0)
            },
            _hoverable: function (e) {
                this.hoverable = this.hoverable.add(e), this._on(e, {
                    mouseenter: function (e) {
                        t(e.currentTarget).addClass("ui-state-hover")
                    }, mouseleave: function (e) {
                        t(e.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function (e) {
                this.focusable = this.focusable.add(e), this._on(e, {
                    focusin: function (e) {
                        t(e.currentTarget).addClass("ui-state-focus")
                    }, focusout: function (e) {
                        t(e.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function (e, n, i) {
                var o, r, a = this.options[e];
                if (i = i || {}, n = t.Event(n), n.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), n.target = this.element[0], r = n.originalEvent) for (o in r) o in n || (n[o] = r[o]);
                return this.element.trigger(n, i), !(t.isFunction(a) && a.apply(this.element[0], [n].concat(i)) === !1 || n.isDefaultPrevented())
            }
        }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, n) {
            t.Widget.prototype["_" + e] = function (i, o, r) {
                "string" == typeof o && (o = {effect: o});
                var a, s = o ? o === !0 || "number" == typeof o ? n : o.effect || n : e;
                o = o || {}, "number" == typeof o && (o = {duration: o}), a = !t.isEmptyObject(o), o.complete = r, o.delay && i.delay(o.delay), a && t.effects && t.effects.effect[s] ? i[e](o) : s !== e && i[s] ? i[s](o.duration, o.easing, r) : i.queue(function (n) {
                    t(this)[e](), r && r.call(i[0]), n()
                })
            }
        }), t.widget
    }), !function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.accordion", {
            version: "1.11.4",
            options: {
                active: 0,
                animate: {},
                collapsible: !1,
                event: "click",
                header: "> li > :first-child,> :not(li):even",
                heightStyle: "auto",
                icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
                activate: null,
                beforeActivate: null
            },
            hideProps: {
                borderTopWidth: "hide",
                borderBottomWidth: "hide",
                paddingTop: "hide",
                paddingBottom: "hide",
                height: "hide"
            },
            showProps: {
                borderTopWidth: "show",
                borderBottomWidth: "show",
                paddingTop: "show",
                paddingBottom: "show",
                height: "show"
            },
            _create: function () {
                var e = this.options;
                this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), e.active < 0 && (e.active += this.headers.length), this._refresh()
            },
            _getCreateEventData: function () {
                return {header: this.active, panel: this.active.length ? this.active.next() : t()}
            },
            _createIcons: function () {
                var e = this.options.icons;
                e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
            },
            _destroyIcons: function () {
                this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
            },
            _destroy: function () {
                var t;
                this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), void ("disabled" === t && (this.element.toggleClass("ui-state-disabled", !!e).attr("aria-disabled", e), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e))))
            },
            _keydown: function (e) {
                if (!e.altKey && !e.ctrlKey) {
                    var n = t.ui.keyCode, i = this.headers.length, o = this.headers.index(e.target), r = !1;
                    switch (e.keyCode) {
                        case n.RIGHT:
                        case n.DOWN:
                            r = this.headers[(o + 1) % i];
                            break;
                        case n.LEFT:
                        case n.UP:
                            r = this.headers[(o - 1 + i) % i];
                            break;
                        case n.SPACE:
                        case n.ENTER:
                            this._eventHandler(e);
                            break;
                        case n.HOME:
                            r = this.headers[0];
                            break;
                        case n.END:
                            r = this.headers[i - 1]
                    }
                    r && (t(e.target).attr("tabIndex", -1), t(r).attr("tabIndex", 0), r.focus(), e.preventDefault())
                }
            },
            _panelKeyDown: function (e) {
                e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
            },
            refresh: function () {
                var e = this.options;
                this._processPanels(), e.active === !1 && e.collapsible === !0 || !this.headers.length ? (e.active = !1, this.active = t()) : e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
            },
            _processPanels: function () {
                var t = this.headers, e = this.panels;
                this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
            },
            _refresh: function () {
                var e, n = this.options, i = n.heightStyle, o = this.element.parent();
                this.active = this._findActive(n.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () {
                    var e = t(this), n = e.uniqueId().attr("id"), i = e.next(), o = i.uniqueId().attr("id");
                    e.attr("aria-controls", o), i.attr("aria-labelledby", n)
                }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(n.event), "fill" === i ? (e = o.height(), this.element.siblings(":visible").each(function () {
                    var n = t(this), i = n.css("position");
                    "absolute" !== i && "fixed" !== i && (e -= n.outerHeight(!0))
                }), this.headers.each(function () {
                    e -= t(this).outerHeight(!0)
                }), this.headers.next().each(function () {
                    t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === i && (e = 0, this.headers.next().each(function () {
                    e = Math.max(e, t(this).css("height", "").height())
                }).height(e))
            },
            _activate: function (e) {
                var n = this._findActive(e)[0];
                n !== this.active[0] && (n = n || this.active[0], this._eventHandler({
                    target: n,
                    currentTarget: n,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return "number" == typeof e ? this.headers.eq(e) : t()
            },
            _setupEvents: function (e) {
                var n = {keydown: "_keydown"};
                e && t.each(e.split(" "), function (t, e) {
                    n[e] = "_eventHandler"
                }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, n), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
            },
            _eventHandler: function (e) {
                var n = this.options, i = this.active, o = t(e.currentTarget), r = o[0] === i[0],
                    a = r && n.collapsible, s = a ? t() : o.next(), l = i.next(),
                    c = {oldHeader: i, oldPanel: l, newHeader: a ? t() : o, newPanel: s};
                e.preventDefault(), r && !n.collapsible || this._trigger("beforeActivate", e, c) === !1 || (n.active = !a && this.headers.index(o), this.active = r ? t() : o, this._toggle(c), i.removeClass("ui-accordion-header-active ui-state-active"), n.icons && i.children(".ui-accordion-header-icon").removeClass(n.icons.activeHeader).addClass(n.icons.header), r || (o.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), n.icons && o.children(".ui-accordion-header-icon").removeClass(n.icons.header).addClass(n.icons.activeHeader),
                    o.next().addClass("ui-accordion-content-active")))
            },
            _toggle: function (e) {
                var n = e.newPanel, i = this.prevShow.length ? this.prevShow : e.oldPanel;
                this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = n, this.prevHide = i, this.options.animate ? this._animate(n, i, e) : (i.hide(), n.show(), this._toggleComplete(e)), i.attr({"aria-hidden": "true"}), i.prev().attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), n.length && i.length ? i.prev().attr({
                    tabIndex: -1,
                    "aria-expanded": "false"
                }) : n.length && this.headers.filter(function () {
                    return 0 === parseInt(t(this).attr("tabIndex"), 10)
                }).attr("tabIndex", -1), n.attr("aria-hidden", "false").prev().attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _animate: function (t, e, n) {
                var i, o, r, a = this, s = 0, l = t.css("box-sizing"),
                    c = t.length && (!e.length || t.index() < e.index()), u = this.options.animate || {},
                    d = c && u.down || u, h = function () {
                        a._toggleComplete(n)
                    };
                return "number" == typeof d && (r = d), "string" == typeof d && (o = d), o = o || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (i = t.show().outerHeight(), e.animate(this.hideProps, {
                    duration: r,
                    easing: o,
                    step: function (t, e) {
                        e.now = Math.round(t)
                    }
                }), void t.hide().animate(this.showProps, {
                    duration: r, easing: o, complete: h, step: function (t, n) {
                        n.now = Math.round(t), "height" !== n.prop ? "content-box" === l && (s += n.now) : "content" !== a.options.heightStyle && (n.now = Math.round(i - e.outerHeight() - s), s = 0)
                    }
                })) : e.animate(this.hideProps, r, o, h) : t.animate(this.showProps, r, o, h)
            },
            _toggleComplete: function (t) {
                var e = t.oldPanel;
                e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
            }
        })
    }), !function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
    }(function (t) {
        var e = "ui-effects-", n = t;
        return t.effects = {effect: {}}, function (t, e) {
            function n(t, e, n) {
                var i = d[e.type] || {};
                return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : i.mod ? (t + i.mod) % i.mod : 0 > t ? 0 : i.max < t ? i.max : t)
            }

            function i(e) {
                var n = c(), i = n._rgba = [];
                return e = e.toLowerCase(), f(l, function (t, o) {
                    var r, a = o.re.exec(e), s = a && o.parse(a), l = o.space || "rgba";
                    return s ? (r = n[l](s), n[u[l].cache] = r[u[l].cache], i = n._rgba = r._rgba, !1) : void 0
                }), i.length ? ("0,0,0,0" === i.join() && t.extend(i, r.transparent), n) : r[e]
            }

            function o(t, e, n) {
                return n = (n + 1) % 1, 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
            }

            var r,
                a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                s = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function (t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function (t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }], c = t.Color = function (e, n, i, o) {
                    return new t.Color.fn.parse(e, n, i, o)
                }, u = {
                    rgba: {
                        props: {
                            red: {idx: 0, type: "byte"},
                            green: {idx: 1, type: "byte"},
                            blue: {idx: 2, type: "byte"}
                        }
                    },
                    hsla: {
                        props: {
                            hue: {idx: 0, type: "degrees"},
                            saturation: {idx: 1, type: "percent"},
                            lightness: {idx: 2, type: "percent"}
                        }
                    }
                }, d = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, h = c.support = {},
                p = t("<p>")[0], f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(u, function (t, e) {
                e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
            }), c.fn = t.extend(c.prototype, {
                parse: function (o, a, s, l) {
                    if (o === e) return this._rgba = [null, null, null, null], this;
                    (o.jquery || o.nodeType) && (o = t(o).css(a), a = e);
                    var d = this, h = t.type(o), p = this._rgba = [];
                    return a !== e && (o = [o, a, s, l], h = "array"), "string" === h ? this.parse(i(o) || r._default) : "array" === h ? (f(u.rgba.props, function (t, e) {
                        p[e.idx] = n(o[e.idx], e)
                    }), this) : "object" === h ? (o instanceof c ? f(u, function (t, e) {
                        o[e.cache] && (d[e.cache] = o[e.cache].slice())
                    }) : f(u, function (e, i) {
                        var r = i.cache;
                        f(i.props, function (t, e) {
                            if (!d[r] && i.to) {
                                if ("alpha" === t || null == o[t]) return;
                                d[r] = i.to(d._rgba)
                            }
                            d[r][e.idx] = n(o[t], e, !0)
                        }), d[r] && t.inArray(null, d[r].slice(0, 3)) < 0 && (d[r][3] = 1, i.from && (d._rgba = i.from(d[r])))
                    }), this) : void 0
                }, is: function (t) {
                    var e = c(t), n = !0, i = this;
                    return f(u, function (t, o) {
                        var r, a = e[o.cache];
                        return a && (r = i[o.cache] || o.to && o.to(i._rgba) || [], f(o.props, function (t, e) {
                            return null != a[e.idx] ? n = a[e.idx] === r[e.idx] : void 0
                        })), n
                    }), n
                }, _space: function () {
                    var t = [], e = this;
                    return f(u, function (n, i) {
                        e[i.cache] && t.push(n)
                    }), t.pop()
                }, transition: function (t, e) {
                    var i = c(t), o = i._space(), r = u[o], a = 0 === this.alpha() ? c("transparent") : this,
                        s = a[r.cache] || r.to(a._rgba), l = s.slice();
                    return i = i[r.cache], f(r.props, function (t, o) {
                        var r = o.idx, a = s[r], c = i[r], u = d[o.type] || {};
                        null !== c && (null === a ? l[r] = c : (u.mod && (c - a > u.mod / 2 ? a += u.mod : a - c > u.mod / 2 && (a -= u.mod)), l[r] = n((c - a) * e + a, o)))
                    }), this[o](l)
                }, blend: function (e) {
                    if (1 === this._rgba[3]) return this;
                    var n = this._rgba.slice(), i = n.pop(), o = c(e)._rgba;
                    return c(t.map(n, function (t, e) {
                        return (1 - i) * o[e] + i * t
                    }))
                }, toRgbaString: function () {
                    var e = "rgba(", n = t.map(this._rgba, function (t, e) {
                        return null == t ? e > 2 ? 1 : 0 : t
                    });
                    return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")"
                }, toHslaString: function () {
                    var e = "hsla(", n = t.map(this.hsla(), function (t, e) {
                        return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                    });
                    return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")"
                }, toHexString: function (e) {
                    var n = this._rgba.slice(), i = n.pop();
                    return e && n.push(~~(255 * i)), "#" + t.map(n, function (t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                }, toString: function () {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), c.fn.parse.prototype = c.fn, u.hsla.to = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, n, i = t[0] / 255, o = t[1] / 255, r = t[2] / 255, a = t[3], s = Math.max(i, o, r),
                    l = Math.min(i, o, r), c = s - l, u = s + l, d = .5 * u;
                return e = l === s ? 0 : i === s ? 60 * (o - r) / c + 360 : o === s ? 60 * (r - i) / c + 120 : 60 * (i - o) / c + 240, n = 0 === c ? 0 : .5 >= d ? c / u : c / (2 - u), [Math.round(e) % 360, n, d, null == a ? 1 : a]
            }, u.hsla.from = function (t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360, n = t[1], i = t[2], r = t[3], a = .5 >= i ? i * (1 + n) : i + n - i * n,
                    s = 2 * i - a;
                return [Math.round(255 * o(s, a, e + 1 / 3)), Math.round(255 * o(s, a, e)), Math.round(255 * o(s, a, e - 1 / 3)), r]
            }, f(u, function (i, o) {
                var r = o.props, a = o.cache, l = o.to, u = o.from;
                c.fn[i] = function (i) {
                    if (l && !this[a] && (this[a] = l(this._rgba)), i === e) return this[a].slice();
                    var o, s = t.type(i), d = "array" === s || "object" === s ? i : arguments, h = this[a].slice();
                    return f(r, function (t, e) {
                        var i = d["object" === s ? t : e.idx];
                        null == i && (i = h[e.idx]), h[e.idx] = n(i, e)
                    }), u ? (o = c(u(h)), o[a] = h, o) : c(h)
                }, f(r, function (e, n) {
                    c.fn[e] || (c.fn[e] = function (o) {
                        var r, a = t.type(o), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i, c = this[l](),
                            u = c[n.idx];
                        return "undefined" === a ? u : ("function" === a && (o = o.call(this, u), a = t.type(o)), null == o && n.empty ? this : ("string" === a && (r = s.exec(o), r && (o = u + parseFloat(r[2]) * ("+" === r[1] ? 1 : -1))), c[n.idx] = o, this[l](c)))
                    })
                })
            }), c.hook = function (e) {
                var n = e.split(" ");
                f(n, function (e, n) {
                    t.cssHooks[n] = {
                        set: function (e, o) {
                            var r, a, s = "";
                            if ("transparent" !== o && ("string" !== t.type(o) || (r = i(o)))) {
                                if (o = c(r || o), !h.rgba && 1 !== o._rgba[3]) {
                                    for (a = "backgroundColor" === n ? e.parentNode : e; ("" === s || "transparent" === s) && a && a.style;) try {
                                        s = t.css(a, "backgroundColor"), a = a.parentNode
                                    } catch (t) {
                                    }
                                    o = o.blend(s && "transparent" !== s ? s : "_default")
                                }
                                o = o.toRgbaString()
                            }
                            try {
                                e.style[n] = o
                            } catch (t) {
                            }
                        }
                    }, t.fx.step[n] = function (e) {
                        e.colorInit || (e.start = c(e.elem, n), e.end = c(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, c.hook(a), t.cssHooks.borderColor = {
                expand: function (t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function (n, i) {
                        e["border" + i + "Color"] = t
                    }), e
                }
            }, r = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(n), function () {
            function e(e) {
                var n, i,
                    o = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    r = {};
                if (o && o.length && o[0] && o[o[0]]) for (i = o.length; i--;) n = o[i], "string" == typeof o[n] && (r[t.camelCase(n)] = o[n]); else for (n in o) "string" == typeof o[n] && (r[n] = o[n]);
                return r
            }

            function i(e, n) {
                var i, o, a = {};
                for (i in n) o = n[i], e[i] !== o && (r[i] || (t.fx.step[i] || !isNaN(parseFloat(o))) && (a[i] = o));
                return a
            }

            var o = ["add", "remove", "toggle"], r = {
                border: 1,
                borderBottom: 1,
                borderColor: 1,
                borderLeft: 1,
                borderRight: 1,
                borderTop: 1,
                borderWidth: 1,
                margin: 1,
                padding: 1
            };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
                t.fx.step[i] = function (t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (n.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function (n, r, a, s) {
                var l = t.speed(r, a, s);
                return this.queue(function () {
                    var r, a = t(this), s = a.attr("class") || "", c = l.children ? a.find("*").addBack() : a;
                    c = c.map(function () {
                        var n = t(this);
                        return {el: n, start: e(this)}
                    }), r = function () {
                        t.each(o, function (t, e) {
                            n[e] && a[e + "Class"](n[e])
                        })
                    }, r(), c = c.map(function () {
                        return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this
                    }), a.attr("class", s), c = c.map(function () {
                        var e = this, n = t.Deferred(), i = t.extend({}, l, {
                            queue: !1, complete: function () {
                                n.resolve(e)
                            }
                        });
                        return this.el.animate(this.diff, i), n.promise()
                    }), t.when.apply(t, c.get()).done(function () {
                        r(), t.each(arguments, function () {
                            var e = this.el;
                            t.each(this.diff, function (t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(a[0])
                    })
                })
            }, t.fn.extend({
                addClass: function (e) {
                    return function (n, i, o, r) {
                        return i ? t.effects.animateClass.call(this, {add: n}, i, o, r) : e.apply(this, arguments)
                    }
                }(t.fn.addClass), removeClass: function (e) {
                    return function (n, i, o, r) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: n}, i, o, r) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass), toggleClass: function (e) {
                    return function (n, i, o, r, a) {
                        return "boolean" == typeof i || void 0 === i ? o ? t.effects.animateClass.call(this, i ? {add: n} : {remove: n}, o, r, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: n}, i, o, r)
                    }
                }(t.fn.toggleClass), switchClass: function (e, n, i, o, r) {
                    return t.effects.animateClass.call(this, {add: n, remove: e}, i, o, r)
                }
            })
        }(), function () {
            function n(e, n, i, o) {
                return t.isPlainObject(e) && (n = e, e = e.effect), e = {effect: e}, null == n && (n = {}), t.isFunction(n) && (o = n, i = null, n = {}), ("number" == typeof n || t.fx.speeds[n]) && (o = i, i = n, n = {}), t.isFunction(i) && (o = i, i = null), n && t.extend(e, n), i = i || n.duration, e.duration = t.fx.off ? 0 : "number" == typeof i ? i : i in t.fx.speeds ? t.fx.speeds[i] : t.fx.speeds._default, e.complete = o || n.complete, e
            }

            function i(e) {
                return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
            }

            t.extend(t.effects, {
                version: "1.11.4", save: function (t, n) {
                    for (var i = 0; i < n.length; i++) null !== n[i] && t.data(e + n[i], t[0].style[n[i]])
                }, restore: function (t, n) {
                    var i, o;
                    for (o = 0; o < n.length; o++) null !== n[o] && (i = t.data(e + n[o]), void 0 === i && (i = ""), t.css(n[o], i))
                }, setMode: function (t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                }, getBaseline: function (t, e) {
                    var n, i;
                    switch (t[0]) {
                        case"top":
                            n = 0;
                            break;
                        case"middle":
                            n = .5;
                            break;
                        case"bottom":
                            n = 1;
                            break;
                        default:
                            n = t[0] / e.height
                    }
                    switch (t[1]) {
                        case"left":
                            i = 0;
                            break;
                        case"center":
                            i = .5;
                            break;
                        case"right":
                            i = 1;
                            break;
                        default:
                            i = t[1] / e.width
                    }
                    return {x: i, y: n}
                }, createWrapper: function (e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var n = {width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float")},
                        i = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }), o = {width: e.width(), height: e.height()}, r = document.activeElement;
                    try {
                        r.id
                    } catch (t) {
                        r = document.body
                    }
                    return e.wrap(i), (e[0] === r || t.contains(e[0], r)) && t(r).focus(), i = e.parent(), "static" === e.css("position") ? (i.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(n, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function (t, i) {
                        n[i] = e.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(o), i.css(n).show()
                }, removeWrapper: function (e) {
                    var n = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === n || t.contains(e[0], n)) && t(n).focus()), e
                }, setTransition: function (e, n, i, o) {
                    return o = o || {}, t.each(n, function (t, n) {
                        var r = e.cssUnit(n);
                        r[0] > 0 && (o[n] = r[0] * i + r[1])
                    }), o
                }
            }), t.fn.extend({
                effect: function () {
                    function e(e) {
                        function n() {
                            t.isFunction(r) && r.call(o[0]), t.isFunction(e) && e()
                        }

                        var o = t(this), r = i.complete, s = i.mode;
                        (o.is(":hidden") ? "hide" === s : "show" === s) ? (o[s](), n()) : a.call(o[0], i, n)
                    }

                    var i = n.apply(this, arguments), o = i.mode, r = i.queue, a = t.effects.effect[i.effect];
                    return t.fx.off || !a ? o ? this[o](i.duration, i.complete) : this.each(function () {
                        i.complete && i.complete.call(this)
                    }) : r === !1 ? this.each(e) : this.queue(r || "fx", e)
                }, show: function (t) {
                    return function (e) {
                        if (i(e)) return t.apply(this, arguments);
                        var o = n.apply(this, arguments);
                        return o.mode = "show", this.effect.call(this, o)
                    }
                }(t.fn.show), hide: function (t) {
                    return function (e) {
                        if (i(e)) return t.apply(this, arguments);
                        var o = n.apply(this, arguments);
                        return o.mode = "hide", this.effect.call(this, o)
                    }
                }(t.fn.hide), toggle: function (t) {
                    return function (e) {
                        if (i(e) || "boolean" == typeof e) return t.apply(this, arguments);
                        var o = n.apply(this, arguments);
                        return o.mode = "toggle", this.effect.call(this, o)
                    }
                }(t.fn.toggle), cssUnit: function (e) {
                    var n = this.css(e), i = [];
                    return t.each(["em", "px", "%", "pt"], function (t, e) {
                        n.indexOf(e) > 0 && (i = [parseFloat(n), e])
                    }), i
                }
            })
        }(), function () {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, n) {
                e[n] = function (e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }, Circ: function (t) {
                    return 1 - Math.sqrt(1 - t * t)
                }, Elastic: function (t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                }, Back: function (t) {
                    return t * t * (3 * t - 2)
                }, Bounce: function (t) {
                    for (var e, n = 4; t < ((e = Math.pow(2, --n)) - 1) / 11;) ;
                    return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function (e, n) {
                t.easing["easeIn" + e] = n, t.easing["easeOut" + e] = function (t) {
                    return 1 - n(1 - t)
                }, t.easing["easeInOut" + e] = function (t) {
                    return .5 > t ? n(2 * t) / 2 : 1 - n(-2 * t + 2) / 2
                }
            })
        }(), t.effects
    }), function (t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t.jQuery)
    }(this, function (t, e) {
        function n(t, e, n) {
            var i = d[e.type] || {};
            return null == t ? n || !e.def ? null : e.def : (t = i.floor ? ~~t : parseFloat(t), i.mod ? (t + i.mod) % i.mod : Math.min(i.max, Math.max(0, t)))
        }

        function i(e) {
            var n = c(), i = n._rgba = [];
            return e = e.toLowerCase(), h(l, function (t, o) {
                var r, a = o.re.exec(e), s = a && o.parse(a), l = o.space || "rgba";
                if (s) return r = n[l](s), n[u[l].cache] = r[u[l].cache], i = n._rgba = r._rgba, !1
            }), i.length ? ("0,0,0,0" === i.join() && t.extend(i, r.transparent), n) : r[e]
        }

        function o(t, e, n) {
            return n = (n + 1) % 1, 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
        }

        var r,
            a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            s = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }], c = t.Color = function (e, n, i, o) {
                return new t.Color.fn.parse(e, n, i, o)
            }, u = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, d = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, h = t.each;
        h(u, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), c.fn = t.extend(c.prototype, {
            parse: function (o, a, s, l) {
                if (o === e) return this._rgba = [null, null, null, null], this;
                (o.jquery || o.nodeType) && (o = t(o).css(a), a = e);
                var d = this, p = t.type(o), f = this._rgba = [];
                return a !== e && (o = [o, a, s, l], p = "array"), "string" === p ? this.parse(i(o) || r._default) : "array" === p ? (h(u.rgba.props, function (t, e) {
                    f[e.idx] = n(o[e.idx], e)
                }), this) : "object" === p ? (o instanceof c ? h(u, function (t, e) {
                    o[e.cache] && (d[e.cache] = o[e.cache].slice())
                }) : h(u, function (e, i) {
                    var r = i.cache;
                    h(i.props, function (t, e) {
                        if (!d[r] && i.to) {
                            if ("alpha" === t || null == o[t]) return;
                            d[r] = i.to(d._rgba)
                        }
                        d[r][e.idx] = n(o[t], e, !0)
                    }), d[r] && t.inArray(null, d[r].slice(0, 3)) < 0 && (d[r][3] = 1, i.from && (d._rgba = i.from(d[r])))
                }), this) : void 0
            }, is: function (t) {
                var e = c(t), n = !0, i = this;
                return h(u, function (t, o) {
                    var r, a = e[o.cache];
                    return a && (r = i[o.cache] || o.to && o.to(i._rgba) || [], h(o.props, function (t, e) {
                        if (null != a[e.idx]) return n = a[e.idx] === r[e.idx]
                    })), n
                }), n
            }, _space: function () {
                var t = [], e = this;
                return h(u, function (n, i) {
                    e[i.cache] && t.push(n)
                }), t.pop()
            }, transition: function (t, e) {
                var i = c(t), o = i._space(), r = u[o], a = 0 === this.alpha() ? c("transparent") : this,
                    s = a[r.cache] || r.to(a._rgba), l = s.slice();
                return i = i[r.cache], h(r.props, function (t, o) {
                    var r = o.idx, a = s[r], c = i[r], u = d[o.type] || {};
                    null !== c && (null === a ? l[r] = c : (u.mod && (c - a > u.mod / 2 ? a += u.mod : a - c > u.mod / 2 && (a -= u.mod)), l[r] = n((c - a) * e + a, o)))
                }), this[o](l)
            }, blend: function (e) {
                if (1 === this._rgba[3]) return this;
                var n = this._rgba.slice(), i = n.pop(), o = c(e)._rgba;
                return c(t.map(n, function (t, e) {
                    return (1 - i) * o[e] + i * t
                }))
            }, toRgbaString: function () {
                var e = "rgba(", n = t.map(this._rgba, function (t, e) {
                    return null != t ? t : e > 2 ? 1 : 0
                });
                return 1 === n[3] && (n.pop(), e = "rgb("), e + n.join() + ")"
            }, toHslaString: function () {
                var e = "hsla(", n = t.map(this.hsla(), function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && e < 3 && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === n[3] && (n.pop(), e = "hsl("), e + n.join() + ")"
            }, toHexString: function (e) {
                var n = this._rgba.slice(), i = n.pop();
                return e && n.push(~~(255 * i)), "#" + t.map(n, function (t) {
                    return ("0" + (t || 0).toString(16)).substr(-2)
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), c.fn.parse.prototype = c.fn, u.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, n, i = t[0] / 255, o = t[1] / 255, r = t[2] / 255, a = t[3], s = Math.max(i, o, r),
                l = Math.min(i, o, r), c = s - l, u = s + l, d = .5 * u;
            return e = l === s ? 0 : i === s ? 60 * (o - r) / c + 360 : o === s ? 60 * (r - i) / c + 120 : 60 * (i - o) / c + 240, n = 0 === c ? 0 : d <= .5 ? c / u : c / (2 - u), [Math.round(e) % 360, n, d, null == a ? 1 : a]
        }, u.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360, n = t[1], i = t[2], r = t[3], a = i <= .5 ? i * (1 + n) : i + n - i * n, s = 2 * i - a;
            return [Math.round(255 * o(s, a, e + 1 / 3)), Math.round(255 * o(s, a, e)), Math.round(255 * o(s, a, e - 1 / 3)), r]
        }, h(u, function (i, o) {
            var r = o.props, a = o.cache, l = o.to, u = o.from;
            c.fn[i] = function (i) {
                if (l && !this[a] && (this[a] = l(this._rgba)), i === e) return this[a].slice();
                var o, s = t.type(i), d = "array" === s || "object" === s ? i : arguments, p = this[a].slice();
                return h(r, function (t, e) {
                    var i = d["object" === s ? t : e.idx];
                    null == i && (i = p[e.idx]), p[e.idx] = n(i, e)
                }), u ? (o = c(u(p)), o[a] = p, o) : c(p)
            }, h(r, function (e, n) {
                c.fn[e] || (c.fn[e] = function (o) {
                    var r, a, l, c, u = t.type(o);
                    return c = "alpha" === e ? this._hsla ? "hsla" : "rgba" : i, r = this[c](), a = r[n.idx], "undefined" === u ? a : ("function" === u && (o = o.call(this, a), u = t.type(o)), null == o && n.empty ? this : ("string" === u && (l = s.exec(o), l && (o = a + parseFloat(l[2]) * ("+" === l[1] ? 1 : -1))), r[n.idx] = o, this[c](r)))
                })
            })
        }), c.hook = function (e) {
            var n = e.split(" ");
            h(n, function (e, n) {
                t.cssHooks[n] = {
                    set: function (e, o) {
                        var r;
                        "transparent" === o || "string" === t.type(o) && !(r = i(o)) || (o = c(r || o), o = o.toRgbaString()), e.style[n] = o
                    }
                }, t.fx.step[n] = function (e) {
                    e.colorInit || (e.start = c(e.elem, n), e.end = c(e.end), e.colorInit = !0), t.cssHooks[n].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, c.hook(a), t.cssHooks.borderColor = {
            expand: function (t) {
                var e = {};
                return h(["Top", "Right", "Bottom", "Left"], function (n, i) {
                    e["border" + i + "Color"] = t
                }), e
            }
        }, r = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }), !function (t) {
        "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], t) : t(jQuery)
    }(function (t) {
        return t.widget("ui.tabs", {
            version: "1.11.4",
            delay: 300,
            options: {
                active: null,
                collapsible: !1,
                event: "click",
                heightStyle: "content",
                hide: null,
                show: null,
                activate: null,
                beforeActivate: null,
                beforeLoad: null,
                load: null
            },
            _isLocal: function () {
                var t = /#.*$/;
                return function (e) {
                    var n, i;
                    e = e.cloneNode(!1), n = e.href.replace(t, ""), i = location.href.replace(t, "");
                    try {
                        n = decodeURIComponent(n)
                    } catch (t) {
                    }
                    try {
                        i = decodeURIComponent(i)
                    } catch (t) {
                    }
                    return e.hash.length > 1 && n === i
                }
            }(),
            _create: function () {
                var e = this, n = this.options;
                this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", n.collapsible), this._processTabs(), n.active = this._initialActive(), t.isArray(n.disabled) && (n.disabled = t.unique(n.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                    return e.tabs.index(t)
                }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(n.active) : t(), this._refresh(), this.active.length && this.load(n.active)
            },
            _initialActive: function () {
                var e = this.options.active, n = this.options.collapsible, i = location.hash.substring(1);
                return null === e && (i && this.tabs.each(function (n, o) {
                    return t(o).attr("aria-controls") === i ? (e = n, !1) : void 0
                }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = !n && 0)), !n && e === !1 && this.anchors.length && (e = 0), e
            },
            _getCreateEventData: function () {
                return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
            },
            _tabKeydown: function (e) {
                var n = t(this.document[0].activeElement).closest("li"), i = this.tabs.index(n), o = !0;
                if (!this._handlePageNav(e)) {
                    switch (e.keyCode) {
                        case t.ui.keyCode.RIGHT:
                        case t.ui.keyCode.DOWN:
                            i++;
                            break;
                        case t.ui.keyCode.UP:
                        case t.ui.keyCode.LEFT:
                            o = !1, i--;
                            break;
                        case t.ui.keyCode.END:
                            i = this.anchors.length - 1;
                            break;
                        case t.ui.keyCode.HOME:
                            i = 0;
                            break;
                        case t.ui.keyCode.SPACE:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(i);
                        case t.ui.keyCode.ENTER:
                            return e.preventDefault(), clearTimeout(this.activating), void this._activate(i !== this.options.active && i);
                        default:
                            return
                    }
                    e.preventDefault(), clearTimeout(this.activating), i = this._focusNextTab(i, o), e.ctrlKey || e.metaKey || (n.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function () {
                        this.option("active", i)
                    }, this.delay))
                }
            },
            _panelKeydown: function (e) {
                this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
            },
            _handlePageNav: function (e) {
                return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
            },
            _findNextTab: function (e, n) {
                function i() {
                    return e > o && (e = 0), 0 > e && (e = o), e
                }

                for (var o = this.tabs.length - 1; -1 !== t.inArray(i(), this.options.disabled);) e = n ? e + 1 : e - 1;
                return e
            },
            _focusNextTab: function (t, e) {
                return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
            },
            _setOption: function (t, e) {
                return "active" === t ? void this._activate(e) : "disabled" === t ? void this._setupDisabled(e) : (this._super(t, e), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), void ("heightStyle" === t && this._setupHeightStyle(e)))
            },
            _sanitizeSelector: function (t) {
                return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
            },
            refresh: function () {
                var e = this.options, n = this.tablist.children(":has(a[href])");
                e.disabled = t.map(n.filter(".ui-state-disabled"), function (t) {
                    return n.index(t)
                }), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
            },
            _refresh: function () {
                this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                    "aria-selected": "false",
                    "aria-expanded": "false",
                    tabIndex: -1
                }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                }), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
            },
            _processTabs: function () {
                var e = this, n = this.tabs, i = this.anchors, o = this.panels;
                this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function (e) {
                    t(this).is(".ui-state-disabled") && e.preventDefault()
                }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
                    t(this).closest("li").is(".ui-state-disabled") && this.blur()
                }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                    role: "tab",
                    tabIndex: -1
                }), this.anchors = this.tabs.map(function () {
                    return t("a", this)[0]
                }).addClass("ui-tabs-anchor").attr({
                    role: "presentation",
                    tabIndex: -1
                }), this.panels = t(), this.anchors.each(function (n, i) {
                    var o, r, a, s = t(i).uniqueId().attr("id"), l = t(i).closest("li"), c = l.attr("aria-controls");
                    e._isLocal(i) ? (o = i.hash, a = o.substring(1), r = e.element.find(e._sanitizeSelector(o))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, o = "#" + a, r = e.element.find(o), r.length || (r = e._createPanel(a), r.insertAfter(e.panels[n - 1] || e.tablist)), r.attr("aria-live", "polite")), r.length && (e.panels = e.panels.add(r)), c && l.data("ui-tabs-aria-controls", c), l.attr({
                        "aria-controls": a,
                        "aria-labelledby": s
                    }), r.attr("aria-labelledby", s)
                }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), n && (this._off(n.not(this.tabs)), this._off(i.not(this.anchors)), this._off(o.not(this.panels)))
            },
            _getList: function () {
                return this.tablist || this.element.find("ol,ul").eq(0)
            },
            _createPanel: function (e) {
                return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
            },
            _setupDisabled: function (e) {
                t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
                for (var n, i = 0; n = this.tabs[i]; i++) e === !0 || -1 !== t.inArray(i, e) ? t(n).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(n).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                this.options.disabled = e
            },
            _setupEvents: function (e) {
                var n = {};
                e && t.each(e.split(" "), function (t, e) {
                    n[e] = "_eventHandler"
                }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                    click: function (t) {
                        t.preventDefault()
                    }
                }), this._on(this.anchors, n), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
            },
            _setupHeightStyle: function (e) {
                var n, i = this.element.parent();
                "fill" === e ? (n = i.height(), n -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                    var e = t(this), i = e.css("position");
                    "absolute" !== i && "fixed" !== i && (n -= e.outerHeight(!0))
                }), this.element.children().not(this.panels).each(function () {
                    n -= t(this).outerHeight(!0)
                }), this.panels.each(function () {
                    t(this).height(Math.max(0, n - t(this).innerHeight() + t(this).height()))
                }).css("overflow", "auto")) : "auto" === e && (n = 0, this.panels.each(function () {
                    n = Math.max(n, t(this).height("").height())
                }).height(n))
            },
            _eventHandler: function (e) {
                var n = this.options, i = this.active, o = t(e.currentTarget), r = o.closest("li"), a = r[0] === i[0],
                    s = a && n.collapsible, l = s ? t() : this._getPanelForTab(r),
                    c = i.length ? this._getPanelForTab(i) : t(),
                    u = {oldTab: i, oldPanel: c, newTab: s ? t() : r, newPanel: l};
                e.preventDefault(), r.hasClass("ui-state-disabled") || r.hasClass("ui-tabs-loading") || this.running || a && !n.collapsible || this._trigger("beforeActivate", e, u) === !1 || (n.active = !s && this.tabs.index(r), this.active = a ? t() : r, this.xhr && this.xhr.abort(), c.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(r), e), this._toggle(e, u))
            },
            _toggle: function (e, n) {
                function i() {
                    r.running = !1, r._trigger("activate", e, n)
                }

                function o() {
                    n.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), a.length && r.options.show ? r._show(a, r.options.show, i) : (a.show(), i())
                }

                var r = this, a = n.newPanel, s = n.oldPanel;
                this.running = !0, s.length && this.options.hide ? this._hide(s, this.options.hide, function () {
                    n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), o()
                }) : (n.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), s.hide(), o()), s.attr("aria-hidden", "true"), n.oldTab.attr({
                    "aria-selected": "false",
                    "aria-expanded": "false"
                }), a.length && s.length ? n.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                    return 0 === t(this).attr("tabIndex")
                }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), n.newTab.attr({
                    "aria-selected": "true",
                    "aria-expanded": "true",
                    tabIndex: 0
                })
            },
            _activate: function (e) {
                var n, i = this._findActive(e);
                i[0] !== this.active[0] && (i.length || (i = this.active), n = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                    target: n,
                    currentTarget: n,
                    preventDefault: t.noop
                }))
            },
            _findActive: function (e) {
                return e === !1 ? t() : this.tabs.eq(e)
            },
            _getIndex: function (t) {
                return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
            },
            _destroy: function () {
                this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function () {
                    t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                }), this.tabs.each(function () {
                    var e = t(this), n = e.data("ui-tabs-aria-controls");
                    n ? e.attr("aria-controls", n).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
                }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
            },
            enable: function (e) {
                var n = this.options.disabled;
                n !== !1 && (void 0 === e ? n = !1 : (e = this._getIndex(e), n = t.isArray(n) ? t.map(n, function (t) {
                    return t !== e ? t : null
                }) : t.map(this.tabs, function (t, n) {
                    return n !== e ? n : null
                })), this._setupDisabled(n))
            },
            disable: function (e) {
                var n = this.options.disabled;
                if (n !== !0) {
                    if (void 0 === e) n = !0; else {
                        if (e = this._getIndex(e), -1 !== t.inArray(e, n)) return;
                        n = t.isArray(n) ? t.merge([e], n).sort() : [e]
                    }
                    this._setupDisabled(n)
                }
            },
            load: function (e, n) {
                e = this._getIndex(e);
                var i = this, o = this.tabs.eq(e), r = o.find(".ui-tabs-anchor"), a = this._getPanelForTab(o), s = {
                    tab: o, panel: a
                }, l = function (t, e) {
                    "abort" === e && i.panels.stop(!1, !0), o.removeClass("ui-tabs-loading"), a.removeAttr("aria-busy"), t === i.xhr && delete i.xhr
                };
                this._isLocal(r[0]) || (this.xhr = t.ajax(this._ajaxSettings(r, n, s)), this.xhr && "canceled" !== this.xhr.statusText && (o.addClass("ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, o) {
                    setTimeout(function () {
                        a.html(t), i._trigger("load", n, s), l(o, e)
                    }, 1)
                }).fail(function (t, e) {
                    setTimeout(function () {
                        l(t, e)
                    }, 1)
                })))
            },
            _ajaxSettings: function (e, n, i) {
                var o = this;
                return {
                    url: e.attr("href"), beforeSend: function (e, r) {
                        return o._trigger("beforeLoad", n, t.extend({jqXHR: e, ajaxSettings: r}, i))
                    }
                }
            },
            _getPanelForTab: function (e) {
                var n = t(e).attr("aria-controls");
                return this.element.find(this._sanitizeSelector("#" + n))
            }
        })
    }), function (t) {
        var e = {}, n = {
            mode: "horizontal",
            slideSelector: "",
            infiniteLoop: !0,
            hideControlOnEnd: !1,
            speed: 500,
            easing: null,
            slideMargin: 0,
            startSlide: 0,
            randomStart: !1,
            captions: !1,
            ticker: !1,
            tickerHover: !1,
            adaptiveHeight: !1,
            adaptiveHeightSpeed: 500,
            video: !1,
            useCSS: !0,
            preloadImages: "visible",
            responsive: !0,
            slideZIndex: 50,
            wrapperClass: "bx-wrapper",
            touchEnabled: !0,
            swipeThreshold: 50,
            oneToOneTouch: !0,
            preventDefaultSwipeX: !0,
            preventDefaultSwipeY: !1,
            pager: !0,
            pagerType: "full",
            pagerShortSeparator: " / ",
            pagerSelector: null,
            buildPager: null,
            pagerCustom: null,
            controls: !0,
            nextText: "Next",
            prevText: "Prev",
            nextSelector: null,
            prevSelector: null,
            autoControls: !1,
            startText: "Start",
            stopText: "Stop",
            autoControlsCombine: !1,
            autoControlsSelector: null,
            auto: !0,
            pause: 4e3,
            autoStart: !0,
            autoDirection: "next",
            autoHover: !1,
            autoDelay: 0,
            autoSlideForOnePage: !1,
            minSlides: 1,
            maxSlides: 1,
            moveSlides: 0,
            slideWidth: 0,
            onSliderLoad: function () {
            },
            onSlideBefore: function () {
            },
            onSlideAfter: function () {
            },
            onSlideNext: function () {
            },
            onSlidePrev: function () {
            },
            onSliderResize: function () {
            }
        };
        t.fn.bxSlider = function (o) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function () {
                t(this).bxSlider(o)
            }), this;
            var r = {}, a = this;
            e.el = this;
            var s = t(window).width(), l = t(window).height(), c = function () {
                r.settings = t.extend({}, n, o), r.settings.slideWidth = parseInt(r.settings.slideWidth), r.children = a.children(r.settings.slideSelector), r.children.length < r.settings.minSlides && (r.settings.minSlides = r.children.length), r.children.length < r.settings.maxSlides && (r.settings.maxSlides = r.children.length), r.settings.randomStart && (r.settings.startSlide = Math.floor(Math.random() * r.children.length)), r.active = {index: r.settings.startSlide}, r.carousel = r.settings.minSlides > 1 || r.settings.maxSlides > 1, r.carousel && (r.settings.preloadImages = "all"), r.minThreshold = r.settings.minSlides * r.settings.slideWidth + (r.settings.minSlides - 1) * r.settings.slideMargin, r.maxThreshold = r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin, r.working = !1, r.controls = {}, r.interval = null, r.animProp = "vertical" == r.settings.mode ? "top" : "left", r.usingCSS = r.settings.useCSS && "fade" != r.settings.mode && function () {
                    var t = document.createElement("div"),
                        e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var n in e) if (void 0 !== t.style[e[n]]) return r.cssPrefix = e[n].replace("Perspective", "").toLowerCase(), r.animProp = "-" + r.cssPrefix + "-transform", !0;
                    return !1
                }(), "vertical" == r.settings.mode && (r.settings.maxSlides = r.settings.minSlides), a.data("origStyle", a.attr("style")), a.children(r.settings.slideSelector).each(function () {
                    t(this).data("origStyle", t(this).attr("style"))
                }), u()
            }, u = function () {
                a.wrap('<div class="' + r.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), r.viewport = a.parent(), r.loader = t('<div class="bx-loading" />'), r.viewport.prepend(r.loader), a.css({
                    width: "horizontal" == r.settings.mode ? 100 * r.children.length + 215 + "%" : "auto",
                    position: "relative"
                }), r.usingCSS && r.settings.easing ? a.css("-" + r.cssPrefix + "-transition-timing-function", r.settings.easing) : r.settings.easing || (r.settings.easing = "swing");
                g();
                r.viewport.css({
                    width: "100%",
                    overflow: "hidden",
                    position: "relative"
                }), r.viewport.parent().css({maxWidth: f()}), r.settings.pager || r.viewport.parent().css({margin: "0 auto 0px"}), r.children.css({
                    float: "horizontal" == r.settings.mode ? "left" : "none",
                    listStyle: "none",
                    position: "relative"
                }), r.children.css("width", m()), "horizontal" == r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginRight", r.settings.slideMargin), "vertical" == r.settings.mode && r.settings.slideMargin > 0 && r.children.css("marginBottom", r.settings.slideMargin), "fade" == r.settings.mode && (r.children.css({
                    position: "absolute",
                    zIndex: 0,
                    display: "none"
                }), r.children.eq(r.settings.startSlide).css({
                    zIndex: r.settings.slideZIndex,
                    display: "block"
                })), r.controls.el = t('<div class="bx-controls" />'), r.settings.captions && k(), r.active.last = r.settings.startSlide == v() - 1, r.settings.video && a.fitVids();
                var e = r.children.eq(r.settings.startSlide);
                "all" == r.settings.preloadImages && (e = r.children), r.settings.ticker ? r.settings.pager = !1 : (r.settings.pager && C(), r.settings.controls && _(), r.settings.auto && r.settings.autoControls && S(), (r.settings.controls || r.settings.autoControls || r.settings.pager) && r.viewport.after(r.controls.el)), d(e, h)
            }, d = function (e, n) {
                var i = e.find("img, iframe").length;
                if (0 == i) return void n();
                var o = 0;
                e.find("img, iframe").each(function () {
                    t(this).one("load", function () {
                        ++o == i && n()
                    }).each(function () {
                        this.complete && t(this).load()
                    })
                })
            }, h = function () {
                if (r.settings.infiniteLoop && "fade" != r.settings.mode && !r.settings.ticker) {
                    var e = "vertical" == r.settings.mode ? r.settings.minSlides : r.settings.maxSlides,
                        n = r.children.slice(0, e).clone().addClass("bx-clone"),
                        i = r.children.slice(-e).clone().addClass("bx-clone");
                    a.append(n).prepend(i)
                }
                r.loader.remove(), b(), "vertical" == r.settings.mode && (r.settings.adaptiveHeight = !0), r.viewport.height(p()), a.redrawSlider(), r.settings.onSliderLoad(r.active.index), r.initialized = !0, r.settings.responsive && t(window).bind("resize", F), r.settings.auto && r.settings.autoStart && (v() > 1 || r.settings.autoSlideForOnePage) && L(), r.settings.ticker && O(), r.settings.pager && j(r.settings.startSlide), r.settings.controls && N(), r.settings.touchEnabled && !r.settings.ticker && H()
            }, p = function () {
                var e = 0, n = t();
                if ("vertical" == r.settings.mode || r.settings.adaptiveHeight) if (r.carousel) {
                    var o = 1 == r.settings.moveSlides ? r.active.index : r.active.index * y();
                    for (n = r.children.eq(o), i = 1; i <= r.settings.maxSlides - 1; i++) n = o + i >= r.children.length ? n.add(r.children.eq(i - 1)) : n.add(r.children.eq(o + i))
                } else n = r.children.eq(r.active.index); else n = r.children;
                return "vertical" == r.settings.mode ? (n.each(function (n) {
                    e += t(this).outerHeight()
                }), r.settings.slideMargin > 0 && (e += r.settings.slideMargin * (r.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function () {
                    return t(this).outerHeight(!1)
                }).get()), "border-box" == r.viewport.css("box-sizing") ? e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom")) + parseFloat(r.viewport.css("border-top-width")) + parseFloat(r.viewport.css("border-bottom-width")) : "padding-box" == r.viewport.css("box-sizing") && (e += parseFloat(r.viewport.css("padding-top")) + parseFloat(r.viewport.css("padding-bottom"))), e
            }, f = function () {
                var t = "100%";
                return r.settings.slideWidth > 0 && (t = "horizontal" == r.settings.mode ? r.settings.maxSlides * r.settings.slideWidth + (r.settings.maxSlides - 1) * r.settings.slideMargin : r.settings.slideWidth), t
            }, m = function () {
                var t = r.settings.slideWidth, e = r.viewport.width();
                return 0 == r.settings.slideWidth || r.settings.slideWidth > e && !r.carousel || "vertical" == r.settings.mode ? t = e : r.settings.maxSlides > 1 && "horizontal" == r.settings.mode && (e > r.maxThreshold || e < r.minThreshold && (t = (e - r.settings.slideMargin * (r.settings.minSlides - 1)) / r.settings.minSlides)), t
            }, g = function () {
                var t = 1;
                if ("horizontal" == r.settings.mode && r.settings.slideWidth > 0) if (r.viewport.width() < r.minThreshold) t = r.settings.minSlides; else if (r.viewport.width() > r.maxThreshold) t = r.settings.maxSlides; else {
                    var e = r.children.first().width() + r.settings.slideMargin;
                    t = Math.floor((r.viewport.width() + r.settings.slideMargin) / e)
                } else "vertical" == r.settings.mode && (t = r.settings.minSlides);
                return t
            }, v = function () {
                var t = 0;
                if (r.settings.moveSlides > 0) if (r.settings.infiniteLoop) t = Math.ceil(r.children.length / y()); else for (var e = 0, n = 0; e < r.children.length;) ++t, e = n + g(), n += r.settings.moveSlides <= g() ? r.settings.moveSlides : g(); else t = Math.ceil(r.children.length / g());
                return t
            }, y = function () {
                return r.settings.moveSlides > 0 && r.settings.moveSlides <= g() ? r.settings.moveSlides : g()
            }, b = function () {
                if (r.children.length > r.settings.maxSlides && r.active.last && !r.settings.infiniteLoop) {
                    if ("horizontal" == r.settings.mode) {
                        var t = r.children.last(), e = t.position();
                        w(-(e.left - (r.viewport.width() - t.outerWidth())), "reset", 0)
                    } else if ("vertical" == r.settings.mode) {
                        var n = r.children.length - r.settings.minSlides, e = r.children.eq(n).position();
                        w(-e.top, "reset", 0)
                    }
                } else {
                    var e = r.children.eq(r.active.index * y()).position();
                    r.active.index == v() - 1 && (r.active.last = !0), void 0 != e && ("horizontal" == r.settings.mode ? w(-e.left, "reset", 0) : "vertical" == r.settings.mode && w(-e.top, "reset", 0))
                }
            }, w = function (t, e, n, i) {
                if (r.usingCSS) {
                    var o = "vertical" == r.settings.mode ? "translate3d(0, " + t + "px, 0)" : "translate3d(" + t + "px, 0, 0)";
                    a.css("-" + r.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" == e ? (a.css(r.animProp, o), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), M()
                    })) : "reset" == e ? a.css(r.animProp, o) : "ticker" == e && (a.css("-" + r.cssPrefix + "-transition-timing-function", "linear"), a.css(r.animProp, o), a.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                        a.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), w(i.resetValue, "reset", 0), D()
                    }))
                } else {
                    var s = {};
                    s[r.animProp] = t, "slide" == e ? a.animate(s, n, r.settings.easing, function () {
                        M()
                    }) : "reset" == e ? a.css(r.animProp, t) : "ticker" == e && a.animate(s, speed, "linear", function () {
                        w(i.resetValue, "reset", 0), D()
                    })
                }
            }, x = function () {
                for (var e = "", n = v(), i = 0; i < n; i++) {
                    var o = "";
                    r.settings.buildPager && t.isFunction(r.settings.buildPager) ? (o = r.settings.buildPager(i), r.pagerEl.addClass("bx-custom-pager")) : (o = i + 1, r.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + o + "</a></div>"
                }
                r.pagerEl.html(e)
            }, C = function () {
                r.settings.pagerCustom ? r.pagerEl = t(r.settings.pagerCustom) : (r.pagerEl = t('<div class="bx-pager" />'), r.settings.pagerSelector ? t(r.settings.pagerSelector).html(r.pagerEl) : r.controls.el.addClass("bx-has-pager").append(r.pagerEl), x()), r.pagerEl.on("click", "a", z)
            }, _ = function () {
                r.controls.next = t('<a class="bx-next" href="">' + r.settings.nextText + "</a>"), r.controls.prev = t('<a class="bx-prev" href="">' + r.settings.prevText + "</a>"), r.controls.next.bind("click", T), r.controls.prev.bind("click", E), r.settings.nextSelector && t(r.settings.nextSelector).append(r.controls.next), r.settings.prevSelector && t(r.settings.prevSelector).append(r.controls.prev), r.settings.nextSelector || r.settings.prevSelector || (r.controls.directionEl = t('<div class="bx-controls-direction" />'), r.controls.directionEl.append(r.controls.prev).append(r.controls.next), r.controls.el.addClass("bx-has-controls-direction").append(r.controls.directionEl))
            }, S = function () {
                r.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + r.settings.startText + "</a></div>"), r.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + r.settings.stopText + "</a></div>"), r.controls.autoEl = t('<div class="bx-controls-auto" />'), r.controls.autoEl.on("click", ".bx-start", I), r.controls.autoEl.on("click", ".bx-stop", A), r.settings.autoControlsCombine ? r.controls.autoEl.append(r.controls.start) : r.controls.autoEl.append(r.controls.start).append(r.controls.stop), r.settings.autoControlsSelector ? t(r.settings.autoControlsSelector).html(r.controls.autoEl) : r.controls.el.addClass("bx-has-controls-auto").append(r.controls.autoEl), P(r.settings.autoStart ? "stop" : "start")
            }, k = function () {
                r.children.each(function (e) {
                    var n = t(this).find("img:first").attr("title");
                    void 0 != n && ("" + n).length && t(this).append('<div class="bx-caption"><span>' + n + "</span></div>")
                })
            }, T = function (t) {
                r.settings.auto && a.stopAuto(), a.goToNextSlide(), t.preventDefault()
            }, E = function (t) {
                r.settings.auto && a.stopAuto(), a.goToPrevSlide(), t.preventDefault()
            }, I = function (t) {
                a.startAuto(), t.preventDefault()
            }, A = function (t) {
                a.stopAuto(), t.preventDefault()
            }, z = function (e) {
                r.settings.auto && a.stopAuto();
                var n = t(e.currentTarget);
                if (void 0 !== n.attr("data-slide-index")) {
                    var i = parseInt(n.attr("data-slide-index"));
                    i != r.active.index && a.goToSlide(i), e.preventDefault()
                }
            }, j = function (e) {
                var n = r.children.length;
                return "short" == r.settings.pagerType ? (r.settings.maxSlides > 1 && (n = Math.ceil(r.children.length / r.settings.maxSlides)), void r.pagerEl.html(e + 1 + r.settings.pagerShortSeparator + n)) : (r.pagerEl.find("a").removeClass("active"), void r.pagerEl.each(function (n, i) {
                    t(i).find("a").eq(e).addClass("active")
                }))
            }, M = function () {
                if (r.settings.infiniteLoop) {
                    var t = "";
                    0 == r.active.index ? t = r.children.eq(0).position() : r.active.index == v() - 1 && r.carousel ? t = r.children.eq((v() - 1) * y()).position() : r.active.index == r.children.length - 1 && (t = r.children.eq(r.children.length - 1).position()), t && ("horizontal" == r.settings.mode ? w(-t.left, "reset", 0) : "vertical" == r.settings.mode && w(-t.top, "reset", 0))
                }
                r.working = !1, r.settings.onSlideAfter(r.children.eq(r.active.index), r.oldIndex, r.active.index)
            }, P = function (t) {
                r.settings.autoControlsCombine ? r.controls.autoEl.html(r.controls[t]) : (r.controls.autoEl.find("a").removeClass("active"), r.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"))
            }, N = function () {
                1 == v() ? (r.controls.prev.addClass("disabled"), r.controls.next.addClass("disabled")) : !r.settings.infiniteLoop && r.settings.hideControlOnEnd && (0 == r.active.index ? (r.controls.prev.addClass("disabled"), r.controls.next.removeClass("disabled")) : r.active.index == v() - 1 ? (r.controls.next.addClass("disabled"), r.controls.prev.removeClass("disabled")) : (r.controls.prev.removeClass("disabled"), r.controls.next.removeClass("disabled")))
            }, L = function () {
                if (r.settings.autoDelay > 0) {
                    setTimeout(a.startAuto, r.settings.autoDelay)
                } else a.startAuto();
                r.settings.autoHover && a.hover(function () {
                    r.interval && (a.stopAuto(!0), r.autoPaused = !0)
                }, function () {
                    r.autoPaused && (a.startAuto(!0), r.autoPaused = null)
                })
            }, O = function () {
                var e = 0;
                if ("next" == r.settings.autoDirection) a.append(r.children.clone().addClass("bx-clone")); else {
                    a.prepend(r.children.clone().addClass("bx-clone"));
                    var n = r.children.first().position();
                    e = "horizontal" == r.settings.mode ? -n.left : -n.top
                }
                w(e, "reset", 0), r.settings.pager = !1, r.settings.controls = !1, r.settings.autoControls = !1, r.settings.tickerHover && !r.usingCSS && r.viewport.hover(function () {
                    a.stop()
                }, function () {
                    var e = 0;
                    r.children.each(function (n) {
                        e += "horizontal" == r.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0)
                    });
                    var n = r.settings.speed / e, i = "horizontal" == r.settings.mode ? "left" : "top",
                        o = n * (e - Math.abs(parseInt(a.css(i))));
                    D(o)
                }), D()
            }, D = function (t) {
                speed = t ? t : r.settings.speed;
                var e = {left: 0, top: 0}, n = {left: 0, top: 0};
                "next" == r.settings.autoDirection ? e = a.find(".bx-clone").first().position() : n = r.children.first().position();
                var i = "horizontal" == r.settings.mode ? -e.left : -e.top,
                    o = "horizontal" == r.settings.mode ? -n.left : -n.top, s = {resetValue: o};
                w(i, "ticker", speed, s)
            }, H = function () {
                r.touch = {start: {x: 0, y: 0}, end: {x: 0, y: 0}}, r.viewport.bind("touchstart", W)
            }, W = function (t) {
                if (r.working) t.preventDefault(); else {
                    r.touch.originalPos = a.position();
                    var e = t.originalEvent;
                    r.touch.start.x = e.changedTouches[0].pageX, r.touch.start.y = e.changedTouches[0].pageY, r.viewport.bind("touchmove", q), r.viewport.bind("touchend", R)
                }
            }, q = function (t) {
                var e = t.originalEvent, n = Math.abs(e.changedTouches[0].pageX - r.touch.start.x),
                    i = Math.abs(e.changedTouches[0].pageY - r.touch.start.y);
                if (3 * n > i && r.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * i > n && r.settings.preventDefaultSwipeY && t.preventDefault(), "fade" != r.settings.mode && r.settings.oneToOneTouch) {
                    var o = 0;
                    if ("horizontal" == r.settings.mode) {
                        var a = e.changedTouches[0].pageX - r.touch.start.x;
                        o = r.touch.originalPos.left + a
                    } else {
                        var a = e.changedTouches[0].pageY - r.touch.start.y;
                        o = r.touch.originalPos.top + a
                    }
                    w(o, "reset", 0)
                }
            }, R = function (t) {
                r.viewport.unbind("touchmove", q);
                var e = t.originalEvent, n = 0;
                if (r.touch.end.x = e.changedTouches[0].pageX, r.touch.end.y = e.changedTouches[0].pageY, "fade" == r.settings.mode) {
                    var i = Math.abs(r.touch.start.x - r.touch.end.x);
                    i >= r.settings.swipeThreshold && (r.touch.start.x > r.touch.end.x ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto())
                } else {
                    var i = 0;
                    "horizontal" == r.settings.mode ? (i = r.touch.end.x - r.touch.start.x, n = r.touch.originalPos.left) : (i = r.touch.end.y - r.touch.start.y, n = r.touch.originalPos.top), !r.settings.infiniteLoop && (0 == r.active.index && i > 0 || r.active.last && i < 0) ? w(n, "reset", 200) : Math.abs(i) >= r.settings.swipeThreshold ? (i < 0 ? a.goToNextSlide() : a.goToPrevSlide(), a.stopAuto()) : w(n, "reset", 200)
                }
                r.viewport.unbind("touchend", R)
            }, F = function (e) {
                if (r.initialized) {
                    var n = t(window).width(), i = t(window).height();
                    s == n && l == i || (s = n, l = i, a.redrawSlider(), r.settings.onSliderResize.call(a, r.active.index))
                }
            };
            return a.goToSlide = function (e, n) {
                if (!r.working && r.active.index != e) if (r.working = !0, r.oldIndex = r.active.index, e < 0 ? r.active.index = v() - 1 : e >= v() ? r.active.index = 0 : r.active.index = e, r.settings.onSlideBefore(r.children.eq(r.active.index), r.oldIndex, r.active.index), "next" == n ? r.settings.onSlideNext(r.children.eq(r.active.index), r.oldIndex, r.active.index) : "prev" == n && r.settings.onSlidePrev(r.children.eq(r.active.index), r.oldIndex, r.active.index), r.active.last = r.active.index >= v() - 1, r.settings.pager && j(r.active.index), r.settings.controls && N(), "fade" == r.settings.mode) r.settings.adaptiveHeight && r.viewport.height() != p() && r.viewport.animate({height: p()}, r.settings.adaptiveHeightSpeed), r.children.filter(":visible").fadeOut(r.settings.speed).css({zIndex: 0}), r.children.eq(r.active.index).css("zIndex", r.settings.slideZIndex + 1).fadeIn(r.settings.speed, function () {
                    t(this).css("zIndex", r.settings.slideZIndex), M()
                }); else {
                    r.settings.adaptiveHeight && r.viewport.height() != p() && r.viewport.animate({height: p()}, r.settings.adaptiveHeightSpeed);
                    var i = 0, o = {left: 0, top: 0};
                    if (!r.settings.infiniteLoop && r.carousel && r.active.last) if ("horizontal" == r.settings.mode) {
                        var s = r.children.eq(r.children.length - 1);
                        o = s.position(), i = r.viewport.width() - s.outerWidth()
                    } else {
                        var l = r.children.length - r.settings.minSlides;
                        o = r.children.eq(l).position()
                    } else if (r.carousel && r.active.last && "prev" == n) {
                        var c = 1 == r.settings.moveSlides ? r.settings.maxSlides - y() : (v() - 1) * y() - (r.children.length - r.settings.maxSlides),
                            s = a.children(".bx-clone").eq(c);
                        o = s.position()
                    } else if ("next" == n && 0 == r.active.index) o = a.find("> .bx-clone").eq(r.settings.maxSlides).position(), r.active.last = !1; else if (e >= 0) {
                        var u = e * y();
                        o = r.children.eq(u).position()
                    }
                    if ("undefined" != typeof o) {
                        var d = "horizontal" == r.settings.mode ? -(o.left - i) : -o.top;
                        w(d, "slide", r.settings.speed)
                    }
                }
            }, a.goToNextSlide = function () {
                if (r.settings.infiniteLoop || !r.active.last) {
                    var t = parseInt(r.active.index) + 1;
                    a.goToSlide(t, "next")
                }
            }, a.goToPrevSlide = function () {
                if (r.settings.infiniteLoop || 0 != r.active.index) {
                    var t = parseInt(r.active.index) - 1;
                    a.goToSlide(t, "prev")
                }
            }, a.startAuto = function (t) {
                r.interval || (r.interval = setInterval(function () {
                    "next" == r.settings.autoDirection ? a.goToNextSlide() : a.goToPrevSlide()
                }, r.settings.pause), r.settings.autoControls && 1 != t && P("stop"))
            }, a.stopAuto = function (t) {
                r.interval && (clearInterval(r.interval), r.interval = null, r.settings.autoControls && 1 != t && P("start"))
            }, a.getCurrentSlide = function () {
                return r.active.index
            }, a.getCurrentSlideElement = function () {
                return r.children.eq(r.active.index)
            }, a.getSlideCount = function () {
                return r.children.length
            }, a.redrawSlider = function () {
                r.children.add(a.find(".bx-clone")).width(m()), r.viewport.css("height", p()), r.settings.ticker || b(), r.active.last && (r.active.index = v() - 1), r.active.index >= v() && (r.active.last = !0), r.settings.pager && !r.settings.pagerCustom && (x(), j(r.active.index))
            }, a.destroySlider = function () {
                r.initialized && (r.initialized = !1, t(".bx-clone", this).remove(), r.children.each(function () {
                    void 0 != t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style")
                }), void 0 != t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), r.controls.el && r.controls.el.remove(), r.controls.next && r.controls.next.remove(), r.controls.prev && r.controls.prev.remove(), r.pagerEl && r.settings.controls && r.pagerEl.remove(), t(".bx-caption", this).remove(), r.controls.autoEl && r.controls.autoEl.remove(), clearInterval(r.interval), r.settings.responsive && t(window).unbind("resize", F))
            }, a.reloadSlider = function (t) {
                void 0 != t && (o = t), a.destroySlider(), c()
            }, c(), this
        }
    }(jQuery), function (t, e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(t.jQuery)
    }(this, function (t) {
        function e(t) {
            if (t in d.style) return t;
            for (var e = ["Moz", "Webkit", "O", "ms"], n = t.charAt(0).toUpperCase() + t.substr(1), i = 0; i < e.length; ++i) {
                var o = e[i] + n;
                if (o in d.style) return o
            }
        }

        function n() {
            return d.style[h.transform] = "", d.style[h.transform] = "rotateY(90deg)", "" !== d.style[h.transform]
        }

        function i(t) {
            return "string" == typeof t && this.parse(t), this
        }

        function o(t, e, n) {
            e === !0 ? t.queue(n) : e ? t.queue(e, n) : t.each(function () {
                n.call(this)
            })
        }

        function r(e) {
            var n = [];
            return t.each(e, function (e) {
                e = t.camelCase(e), e = t.transit.propertyMap[e] || t.cssProps[e] || e, e = l(e), h[e] && (e = l(h[e])), t.inArray(e, n) === -1 && n.push(e)
            }), n
        }

        function a(e, n, i, o) {
            var a = r(e);
            t.cssEase[i] && (i = t.cssEase[i]);
            var s = "" + u(n) + " " + i;
            parseInt(o, 10) > 0 && (s += " " + u(o));
            var l = [];
            return t.each(a, function (t, e) {
                l.push(e + " " + s)
            }), l.join(", ")
        }

        function s(e, n) {
            n || (t.cssNumber[e] = !0), t.transit.propertyMap[e] = h.transform, t.cssHooks[e] = {
                get: function (n) {
                    var i = t(n).css("transit:transform");
                    return i.get(e)
                }, set: function (n, i) {
                    var o = t(n).css("transit:transform");
                    o.setFromString(e, i), t(n).css({"transit:transform": o})
                }
            }
        }

        function l(t) {
            return t.replace(/([A-Z])/g, function (t) {
                return "-" + t.toLowerCase()
            })
        }

        function c(t, e) {
            return "string" != typeof t || t.match(/^[\-0-9\.]+$/) ? "" + t + e : t
        }

        function u(e) {
            var n = e;
            return "string" != typeof n || n.match(/^[\-0-9\.]+/) || (n = t.fx.speeds[n] || t.fx.speeds._default), c(n, "ms")
        }

        t.transit = {
            version: "0.9.12",
            propertyMap: {
                marginLeft: "margin",
                marginRight: "margin",
                marginBottom: "margin",
                marginTop: "margin",
                paddingLeft: "padding",
                paddingRight: "padding",
                paddingBottom: "padding",
                paddingTop: "padding"
            },
            enabled: !0,
            useTransitionEnd: !1
        };
        var d = document.createElement("div"), h = {}, p = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
        h.transition = e("transition"), h.transitionDelay = e("transitionDelay"), h.transform = e("transform"), h.transformOrigin = e("transformOrigin"), h.filter = e("Filter"), h.transform3d = n();
        var f = {
            transition: "transitionend",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            WebkitTransition: "webkitTransitionEnd",
            msTransition: "MSTransitionEnd"
        }, m = h.transitionEnd = f[h.transition] || null;
        for (var g in h) h.hasOwnProperty(g) && "undefined" == typeof t.support[g] && (t.support[g] = h[g]);
        return d = null, t.cssEase = {
            _default: "ease",
            in: "ease-in",
            out: "ease-out",
            "in-out": "ease-in-out",
            snap: "cubic-bezier(0,1,.5,1)",
            easeInCubic: "cubic-bezier(.550,.055,.675,.190)",
            easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
            easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
            easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
            easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
            easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
            easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
            easeOutExpo: "cubic-bezier(.19,1,.22,1)",
            easeInOutExpo: "cubic-bezier(1,0,0,1)",
            easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
            easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
            easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
            easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
            easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
            easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
            easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
            easeOutQuint: "cubic-bezier(.23,1,.32,1)",
            easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
            easeInSine: "cubic-bezier(.47,0,.745,.715)",
            easeOutSine: "cubic-bezier(.39,.575,.565,1)",
            easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
            easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
            easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
            easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
        }, t.cssHooks["transit:transform"] = {
            get: function (e) {
                return t(e).data("transform") || new i
            }, set: function (e, n) {
                var o = n;
                o instanceof i || (o = new i(o)), "WebkitTransform" !== h.transform || p ? e.style[h.transform] = o.toString() : e.style[h.transform] = o.toString(!0), t(e).data("transform", o)
            }
        }, t.cssHooks.transform = {set: t.cssHooks["transit:transform"].set}, t.cssHooks.filter = {
            get: function (t) {
                return t.style[h.filter]
            }, set: function (t, e) {
                t.style[h.filter] = e
            }
        }, t.fn.jquery < "1.8" && (t.cssHooks.transformOrigin = {
            get: function (t) {
                return t.style[h.transformOrigin]
            }, set: function (t, e) {
                t.style[h.transformOrigin] = e
            }
        }, t.cssHooks.transition = {
            get: function (t) {
                return t.style[h.transition]
            }, set: function (t, e) {
                t.style[h.transition] = e
            }
        }), s("scale"), s("scaleX"), s("scaleY"), s("translate"), s("rotate"), s("rotateX"), s("rotateY"), s("rotate3d"), s("perspective"), s("skewX"), s("skewY"), s("x", !0), s("y", !0), i.prototype = {
            setFromString: function (t, e) {
                var n = "string" == typeof e ? e.split(",") : e.constructor === Array ? e : [e];
                n.unshift(t), i.prototype.set.apply(this, n)
            }, set: function (t) {
                var e = Array.prototype.slice.apply(arguments, [1]);
                this.setter[t] ? this.setter[t].apply(this, e) : this[t] = e.join(",")
            }, get: function (t) {
                return this.getter[t] ? this.getter[t].apply(this) : this[t] || 0
            }, setter: {
                rotate: function (t) {
                    this.rotate = c(t, "deg")
                }, rotateX: function (t) {
                    this.rotateX = c(t, "deg")
                }, rotateY: function (t) {
                    this.rotateY = c(t, "deg")
                }, scale: function (t, e) {
                    void 0 === e && (e = t), this.scale = t + "," + e
                }, skewX: function (t) {
                    this.skewX = c(t, "deg")
                }, skewY: function (t) {
                    this.skewY = c(t, "deg")
                }, perspective: function (t) {
                    this.perspective = c(t, "px")
                }, x: function (t) {
                    this.set("translate", t, null)
                }, y: function (t) {
                    this.set("translate", null, t)
                }, translate: function (t, e) {
                    void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== t && void 0 !== t && (this._translateX = c(t, "px")), null !== e && void 0 !== e && (this._translateY = c(e, "px")), this.translate = this._translateX + "," + this._translateY
                }
            }, getter: {
                x: function () {
                    return this._translateX || 0
                }, y: function () {
                    return this._translateY || 0
                }, scale: function () {
                    var t = (this.scale || "1,1").split(",");
                    return t[0] && (t[0] = parseFloat(t[0])), t[1] && (t[1] = parseFloat(t[1])), t[0] === t[1] ? t[0] : t
                }, rotate3d: function () {
                    for (var t = (this.rotate3d || "0,0,0,0deg").split(","), e = 0; e <= 3; ++e) t[e] && (t[e] = parseFloat(t[e]));
                    return t[3] && (t[3] = c(t[3], "deg")), t
                }
            }, parse: function (t) {
                var e = this;
                t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function (t, n, i) {
                    e.setFromString(n, i)
                })
            }, toString: function (t) {
                var e = [];
                for (var n in this) if (this.hasOwnProperty(n)) {
                    if (!h.transform3d && ("rotateX" === n || "rotateY" === n || "perspective" === n || "transformOrigin" === n)) continue;
                    "_" !== n[0] && (t && "scale" === n ? e.push(n + "3d(" + this[n] + ",1)") : t && "translate" === n ? e.push(n + "3d(" + this[n] + ",0)") : e.push(n + "(" + this[n] + ")"))
                }
                return e.join(" ")
            }
        }, t.fn.transition = t.fn.transit = function (e, n, i, r) {
            var s = this, l = 0, c = !0, d = t.extend(!0, {}, e);
            "function" == typeof n && (r = n, n = void 0), "object" == typeof n && (i = n.easing, l = n.delay || 0, c = "undefined" == typeof n.queue || n.queue, r = n.complete, n = n.duration), "function" == typeof i && (r = i, i = void 0), "undefined" != typeof d.easing && (i = d.easing, delete d.easing), "undefined" != typeof d.duration && (n = d.duration, delete d.duration), "undefined" != typeof d.complete && (r = d.complete, delete d.complete), "undefined" != typeof d.queue && (c = d.queue, delete d.queue), "undefined" != typeof d.delay && (l = d.delay, delete d.delay), "undefined" == typeof n && (n = t.fx.speeds._default), "undefined" == typeof i && (i = t.cssEase._default), n = u(n);
            var p = a(d, n, i, l), f = t.transit.enabled && h.transition, g = f ? parseInt(n, 10) + parseInt(l, 10) : 0;
            if (0 === g) {
                var v = function (t) {
                    s.css(d), r && r.apply(s), t && t()
                };
                return o(s, c, v), s
            }
            var y = {}, b = function (e) {
                var n = !1, i = function () {
                    n && s.unbind(m, i), g > 0 && s.each(function () {
                        this.style[h.transition] = y[this] || null
                    }), "function" == typeof r && r.apply(s), "function" == typeof e && e()
                };
                g > 0 && m && t.transit.useTransitionEnd ? (n = !0, s.bind(m, i)) : window.setTimeout(i, g), s.each(function () {
                    g > 0 && (this.style[h.transition] = p), t(this).css(d)
                })
            }, w = function (t) {
                this.offsetWidth = this.offsetWidth, b(t)
            };
            return o(s, c, w), this
        }, t.transit.getTransitionValue = a, t
    }), function ($) {
        for (var supportedCSS, styles = document.getElementsByTagName("head")[0].style, toCheck = "transformProperty WebkitTransform OTransform msTransform MozTransform".split(" "), a = 0; a < toCheck.length; a++) void 0 !== styles[toCheck[a]] && (supportedCSS = toCheck[a]);
        var IE = eval('"v"=="\v"');
        jQuery.fn.extend({
            ImageRotate: function (t) {
                if (!this.Wilq32 || !this.Wilq32.PhotoEffect) {
                    var e = $.extend(!0, {}, t);
                    return new Wilq32.PhotoEffect(this.get(0), e)._rootObj
                }
            }, rotate: function (t) {
                if (0 !== this.length && "undefined" != typeof t) {
                    "number" == typeof t && (t = {angle: t});
                    for (var e = [], n = 0, i = this.length; n < i; n++) {
                        var o = this.get(n);
                        "undefined" == typeof o.Wilq32 ? e.push($($(o).ImageRotate(t))) : o.Wilq32.PhotoEffect._handleRotation(t)
                    }
                    return e
                }
            }
        }), Wilq32 = window.Wilq32 || {}, Wilq32.PhotoEffect = function () {
            return supportedCSS ? function (t, e) {
                t.Wilq32 = {PhotoEffect: this}, this._img = this._rootObj = this._eventObj = t, this._handleRotation(e)
            } : function (t, e) {
                if (this._img = t, this._rootObj = document.createElement("span"), this._rootObj.style.display = "inline-block", this._rootObj.Wilq32 = {PhotoEffect: this}, t.parentNode.insertBefore(this._rootObj, t), t.complete) this._Loader(e); else {
                    var n = this;
                    jQuery(this._img).bind("load", function () {
                        n._Loader(e)
                    })
                }
            }
        }(), Wilq32.PhotoEffect.prototype = {
            _setupParameters: function (t) {
                this._parameters = this._parameters || {}, "number" != typeof this._angle && (this._angle = 0), "number" == typeof t.angle && (this._angle = t.angle), this._parameters.animateTo = "number" == typeof t.animateTo ? t.animateTo : this._angle, this._parameters.easing = t.easing || this._parameters.easing || function (t, e, n, i, o) {
                    return -i * ((e = e / o - 1) * e * e * e - 1) + n
                }, this._parameters.duration = t.duration || this._parameters.duration || 1e3, this._parameters.callback = t.callback || this._parameters.callback || function () {
                }, t.bind && t.bind != this._parameters.bind && this._BindEvents(t.bind)
            }, _handleRotation: function (t) {
                this._setupParameters(t), this._angle == this._parameters.animateTo ? this._rotate(this._angle) : this._animateStart()
            }, _BindEvents: function (t) {
                if (t && this._eventObj) {
                    if (this._parameters.bind) {
                        var e = this._parameters.bind;
                        for (var n in e) e.hasOwnProperty(n) && jQuery(this._eventObj).unbind(n, e[n])
                    }
                    this._parameters.bind = t;
                    for (var n in t) t.hasOwnProperty(n) && jQuery(this._eventObj).bind(n, t[n])
                }
            }, _Loader: function () {
                return IE ? function (t) {
                    var e = this._img.width, n = this._img.height;
                    this._img.parentNode.removeChild(this._img), this._vimage = this.createVMLNode("image"), this._vimage.src = this._img.src, this._vimage.style.height = n + "px", this._vimage.style.width = e + "px", this._vimage.style.position = "absolute", this._vimage.style.top = "0px", this._vimage.style.left = "0px", this._container = this.createVMLNode("group"), this._container.style.width = e, this._container.style.height = n, this._container.style.position = "absolute", this._container.setAttribute("coordsize", e - 1 + "," + (n - 1)), this._container.appendChild(this._vimage), this._rootObj.appendChild(this._container), this._rootObj.style.position = "relative", this._rootObj.style.width = e + "px", this._rootObj.style.height = n + "px", this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className = this._img.className, this._eventObj = this._rootObj, this._handleRotation(t)
                } : function (t) {
                    this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className = this._img.className, this._width = this._img.width, this._height = this._img.height, this._widthHalf = this._width / 2, this._heightHalf = this._height / 2;
                    var e = Math.sqrt(this._height * this._height + this._width * this._width);
                    this._widthAdd = e - this._width, this._heightAdd = e - this._height, this._widthAddHalf = this._widthAdd / 2, this._heightAddHalf = this._heightAdd / 2, this._img.parentNode.removeChild(this._img), this._aspectW = (parseInt(this._img.style.width, 10) || this._width) / this._img.width, this._aspectH = (parseInt(this._img.style.height, 10) || this._height) / this._img.height, this._canvas = document.createElement("canvas"), this._canvas.setAttribute("width", this._width), this._canvas.style.position = "relative", this._canvas.style.left = -this._widthAddHalf + "px", this._canvas.style.top = -this._heightAddHalf + "px", this._canvas.Wilq32 = this._rootObj.Wilq32, this._rootObj.appendChild(this._canvas),
                        this._rootObj.style.width = this._width + "px", this._rootObj.style.height = this._height + "px", this._eventObj = this._canvas, this._cnv = this._canvas.getContext("2d"), this._handleRotation(t)
                }
            }(), _animateStart: function () {
                this._timer && clearTimeout(this._timer), this._animateStartTime = +new Date, this._animateStartAngle = this._angle, this._animate()
            }, _animate: function () {
                var t = +new Date, e = t - this._animateStartTime > this._parameters.duration;
                if (e && !this._parameters.animatedGif) clearTimeout(this._timer); else {
                    if (this._canvas || this._vimage || this._img) {
                        var n = this._parameters.easing(0, t - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
                        this._rotate(~~(10 * n) / 10)
                    }
                    var i = this;
                    this._timer = setTimeout(function () {
                        i._animate.call(i)
                    }, 10)
                }
                this._parameters.callback && e && (this._angle = this._parameters.animateTo, this._rotate(this._angle), this._parameters.callback.call(this._rootObj))
            }, _rotate: function () {
                var t = Math.PI / 180;
                return IE ? function (t) {
                    this._angle = t, this._container.style.rotation = t % 360 + "deg"
                } : supportedCSS ? function (t) {
                    this._angle = t, this._img.style[supportedCSS] = "rotate(" + t % 360 + "deg)"
                } : function (e) {
                    this._angle = e, e = e % 360 * t, this._canvas.width = this._width + this._widthAdd, this._canvas.height = this._height + this._heightAdd, this._cnv.translate(this._widthAddHalf, this._heightAddHalf), this._cnv.translate(this._widthHalf, this._heightHalf), this._cnv.rotate(e), this._cnv.translate(-this._widthHalf, -this._heightHalf), this._cnv.scale(this._aspectW, this._aspectH), this._cnv.drawImage(this._img, 0, 0)
                }
            }()
        }, IE && (Wilq32.PhotoEffect.prototype.createVMLNode = function () {
            document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try {
                return !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), function (t) {
                    return document.createElement("<rvml:" + t + ' class="rvml">')
                }
            } catch (t) {
                return function (t) {
                    return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                }
            }
        }())
    }(jQuery), function (t) {
        t.path = {};
        var e = {
            rotate: function (t, e) {
                var n = e * Math.PI / 180, i = Math.cos(n), o = Math.sin(n);
                return [i * t[0] - o * t[1], o * t[0] + i * t[1]]
            }, scale: function (t, e) {
                return [e * t[0], e * t[1]]
            }, add: function (t, e) {
                return [t[0] + e[0], t[1] + e[1]]
            }, minus: function (t, e) {
                return [t[0] - e[0], t[1] - e[1]]
            }
        };
        t.path.bezier = function (n, i) {
            n.start = t.extend({angle: 0, length: .3333}, n.start), n.end = t.extend({
                angle: 0,
                length: .3333
            }, n.end), this.p1 = [n.start.x, n.start.y], this.p4 = [n.end.x, n.end.y];
            var o = e.minus(this.p4, this.p1), r = e.scale(o, n.start.length), a = e.scale(o, -1),
                s = e.scale(a, n.end.length);
            r = e.rotate(r, n.start.angle), this.p2 = e.add(this.p1, r), s = e.rotate(s, n.end.angle), this.p3 = e.add(this.p4, s), this.f1 = function (t) {
                return t * t * t
            }, this.f2 = function (t) {
                return 3 * t * t * (1 - t)
            }, this.f3 = function (t) {
                return 3 * t * (1 - t) * (1 - t)
            }, this.f4 = function (t) {
                return (1 - t) * (1 - t) * (1 - t)
            }, this.css = function (t) {
                var e = this.f1(t), n = this.f2(t), o = this.f3(t), r = this.f4(t), a = {};
                return i && (a.prevX = this.x, a.prevY = this.y), a.x = this.x = this.p1[0] * e + this.p2[0] * n + this.p3[0] * o + this.p4[0] * r + .5 | 0, a.y = this.y = this.p1[1] * e + this.p2[1] * n + this.p3[1] * o + this.p4[1] * r + .5 | 0, a.left = a.x + "px", a.top = a.y + "px", a
            }
        }, t.path.arc = function (t, e) {
            for (var n in t) this[n] = t[n];
            for (this.dir = this.dir || 1; this.start > this.end && this.dir > 0;) this.start -= 360;
            for (; this.start < this.end && this.dir < 0;) this.start += 360;
            this.css = function (t) {
                var n = (this.start * t + this.end * (1 - t)) * Math.PI / 180, i = {};
                return e && (i.prevX = this.x, i.prevY = this.y), i.x = this.x = Math.sin(n) * this.radius + this.center[0] + .5 | 0, i.y = this.y = Math.cos(n) * this.radius + this.center[1] + .5 | 0, i.left = i.x + "px", i.top = i.y + "px", i
            }
        }, t.fx.step.path = function (e) {
            var n = e.end.css(1 - e.pos);
            null != n.prevX && t.cssHooks.transform.set(e.elem, "rotate(" + Math.atan2(n.prevY - n.y, n.prevX - n.x) + ")"), e.elem.style.top = n.top, e.elem.style.left = n.left
        }
    }(jQuery), function (t) {
        t.fn.emaRespMenu = function (e) {
            function n() {
                return window.matchMedia("(max-width: " + this.emaRespMenu.settings.maxWidth + "px)").matches
            }

            function i() {
                return "block" == this.css("display")
            }

            function o(e) {
                function n(e) {
                    var o = [];
                    return t.each(e, function (t, e) {
                        i++;
                        var r = {value: e.value, uniqueId: i};
                        "children" in e && (r.children = n(e.children)), o.push(r)
                    }), o
                }

                var i = 0;
                return n(e)
            }

            function r(t) {
                function e(i) {
                    for (var o = 0; o < i.length; o++) {
                        var r = i[o];
                        if ("uniqueId" in r && r.uniqueId == t) return r;
                        if ("children" in r) {
                            var a = n;
                            n = r.uniqueId;
                            var s = e(r.children);
                            if ("object" == typeof s) return s;
                            n = a
                        }
                    }
                }

                var n = "root", i = e(this.emaRespMenu.settings.data);
                return "object" == typeof i && (i.parentId = n), i
            }

            function a(t) {
                n.call(this) ? (this.emaRespMenu.$activateIcon.show(), console.log(t), this.emaRespMenu.settings.closeOnResize && this.emaRespMenu.close()) : (this.emaRespMenu.$activateIcon.hide(), this.emaRespMenu.close())
            }

            function s(e, n) {
                var i = "<ul>";
                return void 0 !== n && (i += "<li><a href='#back' class='back-bnt' data-unique-id='" + n + "'><span>" + this.emaRespMenu.settings.backButtonText + "</span></a></li>"), t.each(e, function (t, e) {
                    var n = "";
                    "target" in e.value && (n = " target='" + e.value.target + "' ");
                    var o = "";
                    "children" in e && (o += " has-children "), i += "<li><a href='" + e.value.link + "' class='" + o + "' " + n + "data-unique-id='" + e.uniqueId + "'><span>" + e.value.name + "</span></a></li>"
                }), i += "</ul>"
            }

            function l() {
                this.find("a.has-children, a.back-bnt").each(function (e, n) {
                    t(n).click(function (e) {
                        e.preventDefault(), this.emaRespMenu.swithOnTo(t(e.currentTarget).data("unique-id"))
                    }.bind(this))
                }.bind(this))
            }

            function c() {
                var t = {};
                return t[this.emaRespMenu.settings.animationType] = u.call(this) + "px", t
            }

            function u() {
                if ("left" == this.emaRespMenu.settings.animationType) return -Math.abs(window.innerWidth);
                var t, e = !1;
                return i.call(this) || (e = !0, this.show()), t = this.height(), e === !0 && this.hide(), -Math.abs(t)
            }

            function d() {
                var t = {};
                return t[this.emaRespMenu.settings.animationType] = "0", t
            }

            function h() {
                var t = {};
                return t[this.emaRespMenu.settings.animationType] = u.call(this), t
            }

            if (0 === this.length) throw new Error("No wrapper element selected");
            return this.hide(), this.emaRespMenu.settings = t.extend(!0, {}, t.fn.emaRespMenu.defaults, e), this.emaRespMenu.$activateIcon = t(this.emaRespMenu.settings.activateIconSelector), this.emaRespMenu.$activateIcon.click(function (t) {
                t.preventDefault(), t.stopPropagation(), i.call(this) ? this.emaRespMenu.close() : this.emaRespMenu.open()
            }.bind(this)), this.emaRespMenu.open = function () {
                n.call(this) && (this.emaRespMenu.settings.onOpen.call(this), this.emaRespMenu.swithOnTo(), this.css(c.call(this)).animate(d.call(this), this.emaRespMenu.settings.animationDuration), this.show())
            }.bind(this), this.emaRespMenu.close = function () {
                this.emaRespMenu.settings.onClose.call(this), this.animate(h.call(this), {
                    duration: this.emaRespMenu.settings.animationDuration,
                    complete: function () {
                        this.children().remove(), this.hide()
                    }.bind(this)
                })
            }.bind(this), this.emaRespMenu.swithOnTo = function (t) {
                if (this.children().remove(), isNaN(parseInt(t))) this.append(s.call(this, this.emaRespMenu.settings.data)); else {
                    var e = r.call(this, t);
                    "object" == typeof e && "children" in e && this.append(s.call(this, e.children, e.parentId))
                }
                l.call(this)
            }.bind(this), this.emaRespMenu.settings.data = o(this.emaRespMenu.settings.data), t(window).resize(function (t) {
                a.call(this, t)
            }.bind(this)), this.emaRespMenu.settings.closeOnOutsideClick && t(document).mouseup(function (e) {
                n.call(this) && i.call(this) && 0 == t(e.target).parents(this.selector).length && this.emaRespMenu.close()
            }.bind(this)), this
        }, t.fn.emaRespMenu.defaults = {
            activateIconSelector: "#navabar-resp-icon",
            maxWidth: 900,
            animationDuration: 500,
            backButtonText: "Back",
            closeOnResize: !0,
            closeOnOutsideClick: !0,
            animationType: "left",
            data: [],
            onOpen: function () {
            },
            onClose: function () {
            }
        }
    }(jQuery), !function (t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : jQuery)
    }(function (t) {
        var e, n = navigator.userAgent, i = /iphone/i.test(n), o = /chrome/i.test(n), r = /android/i.test(n);
        t.mask = {
            definitions: {9: "[0-9]", a: "[A-Za-z]", "*": "[A-Za-z0-9]"},
            autoclear: !0,
            dataName: "rawMaskFn",
            placeholder: "_"
        }, t.fn.extend({
            caret: function (t, e) {
                var n;
                if (0 !== this.length && !this.is(":hidden")) return "number" == typeof t ? (e = "number" == typeof e ? e : t, this.each(function () {
                    this.setSelectionRange ? this.setSelectionRange(t, e) : this.createTextRange && (n = this.createTextRange(), n.collapse(!0), n.moveEnd("character", e), n.moveStart("character", t), n.select())
                })) : (this[0].setSelectionRange ? (t = this[0].selectionStart, e = this[0].selectionEnd) : document.selection && document.selection.createRange && (n = document.selection.createRange(), t = 0 - n.duplicate().moveStart("character", -1e5), e = t + n.text.length), {
                    begin: t,
                    end: e
                })
            }, unmask: function () {
                return this.trigger("unmask")
            }, mask: function (n, a) {
                var s, l, c, u, d, h, p, f;
                if (!n && this.length > 0) {
                    s = t(this[0]);
                    var m = s.data(t.mask.dataName);
                    return m ? m() : void 0
                }
                return a = t.extend({
                    autoclear: t.mask.autoclear,
                    placeholder: t.mask.placeholder,
                    completed: null
                }, a), l = t.mask.definitions, c = [], u = p = n.length, d = null, t.each(n.split(""), function (t, e) {
                    "?" == e ? (p--, u = t) : l[e] ? (c.push(new RegExp(l[e])), null === d && (d = c.length - 1), u > t && (h = c.length - 1)) : c.push(null)
                }), this.trigger("unmask").each(function () {
                    function s() {
                        if (a.completed) {
                            for (var t = d; h >= t; t++) if (c[t] && I[t] === m(t)) return;
                            a.completed.call(E)
                        }
                    }

                    function m(t) {
                        return a.placeholder.charAt(t < a.placeholder.length ? t : 0)
                    }

                    function g(t) {
                        for (; ++t < p && !c[t];) ;
                        return t
                    }

                    function v(t) {
                        for (; --t >= 0 && !c[t];) ;
                        return t
                    }

                    function y(t, e) {
                        var n, i;
                        if (!(0 > t)) {
                            for (n = t, i = g(e); p > n; n++) if (c[n]) {
                                if (!(p > i && c[n].test(I[i]))) break;
                                I[n] = I[i], I[i] = m(i), i = g(i)
                            }
                            k(), E.caret(Math.max(d, t))
                        }
                    }

                    function b(t) {
                        var e, n, i, o;
                        for (e = t, n = m(t); p > e; e++) if (c[e]) {
                            if (i = g(e), o = I[e], I[e] = n, !(p > i && c[i].test(o))) break;
                            n = o
                        }
                    }

                    function w() {
                        var t = E.val(), e = E.caret();
                        if (f && f.length && f.length > t.length) {
                            for (T(!0); e.begin > 0 && !c[e.begin - 1];) e.begin--;
                            if (0 === e.begin) for (; e.begin < d && !c[e.begin];) e.begin++;
                            E.caret(e.begin, e.begin)
                        } else {
                            for (T(!0); e.begin < p && !c[e.begin];) e.begin++;
                            E.caret(e.begin, e.begin)
                        }
                        s()
                    }

                    function x() {
                        T(), E.val() != z && E.change()
                    }

                    function C(t) {
                        if (!E.prop("readonly")) {
                            var e, n, o, r = t.which || t.keyCode;
                            f = E.val(), 8 === r || 46 === r || i && 127 === r ? (e = E.caret(), n = e.begin, o = e.end, o - n === 0 && (n = 46 !== r ? v(n) : o = g(n - 1), o = 46 === r ? g(o) : o), S(n, o), y(n, o - 1), t.preventDefault()) : 13 === r ? x.call(this, t) : 27 === r && (E.val(z), E.caret(0, T()), t.preventDefault())
                        }
                    }

                    function _(e) {
                        if (!E.prop("readonly")) {
                            var n, i, o, a = e.which || e.keyCode, l = E.caret();
                            if (!(e.ctrlKey || e.altKey || e.metaKey || 32 > a) && a && 13 !== a) {
                                if (l.end - l.begin !== 0 && (S(l.begin, l.end), y(l.begin, l.end - 1)), n = g(l.begin - 1), p > n && (i = String.fromCharCode(a), c[n].test(i))) {
                                    if (b(n), I[n] = i, k(), o = g(n), r) {
                                        var u = function () {
                                            t.proxy(t.fn.caret, E, o)()
                                        };
                                        setTimeout(u, 0)
                                    } else E.caret(o);
                                    l.begin <= h && s()
                                }
                                e.preventDefault()
                            }
                        }
                    }

                    function S(t, e) {
                        var n;
                        for (n = t; e > n && p > n; n++) c[n] && (I[n] = m(n))
                    }

                    function k() {
                        E.val(I.join(""))
                    }

                    function T(t) {
                        var e, n, i, o = E.val(), r = -1;
                        for (e = 0, i = 0; p > e; e++) if (c[e]) {
                            for (I[e] = m(e); i++ < o.length;) if (n = o.charAt(i - 1), c[e].test(n)) {
                                I[e] = n, r = e;
                                break
                            }
                            if (i > o.length) {
                                S(e + 1, p);
                                break
                            }
                        } else I[e] === o.charAt(i) && i++, u > e && (r = e);
                        return t ? k() : u > r + 1 ? a.autoclear || I.join("") === A ? (E.val() && E.val(""), S(0, p)) : k() : (k(), E.val(E.val().substring(0, r + 1))), u ? e : d
                    }

                    var E = t(this), I = t.map(n.split(""), function (t, e) {
                        return "?" != t ? l[t] ? m(e) : t : void 0
                    }), A = I.join(""), z = E.val();
                    E.data(t.mask.dataName, function () {
                        return t.map(I, function (t, e) {
                            return c[e] && t != m(e) ? t : null
                        }).join("")
                    }), E.one("unmask", function () {
                        E.off(".mask").removeData(t.mask.dataName)
                    }).on("focus.mask", function () {
                        if (!E.prop("readonly")) {
                            clearTimeout(e);
                            var t;
                            z = E.val(), t = T(), e = setTimeout(function () {
                                E.get(0) === document.activeElement && (k(), t == n.replace("?", "").length ? E.caret(0, t) : E.caret(t))
                            }, 10)
                        }
                    }).on("blur.mask", x).on("keydown.mask", C).on("keypress.mask", _).on("input.mask paste.mask", function () {
                        E.prop("readonly") || setTimeout(function () {
                            var t = T(!0);
                            E.caret(t), s()
                        }, 0)
                    }), o && r && E.off("input.mask").on("input.mask", w), T()
                })
            }
        })
    }), function (t, e, n) {
        function i(t, n) {
            var i = e(t);
            i.data(r, this), this._$element = i, this.shares = [], this._init(n), this._render()
        }

        var o = "JSSocials", r = o, a = function (t, n) {
                return e.isFunction(t) ? t.apply(n, e.makeArray(arguments).slice(2)) : t
            }, s = /(\.(jpeg|png|gif|bmp|svg)$|^data:image\/(jpeg|png|gif|bmp|svg\+xml);base64)/i,
            l = /(&?[a-zA-Z0-9]+=)?\{([a-zA-Z0-9]+)\}/g, c = {G: 1e9, M: 1e6, K: 1e3}, u = {};
        i.prototype = {
            url: "",
            text: "",
            shareIn: "blank",
            showLabel: function (t) {
                return this.showCount === !1 ? t > this.smallScreenWidth : t >= this.largeScreenWidth
            },
            showCount: function (t) {
                return !(t <= this.smallScreenWidth) || "inside"
            },
            smallScreenWidth: 640,
            largeScreenWidth: 1024,
            resizeTimeout: 200,
            elementClass: "jssocials",
            sharesClass: "jssocials-shares",
            shareClass: "jssocials-share",
            shareButtonClass: "jssocials-share-button",
            shareLinkClass: "jssocials-share-link",
            shareLogoClass: "jssocials-share-logo",
            shareLabelClass: "jssocials-share-label",
            shareLinkCountClass: "jssocials-share-link-count",
            shareCountBoxClass: "jssocials-share-count-box",
            shareCountClass: "jssocials-share-count",
            shareZeroCountClass: "jssocials-share-no-count",
            _init: function (t) {
                this._initDefaults(), e.extend(this, t), this._initShares(), this._attachWindowResizeCallback()
            },
            _initDefaults: function () {
                this.url = t.location.href, this.text = e.trim(e("meta[name=description]").attr("content") || e("title").text())
            },
            _initShares: function () {
                this.shares = e.map(this.shares, e.proxy(function (t) {
                    "string" == typeof t && (t = {share: t});
                    var n = t.share && u[t.share];
                    if (!n && !t.renderer) throw Error("Share '" + t.share + "' is not found");
                    return e.extend({url: this.url, text: this.text}, n, t)
                }, this))
            },
            _attachWindowResizeCallback: function () {
                e(t).on("resize", e.proxy(this._windowResizeHandler, this))
            },
            _detachWindowResizeCallback: function () {
                e(t).off("resize", this._windowResizeHandler)
            },
            _windowResizeHandler: function () {
                (e.isFunction(this.showLabel) || e.isFunction(this.showCount)) && (t.clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(e.proxy(this.refresh, this), this.resizeTimeout))
            },
            _render: function () {
                this._clear(), this._defineOptionsByScreen(), this._$element.addClass(this.elementClass), this._$shares = e("<div>").addClass(this.sharesClass).appendTo(this._$element), this._renderShares()
            },
            _defineOptionsByScreen: function () {
                this._screenWidth = e(t).width(), this._showLabel = a(this.showLabel, this, this._screenWidth), this._showCount = a(this.showCount, this, this._screenWidth)
            },
            _renderShares: function () {
                e.each(this.shares, e.proxy(function (t, e) {
                    this._renderShare(e)
                }, this))
            },
            _renderShare: function (t) {
                var n;
                n = e.isFunction(t.renderer) ? e(t.renderer()) : this._createShare(t), n.addClass(this.shareClass).addClass(t.share ? "jssocials-share-" + t.share : "").addClass(t.css).appendTo(this._$shares)
            },
            _createShare: function (t) {
                var n = e("<div>"), i = this._createShareLink(t).appendTo(n);
                if (this._showCount) {
                    var o = "inside" === this._showCount,
                        r = o ? i : e("<div>").addClass(this.shareCountBoxClass).appendTo(n);
                    r.addClass(o ? this.shareLinkCountClass : this.shareCountBoxClass), this._renderShareCount(t, r)
                }
                return n
            },
            _createShareLink: function (t) {
                var n = this._getShareStrategy(t), i = n.call(t, {shareUrl: this._getShareUrl(t)});
                return i.addClass(this.shareLinkClass).append(this._createShareLogo(t)), this._showLabel && i.append(this._createShareLabel(t)), e.each(this.on || {}, function (n, o) {
                    e.isFunction(o) && i.on(n, e.proxy(o, t))
                }), i
            },
            _getShareStrategy: function (t) {
                var e = h[t.shareIn || this.shareIn];
                if (!e) throw Error("Share strategy '" + this.shareIn + "' not found");
                return e
            },
            _getShareUrl: function (t) {
                var e = a(t.shareUrl, t);
                return this._formatShareUrl(e, t)
            },
            _createShareLogo: function (t) {
                var n = t.logo, i = s.test(n) ? e("<img>").attr("src", t.logo) : e("<i>").addClass(n);
                return i.addClass(this.shareLogoClass), i
            },
            _createShareLabel: function (t) {
                return e("<span>").addClass(this.shareLabelClass).text(t.label)
            },
            _renderShareCount: function (t, n) {
                var i = e("<span>").addClass(this.shareCountClass);
                n.addClass(this.shareZeroCountClass).append(i), this._loadCount(t).done(e.proxy(function (t) {
                    t && (n.removeClass(this.shareZeroCountClass), i.text(t))
                }, this))
            },
            _loadCount: function (t) {
                var n = e.Deferred(), i = this._getCountUrl(t);
                if (!i) return n.resolve(0).promise();
                var o = e.proxy(function (e) {
                    n.resolve(this._getCountValue(e, t))
                }, this);
                return e.getJSON(i).done(o).fail(function () {
                    e.get(i).done(o).fail(function () {
                        n.resolve(0)
                    })
                }), n.promise()
            },
            _getCountUrl: function (t) {
                var e = a(t.countUrl, t);
                return this._formatShareUrl(e, t)
            },
            _getCountValue: function (t, n) {
                var i = (e.isFunction(n.getCount) ? n.getCount(t) : t) || 0;
                return "string" == typeof i ? i : this._formatNumber(i)
            },
            _formatNumber: function (t) {
                return e.each(c, function (e, n) {
                    if (t >= n) return t = parseFloat((t / n).toFixed(2)) + e, !1
                }), t
            },
            _formatShareUrl: function (e, n) {
                return e.replace(l, function (e, i, o) {
                    var r = n[o] || "";
                    return r ? (i || "") + t.encodeURIComponent(r) : ""
                })
            },
            _clear: function () {
                t.clearTimeout(this._resizeTimer), this._$element.empty()
            },
            _passOptionToShares: function (t, n) {
                var i = this.shares;
                e.each(["url", "text"], function (o, r) {
                    r === t && e.each(i, function (e, i) {
                        i[t] = n
                    })
                })
            },
            _normalizeShare: function (t) {
                return e.isNumeric(t) ? this.shares[t] : "string" == typeof t ? e.grep(this.shares, function (e) {
                    return e.share === t
                })[0] : t
            },
            refresh: function () {
                this._render()
            },
            destroy: function () {
                this._clear(), this._detachWindowResizeCallback(), this._$element.removeClass(this.elementClass).removeData(r)
            },
            option: function (t, e) {
                return 1 === arguments.length ? this[t] : (this[t] = e, this._passOptionToShares(t, e), void this.refresh())
            },
            shareOption: function (t, e, n) {
                return t = this._normalizeShare(t), 2 === arguments.length ? t[e] : (t[e] = n, void this.refresh())
            }
        }, e.fn.jsSocials = function (t) {
            var o = e.makeArray(arguments), a = o.slice(1), s = this;
            return this.each(function () {
                var o, l = e(this), c = l.data(r);
                if (c) if ("string" == typeof t) {
                    if (o = c[t].apply(c, a), o !== n && o !== c) return s = o, !1
                } else c._detachWindowResizeCallback(), c._init(t), c._render(); else new i(l, t)
            }), s
        };
        var d = function (t) {
            var n;
            e.isPlainObject(t) ? n = i.prototype : (n = u[t], t = arguments[1] || {}), e.extend(n, t)
        }, h = {
            popup: function (n) {
                return e("<a>").attr("href", "#").on("click", function () {
                    return t.open(n.shareUrl, null, "width=600, height=400, location=0, menubar=0, resizeable=0, scrollbars=0, status=0, titlebar=0, toolbar=0"), !1
                })
            }, blank: function (t) {
                return e("<a>").attr({target: "_blank", href: t.shareUrl})
            }, self: function (t) {
                return e("<a>").attr({target: "_self", href: t.shareUrl})
            }
        };
        t.jsSocials = {Socials: i, shares: u, shareStrategies: h, setDefaults: d}
    }(window, jQuery), function (t, e, n, i) {
        e.extend(n.shares, {
            email: {
                label: "E-mail",
                logo: "fa fa-at",
                shareUrl: "mailto:{to}?subject={text}&body={url}",
                countUrl: "",
                shareIn: "self"
            },
            twitter: {
                label: "Tweet",
                logo: "fa fa-twitter",
                shareUrl: "https://twitter.com/share?url={url}&text={text}&via={via}&hashtags={hashtags}",
                countUrl: ""
            },
            facebook: {
                label: "Like",
                logo: "fa fa-facebook",
                shareUrl: "https://facebook.com/sharer/sharer.php?u={url}",
                countUrl: "https://graph.facebook.com/?id={url}",
                getCount: function (t) {
                    return t.share && t.share.share_count || 0
                }
            },
            vkontakte: {
                label: "Like",
                logo: "fa fa-vk",
                shareUrl: "https://vk.com/share.php?url={url}&title={title}&description={text}",
                countUrl: "https://vk.com/share.php?act=count&index=1&url={url}",
                getCount: function (t) {
                    return parseInt(t.slice(15, -2).split(", ")[1])
                }
            },
            googleplus: {
                label: "+1",
                logo: "fa fa-google",
                shareUrl: "https://plus.google.com/share?url={url}",
                countUrl: ""
            },
            linkedin: {
                label: "Share",
                logo: "fa fa-linkedin",
                shareUrl: "https://www.linkedin.com/shareArticle?mini=true&url={url}",
                countUrl: "https://www.linkedin.com/countserv/count/share?format=jsonp&url={url}&callback=?",
                getCount: function (t) {
                    return t.count
                }
            },
            pinterest: {
                label: "Pin it",
                logo: "fa fa-pinterest",
                shareUrl: "https://pinterest.com/pin/create/bookmarklet/?media={media}&url={url}&description={text}",
                countUrl: "https://api.pinterest.com/v1/urls/count.json?&url={url}&callback=?",
                getCount: function (t) {
                    return t.count
                }
            },
            stumbleupon: {
                label: "Share",
                logo: "fa fa-stumbleupon",
                shareUrl: "http://www.stumbleupon.com/submit?url={url}&title={title}",
                countUrl: "https://cors-anywhere.herokuapp.com/https://www.stumbleupon.com/services/1.01/badge.getinfo?url={url}",
                getCount: function (t) {
                    return t.result.views
                }
            },
            telegram: {
                label: "Telegram",
                logo: "fa fa-paper-plane",
                shareUrl: "tg://msg?text={url} {text}",
                countUrl: "",
                shareIn: "self"
            },
            whatsapp: {
                label: "WhatsApp",
                logo: "fa fa-whatsapp",
                shareUrl: "whatsapp://send?text={url} {text}",
                countUrl: "",
                shareIn: "self"
            },
            line: {
                label: "LINE",
                logo: "fa fa-comment",
                shareUrl: "http://line.me/R/msg/text/?{text} {url}",
                countUrl: ""
            },
            viber: {
                label: "Viber",
                logo: "fa fa-volume-control-phone",
                shareUrl: "viber://forward?text={url} {text}",
                countUrl: "",
                shareIn: "self"
            },
            pocket: {
                label: "Pocket",
                logo: "fa fa-get-pocket",
                shareUrl: "https://getpocket.com/save?url={url}&title={title}",
                countUrl: ""
            },
            messenger: {
                label: "Share",
                logo: "fa fa-commenting",
                shareUrl: "fb-messenger://share?link={url}",
                countUrl: "",
                shareIn: "self"
            }
        })
    }(window, jQuery, window.jsSocials), function () {
        "use strict";

        function t(i) {
            if (!i) throw new Error("No options passed to Waypoint constructor");
            if (!i.element) throw new Error("No element option passed to Waypoint constructor");
            if (!i.handler) throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, i), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = i.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), n[this.key] = this, e += 1
        }

        var e = 0, n = {};
        t.prototype.queueTrigger = function (t) {
            this.group.queueTrigger(this, t)
        }, t.prototype.trigger = function (t) {
            this.enabled && this.callback && this.callback.apply(this, t)
        }, t.prototype.destroy = function () {
            this.context.remove(this), this.group.remove(this), delete n[this.key]
        }, t.prototype.disable = function () {
            return this.enabled = !1, this
        }, t.prototype.enable = function () {
            return this.context.refresh(), this.enabled = !0, this
        }, t.prototype.next = function () {
            return this.group.next(this)
        }, t.prototype.previous = function () {
            return this.group.previous(this)
        }, t.invokeAll = function (t) {
            var e = [];
            for (var i in n) e.push(n[i]);
            for (var o = 0, r = e.length; o < r; o++) e[o][t]()
        }, t.destroyAll = function () {
            t.invokeAll("destroy")
        }, t.disableAll = function () {
            t.invokeAll("disable")
        }, t.enableAll = function () {
            t.Context.refreshAll();
            for (var e in n) n[e].enabled = !0;
            return this
        }, t.refreshAll = function () {
            t.Context.refreshAll()
        }, t.viewportHeight = function () {
            return window.innerHeight || document.documentElement.clientHeight
        }, t.viewportWidth = function () {
            return document.documentElement.clientWidth
        }, t.adapters = [], t.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        }, t.offsetAliases = {
            "bottom-in-view": function () {
                return this.context.innerHeight() - this.adapter.outerHeight()
            }, "right-in-view": function () {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        }, window.Waypoint = t
    }(), function () {
        "use strict";

        function t(t) {
            window.setTimeout(t, 1e3 / 60)
        }

        function e(t) {
            this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + n, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            }, this.waypoints = {
                vertical: {},
                horizontal: {}
            }, t.waypointContextKey = this.key, i[t.waypointContextKey] = this, n += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
        }

        var n = 0, i = {}, o = window.Waypoint, r = window.onload;
        e.prototype.add = function (t) {
            var e = t.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[e][t.key] = t, this.refresh()
        }, e.prototype.checkEmpty = function () {
            var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
                e = this.Adapter.isEmptyObject(this.waypoints.vertical), n = this.element == this.element.window;
            t && e && !n && (this.adapter.off(".waypoints"), delete i[this.key])
        }, e.prototype.createThrottledResizeHandler = function () {
            function t() {
                e.handleResize(), e.didResize = !1
            }

            var e = this;
            this.adapter.on("resize.waypoints", function () {
                e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
            })
        }, e.prototype.createThrottledScrollHandler = function () {
            function t() {
                e.handleScroll(), e.didScroll = !1
            }

            var e = this;
            this.adapter.on("scroll.waypoints", function () {
                e.didScroll && !o.isTouch || (e.didScroll = !0, o.requestAnimationFrame(t))
            })
        }, e.prototype.handleResize = function () {
            o.Context.refreshAll()
        }, e.prototype.handleScroll = function () {
            var t = {}, e = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
            for (var n in e) {
                var i = e[n], o = i.newScroll > i.oldScroll, r = o ? i.forward : i.backward;
                for (var a in this.waypoints[n]) {
                    var s = this.waypoints[n][a];
                    if (null !== s.triggerPoint) {
                        var l = i.oldScroll < s.triggerPoint, c = i.newScroll >= s.triggerPoint, u = l && c,
                            d = !l && !c;
                        (u || d) && (s.queueTrigger(r), t[s.group.id] = s.group)
                    }
                }
            }
            for (var h in t) t[h].flushTriggers();
            this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
        }, e.prototype.innerHeight = function () {
            return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
        }, e.prototype.remove = function (t) {
            delete this.waypoints[t.axis][t.key], this.checkEmpty()
        }, e.prototype.innerWidth = function () {
            return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
        }, e.prototype.destroy = function () {
            var t = [];
            for (var e in this.waypoints) for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
            for (var i = 0, o = t.length; i < o; i++) t[i].destroy()
        }, e.prototype.refresh = function () {
            var t, e = this.element == this.element.window, n = e ? void 0 : this.adapter.offset(), i = {};
            this.handleScroll(), t = {
                horizontal: {
                    contextOffset: e ? 0 : n.left,
                    contextScroll: e ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: e ? 0 : n.top,
                    contextScroll: e ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var r in t) {
                var a = t[r];
                for (var s in this.waypoints[r]) {
                    var l, c, u, d, h, p = this.waypoints[r][s], f = p.options.offset, m = p.triggerPoint, g = 0,
                        v = null == m;
                    p.element !== p.element.window && (g = p.adapter.offset()[a.offsetProp]), "function" == typeof f ? f = f.apply(p) : "string" == typeof f && (f = parseFloat(f), p.options.offset.indexOf("%") > -1 && (f = Math.ceil(a.contextDimension * f / 100))), l = a.contextScroll - a.contextOffset, p.triggerPoint = Math.floor(g + l - f), c = m < a.oldScroll, u = p.triggerPoint >= a.oldScroll, d = c && u, h = !c && !u, !v && d ? (p.queueTrigger(a.backward), i[p.group.id] = p.group) : !v && h ? (p.queueTrigger(a.forward), i[p.group.id] = p.group) : v && a.oldScroll >= p.triggerPoint && (p.queueTrigger(a.forward), i[p.group.id] = p.group)
                }
            }
            return o.requestAnimationFrame(function () {
                for (var t in i) i[t].flushTriggers()
            }), this
        }, e.findOrCreateByElement = function (t) {
            return e.findByElement(t) || new e(t)
        }, e.refreshAll = function () {
            for (var t in i) i[t].refresh()
        }, e.findByElement = function (t) {
            return i[t.waypointContextKey]
        }, window.onload = function () {
            r && r(), e.refreshAll()
        }, o.requestAnimationFrame = function (e) {
            var n = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
            n.call(window, e)
        }, o.Context = e
    }(), function () {
        "use strict";

        function t(t, e) {
            return t.triggerPoint - e.triggerPoint
        }

        function e(t, e) {
            return e.triggerPoint - t.triggerPoint
        }

        function n(t) {
            this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this
        }

        var i = {vertical: {}, horizontal: {}}, o = window.Waypoint;
        n.prototype.add = function (t) {
            this.waypoints.push(t)
        }, n.prototype.clearTriggerQueues = function () {
            this.triggerQueues = {up: [], down: [], left: [], right: []}
        }, n.prototype.flushTriggers = function () {
            for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n], o = "up" === n || "left" === n;
                i.sort(o ? e : t);
                for (var r = 0, a = i.length; r < a; r += 1) {
                    var s = i[r];
                    (s.options.continuous || r === i.length - 1) && s.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }, n.prototype.next = function (e) {
            this.waypoints.sort(t);
            var n = o.Adapter.inArray(e, this.waypoints), i = n === this.waypoints.length - 1;
            return i ? null : this.waypoints[n + 1]
        }, n.prototype.previous = function (e) {
            this.waypoints.sort(t);
            var n = o.Adapter.inArray(e, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }, n.prototype.queueTrigger = function (t, e) {
            this.triggerQueues[e].push(t)
        }, n.prototype.remove = function (t) {
            var e = o.Adapter.inArray(t, this.waypoints);
            e > -1 && this.waypoints.splice(e, 1)
        }, n.prototype.first = function () {
            return this.waypoints[0]
        }, n.prototype.last = function () {
            return this.waypoints[this.waypoints.length - 1]
        }, n.findOrCreate = function (t) {
            return i[t.axis][t.name] || new n(t)
        }, o.Group = n
    }(), function () {
        "use strict";

        function t(t) {
            this.$element = e(t)
        }

        var e = window.jQuery, n = window.Waypoint;
        e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, n) {
            t.prototype[n] = function () {
                var t = Array.prototype.slice.call(arguments);
                return this.$element[n].apply(this.$element, t)
            }
        }), e.each(["extend", "inArray", "isEmptyObject"], function (n, i) {
            t[i] = e[i]
        }), n.adapters.push({name: "jquery", Adapter: t}), n.Adapter = t
    }(), function () {
        "use strict";

        function t(t) {
            return function () {
                var n = [], i = arguments[0];
                return t.isFunction(arguments[0]) && (i = t.extend({}, arguments[1]), i.handler = arguments[0]), this.each(function () {
                    var o = t.extend({}, i, {element: this});
                    "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), n.push(new e(o))
                }), n
            }
        }

        var e = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
    }(), function (t) {
        t.fn.emaCounter = function () {
            function e(t) {
                return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
            }

            var n = function (t, e, n, i, o) {
                return e == o ? n + i : i * (-Math.pow(2, -10 * e / o) + 1) + n
            }, i = 100, o = {
                emaCounterDuration: 5e3,
                emaCounterStart: 0,
                emaCounterTarget: 100,
                emaCounterPostfix: "",
                emaCounterPrefix: ""
            };
            return this.each(function () {
                function r() {
                    if (l > s.emaCounterDuration) return void window.clearInterval(c);
                    var t = n(null, l, s.emaCounterStart, s.emaCounterTarget, s.emaCounterDuration);
                    t = Math.ceil(t), a.text(s.emaCounterPrefix + e(t) + s.emaCounterPostfix), l += i
                }

                var a = t(this);
                a.empty();
                var s = t.extend({}, o, a.data()), l = 0, c = window.setInterval(r, i);
                r()
            })
        }
    }(jQuery), !function (t) {
        "use strict";
        t.fn.gMap = function (e, n) {
            var i, o;
            if (!(window.google && google.maps || window.google_maps_api_loading)) {
                i = this, o = arguments;
                var r = "callback_" + Math.random().toString().replace(".", "");
                window.google_maps_api_loading = r, window[r] = function () {
                    t.fn.gMap.apply(i, o), t(window).trigger("google-maps-async-loading"), window[r] = null;
                    try {
                        delete window[r]
                    } catch (t) {
                    }
                };
                var a = window.WPV_FRONT && window.WPV_FRONT.gmap_api_key ? "&key=" + WPV_FRONT.gmap_api_key : "";
                return t.getScript(location.protocol + "//maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=" + r + a), this
            }
            if ((!window.google || !google.maps) && window.google_maps_api_loading) return i = this, o = arguments, t(window).bind("google-maps-async-loading", function () {
                t.fn.gMap.apply(i, o)
            }), this;
            switch (e) {
                case"addMarker":
                    return t(this).trigger("gMap.addMarker", [n.latitude, n.longitude, n.content, n.icon, n.popup]);
                case"centerAt":
                    return t(this).trigger("gMap.centerAt", [n.latitude, n.longitude, n.zoom])
            }
            var s = t.extend({}, t.fn.gMap.defaults, e);
            return this.each(function () {
                var e = new google.maps.Map(this), n = new google.maps.Geocoder;
                s.address ? n.geocode({address: s.address}, function (t) {
                    t && t.length && e.setCenter(t[0].geometry.location)
                }) : s.latitude && s.longitude ? e.setCenter(new google.maps.LatLng(s.latitude, s.longitude)) : t.isArray(s.markers) && s.markers.length > 0 ? s.markers[0].address ? n.geocode({address: s.markers[0].address}, function (t) {
                    t && t.length > 0 && e.setCenter(t[0].geometry.location)
                }) : e.setCenter(new google.maps.LatLng(s.markers[0].latitude, s.markers[0].longitude)) : e.setCenter(new google.maps.LatLng(34.885931, 9.84375)), e.setZoom(s.zoom), e.setMapTypeId(google.maps.MapTypeId[s.maptype]);
                var i = {scrollwheel: s.scrollwheel, disableDoubleClickZoom: !s.doubleclickzoom};
                s.controls === !1 ? t.extend(i, {disableDefaultUI: !0}) : 0 !== s.controls.length && t.extend(i, s.controls, {disableDefaultUI: !0}), e.setOptions(t.extend(i, s.custom));
                var o = new google.maps.Marker, r = new google.maps.MarkerImage(s.icon.image);
                if (r.size = new google.maps.Size(s.icon.iconsize[0], s.icon.iconsize[1]), r.anchor = new google.maps.Point(s.icon.iconanchor[0], s.icon.iconanchor[1]), o.setIcon(r), s.icon.shadow) {
                    var a = new google.maps.MarkerImage(s.icon.shadow);
                    a.size = new google.maps.Size(s.icon.shadowsize[0], s.icon.shadowsize[1]),
                        a.anchor = new google.maps.Point(s.icon.shadowanchor[0], s.icon.shadowanchor[1]), o.setShadow(a)
                }
                t(this).bind("gMap.centerAt", function (t, n, i, o) {
                    o && e.setZoom(o), e.panTo(new google.maps.LatLng(parseFloat(n), parseFloat(i)))
                });
                var l;
                t(this).bind("gMap.addMarker", function (t, n, i, c, u, d) {
                    var h = new google.maps.LatLng(parseFloat(n), parseFloat(i)),
                        p = new google.maps.Marker({position: h});
                    if (u ? (r = new google.maps.MarkerImage(u.image), r.size = new google.maps.Size(u.iconsize[0], u.iconsize[1]), r.anchor = new google.maps.Point(u.iconanchor[0], u.iconanchor[1]), p.setIcon(r), u.shadow && (a = new google.maps.MarkerImage(u.shadow), a.size = new google.maps.Size(u.shadowsize[0], u.shadowsize[1]), a.anchor = new google.maps.Point(u.shadowanchor[0], u.shadowanchor[1]), o.setShadow(a))) : (p.setIcon(o.getIcon()), p.setShadow(o.getShadow())), c) {
                        "_latlng" === c && (c = n + ", " + i);
                        var f = new google.maps.InfoWindow({content: s.html_prepend + c + s.html_append});
                        google.maps.event.addListener(p, "click", function () {
                            l && l.close(), f.open(e, p), l = f
                        }), d && f.open(e, p)
                    }
                    p.setMap(e)
                });
                for (var c = function (e, n) {
                    return function (i) {
                        i && i.length > 0 && t(n).trigger("gMap.addMarker", [i[0].geometry.location.lat(), i[0].geometry.location.lng(), e.html, e.icon, e.popup])
                    }
                }, u = 0; u < s.markers.length; u++) {
                    var d = s.markers[u];
                    if (d.address) {
                        "_address" === d.html && (d.html = d.address);
                        var h = this;
                        n.geocode({address: d.address}, c(d, h))
                    } else t(this).trigger("gMap.addMarker", [d.latitude, d.longitude, d.html, d.icon, d.popup])
                }
            })
        }, t.fn.gMap.defaults = {
            address: "",
            latitude: 0,
            longitude: 0,
            zoom: 1,
            markers: [],
            controls: [],
            scrollwheel: !1,
            doubleclickzoom: !0,
            maptype: "ROADMAP",
            html_prepend: '<div class="gmap_marker">',
            html_append: "</div>",
            icon: {
                image: "http://www.google.com/mapfiles/marker.png",
                shadow: "http://www.google.com/mapfiles/shadow50.png",
                iconsize: [20, 34],
                shadowsize: [37, 34],
                iconanchor: [9, 34],
                shadowanchor: [6, 34]
            }
        }
    }(jQuery), function (t) {
        "use strict";
        var e, n, i, o, r, a, s, l = "Close", c = "BeforeClose", u = "AfterClose", d = "BeforeAppend",
            h = "MarkupParse", p = "Open", f = "Change", m = "mfp", g = "." + m, v = "mfp-ready", y = "mfp-removing",
            b = "mfp-prevent-close", w = function () {
            }, x = !!window.jQuery, C = t(window), _ = function (t, n) {
                e.ev.on(m + t + g, n)
            }, S = function (e, n, i, o) {
                var r = document.createElement("div");
                return r.className = "mfp-" + e, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = t(r), n && r.appendTo(n)), r
            }, k = function (n, i) {
                e.ev.triggerHandler(m + n, i), e.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), e.st.callbacks[n] && e.st.callbacks[n].apply(e, t.isArray(i) ? i : [i]))
            }, T = function () {
                (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
            }, E = function (n) {
                return n === s && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), s = n), e.currTemplate.closeBtn
            }, I = function () {
                t.magnificPopup.instance || (e = new w, e.init(), t.magnificPopup.instance = e)
            }, A = function (n) {
                if (!t(n).hasClass(b)) {
                    var i = e.st.closeOnContentClick, o = e.st.closeOnBgClick;
                    if (i && o) return !0;
                    if (!e.content || t(n).hasClass("mfp-close") || e.preloader && n === e.preloader[0]) return !0;
                    if (n === e.content[0] || t.contains(e.content[0], n)) {
                        if (i) return !0
                    } else if (o && t.contains(document, n)) return !0;
                    return !1
                }
            }, z = function () {
                var t = document.createElement("p").style, e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;) if (e.pop() + "Transition" in t) return !0;
                return !1
            };
        w.prototype = {
            constructor: w, init: function () {
                var n = navigator.appVersion;
                e.isIE7 = -1 !== n.indexOf("MSIE 7."), e.isIE8 = -1 !== n.indexOf("MSIE 8."), e.isLowIE = e.isIE7 || e.isIE8, e.isAndroid = /android/gi.test(n), e.isIOS = /iphone|ipad|ipod/gi.test(n), e.supportsTransition = z(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = t(document.body), o = t(document), e.popupsCache = {}
            }, open: function (n) {
                var i;
                if (n.isObj === !1) {
                    e.items = n.items.toArray(), e.index = 0;
                    var r, s = n.items;
                    for (i = 0; i < s.length; i++) if (r = s[i], r.parsed && (r = r.el[0]), r === n.el[0]) {
                        e.index = i;
                        break
                    }
                } else e.items = t.isArray(n.items) ? n.items : [n.items], e.index = n.index || 0;
                if (e.isOpen) return void e.updateItemHTML();
                e.types = [], a = "", e.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (e.popupsCache[n.key] || (e.popupsCache[n.key] = {}), e.currTemplate = e.popupsCache[n.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, n), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = S("bg").on("click" + g, function () {
                    e.close()
                }), e.wrap = S("wrap").attr("tabindex", -1).on("click" + g, function (t) {
                    A(t.target) && e.close()
                }), e.container = S("container", e.wrap)), e.contentContainer = S("content"), e.st.preloader && (e.preloader = S("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (i = 0; i < l.length; i++) {
                    var c = l[i];
                    c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                }
                k("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (_(h, function (t, e, n, i) {
                    n.close_replaceWith = E(i.type)
                }), a += " mfp-close-btn-in") : e.wrap.append(E())), e.st.alignTop && (a += " mfp-align-top"), e.wrap.css(e.fixedContentPos ? {
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                } : {
                    top: C.scrollTop(),
                    position: "absolute"
                }), (e.st.fixedBgPos === !1 || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: o.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && o.on("keyup" + g, function (t) {
                    27 === t.keyCode && e.close()
                }), C.on("resize" + g, function () {
                    e.updateSize()
                }), e.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && e.wrap.addClass(a);
                var u = e.wH = C.height(), d = {};
                if (e.fixedContentPos && e._hasScrollBar(u)) {
                    var f = e._getScrollbarSize();
                    f && (d.paddingRight = f)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : d.overflow = "hidden");
                var m = e.st.mainClass;
                e.isIE7 && (m += " mfp-ie7"), m && e._addClassToMFP(m), e.updateItemHTML(), k("BuildControls"), t("html").css(d), e.bgOverlay.add(e.wrap).prependTo(document.body), e._lastFocusedEl = document.activeElement, setTimeout(function () {
                    e.content ? (e._addClassToMFP(v), T()) : e.bgOverlay.addClass(v), o.on("focusin" + g, function (n) {
                        return n.target === e.wrap[0] || t.contains(e.wrap[0], n.target) ? void 0 : (T(), !1)
                    })
                }, 16), e.isOpen = !0, e.updateSize(u), k(p)
            }, close: function () {
                e.isOpen && (k(c), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(y), setTimeout(function () {
                    e._close()
                }, e.st.removalDelay)) : e._close())
            }, _close: function () {
                k(l);
                var n = y + " " + v + " ";
                if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (n += e.st.mainClass + " "), e._removeClassFromMFP(n), e.fixedContentPos) {
                    var i = {paddingRight: ""};
                    e.isIE7 ? t("body, html").css("overflow", "") : i.overflow = "", t("html").css(i)
                }
                o.off("keyup" + g + " focusin" + g), e.ev.off(g), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && e.currTemplate[e.currItem.type] !== !0 || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, k(u)
            }, updateSize: function (t) {
                if (e.isIOS) {
                    var n = document.documentElement.clientWidth / window.innerWidth, i = window.innerHeight * n;
                    e.wrap.css("height", i), e.wH = i
                } else e.wH = t || C.height();
                e.fixedContentPos || e.wrap.css("height", e.wH), k("Resize")
            }, updateItemHTML: function () {
                var n = e.items[e.index];
                e.contentContainer.detach(), e.content && e.content.detach(), n.parsed || (n = e.parseEl(e.index));
                var i = n.type;
                if (k("BeforeChange", [e.currItem ? e.currItem.type : "", i]), e.currItem = n, !e.currTemplate[i]) {
                    var o = !!e.st[i] && e.st[i].markup;
                    k("FirstMarkupParse", o), e.currTemplate[i] = !o || t(o)
                }
                r && r !== n.type && e.container.removeClass("mfp-" + r + "-holder");
                var a = e["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, e.currTemplate[i]);
                e.appendContent(a, i), n.preloaded = !0, k(f, n), r = n.type, e.container.prepend(e.contentContainer), k("AfterChange")
            }, appendContent: function (t, n) {
                e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && e.currTemplate[n] === !0 ? e.content.find(".mfp-close").length || e.content.append(E()) : e.content = t : e.content = "", k(d), e.container.addClass("mfp-" + n + "-holder"), e.contentContainer.append(e.content)
            }, parseEl: function (n) {
                var i = e.items[n], o = i.type;
                if (i = i.tagName ? {el: t(i)} : {data: i, src: i.src}, i.el) {
                    for (var r = e.types, a = 0; a < r.length; a++) if (i.el.hasClass("mfp-" + r[a])) {
                        o = r[a];
                        break
                    }
                    i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
                }
                return i.type = o || e.st.type || "inline", i.index = n, i.parsed = !0, e.items[n] = i, k("ElementParse", i), e.items[n]
            }, addGroup: function (t, n) {
                var i = function (i) {
                    i.mfpEl = this, e._openClick(i, t, n)
                };
                n || (n = {});
                var o = "click.magnificPopup";
                n.mainEl = t, n.items ? (n.isObj = !0, t.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? t.off(o).on(o, n.delegate, i) : (n.items = t, t.off(o).on(o, i)))
            }, _openClick: function (n, i, o) {
                var r = void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick;
                if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
                    var a = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                    if (a) if (t.isFunction(a)) {
                        if (!a.call(e)) return !0
                    } else if (C.width() < a) return !0;
                    n.type && (n.preventDefault(), e.isOpen && n.stopPropagation()), o.el = t(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), e.open(o)
                }
            }, updateStatus: function (t, i) {
                if (e.preloader) {
                    n !== t && e.container.removeClass("mfp-s-" + n), i || "loading" !== t || (i = e.st.tLoading);
                    var o = {status: t, text: i};
                    k("UpdateStatus", o), t = o.status, i = o.text, e.preloader.html(i), e.preloader.find("a").on("click", function (t) {
                        t.stopImmediatePropagation()
                    }), e.container.addClass("mfp-s-" + t), n = t
                }
            }, _addClassToMFP: function (t) {
                e.bgOverlay.addClass(t), e.wrap.addClass(t)
            }, _removeClassFromMFP: function (t) {
                this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
            }, _hasScrollBar: function (t) {
                return (e.isIE7 ? o.height() : document.body.scrollHeight) > (t || C.height())
            }, _parseMarkup: function (e, n, i) {
                var o;
                i.data && (n = t.extend(i.data, n)), k(h, [e, n, i]), t.each(n, function (t, n) {
                    if (void 0 === n || n === !1) return !0;
                    if (o = t.split("_"), o.length > 1) {
                        var i = e.find(g + "-" + o[0]);
                        if (i.length > 0) {
                            var r = o[1];
                            "replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
                        }
                    } else e.find(g + "-" + t).html(n)
                })
            }, _getScrollbarSize: function () {
                if (void 0 === e.scrollbarSize) {
                    var t = document.createElement("div");
                    t.id = "mfp-sbm", t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
                }
                return e.scrollbarSize
            }
        }, t.magnificPopup = {
            instance: null,
            proto: w.prototype,
            modules: [],
            open: function (t, e) {
                return I(), t || (t = {}), t.isObj = !0, t.index = e || 0, this.instance.open(t)
            },
            close: function () {
                return t.magnificPopup.instance.close()
            },
            registerModule: function (e, n) {
                n.options && (t.magnificPopup.defaults[e] = n.options), t.extend(this.proto, n.proto), this.modules.push(e)
            },
            defaults: {
                disableOn: 0,
                key: null,
                midClick: !1,
                mainClass: "",
                preloader: !0,
                focus: "",
                closeOnContentClick: !1,
                closeOnBgClick: !0,
                closeBtnInside: !0,
                showCloseBtn: !0,
                enableEscapeKey: !0,
                modal: !1,
                alignTop: !1,
                removalDelay: 0,
                fixedContentPos: "auto",
                fixedBgPos: "auto",
                overflowY: "auto",
                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
                tClose: "Close (Esc)",
                tLoading: "Loading..."
            }
        }, t.fn.magnificPopup = function (n) {
            I();
            var i = t(this);
            if ("string" == typeof n) if ("open" === n) {
                var o, r = x ? i.data("magnificPopup") : i[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
                r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), e._openClick({mfpEl: o}, i, r)
            } else e.isOpen && e[n].apply(e, Array.prototype.slice.call(arguments, 1)); else x ? i.data("magnificPopup", n) : i[0].magnificPopup = n, e.addGroup(i, n);
            return i
        };
        var j, M, P, N = "inline", L = function () {
            P && (M.after(P.addClass(j)).detach(), P = null)
        };
        t.magnificPopup.registerModule(N, {
            options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
            proto: {
                initInline: function () {
                    e.types.push(N), _(l + "." + N, function () {
                        L()
                    })
                }, getInline: function (n, i) {
                    if (L(), n.src) {
                        var o = e.st.inline, r = t(n.src);
                        if (r.length) {
                            var a = r[0].parentNode;
                            a && a.tagName && (M || (j = o.hiddenClass, M = S(j), j = "mfp-" + j), P = r.after(M).detach().removeClass(j)), e.updateStatus("ready")
                        } else e.updateStatus("error", o.tNotFound), r = t("<div>");
                        return n.inlineElement = r, r
                    }
                    return e.updateStatus("ready"), e._parseMarkup(i, {}, n), i
                }
            }
        });
        var O, D = "ajax", H = function () {
            O && i.removeClass(O)
        };
        t.magnificPopup.registerModule(D, {
            options: {
                settings: null,
                cursor: "mfp-ajax-cur",
                tError: '<a href="%url%">The content</a> could not be loaded.'
            }, proto: {
                initAjax: function () {
                    e.types.push(D), O = e.st.ajax.cursor, _(l + "." + D, function () {
                        H(), e.req && e.req.abort()
                    })
                }, getAjax: function (n) {
                    O && i.addClass(O), e.updateStatus("loading");
                    var o = t.extend({
                        url: n.src, success: function (i, o, r) {
                            var a = {data: i, xhr: r};
                            k("ParseAjax", a), e.appendContent(t(a.data), D), n.finished = !0, H(), T(), setTimeout(function () {
                                e.wrap.addClass(v)
                            }, 16), e.updateStatus("ready"), k("AjaxContentAdded")
                        }, error: function () {
                            H(), n.finished = n.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", n.src))
                        }
                    }, e.st.ajax.settings);
                    return e.req = t.ajax(o), ""
                }
            }
        });
        var W, q = function (n) {
            if (n.data && void 0 !== n.data.title) return n.data.title;
            var i = e.st.image.titleSrc;
            if (i) {
                if (t.isFunction(i)) return i.call(e, n);
                if (n.el) return n.el.attr(i) || ""
            }
            return ""
        };
        t.magnificPopup.registerModule("image", {
            options: {
                markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',
                cursor: "mfp-zoom-out-cur",
                titleSrc: "title",
                verticalFit: !0,
                tError: '<a href="%url%">The image</a> could not be loaded.'
            }, proto: {
                initImage: function () {
                    var t = e.st.image, n = ".image";
                    e.types.push("image"), _(p + n, function () {
                        "image" === e.currItem.type && t.cursor && i.addClass(t.cursor)
                    }), _(l + n, function () {
                        t.cursor && i.removeClass(t.cursor), C.off("resize" + g)
                    }), _("Resize" + n, e.resizeImage), e.isLowIE && _("AfterChange", e.resizeImage)
                }, resizeImage: function () {
                    var t = e.currItem;
                    if (t && t.img && e.st.image.verticalFit) {
                        var n = 0;
                        e.isLowIE && (n = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - n)
                    }
                }, _onImageHasSize: function (t) {
                    t.img && (t.hasSize = !0, W && clearInterval(W), t.isCheckingImgSize = !1, k("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
                }, findImageSize: function (t) {
                    var n = 0, i = t.img[0], o = function (r) {
                        W && clearInterval(W), W = setInterval(function () {
                            return i.naturalWidth > 0 ? void e._onImageHasSize(t) : (n > 200 && clearInterval(W), n++, void (3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500)))
                        }, r)
                    };
                    o(1)
                }, getImage: function (n, i) {
                    var o = 0, r = function () {
                        n && (n.img[0].complete ? (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, k("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
                    }, a = function () {
                        n && (n.img.off(".mfploader"), n === e.currItem && (e._onImageHasSize(n), e.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
                    }, s = e.st.image, l = i.find(".mfp-img");
                    if (l.length) {
                        var c = document.createElement("img");
                        c.className = "mfp-img", n.img = t(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), n.img[0].naturalWidth > 0 && (n.hasSize = !0)
                    }
                    return e._parseMarkup(i, {
                        title: q(n),
                        img_replaceWith: n.img
                    }, n), e.resizeImage(), n.hasSize ? (W && clearInterval(W), n.loadError ? (i.addClass("mfp-loading"), e.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), e.updateStatus("ready")), i) : (e.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), e.findImageSize(n)), i)
                }
            }
        });
        var R, F = function () {
            return void 0 === R && (R = void 0 !== document.createElement("p").style.MozTransform), R
        };
        t.magnificPopup.registerModule("zoom", {
            options: {
                enabled: !1, easing: "ease-in-out", duration: 300, opener: function (t) {
                    return t.is("img") ? t : t.find("img")
                }
            }, proto: {
                initZoom: function () {
                    var t = e.st.zoom, n = ".zoom";
                    if (t.enabled && e.supportsTransition) {
                        var i, o, r = t.duration, a = function (e) {
                            var n = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                i = "all " + t.duration / 1e3 + "s " + t.easing, o = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                }, r = "transition";
                            return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, n.css(o), n
                        }, s = function () {
                            e.content.css("visibility", "visible")
                        };
                        _("BuildControls" + n, function () {
                            if (e._allowZoom()) {
                                if (clearTimeout(i), e.content.css("visibility", "hidden"), image = e._getItemToZoom(), !image) return void s();
                                o = a(image), o.css(e._getOffset()), e.wrap.append(o), i = setTimeout(function () {
                                    o.css(e._getOffset(!0)), i = setTimeout(function () {
                                        s(), setTimeout(function () {
                                            o.remove(), image = o = null, k("ZoomAnimationEnded")
                                        }, 16)
                                    }, r)
                                }, 16)
                            }
                        }), _(c + n, function () {
                            if (e._allowZoom()) {
                                if (clearTimeout(i), e.st.removalDelay = r, !image) {
                                    if (image = e._getItemToZoom(), !image) return;
                                    o = a(image)
                                }
                                o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function () {
                                    o.css(e._getOffset())
                                }, 16)
                            }
                        }), _(l + n, function () {
                            e._allowZoom() && (s(), o && o.remove())
                        })
                    }
                }, _allowZoom: function () {
                    return "image" === e.currItem.type
                }, _getItemToZoom: function () {
                    return !!e.currItem.hasSize && e.currItem.img
                }, _getOffset: function (n) {
                    var i;
                    i = n ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem);
                    var o = i.offset(), r = parseInt(i.css("padding-top"), 10),
                        a = parseInt(i.css("padding-bottom"), 10);
                    o.top -= t(window).scrollTop() - r;
                    var s = {width: i.width(), height: (x ? i.innerHeight() : i[0].offsetHeight) - a - r};
                    return F() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
                }
            }
        });
        var B = "iframe", $ = "//about:blank", Q = function (t) {
            if (e.currTemplate[B]) {
                var n = e.currTemplate[B].find("iframe");
                n.length && (t || (n[0].src = $), e.isIE8 && n.css("display", t ? "block" : "none"))
            }
        };
        t.magnificPopup.registerModule(B, {
            options: {
                markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
                srcAction: "iframe_src",
                patterns: {
                    youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                    vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                    gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
                }
            }, proto: {
                initIframe: function () {
                    e.types.push(B), _("BeforeChange", function (t, e, n) {
                        e !== n && (e === B ? Q() : n === B && Q(!0))
                    }), _(l + "." + B, function () {
                        Q()
                    })
                }, getIframe: function (n, i) {
                    var o = n.src, r = e.st.iframe;
                    t.each(r.patterns, function () {
                        return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                    });
                    var a = {};
                    return r.srcAction && (a[r.srcAction] = o), e._parseMarkup(i, a, n), e.updateStatus("ready"), i
                }
            }
        });
        var U = function (t) {
            var n = e.items.length;
            return t > n - 1 ? t - n : 0 > t ? n + t : t
        }, V = function (t, e, n) {
            return t.replace("%curr%", e + 1).replace("%total%", n)
        };
        t.magnificPopup.registerModule("gallery", {
            options: {
                enabled: !1,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: !0,
                arrows: !0,
                tPrev: "Previous (Left arrow key)",
                tNext: "Next (Right arrow key)",
                tCounter: "%curr% of %total%"
            }, proto: {
                initGallery: function () {
                    var n = e.st.gallery, i = ".mfp-gallery", r = Boolean(t.fn.mfpFastClick);
                    return e.direction = !0, !(!n || !n.enabled) && (a += " mfp-gallery", _(p + i, function () {
                        n.navigateByImgClick && e.wrap.on("click" + i, ".mfp-img", function () {
                            return e.items.length > 1 ? (e.next(), !1) : void 0
                        }), o.on("keydown" + i, function (t) {
                            37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                        })
                    }), _("UpdateStatus" + i, function (t, n) {
                        n.text && (n.text = V(n.text, e.currItem.index, e.items.length))
                    }), _(h + i, function (t, i, o, r) {
                        var a = e.items.length;
                        o.counter = a > 1 ? V(n.tCounter, r.index, a) : ""
                    }), _("BuildControls" + i, function () {
                        if (e.items.length > 1 && n.arrows && !e.arrowLeft) {
                            var i = n.arrowMarkup,
                                o = e.arrowLeft = t(i.replace("%title%", n.tPrev).replace("%dir%", "left")).addClass(b),
                                a = e.arrowRight = t(i.replace("%title%", n.tNext).replace("%dir%", "right")).addClass(b),
                                s = r ? "mfpFastClick" : "click";
                            o[s](function () {
                                e.prev()
                            }), a[s](function () {
                                e.next()
                            }), e.isIE7 && (S("b", o[0], !1, !0), S("a", o[0], !1, !0), S("b", a[0], !1, !0), S("a", a[0], !1, !0)), e.container.append(o.add(a))
                        }
                    }), _(f + i, function () {
                        e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
                            e.preloadNearbyImages(), e._preloadTimeout = null
                        }, 16)
                    }), void _(l + i, function () {
                        o.off(i), e.wrap.off("click" + i), e.arrowLeft && r && e.arrowLeft.add(e.arrowRight).destroyMfpFastClick(), e.arrowRight = e.arrowLeft = null
                    }))
                }, next: function () {
                    e.direction = !0, e.index = U(e.index + 1), e.updateItemHTML()
                }, prev: function () {
                    e.direction = !1, e.index = U(e.index - 1), e.updateItemHTML()
                }, goTo: function (t) {
                    e.direction = t >= e.index, e.index = t, e.updateItemHTML()
                }, preloadNearbyImages: function () {
                    var t, n = e.st.gallery.preload, i = Math.min(n[0], e.items.length),
                        o = Math.min(n[1], e.items.length);
                    for (t = 1; t <= (e.direction ? o : i); t++) e._preloadItem(e.index + t);
                    for (t = 1; t <= (e.direction ? i : o); t++) e._preloadItem(e.index - t)
                }, _preloadItem: function (n) {
                    if (n = U(n), !e.items[n].preloaded) {
                        var i = e.items[n];
                        i.parsed || (i = e.parseEl(n)), k("LazyLoad", i), "image" === i.type && (i.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
                            i.hasSize = !0
                        }).on("error.mfploader", function () {
                            i.hasSize = !0, i.loadError = !0, k("LazyLoadError", i)
                        }).attr("src", i.src)), i.preloaded = !0
                    }
                }
            }
        });
        var X = "retina";
        t.magnificPopup.registerModule(X, {
            options: {
                replaceSrc: function (t) {
                    return t.src.replace(/\.\w+$/, function (t) {
                        return "@2x" + t
                    })
                }, ratio: 1
            }, proto: {
                initRetina: function () {
                    if (window.devicePixelRatio > 1) {
                        var t = e.st.retina, n = t.ratio;
                        n = isNaN(n) ? n() : n, n > 1 && (_("ImageHasSize." + X, function (t, e) {
                            e.img.css({"max-width": e.img[0].naturalWidth / n, width: "100%"})
                        }), _("ElementParse." + X, function (e, i) {
                            i.src = t.replaceSrc(i, n)
                        }))
                    }
                }
            }
        }), function () {
            var e = 1e3, n = "ontouchstart" in window, i = function () {
                C.off("touchmove" + r + " touchend" + r)
            }, o = "mfpFastClick", r = "." + o;
            t.fn.mfpFastClick = function (o) {
                return t(this).each(function () {
                    var a, s = t(this);
                    if (n) {
                        var l, c, u, d, h, p;
                        s.on("touchstart" + r, function (t) {
                            d = !1, p = 1, h = t.originalEvent ? t.originalEvent.touches[0] : t.touches[0], c = h.clientX, u = h.clientY, C.on("touchmove" + r, function (t) {
                                h = t.originalEvent ? t.originalEvent.touches : t.touches, p = h.length, h = h[0], (Math.abs(h.clientX - c) > 10 || Math.abs(h.clientY - u) > 10) && (d = !0, i())
                            }).on("touchend" + r, function (t) {
                                i(), d || p > 1 || (a = !0, t.preventDefault(), clearTimeout(l), l = setTimeout(function () {
                                    a = !1
                                }, e), o())
                            })
                        })
                    }
                    s.on("click" + r, function () {
                        a || o()
                    })
                })
            }, t.fn.destroyMfpFastClick = function () {
                t(this).off("touchstart" + r + " click" + r), n && C.off("touchmove" + r + " touchend" + r)
            }
        }()
    }(window.jQuery || window.Zepto), function (t, e) {
        e.fn.imagesLoaded = function (t) {
            function n() {
                t.call(o, r)
            }

            function i(t) {
                var o = t.target;
                o.src !== s && -1 === e.inArray(o, l) && (l.push(o), --a <= 0 && (setTimeout(n), r.unbind(".imagesLoaded", i)))
            }

            var o = this, r = o.find("img").add(o.filter("img")), a = r.length,
                s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", l = [];
            return a || n(), r.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
                var t = this.src;
                this.src = s, this.src = t
            }), o
        }
    }(window, jQuery), function (t, e) {
        var n, i = e.event, o = e.event.handle ? "handle" : "dispatch";
        i.special.smartresize = {
            setup: function () {
                e(this).bind("resize", i.special.smartresize.handler)
            }, teardown: function () {
                e(this).unbind("resize", i.special.smartresize.handler)
            }, handler: function (t, e) {
                var r = this, a = arguments;
                t.type = "smartresize", n && clearTimeout(n), n = setTimeout(function () {
                    i[o].apply(r, a)
                }, "execAsap" === e ? 0 : 100)
            }
        }, e.fn.smartresize = function (t) {
            return t ? this.bind("smartresize", t) : this.trigger("smartresize", ["execAsap"])
        }
    }(window, jQuery), function (t) {
        function e() {
        }

        function n(t) {
            function n(e) {
                e.prototype.option || (e.prototype.option = function (e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function o(e, n) {
                t.fn[e] = function (o) {
                    if ("string" == typeof o) {
                        for (var a = i.call(arguments, 1), s = 0, l = this.length; l > s; s++) {
                            var c = this[s], u = t.data(c, e);
                            if (u) if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                var d = u[o].apply(u, a);
                                if (void 0 !== d) return d
                            } else r("no such method '" + o + "' for " + e + " instance"); else r("cannot call methods on " + e + " prior to initialization; attempted to call '" + o + "'")
                        }
                        return this
                    }
                    return this.each(function () {
                        var i = t.data(this, e);
                        i ? (i.option(o), i._init()) : (i = new n(this, o), t.data(this, e, i))
                    })
                }
            }

            if (t) {
                var r = "undefined" == typeof console ? e : function (t) {
                    console.error(t)
                };
                return t.bridget = function (t, e) {
                    n(e), o(t, e)
                }, t.bridget
            }
        }

        var i = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], n) : n("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window), function (t) {
        function e(e) {
            var n = t.event;
            return n.target = n.target || n.srcElement || e, n
        }

        var n = document.documentElement, i = function () {
        };
        n.addEventListener ? i = function (t, e, n) {
            t.addEventListener(e, n, !1)
        } : n.attachEvent && (i = function (t, n, i) {
            t[n + i] = i.handleEvent ? function () {
                var n = e(t);
                i.handleEvent.call(i, n)
            } : function () {
                var n = e(t);
                i.call(t, n)
            }, t.attachEvent("on" + n, t[n + i])
        });
        var o = function () {
        };
        n.removeEventListener ? o = function (t, e, n) {
            t.removeEventListener(e, n, !1)
        } : n.detachEvent && (o = function (t, e, n) {
            t.detachEvent("on" + e, t[e + n]);
            try {
                delete t[e + n]
            } catch (i) {
                t[e + n] = void 0
            }
        });
        var r = {bind: i, unbind: o};
        "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
    }(this), function (t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : a.push(t))
        }

        function n(t) {
            var n = "readystatechange" === t.type && "complete" !== r.readyState;
            e.isReady || n || i()
        }

        function i() {
            e.isReady = !0;
            for (var t = 0, n = a.length; n > t; t++) {
                var i = a[t];
                i()
            }
        }

        function o(o) {
            return "complete" === r.readyState ? i() : (o.bind(r, "DOMContentLoaded", n), o.bind(r, "readystatechange", n), o.bind(t, "load", n)), e
        }

        var r = t.document, a = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
    }(window), function () {
        function t() {
        }

        function e(t, e) {
            for (var n = t.length; n--;) if (t[n].listener === e) return n;
            return -1
        }

        function n(t) {
            return function () {
                return this[t].apply(this, arguments)
            }
        }

        var i = t.prototype, o = this, r = o.EventEmitter;
        i.getListeners = function (t) {
            var e, n, i = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (n in i) i.hasOwnProperty(n) && t.test(n) && (e[n] = i[n])
            } else e = i[t] || (i[t] = []);
            return e
        }, i.flattenListeners = function (t) {
            var e, n = [];
            for (e = 0; e < t.length; e += 1) n.push(t[e].listener);
            return n
        }, i.getListenersAsObject = function (t) {
            var e, n = this.getListeners(t);
            return n instanceof Array && (e = {}, e[t] = n), e || n
        }, i.addListener = function (t, n) {
            var i, o = this.getListenersAsObject(t), r = "object" == typeof n;
            for (i in o) o.hasOwnProperty(i) && -1 === e(o[i], n) && o[i].push(r ? n : {listener: n, once: !1});
            return this
        }, i.on = n("addListener"), i.addOnceListener = function (t, e) {
            return this.addListener(t, {listener: e, once: !0})
        }, i.once = n("addOnceListener"), i.defineEvent = function (t) {
            return this.getListeners(t), this
        }, i.defineEvents = function (t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, i.removeListener = function (t, n) {
            var i, o, r = this.getListenersAsObject(t);
            for (o in r) r.hasOwnProperty(o) && (i = e(r[o], n), -1 !== i && r[o].splice(i, 1));
            return this
        }, i.off = n("removeListener"), i.addListeners = function (t, e) {
            return this.manipulateListeners(!1, t, e)
        }, i.removeListeners = function (t, e) {
            return this.manipulateListeners(!0, t, e)
        }, i.manipulateListeners = function (t, e, n) {
            var i, o, r = t ? this.removeListener : this.addListener, a = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp) for (i = n.length; i--;) r.call(this, e, n[i]); else for (i in e) e.hasOwnProperty(i) && (o = e[i]) && ("function" == typeof o ? r.call(this, i, o) : a.call(this, i, o));
            return this
        }, i.removeEvent = function (t) {
            var e, n = typeof t, i = this._getEvents();
            if ("string" === n) delete i[t]; else if (t instanceof RegExp) for (e in i) i.hasOwnProperty(e) && t.test(e) && delete i[e]; else delete this._events;
            return this
        }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (t, e) {
            var n, i, o, r, a = this.getListenersAsObject(t);
            for (o in a) if (a.hasOwnProperty(o)) for (i = a[o].length; i--;) n = a[o][i], n.once === !0 && this.removeListener(t, n.listener), r = n.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, n.listener);
            return this
        }, i.trigger = n("emitEvent"), i.emit = function (t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, i.setOnceReturnValue = function (t) {
            return this._onceReturnValue = t, this
        }, i._getOnceReturnValue = function () {
            return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
        }, i._getEvents = function () {
            return this._events || (this._events = {})
        }, t.noConflict = function () {
            return o.EventEmitter = r, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
    }.call(this), function (t) {
        function e(t) {
            if (t) {
                if ("string" == typeof i[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, o = 0, r = n.length; r > o; o++) if (e = n[o] + t, "string" == typeof i[e]) return e
            }
        }

        var n = "Webkit Moz ms Ms O".split(" "), i = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window), function (t) {
        function e(t) {
            var e = parseFloat(t), n = -1 === t.indexOf("%") && !isNaN(e);
            return n && e
        }

        function n() {
        }

        function i() {
            for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, n = a.length; n > e; e++) {
                var i = a[e];
                t[i] = 0
            }
            return t
        }

        function o(n) {
            function o() {
                if (!h) {
                    h = !0;
                    var i = t.getComputedStyle;
                    if (c = function () {
                        var t = i ? function (t) {
                            return i(t, null)
                        } : function (t) {
                            return t.currentStyle
                        };
                        return function (e) {
                            var n = t(e);
                            return n || r("Style returned " + n + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), n
                        }
                    }(), u = n("boxSizing")) {
                        var o = document.createElement("div");
                        o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                        var a = document.body || document.documentElement;
                        a.appendChild(o);
                        var s = c(o);
                        d = 200 === e(s.width), a.removeChild(o)
                    }
                }
            }

            function s(t) {
                if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var n = c(t);
                    if ("none" === n.display) return i();
                    var r = {};
                    r.width = t.offsetWidth, r.height = t.offsetHeight;
                    for (var s = r.isBorderBox = !(!u || !n[u] || "border-box" !== n[u]), h = 0, p = a.length; p > h; h++) {
                        var f = a[h], m = n[f];
                        m = l(t, m);
                        var g = parseFloat(m);
                        r[f] = isNaN(g) ? 0 : g
                    }
                    var v = r.paddingLeft + r.paddingRight, y = r.paddingTop + r.paddingBottom,
                        b = r.marginLeft + r.marginRight, w = r.marginTop + r.marginBottom,
                        x = r.borderLeftWidth + r.borderRightWidth, C = r.borderTopWidth + r.borderBottomWidth,
                        _ = s && d, S = e(n.width);
                    S !== !1 && (r.width = S + (_ ? 0 : v + x));
                    var k = e(n.height);
                    return k !== !1 && (r.height = k + (_ ? 0 : y + C)), r.innerWidth = r.width - (v + x), r.innerHeight = r.height - (y + C), r.outerWidth = r.width + b, r.outerHeight = r.height + w, r
                }
            }

            function l(e, n) {
                if (t.getComputedStyle || -1 === n.indexOf("%")) return n;
                var i = e.style, o = i.left, r = e.runtimeStyle, a = r && r.left;
                return a && (r.left = e.currentStyle.left), i.left = n, n = i.pixelLeft, i.left = o, a && (r.left = a), n
            }

            var c, u, d, h = !1;
            return s
        }

        var r = "undefined" == typeof console ? n : function (t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
    }(window), function (t) {
        function e(t, e) {
            return t[a](e)
        }

        function n(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function i(t, e) {
            n(t);
            for (var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length; r > o; o++) if (i[o] === t) return !0;
            return !1
        }

        function o(t, i) {
            return n(t), e(t, i)
        }

        var r, a = function () {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], n = 0, i = e.length; i > n; n++) {
                var o = e[n], r = o + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (a) {
            var s = document.createElement("div"), l = e(s, "div");
            r = l ? e : o
        } else r = i;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
        function (t) {
            function e(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function n(t) {
                for (var e in t) return !1;
                return e = null, !0
            }

            function i(t) {
                return t.replace(/([A-Z])/g, function (t) {
                    return "-" + t.toLowerCase()
                })
            }

            function o(t, o, r) {
                function s(t, e) {
                    t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
                }

                var l = r("transition"), c = r("transform"), u = l && c, d = !!r("perspective"), h = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[l], p = ["transform", "transition", "transitionDuration", "transitionProperty"], f = function () {
                    for (var t = {}, e = 0, n = p.length; n > e; e++) {
                        var i = p[e], o = r(i);
                        o && o !== i && (t[i] = o)
                    }
                    return t
                }();
                e(s.prototype, t.prototype), s.prototype._create = function () {
                    this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
                }, s.prototype.handleEvent = function (t) {
                    var e = "on" + t.type;
                    this[e] && this[e](t)
                }, s.prototype.getSize = function () {
                    this.size = o(this.element)
                }, s.prototype.css = function (t) {
                    var e = this.element.style;
                    for (var n in t) {
                        var i = f[n] || n;
                        e[i] = t[n]
                    }
                }, s.prototype.getPosition = function () {
                    var t = a(this.element), e = this.layout.options, n = e.isOriginLeft, i = e.isOriginTop,
                        o = parseInt(t[n ? "left" : "right"], 10), r = parseInt(t[i ? "top" : "bottom"], 10);
                    o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
                    var s = this.layout.size;
                    o -= n ? s.paddingLeft : s.paddingRight, r -= i ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = r
                }, s.prototype.layoutPosition = function () {
                    var t = this.layout.size, e = this.layout.options, n = {};
                    e.isOriginLeft ? (n.left = this.position.x + t.paddingLeft + "px", n.right = "") : (n.right = this.position.x + t.paddingRight + "px", n.left = ""), e.isOriginTop ? (n.top = this.position.y + t.paddingTop + "px", n.bottom = "") : (n.bottom = this.position.y + t.paddingBottom + "px", n.top = ""), this.css(n), this.emitEvent("layout", [this])
                };
                var m = d ? function (t, e) {
                    return "translate3d(" + t + "px, " + e + "px, 0)"
                } : function (t, e) {
                    return "translate(" + t + "px, " + e + "px)"
                };
                s.prototype._transitionTo = function (t, e) {
                    this.getPosition();
                    var n = this.position.x, i = this.position.y, o = parseInt(t, 10), r = parseInt(e, 10),
                        a = o === this.position.x && r === this.position.y;
                    if (this.setPosition(t, e), a && !this.isTransitioning) return void this.layoutPosition();
                    var s = t - n, l = e - i, c = {}, u = this.layout.options;
                    s = u.isOriginLeft ? s : -s, l = u.isOriginTop ? l : -l, c.transform = m(s, l), this.transition({
                        to: c,
                        onTransitionEnd: {transform: this.layoutPosition},
                        isCleaning: !0
                    })
                }, s.prototype.goTo = function (t, e) {
                    this.setPosition(t, e), this.layoutPosition()
                }, s.prototype.moveTo = u ? s.prototype._transitionTo : s.prototype.goTo, s.prototype.setPosition = function (t, e) {
                    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
                }, s.prototype._nonTransition = function (t) {
                    this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                    for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
                }, s.prototype._transition = function (t) {
                    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
                    var e = this._transn;
                    for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
                    for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
                    if (t.from) {
                        this.css(t.from);
                        var i = this.element.offsetHeight;
                        i = null
                    }
                    this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
                };
                var g = c && i(c) + ",opacity";
                s.prototype.enableTransition = function () {
                    this.isTransitioning || (this.css({
                        transitionProperty: g,
                        transitionDuration: this.layout.options.transitionDuration
                    }), this.element.addEventListener(h, this, !1))
                }, s.prototype.transition = s.prototype[l ? "_transition" : "_nonTransition"], s.prototype.onwebkitTransitionEnd = function (t) {
                    this.ontransitionend(t)
                }, s.prototype.onotransitionend = function (t) {
                    this.ontransitionend(t)
                };
                var v = {"-webkit-transform": "transform", "-moz-transform": "transform", "-o-transform": "transform"};
                s.prototype.ontransitionend = function (t) {
                    if (t.target === this.element) {
                        var e = this._transn, i = v[t.propertyName] || t.propertyName;
                        if (delete e.ingProperties[i], n(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                            var o = e.onEnd[i];
                            o.call(this), delete e.onEnd[i]
                        }
                        this.emitEvent("transitionEnd", [this])
                    }
                }, s.prototype.disableTransition = function () {
                    this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1
                }, s.prototype._removeStyles = function (t) {
                    var e = {};
                    for (var n in t) e[n] = "";
                    this.css(e)
                };
                var y = {transitionProperty: "", transitionDuration: ""};
                return s.prototype.removeTransitionStyles = function () {
                    this.css(y)
                }, s.prototype.removeElem = function () {
                    this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
                }, s.prototype.remove = function () {
                    if (!l || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
                    var t = this;
                    this.on("transitionEnd", function () {
                        return t.removeElem(), !0
                    }), this.hide()
                }, s.prototype.reveal = function () {
                    delete this.isHidden, this.css({display: ""});
                    var t = this.layout.options;
                    this.transition({from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0})
                }, s.prototype.hide = function () {
                    this.isHidden = !0, this.css({display: ""});
                    var t = this.layout.options;
                    this.transition({
                        from: t.visibleStyle,
                        to: t.hiddenStyle,
                        isCleaning: !0,
                        onTransitionEnd: {
                            opacity: function () {
                                this.isHidden && this.css({display: "none"})
                            }
                        }
                    })
                }, s.prototype.destroy = function () {
                    this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
                }, s
            }

            var r = t.getComputedStyle, a = r ? function (t) {
                return r(t, null)
            } : function (t) {
                return t.currentStyle
            };
            "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
        }(window), function (t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            return "[object Array]" === d.call(t)
        }

        function i(t) {
            var e = [];
            if (n(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0, o = t.length; o > i; i++) e.push(t[i]); else e.push(t);
            return e
        }

        function o(t, e) {
            var n = p(e, t);
            -1 !== n && e.splice(n, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function (t, e, n) {
                return e + "-" + n
            }).toLowerCase()
        }

        function a(n, a, d, p, f, m) {
            function g(t, n) {
                if ("string" == typeof t && (t = s.querySelector(t)), !t || !h(t)) return void (l && l.error("Bad " + this.constructor.namespace + " element: " + t));
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(n);
                var i = ++v;
                this.element.outlayerGUID = i, y[i] = this, this._create(), this.options.isInitLayout && this.layout()
            }

            var v = 0, y = {};
            return g.namespace = "outlayer", g.Item = m, g.defaults = {
                containerStyle: {position: "relative"},
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
                visibleStyle: {opacity: 1, transform: "scale(1)"}
            }, e(g.prototype, d.prototype), g.prototype.option = function (t) {
                e(this.options, t)
            }, g.prototype._create = function () {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, g.prototype.reloadItems = function () {
                this.items = this._itemize(this.element.children)
            }, g.prototype._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], o = 0, r = e.length; r > o; o++) {
                    var a = e[o], s = new n(a, this);
                    i.push(s)
                }
                return i
            }, g.prototype._filterFindItemElements = function (t) {
                t = i(t);
                for (var e = this.options.itemSelector, n = [], o = 0, r = t.length; r > o; o++) {
                    var a = t[o];
                    if (h(a)) if (e) {
                        f(a, e) && n.push(a);
                        for (var s = a.querySelectorAll(e), l = 0, c = s.length; c > l; l++) n.push(s[l])
                    } else n.push(a)
                }
                return n
            }, g.prototype.getItemElements = function () {
                for (var t = [], e = 0, n = this.items.length; n > e; e++) t.push(this.items[e].element);
                return t
            }, g.prototype.layout = function () {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
                this.getSize()
            }, g.prototype.getSize = function () {
                this.size = p(this.element)
            }, g.prototype._getMeasurement = function (t, e) {
                var n, i = this.options[t];
                i ? ("string" == typeof i ? n = this.element.querySelector(i) : h(i) && (n = i), this[t] = n ? p(n)[e] : i) : this[t] = 0
            }, g.prototype.layoutItems = function (t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, g.prototype._getItemsForLayout = function (t) {
                for (var e = [], n = 0, i = t.length; i > n; n++) {
                    var o = t[n];
                    o.isIgnored || e.push(o)
                }
                return e
            }, g.prototype._layoutItems = function (t, e) {
                function n() {
                    i.emitEvent("layoutComplete", [i, t])
                }

                var i = this;
                if (!t || !t.length) return void n();
                this._itemsOn(t, "layout", n);
                for (var o = [], r = 0, a = t.length; a > r; r++) {
                    var s = t[r], l = this._getItemLayoutPosition(s);
                    l.item = s, l.isInstant = e || s.isLayoutInstant, o.push(l)
                }
                this._processLayoutQueue(o)
            }, g.prototype._getItemLayoutPosition = function () {
                return {x: 0, y: 0}
            }, g.prototype._processLayoutQueue = function (t) {
                for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    this._positionItem(i.item, i.x, i.y, i.isInstant)
                }
            }, g.prototype._positionItem = function (t, e, n, i) {
                i ? t.goTo(e, n) : t.moveTo(e, n)
            }, g.prototype._postLayout = function () {
                this.resizeContainer()
            }, g.prototype.resizeContainer = function () {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, g.prototype._getContainerSize = u, g.prototype._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var n = this.size;
                    n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, g.prototype._itemsOn = function (t, e, n) {
                function i() {
                    return o++, o === r && n.call(a), !0
                }

                for (var o = 0, r = t.length, a = this, s = 0, l = t.length; l > s; s++) {
                    var c = t[s];
                    c.on(e, i)
                }
            }, g.prototype.ignore = function (t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, g.prototype.unignore = function (t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, g.prototype.stamp = function (t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, n = t.length; n > e; e++) {
                        var i = t[e];
                        this.ignore(i)
                    }
                }
            }, g.prototype.unstamp = function (t) {
                if (t = this._find(t)) for (var e = 0, n = t.length; n > e; e++) {
                    var i = t[e];
                    o(i, this.stamps), this.unignore(i)
                }
            }, g.prototype._find = function (t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = i(t)) : void 0
            }, g.prototype._manageStamps = function () {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var n = this.stamps[t];
                        this._manageStamp(n)
                    }
                }
            }, g.prototype._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(), e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, g.prototype._manageStamp = u, g.prototype._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(), n = this._boundingRect, i = p(t), o = {
                    left: e.left - n.left - i.marginLeft,
                    top: e.top - n.top - i.marginTop,
                    right: n.right - e.right - i.marginRight,
                    bottom: n.bottom - e.bottom - i.marginBottom
                };
                return o
            }, g.prototype.handleEvent = function (t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, g.prototype.bindResize = function () {
                this.isResizeBound || (n.bind(t, "resize", this), this.isResizeBound = !0)
            }, g.prototype.unbindResize = function () {
                this.isResizeBound && n.unbind(t, "resize", this), this.isResizeBound = !1
            }, g.prototype.onresize = function () {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }

                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, g.prototype.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, g.prototype.needsResizeLayout = function () {
                var t = p(this.element), e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, g.prototype.addItems = function (t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, g.prototype.appended = function (t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, g.prototype.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var n = this.items.slice(0);
                    this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
                }
            }, g.prototype.reveal = function (t) {
                var e = t && t.length;
                if (e) for (var n = 0; e > n; n++) {
                    var i = t[n];
                    i.reveal()
                }
            }, g.prototype.hide = function (t) {
                var e = t && t.length;
                if (e) for (var n = 0; e > n; n++) {
                    var i = t[n];
                    i.hide()
                }
            }, g.prototype.getItem = function (t) {
                for (var e = 0, n = this.items.length; n > e; e++) {
                    var i = this.items[e];
                    if (i.element === t) return i
                }
            }, g.prototype.getItems = function (t) {
                if (t && t.length) {
                    for (var e = [], n = 0, i = t.length; i > n; n++) {
                        var o = t[n], r = this.getItem(o);
                        r && e.push(r)
                    }
                    return e
                }
            }, g.prototype.remove = function (t) {
                t = i(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function () {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var n = 0, r = e.length; r > n; n++) {
                        var a = e[n];
                        a.remove(), o(a, this.items)
                    }
                }
            }, g.prototype.destroy = function () {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, n = this.items.length; n > e; e++) {
                    var i = this.items[e];
                    i.destroy()
                }
                this.unbindResize();
                var o = this.element.outlayerGUID;
                delete y[o], delete this.element.outlayerGUID, c && c.removeData(this.element, this.constructor.namespace)
            }, g.data = function (t) {
                var e = t && t.outlayerGUID;
                return e && y[e]
            }, g.create = function (t, n) {
                function i() {
                    g.apply(this, arguments)
                }

                return Object.create ? i.prototype = Object.create(g.prototype) : e(i.prototype, g.prototype), i.prototype.constructor = i, i.defaults = e({}, g.defaults), e(i.defaults, n), i.prototype.settings = {}, i.namespace = t, i.data = g.data, i.Item = function () {
                    m.apply(this, arguments)
                }, i.Item.prototype = new m, a(function () {
                    for (var e = r(t), n = s.querySelectorAll(".js-" + e), o = "data-" + e + "-options", a = 0, u = n.length; u > a; a++) {
                        var d, h = n[a], p = h.getAttribute(o);
                        try {
                            d = p && JSON.parse(p)
                        } catch (t) {
                            l && l.error("Error parsing " + o + " on " + h.nodeName.toLowerCase() + (h.id ? "#" + h.id : "") + ": " + t);
                            continue
                        }
                        var f = new i(h, d);
                        c && c.data(h, t, f)
                    }
                }), c && c.bridget && c.bridget(t, i), i
            }, g.Item = m, g
        }

        var s = t.document, l = t.console, c = t.jQuery, u = function () {
            }, d = Object.prototype.toString,
            h = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (t) {
                return t instanceof HTMLElement
            } : function (t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            }, p = Array.prototype.indexOf ? function (t, e) {
                return t.indexOf(e)
            } : function (t, e) {
                for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], a) : "object" == typeof exports ? module.exports = a(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = a(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window), function (t) {
        function e(t) {
            function e() {
                t.Item.apply(this, arguments)
            }

            e.prototype = new t.Item, e.prototype._create = function () {
                this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
            }, e.prototype.updateSortData = function () {
                if (!this.isIgnored) {
                    this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                    var t = this.layout.options.getSortData, e = this.layout._sorters;
                    for (var n in t) {
                        var i = e[n];
                        this.sortData[n] = i(this.element, this)
                    }
                }
            };
            var n = e.prototype.destroy;
            return e.prototype.destroy = function () {
                n.apply(this, arguments), this.css({display: ""})
            }, e
        }

        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window), function (t) {
        function e(t, e) {
            function n(t) {
                this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
            }

            return function () {
                function t(t) {
                    return function () {
                        return e.prototype[t].apply(this.isotope, arguments)
                    }
                }

                for (var i = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], o = 0, r = i.length; r > o; o++) {
                    var a = i[o];
                    n.prototype[a] = t(a)
                }
            }(), n.prototype.needsVerticalResizeLayout = function () {
                var e = t(this.isotope.element), n = this.isotope.size && e;
                return n && e.innerHeight !== this.isotope.size.innerHeight
            }, n.prototype._getMeasurement = function () {
                this.isotope._getMeasurement.apply(this, arguments)
            }, n.prototype.getColumnWidth = function () {
                this.getSegmentSize("column", "Width")
            }, n.prototype.getRowHeight = function () {
                this.getSegmentSize("row", "Height")
            }, n.prototype.getSegmentSize = function (t, e) {
                var n = t + e, i = "outer" + e;
                if (this._getMeasurement(n, i), !this[n]) {
                    var o = this.getFirstItemSize();
                    this[n] = o && o[i] || this.isotope.size["inner" + e]
                }
            }, n.prototype.getFirstItemSize = function () {
                var e = this.isotope.filteredItems[0];
                return e && e.element && t(e.element)
            }, n.prototype.layout = function () {
                this.isotope.layout.apply(this.isotope, arguments)
            }, n.prototype.getSize = function () {
                this.isotope.getSize(), this.size = this.isotope.size
            }, n.modes = {}, n.create = function (t, e) {
                function i() {
                    n.apply(this, arguments)
                }

                return i.prototype = new n, e && (i.options = e), i.prototype.namespace = t, n.modes[t] = i, i
            }, n
        }

        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window), function (t) {
        function e(t, e) {
            var i = t.create("masonry");
            return i.prototype._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
                var t = this.cols;
                for (this.colYs = []; t--;) this.colYs.push(0);
                this.maxY = 0
            }, i.prototype.measureColumns = function () {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0], n = t && t.element;
                    this.columnWidth = n && e(n).outerWidth || this.containerWidth
                }
                this.columnWidth += this.gutter, this.cols = Math.floor((this.containerWidth + this.gutter) / this.columnWidth), this.cols = Math.max(this.cols, 1)
            }, i.prototype.getContainerWidth = function () {
                var t = this.options.isFitWidth ? this.element.parentNode : this.element, n = e(t);
                this.containerWidth = n && n.innerWidth
            }, i.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth % this.columnWidth, i = e && 1 > e ? "round" : "ceil",
                    o = Math[i](t.size.outerWidth / this.columnWidth);
                o = Math.min(o, this.cols);
                for (var r = this._getColGroup(o), a = Math.min.apply(Math, r), s = n(r, a), l = {
                    x: this.columnWidth * s,
                    y: a
                }, c = a + t.size.outerHeight, u = this.cols + 1 - r.length, d = 0; u > d; d++) this.colYs[s + d] = c;
                return l
            }, i.prototype._getColGroup = function (t) {
                if (2 > t) return this.colYs;
                for (var e = [], n = this.cols + 1 - t, i = 0; n > i; i++) {
                    var o = this.colYs.slice(i, i + t);
                    e[i] = Math.max.apply(Math, o)
                }
                return e
            }, i.prototype._manageStamp = function (t) {
                var n = e(t), i = this._getElementOffset(t), o = this.options.isOriginLeft ? i.left : i.right,
                    r = o + n.outerWidth, a = Math.floor(o / this.columnWidth);
                a = Math.max(0, a);
                var s = Math.floor(r / this.columnWidth);
                s -= r % this.columnWidth ? 0 : 1, s = Math.min(this.cols - 1, s);
                for (var l = (this.options.isOriginTop ? i.top : i.bottom) + n.outerHeight, c = a; s >= c; c++) this.colYs[c] = Math.max(l, this.colYs[c])
            }, i.prototype._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var t = {height: this.maxY};
                return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
            }, i.prototype._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
                return (this.cols - t) * this.columnWidth - this.gutter
            }, i.prototype.needsResizeLayout = function () {
                var t = this.containerWidth;
                return this.getContainerWidth(), t !== this.containerWidth
            }, i
        }

        var n = Array.prototype.indexOf ? function (t, e) {
            return t.indexOf(e)
        } : function (t, e) {
            for (var n = 0, i = t.length; i > n; n++) {
                var o = t[n];
                if (o === e) return n
            }
            return -1
        };
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
    }(window), function (t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t, n) {
            var i = t.create("masonry"), o = i.prototype._getElementOffset, r = i.prototype.layout,
                a = i.prototype._getMeasurement;
            e(i.prototype, n.prototype), i.prototype._getElementOffset = o, i.prototype.layout = r, i.prototype._getMeasurement = a;
            var s = i.prototype.measureColumns;
            i.prototype.measureColumns = function () {
                this.items = this.isotope.filteredItems, s.call(this)
            };
            var l = i.prototype._manageStamp;
            return i.prototype._manageStamp = function () {
                this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
            }, i
        }

        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], n) : "object" == typeof exports ? module.exports = n(require("../layout-mode"), require("masonry-layout")) : n(t.Isotope.LayoutMode, t.Masonry)
    }(window), function (t) {
        function e(t) {
            var e = t.create("fitRows");
            return e.prototype._resetLayout = function () {
                this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
            }, e.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = t.size.outerWidth + this.gutter, n = this.isotope.size.innerWidth + this.gutter;
                0 !== this.x && e + this.x > n && (this.x = 0, this.y = this.maxY);
                var i = {x: this.x, y: this.y};
                return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
            }, e.prototype._getContainerSize = function () {
                return {height: this.maxY}
            }, e
        }

        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window), function (t) {
        function e(t) {
            var e = t.create("vertical", {horizontalAlignment: 0});
            return e.prototype._resetLayout = function () {
                this.y = 0
            }, e.prototype._getItemLayoutPosition = function (t) {
                t.getSize();
                var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                    n = this.y;
                return this.y += t.size.outerHeight, {x: e, y: n}
            }, e.prototype._getContainerSize = function () {
                return {height: this.y}
            }, e
        }

        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window), function (t) {
        function e(t, e) {
            for (var n in e) t[n] = e[n];
            return t
        }

        function n(t) {
            return "[object Array]" === u.call(t)
        }

        function i(t) {
            var e = [];
            if (n(t)) e = t; else if (t && "number" == typeof t.length) for (var i = 0, o = t.length; o > i; i++) e.push(t[i]); else e.push(t);
            return e
        }

        function o(t, e) {
            var n = d(e, t);
            -1 !== n && e.splice(n, 1)
        }

        function r(t, n, r, l, u) {
            function d(t, e) {
                return function (n, i) {
                    for (var o = 0, r = t.length; r > o; o++) {
                        var a = t[o], s = n.sortData[a], l = i.sortData[a];
                        if (s > l || l > s) {
                            var c = void 0 !== e[a] ? e[a] : e, u = c ? 1 : -1;
                            return (s > l ? 1 : -1) * u
                        }
                    }
                    return 0
                }
            }

            var h = t.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
            h.Item = l, h.LayoutMode = u, h.prototype._create = function () {
                this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
                for (var e in u.modes) this._initLayoutMode(e)
            }, h.prototype.reloadItems = function () {
                this.itemGUID = 0, t.prototype.reloadItems.call(this)
            }, h.prototype._itemize = function () {
                for (var e = t.prototype._itemize.apply(this, arguments), n = 0, i = e.length; i > n; n++) {
                    var o = e[n];
                    o.id = this.itemGUID++
                }
                return this._updateItemsSortData(e), e
            }, h.prototype._initLayoutMode = function (t) {
                var n = u.modes[t], i = this.options[t] || {};
                this.options[t] = n.options ? e(n.options, i) : i, this.modes[t] = new n(this)
            }, h.prototype.layout = function () {
                return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
            }, h.prototype._layout = function () {
                var t = this._getIsInstant();
                this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
            }, h.prototype.arrange = function (t) {
                this.option(t), this._getIsInstant(), this.filteredItems = this._filter(this.items), this._sort(), this._layout()
            }, h.prototype._init = h.prototype.arrange, h.prototype._getIsInstant = function () {
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                return this._isInstant = t, t
            }, h.prototype._filter = function (t) {
                function e() {
                    d.reveal(o), d.hide(r)
                }

                var n = this.options.filter;
                n = n || "*";
                for (var i = [], o = [], r = [], a = this._getFilterTest(n), s = 0, l = t.length; l > s; s++) {
                    var c = t[s];
                    if (!c.isIgnored) {
                        var u = a(c);
                        u && i.push(c), u && c.isHidden ? o.push(c) : u || c.isHidden || r.push(c)
                    }
                }
                var d = this;
                return this._isInstant ? this._noTransition(e) : e(), i
            }, h.prototype._getFilterTest = function (t) {
                return a && this.options.isJQueryFiltering ? function (e) {
                    return a(e.element).is(t)
                } : "function" == typeof t ? function (e) {
                    return t(e.element)
                } : function (e) {
                    return r(e.element, t)
                }
            }, h.prototype.updateSortData = function (t) {
                var e;
                t ? (t = i(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
            }, h.prototype._getSorters = function () {
                var t = this.options.getSortData;
                for (var e in t) {
                    var n = t[e];
                    this._sorters[e] = p(n)
                }
            }, h.prototype._updateItemsSortData = function (t) {
                for (var e = t && t.length, n = 0; e && e > n; n++) {
                    var i = t[n];
                    i.updateSortData()
                }
            };
            var p = function () {
                function t(t) {
                    if ("string" != typeof t) return t;
                    var n = s(t).split(" "), i = n[0], o = i.match(/^\[(.+)\]$/), r = o && o[1], a = e(r, i),
                        l = h.sortDataParsers[n[1]];
                    return t = l ? function (t) {
                        return t && l(a(t))
                    } : function (t) {
                        return t && a(t)
                    }
                }

                function e(t, e) {
                    var n;
                    return n = t ? function (e) {
                        return e.getAttribute(t)
                    } : function (t) {
                        var n = t.querySelector(e);
                        return n && c(n)
                    }
                }

                return t
            }();
            h.sortDataParsers = {
                parseInt: function (t) {
                    return parseInt(t, 10)
                }, parseFloat: function (t) {
                    return parseFloat(t)
                }
            }, h.prototype._sort = function () {
                var t = this.options.sortBy;
                if (t) {
                    var e = [].concat.apply(t, this.sortHistory), n = d(e, this.options.sortAscending);
                    this.filteredItems.sort(n), t !== this.sortHistory[0] && this.sortHistory.unshift(t)
                }
            }, h.prototype._mode = function () {
                var t = this.options.layoutMode, e = this.modes[t];
                if (!e) throw new Error("No layout mode: " + t);
                return e.options = this.options[t], e
            }, h.prototype._resetLayout = function () {
                t.prototype._resetLayout.call(this), this._mode()._resetLayout()
            }, h.prototype._getItemLayoutPosition = function (t) {
                return this._mode()._getItemLayoutPosition(t)
            }, h.prototype._manageStamp = function (t) {
                this._mode()._manageStamp(t)
            }, h.prototype._getContainerSize = function () {
                return this._mode()._getContainerSize()
            }, h.prototype.needsResizeLayout = function () {
                return this._mode().needsResizeLayout()
            }, h.prototype.appended = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var n = this._filterRevealAdded(e);
                    this.filteredItems = this.filteredItems.concat(n)
                }
            }, h.prototype.prepended = function (t) {
                var e = this._itemize(t);
                if (e.length) {
                    var n = this.items.slice(0);
                    this.items = e.concat(n), this._resetLayout(), this._manageStamps();
                    var i = this._filterRevealAdded(e);
                    this.layoutItems(n), this.filteredItems = i.concat(this.filteredItems)
                }
            }, h.prototype._filterRevealAdded = function (t) {
                var e = this._noTransition(function () {
                    return this._filter(t)
                });
                return this.layoutItems(e, !0), this.reveal(e), t
            }, h.prototype.insert = function (t) {
                var e = this.addItems(t);
                if (e.length) {
                    var n, i, o = e.length;
                    for (n = 0; o > n; n++) i = e[n], this.element.appendChild(i.element);
                    var r = this._filter(e);
                    for (this._noTransition(function () {
                        this.hide(r)
                    }), n = 0; o > n; n++) e[n].isLayoutInstant = !0;
                    for (this.arrange(), n = 0; o > n; n++) delete e[n].isLayoutInstant;
                    this.reveal(r)
                }
            };
            var f = h.prototype.remove;
            return h.prototype.remove = function (t) {
                t = i(t);
                var e = this.getItems(t);
                if (f.call(this, t), e && e.length) for (var n = 0, r = e.length; r > n; n++) {
                    var a = e[n];
                    o(a, this.filteredItems)
                }
            }, h.prototype.shuffle = function () {
                for (var t = 0, e = this.items.length; e > t; t++) {
                    var n = this.items[t];
                    n.sortData.random = Math.random()
                }
                this.options.sortBy = "random", this._sort(), this._layout()
            }, h.prototype._noTransition = function (t) {
                var e = this.options.transitionDuration;
                this.options.transitionDuration = 0;
                var n = t.call(this);
                return this.options.transitionDuration = e, n
            }, h.prototype.getFilteredItemElements = function () {
                for (var t = [], e = 0, n = this.filteredItems.length; n > e; e++) t.push(this.filteredItems[e].element);
                return t
            }, h
        }

        var a = t.jQuery, s = String.prototype.trim ? function (t) {
            return t.trim()
        } : function (t) {
            return t.replace(/^\s+|\s+$/g, "")
        }, l = document.documentElement, c = l.textContent ? function (t) {
            return t.textContent
        } : function (t) {
            return t.innerText
        }, u = Object.prototype.toString, d = Array.prototype.indexOf ? function (t, e) {
            return t.indexOf(e)
        } : function (t, e) {
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n;
            return -1
        };
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], r) : "object" == typeof exports ? module.exports = r(require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = r(t.Outlayer, t.getSize, t.matchesSelector, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window), function (t, e, n) {
        "use strict";

        function i(t, n) {
            var i = e.createElement("social").style, o = "webkit Moz o ms".split(" ");
            if (n in i) return !0;
            for (var r = 0, a = o.length; a > r; r++) if (o[r] + t in i) return !0;
            return !1
        }

        function o(t) {
            var e = t.split("/");
            return e.pop(), e.join("/") + "/"
        }

        function r() {
            var t;
            return n("script").each(function () {
                var e = this.src || "";
                return e.match(l.scriptSrcRegex) ? (t = o(e), !1) : void 0
            }), t
        }

        var a, s, l = {
            isGradeA: !(!("querySelectorAll" in e) || t.blackberry || "ontouchstart" in window || "onmsgesturechange" in window),
            minCount: 1,
            serviceUrl: "service/index.php",
            initSelector: ".socialcount",
            classes: {
                gradeA: "grade-a",
                active: "active",
                touch: "touch",
                noTransforms: "no-transforms",
                showCounts: "counts",
                countContent: "count",
                minCount: "minimum"
            },
            thousandCharacter: "K",
            millionCharacter: "M",
            missingResultText: "-",
            selectors: {facebook: ".facebook", twitter: ".twitter", googleplus: ".googleplus"},
            scriptSrcRegex: /socialcount[\w.]*.js/i,
            plugins: {init: [], bind: []},
            cache: {},
            removeFileName: o,
            resolveServiceDir: r,
            isCssAnimations: function () {
                return i("AnimationName", "animationName")
            },
            isCssTransforms: function () {
                return i("Transform", "transform")
            },
            getUrl: function (t) {
                return t.attr("data-url") || location.href
            },
            getFacebookAction: function (t) {
                return (t.attr("data-facebook-action") || "like").toLowerCase()
            },
            isCountsEnabled: function (t) {
                return "true" === t.attr("data-counts")
            },
            isSmallSize: function (t) {
                return t.is(".socialcount-small")
            },
            getCounts: function (t, e) {
                var i, o, a, c = l.selectors, u = l.cache, d = {};
                for (a in c) i = t.find(c[a]), o = i.find("." + l.classes.countContent), o.length ? d[a] = o : (d[a] = s.clone(), i.append(d[a]));
                return u[e] || (u[e] = n.ajax({
                    url: r() + l.serviceUrl,
                    data: {url: e},
                    dataType: "json"
                })), u[e].done(function (t) {
                    for (var e in t) t.hasOwnProperty(e) && d[e] && t[e] > l.minCount && d[e].addClass(l.classes.minCount).html(l.normalizeCount(t[e]))
                }), u[e]
            },
            init: function (t) {
                var e = l.getFacebookAction(t), n = [e], i = l.isSmallSize(t), o = l.getUrl(t), r = l.plugins.init,
                    a = l.isCountsEnabled(t);
                l.isGradeA && n.push(l.classes.gradeA), l.isCssTransforms() || n.push(l.classes.noTransforms), a && n.push(l.classes.showCounts), t.addClass(n.join(" "));
                for (var s = 0, c = r.length; c > s; s++) r[s].call(t);
                l.isGradeA && l.bindEvents(t, o, e, i), a && !i && l.getCounts(t, o)
            },
            normalizeCount: function (t) {
                return t || 0 === t ? t >= 1e6 ? Math.floor(t / 1e6) + l.millionCharacter : t >= 1e5 ? Math.floor(t / 1e3) + l.thousandCharacter : t > 1e3 ? (t / 1e3).toFixed(1).replace(/\.0/, "") + l.thousandCharacter : t : l.missingResultText
            },
            bindEvents: function (t, i, o, r) {
                function s(t, i, o) {
                    t.closest("li").bind("mouseenter", function () {
                        n(this).closest("li").addClass("hover")
                    }).bind("mouseleave", function () {
                        n(this).closest("li").removeClass("hover")
                    }), t.one("mouseover", function () {
                        var t, r = n(this), s = r.closest("li"), c = a.clone(), u = n(i),
                            d = n('<div class="sc-button"/>').append(u), h = n.Deferred();
                        h.promise().always(function () {
                            var t = s.find("iframe");
                            t.length ? t.bind("load", function () {
                                c.remove()
                            }) : c.remove()
                        }), s.addClass(l.classes.active).append(c).append(d), o ? (t = e.createElement("script"), t.src = o, t.attachEvent ? t.attachEvent("onreadystatechange", function () {
                            "complete" === t.readyState && h.resolve()
                        }) : n(t).bind("load", h.resolve), e.body.appendChild(t)) : u.is("iframe") && h.resolve();
                    })
                }

                r || (s(t.find(l.selectors.facebook + " a"), '<iframe src="//www.facebook.com/plugins/like.php?href=' + encodeURIComponent(i) + "&amp;send=false&amp;layout=button_count&amp;width=100&amp;show_faces=true&amp;action=" + o + '&amp;colorscheme=light&amp;font=arial&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowTransparency="true"></iframe>'), s(t.find(l.selectors.twitter + " a"), '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a>', "//platform.twitter.com/widgets.js"), s(t.find(l.selectors.googleplus + " a"), '<div class="g-plusone" data-size="medium" data-annotation="none"></div>', "//apis.google.com/js/plusone.js"));
                for (var c = l.plugins.bind, u = 0, d = c.length; d > u; u++) c[u].call(t, s, i, r)
            }
        };
        n(function () {
            a = n("<div>").addClass("sc-loading").html(l.isCssAnimations() ? new Array(4).join('<div class="dot"></div>') : "Loading"), s = n("<span>").addClass(l.classes.countContent).html("&#160;"), n(l.initSelector).each(function () {
                var t = n(this);
                l.init(t)
            })
        }), window.SocialCount = l
    }(window, window.document, jQuery), function (t, e) {
        "use strict";
        e.classes.pinterest = ".pinterest", e.plugins.bind.push(function (t, n) {
            var i = this, o = i.data("share-text"), r = i.data("media");
            t(i.find(e.classes.pinterest), '<a href="http://pinterest.com/pin/create/button/?url=' + n + "&media=" + r + "&description=" + o + '" class="pin-it-button" count-layout="none"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a>', "//assets.pinterest.com/js/pinit.js")
        })
    }(jQuery, window.SocialCount), function (t, e) {
        "object" == typeof exports ? module.exports = e(require("jquery")) : "function" == typeof define && define.amd ? define("EasyPieChart", ["jquery"], e) : e(t.jQuery)
    }(this, function (t) {
        var e = function (t, e) {
            var n, i = document.createElement("canvas");
            "undefined" != typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(i);
            var o = i.getContext("2d");
            i.width = i.height = e.size, t.appendChild(i);
            var r = 1;
            window.devicePixelRatio > 1 && (r = window.devicePixelRatio, i.style.width = i.style.height = [e.size, "px"].join(""), i.width = i.height = e.size * r, o.scale(r, r)), o.translate(e.size / 2, e.size / 2), o.rotate((-.5 + e.rotate / 180) * Math.PI);
            var a = (e.size - e.lineWidth) / 2;
            e.scaleColor && e.scaleLength && (a -= e.scaleLength + 2), Date.now = Date.now || function () {
                return +new Date
            };
            var s = function (t, e, n) {
                n = Math.min(Math.max(-1, n || 0), 1);
                var i = 0 >= n;
                o.beginPath(), o.arc(0, 0, a, 0, 2 * Math.PI * n, i), o.strokeStyle = t, o.lineWidth = e, o.stroke()
            }, l = function () {
                var t, n, i = 24;
                o.lineWidth = 1, o.fillStyle = e.scaleColor, o.save();
                for (var i = 24; i > 0; --i) i % 6 === 0 ? (n = e.scaleLength, t = 0) : (n = .6 * e.scaleLength, t = e.scaleLength - n), o.fillRect(-e.size / 2 + t, 0, n, 1), o.rotate(Math.PI / 12);
                o.restore()
            }, c = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
                    window.setTimeout(t, 1e3 / 60)
                }
            }(), u = function () {
                e.scaleColor && l(), e.trackColor && s(e.trackColor, e.lineWidth, 1)
            };
            this.clear = function () {
                o.clearRect(e.size / -2, e.size / -2, e.size, e.size)
            }, this.draw = function (t) {
                e.scaleColor || e.trackColor ? o.getImageData && o.putImageData ? n ? o.putImageData(n, 0, 0) : (u(), n = o.getImageData(0, 0, e.size * r, e.size * r)) : (this.clear(), u()) : this.clear(), o.lineCap = e.lineCap;
                var i;
                i = "function" == typeof e.barColor ? e.barColor(t) : e.barColor, s(i, e.lineWidth, t / 100)
            }.bind(this), this.animate = function (t, n) {
                var i = Date.now();
                e.onStart(t, n);
                var o = function () {
                    var r = Math.min(Date.now() - i, e.animate), a = e.easing(this, r, t, n - t, e.animate);
                    this.draw(a), e.onStep(t, n, a), r >= e.animate ? e.onStop(t, n) : c(o)
                }.bind(this);
                c(o)
            }.bind(this)
        }, n = function (t, n) {
            var i = {
                barColor: "#ef1e25",
                trackColor: "#f9f9f9",
                scaleColor: "#dfe0e0",
                scaleLength: 5,
                lineCap: "round",
                lineWidth: 3,
                size: 110,
                rotate: 0,
                animate: 1e3,
                easing: function (t, e, n, i, o) {
                    return e /= o / 2, 1 > e ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
                },
                onStart: function () {
                },
                onStep: function () {
                },
                onStop: function () {
                }
            };
            if ("undefined" != typeof e) i.renderer = e; else {
                if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
                i.renderer = SVGRenderer
            }
            var o = {}, r = 0, a = function () {
                this.el = t, this.options = o;
                for (var e in i) i.hasOwnProperty(e) && (o[e] = n && "undefined" != typeof n[e] ? n[e] : i[e], "function" == typeof o[e] && (o[e] = o[e].bind(this)));
                o.easing = "string" == typeof o.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[o.easing]) ? jQuery.easing[o.easing] : i.easing, this.renderer = new o.renderer(t, o), this.renderer.draw(r), t.dataset && t.dataset.percent ? this.update(parseFloat(t.dataset.percent)) : t.getAttribute && t.getAttribute("data-percent") && this.update(parseFloat(t.getAttribute("data-percent")))
            }.bind(this);
            this.update = function (t) {
                return t = parseFloat(t), o.animate ? this.renderer.animate(r, t) : this.renderer.draw(t), r = t, this
            }.bind(this), a()
        };
        t.fn.easyPieChart = function (e) {
            return this.each(function () {
                var i;
                t.data(this, "easyPieChart") || (i = t.extend({}, e, t(this).data()), t.data(this, "easyPieChart", new n(this, i)))
            })
        }
    }), function (t) {
        "use strict";
        t.WPV = t.WPV || {}, t.WPV.ResponsiveElements = function () {
            var e = {
                elementsAttributeName: "data-respond",
                maxRefreshRate: 5,
                defaults: {start: 100, end: 900, interval: 50},
                init: function () {
                    t(function () {
                        e.el = {
                            window: t(window),
                            responsive_elements: t("[" + e.elementsAttributeName + "]")
                        }, e.events()
                    }), t(window).bind("wpv-ajax-content-loaded", e.resetElements)
                },
                resetElements: function () {
                    e.el.responsive_elements = t("[" + e.elementsAttributeName + "]"), e.unbind_events(), e.events()
                },
                parseOptions: function (t) {
                    if (!t) return !1;
                    if (this._options_cache = this._options_cache || {}, this._options_cache[t]) return this._options_cache[t];
                    for (var e = t.replace(/\s+/g, "").split(";"), n = {}, i = 0; i < e.length; i++) if (e[i]) {
                        var o = e[i].split(":"), r = o[0], a = o[1];
                        "px" === a.slice(-2) && (a = a.replace("px", "")), isNaN(a) || (a = parseInt(a, 10)), n[r] = a
                    }
                    return this._options_cache[t] = n, n
                },
                generateBreakpointsOnAllElements: function () {
                    e.el.responsive_elements.each(function (n, i) {
                        e.generateBreakpointsOnElement(t(i))
                    })
                },
                generateBreakpointsOnElement: function (t) {
                    var e = t.attr(this.elementsAttributeName), n = this.parseOptions(e) || this.defaults,
                        i = this.generateBreakpoints(t.width(), n);
                    this.cleanUpBreakpoints(t), t.addClass(i.join(" "))
                },
                generateBreakpoints: function (t, e) {
                    for (var n = e.start, i = e.end, o = e.interval, r = o > n ? o : ~~(n / o) * o, a = []; i >= r;) t > r && a.push("gt" + r), r > t && a.push("lt" + r), r === t && a.push("lt" + r), r += o;
                    return a
                },
                parseBreakpointClasses: function (e) {
                    var n = e.split(/\s+/), i = [];
                    return t(n).each(function (t, e) {
                        e.match(/^gt\d+|lt\d+$/) && i.push(e)
                    }), i
                },
                cleanUpBreakpoints: function (t) {
                    var e = this.parseBreakpointClasses(t.attr("class"));
                    t.removeClass(e.join(" "))
                },
                events: function () {
                    this.generateBreakpointsOnAllElements(), this.el.window.bind("resize.responsive_elements", this.utils.debounce(this.generateBreakpointsOnAllElements, this.maxRefreshRate))
                },
                unbind_events: function () {
                    this.el.window.unbind("resize.responsive_elements")
                },
                utils: {
                    debounce: function (t, e, n) {
                        var i, o = null;
                        return function () {
                            var r = this, a = arguments, s = function () {
                                o = null, n || (i = t.apply(r, a))
                            }, l = n && !o;
                            return clearTimeout(o), o = setTimeout(s, e), l && (i = t.apply(r, a)), i
                        }
                    }
                }
            };
            return e
        }(), t.WPV.ResponsiveElements.init()
    }(jQuery), function (t, e) {
        "use strict";
        t.fn.wpvDoubleTapClick = function () {
            var n = this;
            if (Modernizr.touch) {
                var i;
                t(n).bind("click", function (t) {
                    i !== this && (t.preventDefault(), i = this), t.stopPropagation()
                }), t(window).bind("click.sub-menu-double-tap", function () {
                    i = e
                })
            }
            return n
        }
    }(jQuery), function () {
        "use strict";
        jQuery.WPV = jQuery.WPV || {}, function (t) {
            t.WPV.reduce_column_count = function (e) {
                if (!t("body").hasClass("responsive-layout")) return e;
                var n = t(window).width();
                return 770 > n ? 1 : n >= 768 && 1024 >= n ? Math.min(e, 2) : n > 1024 && 1280 > n ? Math.min(e, 3) : e
            }, t.fn.touchwipe = function (e) {
                var n = {
                    min_move_x: 20, min_move_y: 20, wipeLeft: function () {
                    }, wipeRight: function () {
                    }, wipeUp: function () {
                    }, wipeDown: function () {
                    }, preventDefaultEvents: !0, canUseEvent: function () {
                        return !0
                    }
                };
                return e && t.extend(n, e), this.each(function (e, i) {
                    function o() {
                        t(i).unbind("touchmove", r), s = null, c = !1
                    }

                    function r(t) {
                        if (n.preventDefaultEvents && t.preventDefault(), c) {
                            var e = t.originalEvent.touches ? t.originalEvent.touches[0].pageX : t.pageX,
                                r = t.originalEvent.touches ? t.originalEvent.touches[0].pageY : t.pageY, a = s - e,
                                u = l - r;
                            Math.abs(a) >= n.min_move_x ? (o(), a > 0 ? n.wipeLeft.call(i, t) : n.wipeRight.call(i, t)) : Math.abs(u) >= n.min_move_y && (o(), u > 0 ? n.wipeDown.call(i, t) : n.wipeUp.call(i, t))
                        }
                    }

                    function a(e) {
                        if (!n.canUseEvent(e)) return !0;
                        if (e.originalEvent.touches) {
                            if (e.originalEvent.touches.length > 1) return !0;
                            s = e.originalEvent.touches[0].pageX, l = e.originalEvent.touches[0].pageY
                        } else s = e.pageX, l = e.pageY;
                        c = !0, t(i).bind("touchmove", r), n.preventDefaultEvents && e.preventDefault(), e.stopPropagation()
                    }

                    var s, l, c = !1;
                    t(i).bind("touchstart", a)
                }), this
            }
        }(jQuery)
    }(), function (t) {
        "use strict";
        var e = !1, n = !1;
        t(function () {
            e = !0
        }), t(document).bind("ready", function () {
            n = !0
        }), t.rawContentHandler = function (i) {
            if (t.isFunction(i)) if (e) {
                if (!n) {
                    var o = t("body")[0];
                    i.call(o, o.childNodes)
                }
                t(window).bind("rawContent", function (t, e) {
                    i.call(t.target, e || t.target.childNodes)
                })
            } else t(function () {
                t.rawContentHandler(i)
            })
        }
    }(jQuery), function (t) {
        "use strict";

        function e(t, e, n) {
            e = e || a, n = n || 0;
            var i = e[0] === window, o = i ? {top: 0, left: 0} : e.offset(), r = o.top + (i ? e.scrollTop() : 0),
                s = o.left + (i ? e.scrollLeft() : 0), l = s + e.width(), c = r + e.height(), u = t.offset(),
                d = t.width(), h = t.height();
            return r - n <= u.top + h && c + n >= u.top && s - n <= u.left + d && l + n >= u.left
        }

        function n(t, e, n) {
            t.css("opacity", 0).attr("src", e).removeClass("loading").addClass("loaded").trigger("jailStartAnimation"), t.animate({opacity: 1}, {
                duration: n.speed,
                easing: "linear",
                queue: !1,
                complete: function () {
                    n.resizeImages && this.originalCssHeight && (this.style.height = this.originalCssHeight, delete this.originalCssHeight), t.trigger("jailComplete"), n.callbackAfterEachImage && n.callbackAfterEachImage.call(this, t, n), n.images && n.callback && !n.callback.called && r(n.images) && (n.callback.called = !0, n.callback())
                }
            })
        }

        function i(i) {
            t("img.lazy[data-href]").each(function (o, r) {
                var s = t(r), l = t.extend({
                    timeout: 10,
                    effect: !1,
                    speed: 400,
                    selector: null,
                    offset: 0,
                    event: "scroll",
                    callback: jQuery.noop,
                    callbackAfterEachImage: jQuery.noop,
                    placeholder: !1,
                    resizeImages: !0,
                    container: a
                }, s.data("jailOptions") || {});
                if (!(i && "scroll" !== i && "resize" !== i && "orientationchange" !== i && l.event !== i || l.event && /scroll|resize|orientationchange/i.test(l.event) && !e(s, l.container) || s.is(".loading"))) {
                    s.addClass("loading");
                    var c = new Image, u = r.getAttribute("data-href");
                    r.removeAttribute("data-href"), c.onload = function () {
                        n(s, u, l)
                    }, c.src = u
                }
            })
        }

        function o(t) {
            var e = parseInt(t.getAttribute("width"), 10), n = parseInt(t.getAttribute("height"), 10);
            if (!isNaN(e) && isNaN(n)) {
                t.originalCssHeight = t.style.height || "";
                var i = t.offsetWidth / e;
                t.style.height = Math.floor(n * i) + "px"
            }
        }

        function r(e) {
            var n = !0;
            return e.each(function () {
                return t(this).hasClass("loaded") ? void 0 : (n = !1, !1)
            }), n
        }

        var a = t(window);
        t.fn.asynchImageLoader = t.fn.jail = function (e) {
            var n = t.extend({}, e || {}, {images: this});
            return this.data("jailOptions", n), n.resizeImages !== !1 && this.each(function () {
                o(this)
            }), n.event || i(), this
        }, a.bind("scroll resize load orientationchange", function (t) {
            i(t.type)
        }), t(function () {
            setTimeout(function () {
                i()
            }, 1e3)
        })
    }(jQuery), function (t) {
        "use strict";
        t.fn.wpvAnimateNumber = function (e) {
            var n = {
                from: 0, to: 0, animate: 1e3, easing: function (t, e, n, i, o) {
                    return e /= o / 2, 1 > e ? i / 2 * e * e + n : -i / 2 * (--e * (e - 2) - 1) + n
                }, onStep: t.noop, el: null
            };
            e = t.extend(n, e), e.easing = "string" == typeof e.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[e.easing]) ? jQuery.easing[e.easing] : n.easing;
            var i = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
                    window.setTimeout(t, 1e3 / 60)
                }
            }();
            t(this).each(function () {
                e.to = t(this).data("number") || e.to;
                var n = function () {
                    var t = Date.now(), n = function () {
                        var o = Math.min(Date.now() - t, e.animate),
                            r = e.easing(this, o, e.from, e.to - e.from, e.animate);
                        e.onStep.call(this, e.from, e.to, r), o < e.animate && i(n)
                    }.bind(this);
                    i(n)
                }.bind(this);
                n()
            })
        }
    }(jQuery), function (t) {
        "use strict";
        t(function () {
            t(".wpv-countdown").each(function () {
                var e = t(".wpvc-days .value", this), n = t(".wpvc-hours .value", this),
                    i = t(".wpvc-minutes .value", this), o = t(".wpvc-seconds .value", this),
                    r = parseInt(t(this).data("until"), 10), a = t(this).data("done"), s = t(this), l = function () {
                        var l = Math.round(+new Date / 1e3);
                        if (l >= r) return clearInterval(c), void s.html(t("<span />").addClass("wpvc-done wpvc-block").html(t("<span />").addClass("value").text(a)));
                        var u = r - l;
                        o.text(u % 60), u = Math.floor(u / 60), i.text(u % 60), u = Math.floor(u / 60), n.text(u % 24), u = Math.floor(u / 24), e.text(u)
                    }, c = setInterval(l, 1e3)
            })
        })
    }(jQuery), function (t) {
        "use strict";
        t(function () {
            t(".wpv-progress.pie").one("wpv-progress-visible", function () {
                t(this).addClass("started").easyPieChart({
                    animate: 1e3,
                    scaleLength: 0,
                    lineWidth: 3,
                    size: 130,
                    lineCap: "square",
                    onStep: function (e, n, i) {
                        t(this.el).find("span:first").text(~~i)
                    }
                })
            }), t(".wpv-progress.number").each(function () {
                t(this).one("wpv-progress-visible", function () {
                    t(this).addClass("started").wpvAnimateNumber({
                        onStep: function (e, n, i) {
                            t(this).find("span:first").text(~~i)
                        }
                    })
                })
            });
            var e = t(window), n = .6, i = 0,
                o = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
            setTimeout(function () {
                t(window).scroll(function () {
                    i = e.height();
                    var r = t(window).scrollTop() + i * n;
                    t(".wpv-progress:not(.started)").each(function () {
                        (r > t(this).offset().top || o) && t(this).trigger("wpv-progress-visible")
                    })
                }).scroll()
            }, 300)
        })
    }(jQuery), function (t) {
        "use strict";

        function e() {
            c && window.clearTimeout(c), c = setTimeout(function () {
                n.trigger("delayedResize")
            }, 150)
        }

        var n = t(window), i = t("html"), o = t("body").hasClass("responsive-layout");
        jQuery.WPV = jQuery.WPV || {}, jQuery.WPV.MEDIA = jQuery.WPV.MEDIA || {layout: {}};
        var r = [{min: 0, max: 479, className: "layout-smallest"}, {
            min: 480,
            max: 958,
            className: "layout-small"
        }, {min: 959, max: 1 / 0, className: "layout-max"}, {min: 959, max: 1280, className: "layout-max-low"}, {
            min: 0,
            max: 958,
            className: "layout-below-max"
        }];
        if (o && "matchMedia" in window) {
            var a, s, l = r.length;
            n.bind("resize.sizeClass load.sizeClass", function () {
                var t = [], e = [], i = {};
                for (s = 0; l > s; s++) {
                    var o = "(min-width: " + r[s].min + "px)";
                    1 / 0 !== r[s].max && (o += " and (max-width: " + r[s].max + "px)"), window.matchMedia(o).matches ? (t.push(r[s].className), i[r[s].className] = !0) : (e.push(r[s].className), i[r[s].className] = !1)
                }
                jQuery.WPV.MEDIA.layout = i, t = t.join(" "), e = e.join(" "), a !== t && (a = t, n.trigger("switchlayout"))
            })
        } else i.removeClass("layout-smallest layout-small layout-medium layout-below-max").addClass("layout-max"), t.WPV.MEDIA.layout = {"layout-max": !0};
        var c;
        n.bind("resize", e), t.WPV.MEDIA.is_mobile = function () {
            var t = !1;
            return function (e) {
                (/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (t = !0)
            }(navigator.userAgent || navigator.vendor || window.opera), t
        }
    }(jQuery), function (t) {
        "use strict";
        t(function () {
            var e = t("img.lazy").not(".portfolios.sortable img, .portfolios.isotope img, .portfolios.scroll-x img, :animated, .wpv-wrapper img");
            e.length && e.addClass("jail-started").jail({speed: 800});
            var n = t(".wpv-wrapper img.lazy");
            n.length && n.addClass("jail-started").jail({speed: 1400, event: "load"})
        })
    }(jQuery), function (t, e) {
        "use strict";
        t(function () {
            t(".wpv-overlay-search-trigger").click(function (e) {
                e.preventDefault(), t.magnificPopup.open({
                    type: "inline",
                    items: {src: "#wpv-overlay-search"},
                    closeOnBgClick: !1
                })
            });
            var n = function (e) {
                var n = "";
                t("body").hasClass("cbox-share-googleplus") && (n += '<div><div class="g-plusone" data-size="medium"></div> <scri' + 'pt type="text/javascript">(function() {\tvar po = document.createElement("script"); po.type = "text/javascript"; po.async = true;\tpo.src = "https://apis.google.com/js/plusone.js";\tvar s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(po, s);})();</scr' + 'ipt></div>'), t("body").hasClass("cbox-share-facebook") && (n += '<div><iframe src="//www.facebook.com/plugins/like.php?href=' + window.location.href + '&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:auto; height:21px;" allowTransparency="true"></iframe></div>'), t("body").hasClass("cbox-share-twitter") && (n += '<div><iframe allowtransparency="true" frameborder="0" scrolling="no" src="//platform.twitter.com/widgets/tweet_button.html" style="width:auto; height:20px;"></iframe></div>'), t("body").hasClass("cbox-share-pinterest") && (n += '<div><a href="http://pinterest.com/pin/create/button/" class="pin-it-button" count-layout="horizontal"><img border="0" src="//assets.pinterest.com/images/PinExt.png" title="Pin It" /></a></div>');
                var i = e.el && e.el.attr("title") || "";
                return '<div id="lightbox-share">' + n + '</div><div id="lightbox-text-title">' + i + "</div>"
            }, i = function (t) {
                return "true" === t.attr("data-iframe") ? "iframe" : t.attr("href").match(/^#/) ? "inline" : "image"
            };
            t.rawContentHandler(function () {
                var o = t("body").hasClass("woocommerce-page") ? ", div.product div.images a.zoom" : "";
                t(".vamtam-lightbox" + o, this).not(".no-lightbox, .size-thumbnail, .cboxElement").each(function () {
                    var o = t(this), r = i(t(this)),
                        a = t('[rel="' + o.attr("rel") + '"]').not(o).filter(".vamtam-lightbox, a.zoom"), s = a.length,
                        l = [{src: o.attr("href"), type: r}];
                    a.each(function () {
                        l.push({src: t(this).attr("href"), type: i(t(this))})
                    }), o.magnificPopup({
                        items: l,
                        midClick: !0,
                        preload: [1, 2],
                        iframe: {
                            patterns: {
                                youtube: {
                                    id: function (t) {
                                        var e = t.match(/youtu(?:\.be|be\.com)\/(?:.*v(?:\/|=)|(?:.*\/)?)([a-zA-Z0-9-_]+)/);
                                        return e[1] ? e[1] : t
                                    }
                                }, vimeo: {
                                    id: function (t) {
                                        var e = t.match(/vimeo\.com\/(?:.*#|.*videos?\/)?([0-9]+)/);
                                        return e[1] ? e[1] : t
                                    }
                                }, dailymotion: {
                                    index: "dailymotion.com", id: function (t) {
                                        var n = t.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                                        return null !== n ? n[4] !== e ? n[4] : n[2] : null
                                    }
                                }
                            }
                        },
                        image: {titleSrc: n},
                        gallery: {enabled: s},
                        callbacks: {
                            open: function () {
                                t(window).resize()
                            }
                        }
                    })
                })
            })
        })
    }(jQuery), function (t) {
        "use strict";
        t(function () {
            var e = function (e, n) {
                if (t.fn.isotope) {
                    var i = function () {
                        var e = t(this), o = e.width(),
                            r = t.WPV.reduce_column_count(parseInt(e.attr("data-columns"), 10));
                        e.bind("reload-isotope", i);
                        var a = Math.floor(o / r), s = e.find(n), l = e.hasClass("masonry") ? "masonry" : "fit_rows";
                        (e.hasClass("isotope") || e.hasClass("loop-wrapper") && !e.hasClass("wpv-isotope-loaded")) && s.not(".isotope-item"), s.removeClass("clearboth");
                        var c = {
                            fit_rows: {resizable: !1, layoutMode: "fitRows"},
                            masonry: {resizable: !1, columnWidth: a}
                        };
                        e.addClass("wpv-notransition"), s.css({width: a}), e.removeClass("wpv-notransition"), e.imagesLoaded(function () {
                            if (e.hasClass("wpv-isotope-loaded") ? e.isotope("appended", s.not(".isotope-item")) : e.addClass("wpv-isotope-loaded"), s.addClass("isotope-item"), e.isotope(c[l]), !e.hasClass("loop-wrapper")) {
                                var t = e.parent();
                                t.data("wpv-isotope-loaded") || e.hasClass("no-isotope-fadein") || (t.data("wpv-isotope-loaded", !0), t.css({
                                    height: "auto",
                                    overflow: "visible"
                                }))
                            }
                        })
                    };
                    t(e).each(i)
                }
            }, n = function () {
                e(".portfolios.isotope > ul", ">li"), t(".page-content > .portfolios.isotope:first-child > .sort_by_cat").appendTo(t(".page-header-content")).removeClass("grid-1-1"), t(".sort_by_cat").show()
            };
            t.rawContentHandler(function () {
                n(), t(".sort_by_cat[data-for] a").click(function (e) {
                    var n = t(this).attr("data-value"), i = t(t(this).closest(".sort_by_cat").data("for")).find("> ul");
                    t(this).parent().siblings().find(".active").removeClass("active"), t(this).addClass("active"), i.trigger("portfolioSortStart", [n]), i.isotope({filter: "all" === n ? "*" : '[data-type~="' + n + '"]'}, function () {
                        i.trigger("portfolioSortComplete", [n])
                    }), e.preventDefault()
                }).each(function () {
                    var e = t(this).attr("data-value"), n = t(t(this).closest(".sort_by_cat").data("for")).find("> ul");
                    "all" !== e && 0 === n.children().filter('[data-type~="' + e + '"]').length && t(this).parent().hide()
                })
            }), t.fn.isotope && t(window).smartresize(n);
            var i = function () {
                t(".loop-wrapper.news:not(.scroll-x):not(.masonry)").each(function () {
                    var e = t.WPV.reduce_column_count(parseInt(t(this).attr("data-columns"), 10));
                    t("> .page-content", this).removeClass("clearboth").filter(":nth-child(" + e + "n+1)").addClass("clearboth")
                }), e(".loop-wrapper.news.masonry", ">.page-content")
            };
            t(window).smartresize(i), i();
            var o = function () {
                e(".vamtam-comments-small > ol", ".comment")
            };
            t(window).smartresize(o), o()
        })
    }(jQuery), function (t) {
        "use strict";
        t(function () {
            t.rawContentHandler(function () {
                t.fn.tabs && t(".wpv-tabs", this).each(function () {
                    t(this).tabs({
                        activate: function (e, n) {
                            var i = n.newTab.context.hash, o = t(i);
                            o.attr("id", ""), window.location.hash = i, o.attr("id", i.replace("#", ""))
                        }, heightStyle: "content"
                    })
                }), t.fn.accordion && t(".wpv-accordion", this).accordion({heightStyle: "content"}).each(function () {
                    "true" === t(this).attr("data-collapsible") && t(this).accordion("option", "collapsible", !0).accordion("option", "active", !1)
                })
            })
        })
    }(jQuery), function () {
        "use strict";
        var t = navigator.userAgent.match(/(iPad|iPhone|iPod)/g);
        t && window.document.addEventListener("orientationchange", function () {
            var t = document.querySelector('meta[name="viewport"]');
            t && (t.content.match(/width=device-width/) && (t.content = t.content.replace(/width=[^,]+/, "width=1")), t.content = t.content.replace(/width=[^,]+/, "width=" + window.innerWidth))
        }, !1)
    }(), function (t, e) {
        "use strict";
        t(function () {
            if (Modernizr.touch) {
                var n;
                t(".fixed-header-box .menu-item-has-children > a").bind("click", function (t) {
                    n !== this && (t.preventDefault(), n = this), t.stopPropagation()
                }), t(window).bind("click.sub-menu-double-tap", function () {
                    n = e
                })
            }
            t("#main-menu .menu-item > .sub-menu").each(function () {
                t(this).wrap('<div class="sub-menu-wrapper"></div>')
            });
            var i = t("header.main-header"), o = t(window), r = t(document),
                a = t("#main-menu .sub-menu, #top-nav-wrapper .sub-menu");
            o.bind("smartresize.wpv-menu-classes", function () {
                var e = o.width();
                a.show().removeClass("invert-position").each(function () {
                    t(this).offset().left + t(this).width() > e && t(this).addClass("invert-position")
                }), a.css("display", "")
            });
            var s, l = /MSIE (\d+)/.exec(navigator.userAgent), c = function () {
                return !(!t("body").hasClass("sticky-header") || l && 8 === parseInt(l[1], 10) || t.WPV.MEDIA.is_mobile() || t.WPV.MEDIA.layout["layout-below-max"])
            }, u = function (e) {
                if (e.length > 0 && !s) {
                    s = e;
                    var n = !0, a = +new Date, l = function () {
                        var n = i.offset().top + i.height() - t(window).scrollTop(),
                            o = t("#wpadminbar") ? t("#wpadminbar").height() : 0;
                        return ~~(e.offset().top - (c() ? n : o))
                    }, u = function (t) {
                        return ~~((l() - o.scrollTop()) * t)
                    }, d = function (e) {
                        var i = u(.9), c = +new Date;
                        return e || Math.abs(i) <= 100 ? void (c - a > 300 ? (s = void 0, t("html,body").stop().animate({scrollTop: l()}, 50, "linear", function () {
                            t.WPV.blockStickyHeaderAnimation = !1
                        })) : h()) : void t("html,body").stop().animate({scrollTop: "+=" + i}, Math.abs(i) / 4, "linear", function () {
                            n || (t.WPV.blockStickyHeaderAnimation = !0), n = !1, l() - o.scrollTop() > 50 && o.scrollTop() + o.height() < r.height() ? d() : e || d(!0)
                        })
                    }, h = function () {
                        var e = +new Date, n = e - a;
                        t("html,body").stop().animate({scrollTop: l()}, n / 2, "linear", function () {
                            t("html,body").stop().animate({scrollTop: l()}, n / 2, "linear", function () {
                                t("html,body").stop().animate({scrollTop: l()}, 50, "linear", function () {
                                    s = void 0, t.WPV.blockStickyHeaderAnimation = !1
                                })
                            })
                        })
                    };
                    d()
                }
            };
            if (t(document.body).on("click", ".wpv-animated-page-scroll[href], .wpv-animated-page-scroll [href], .wpv-animated-page-scroll [data-href]", function (e) {
                var n = t(this).prop("href") || t(this).data("href"), i = t("#" + n.split("#")[1]),
                    o = document.createElement("a");
                o.href = n, i.length && o.pathname === window.location.pathname && (u(i), e.preventDefault())
            }), "" !== window.location.hash && (t('.wpv-animated-page-scroll[href*="' + window.location.hash + '"]').length || t('.wpv-animated-page-scroll [href*="' + window.location.hash + '"]').length)) {
                var d = t(window.location.hash);
                d.length > 0 && t("html,body").animate({scrollTop: t("html").scrollTop() + 1}, 0), setTimeout(function () {
                    u(d)
                }, 400)
            }
            var h = [];
            if (t("#main-menu").find(".menu").find(".maybe-current-menu-item, .current-menu-item").each(function () {
                var e = t("> a", this);
                if (e.prop("href").indexOf("#") > -1) {
                    var n = e.prop("href").split("#")[1];
                    "#" + n !== window.location.hash && t(this).removeClass("current-menu-item"), h.push([n, t(this), t("#" + n)])
                }
            }), h.length > 1) {
                var p = 0, f = 0, m = null;
                o.scroll(function () {
                    p = o.height(), f = t(document).height();
                    for (var e = o.scrollTop(), n = 1 / 0, i = null, r = 0; r < h.length; r++) {
                        var a = h[r][2];
                        if (a.length) {
                            var s = a.offset().top + 10;
                            s > e && n > s && (e + p / 2 > s || e + p > s && e + p === f) && (i = h[r], n = s), h[r][1].removeClass("current-menu-item")
                        }
                    }
                    i ? (i[1].addClass("current-menu-item"), "history" in window && (null !== m ? m[0] : "") !== i[0] && (window.history.pushState(i[0], t("> a", i[1]).text(), 0 !== e ? "#" + i[0] : location.href.replace(location.hash, "")), m = t.extend({}, i))) : null === i && null !== m && m[1].addClass("current-menu-item")
                })
            }
        })
    }(jQuery), function (t, e) {
        "use strict";
        t(function () {
            var n, i, o, r, a, s = t(window), l = t("body"), c = t(".fixed-header-box"), u = t("header.main-header"),
                d = u.hasClass("layout-logo-menu"), h = l.hasClass("sticky-header-type-over"),
                p = u.hasClass("layout-standard") && l.hasClass("sticky-header-type-half-over"),
                f = t(".header-middle"), m = t("#main-content"), g = c.find(".second-row"),
                v = l.hasClass("admin-bar") ? 32 : 0, y = c.find(".logo-wrapper"), b = 0, w = t(".top-nav"), x = 0,
                C = /MSIE (\d+)/.exec(navigator.userAgent), _ = !1, S = 46,
                k = t(".wpv-grid.has-video-bg").length ? "animate" : "transition",
                T = "transition" === k ? "ease" : "linear", E = function () {
                    return (l.hasClass("sticky-header") || l.hasClass("had-sticky-header")) && !(C && 8 === parseInt(C[1], 10)) && !t.WPV.MEDIA.is_mobile() && !t.WPV.MEDIA.layout["layout-below-max"] && c.length && g.length
                }, I = function () {
                    return t("#header-slider-container").length && 0 === t(".wpv-grid.parallax-bg").length
                }, A = function () {
                    return E() ? (n = s.width(), i = c.clone().html("").css({
                        "z-index": 0,
                        visibility: "hidden",
                        height: h ? w.outerHeight() : p ? y.outerHeight() : c.outerHeight()
                    }).insertAfter(c), c.css({
                        position: "fixed",
                        top: c.offset().top,
                        left: c.offset().left,
                        width: c.outerWidth(),
                        "-webkit-transform": "translateZ(0)"
                    }), I() ? (o = f.clone().html("").css({
                        "z-index": 0,
                        visibility: "hidden",
                        height: f.outerHeight()
                    }).insertAfter(f), f.css({
                        position: "fixed",
                        top: f.offset().top,
                        left: f.offset().left,
                        width: f.outerWidth(),
                        "z-index": 0
                    })) : o = null, b = y.removeClass("scrolled").outerHeight(), x = w.show().outerHeight(), y.addClass("loaded"), r = setInterval(L, 41), _ = !0, void s.scroll()) : void (l.hasClass("sticky-header") && l.removeClass("sticky-header").addClass("had-sticky-header"))
                }, z = function () {
                    i && i.remove(), c.removeClass("static-absolute fixed").css({
                        position: "",
                        top: "",
                        left: "",
                        width: "",
                        "-webkit-transform": ""
                    }), o && (o.remove(), f.css({
                        position: "",
                        top: "",
                        left: "",
                        width: "",
                        "z-index": 0
                    })), y.removeClass("scrolled loaded"), clearInterval(r), _ = !1
                }, j = t(".wpv-grid.has-video-bg").length > 0 && t(".wpv-grid.parallax-bg").length > 0, M = -1, P = !0,
                N = !1, L = function () {
                    if (_) {
                        var n = s.scrollTop();
                        if (l.toggleClass("wpv-scrolled", n > 0).toggleClass("wpv-not-scrolled", 0 === n), d) {
                            var r = h ? x : b - S + x, u = j ? 1.5 * r : 0;
                            "blockStickyHeaderAnimation" in t.WPV && t.WPV.blockStickyHeaderAnimation || (P = n > M, N = M > n, N && a === e ? a = n : P && (a = e), M = n), l.hasClass("no-sticky-header-animation") || l.hasClass("no-sticky-header-animation-tmp") || (n > u && P ? y.hasClass("scrolled") || (y.addClass("scrolled"), w.slideUp(300), l.addClass("no-sticky-header-animation-tmp"), setTimeout(function () {
                                l.removeClass("no-sticky-header-animation-tmp")
                            }, 350), j || (i[k]({height: "-=" + r + "px"}, 300, T), o && o.length && f[k]({top: "-=" + r + "px"}, 300, T))) : y.hasClass("scrolled") && N && (a - n > 60 || 120 > a) && (y.removeClass("scrolled"), w.slideDown(300), l.addClass("no-sticky-header-animation-tmp"), setTimeout(function () {
                                l.removeClass("no-sticky-header-animation-tmp")
                            }, 350), j || (i[k]({height: "+=" + r + "px"}, 300, T), o && o.length && f[k]({top: "+=" + r + "px"}, 300, T))))
                        } else {
                            var p = c.outerHeight(), C = g.height(), E = m.offset().top - v;
                            n + p >= E ? E >= n + C ? c.css({
                                position: "absolute",
                                top: E - p,
                                left: 0
                            }).addClass("static-absolute").removeClass("fixed second-stage-active") : c.css({
                                position: "fixed",
                                top: v + C - p,
                                left: i.offset().left,
                                width: c.outerWidth()
                            }).addClass("second-stage-active") : c.removeClass("static-absolute second-stage-active").css({
                                position: "fixed",
                                top: i.offset().top,
                                left: i.offset().left,
                                width: i.outerWidth()
                            })
                        }
                        c.hasClass("fixed") || c.hasClass("static-absolute") || c.hasClass("second-stage-active") || c.css({
                            position: "fixed",
                            top: i.offset().top,
                            left: i.offset().left,
                            width: c.outerWidth()
                        }).addClass("fixed")
                    }
                };
            s.bind("scroll touchmove", L).smartresize(function () {
                s.width() !== n && (z(), A())
            }), A()
        })
    }(jQuery), function (t) {
        "use strict";
        var e = t(window), n = .75, i = .7, o = 0, r = /MSIE (\d+)/.exec(navigator.userAgent),
            a = navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/);
        e.resize(function () {
            o = e.height(), r && 8 === parseInt(r[1], 10) || a || t.WPV.MEDIA.layout["layout-below-max"] ? t(".wpv-grid.animated-active").removeClass("animated-active").addClass("animated-suspended") : t(".wpv-grid.animated-suspended").removeClass("animated-suspended").addClass("animated-active")
        }).resize(), e.bind("scroll touchmove load", function () {
            var o = e.height(), r = t(window).scrollTop() + o, s = i * o;
            t(".wpv-grid.animated-active:not(.animation-ended)").each(function () {
                var e = Math.max(100, Math.min(s, n * t(this).outerHeight())),
                    i = t(this).hasClass("animation-zoom-in") ? t(this).height() / 2 : 0;
                if (!(r - e > t(this).offset().top - i || a)) return !1;
                var o = t(this);
                o.addClass("animation-ended")
            })
        }).scroll()
    }(jQuery), function (t) {
        "use strict";
        var e = t(window), n = e.height(), i = /MSIE (\d+)/.exec(navigator.userAgent);
        e.bind("resize", function () {
            n = e.height(), !Modernizr.csscalc || i && 8 === parseInt(i[1], 10) || t.WPV.MEDIA.is_mobile() || t.WPV.MEDIA.layout["layout-below-max"] ? (t(".wpv-grid.parallax-bg").removeClass("parallax-bg").addClass("parallax-bg-suspended"), t(".wpv-parallax-bg-img").css({"background-position": "50% 50%"})) : (t(".wpv-grid.parallax-bg-suspended").removeClass("parallax-bg-suspended").addClass("parallax-bg"), e.scroll())
        });
        var o = function (t, e, i, o, r, a) {
            var s = "";
            switch (t) {
                case"fixed":
                    s = Math.round((o - i) * r) + "px";
                    break;
                case"to-centre":
                    s = "calc(50% - " + Math.round((i + a / 2 - o - n / 2) * r) + "px)"
            }
            return e + " " + s
        };
        e.bind("scroll touchmove load", _.throttle(function () {
            var i = e.scrollTop(), r = i + n;
            t(".wpv-grid.parallax-bg").each(function () {
                var e = t(this).offset().top, n = t(this).outerHeight();
                if (!(i > e + n || e > r)) {
                    var a = t(".wpv-parallax-bg-img", this);
                    if (a.length) {
                        var s = t(this).data("parallax-method"), l = t(this).data("parallax-inertia"),
                            c = o(s, "50%", e, i, l, n), u = {"background-position": c};
                        a.css(u)
                    }
                }
            })
        }, 41));
        var r = "position image color size attachment repeat".split(" ");
        t(function () {
            t(".wpv-grid.parallax-bg:not(.parallax-loaded)").each(function () {
                var e = t(this), n = {};
                t.each(r, function (t, i) {
                    n["background-" + i] = e.css("background-" + i)
                }), e.addClass("parallax-loaded").wrapInner(function () {
                    return t("<div></div>").addClass("wpv-parallax-bg-content")
                }).prepend(function () {
                    var e = t("<div></div>").addClass("wpv-parallax-bg-img").css(n);
                    return e
                }).css("background", "");
            }), e.scroll()
        })
    }(jQuery), function () {
        "use strict";
        jQuery.WPV = jQuery.WPV || {}, function (t) {
            var e = t(window);
            t(function () {
                if (top !== window && /vamtam\.com/.test(document.location.href)) {
                    var n = 0;
                    setInterval(function () {
                        t(window).width() !== n && (t(window).resize(), setTimeout(function () {
                            t(window).resize()
                        }, 100), setTimeout(function () {
                            t(window).resize()
                        }, 200), setTimeout(function () {
                            t(window).resize()
                        }, 300), setTimeout(function () {
                            t(window).resize()
                        }, 500), n = t(window).width())
                    }, 200)
                }
                var i = t("body");
                if (i.is(".responsive-layout") && e.triggerHandler("resize.sizeClass"), i.bind("wpv-content-resized", function () {
                    setTimeout(function () {
                        i.trigger("wpv-hide-splash-screen")
                    }, 1e3), i.imagesLoaded(function () {
                        i.trigger("wpv-hide-splash-screen")
                    })
                }).one("wpv-hide-splash-screen", function () {
                    t(".wpv-splash-screen").fadeOut(500, function () {
                        t(this).remove()
                    })
                }), t.fn.chosen && t(".wpv-chosen-select").chosen({width: "100%"}), t.webshims && t.webshims.polyfill("forms forms-ext"), function () {
                    var e, n = t(".boxed-layout");
                    t(window).scroll(function (t) {
                        clearTimeout(e), n.hasClass("disable-hover") || t.target !== document || n.addClass("disable-hover"), e = setTimeout(function () {
                            n.removeClass("disable-hover")
                        }, 500)
                    })
                }(), t("html").is(".placeholder") && t.rawContentHandler(function () {
                    t(".label-to-placeholder label[for]").each(function () {
                        t("#" + t(this).prop("for")).attr("placeholder", t(this).text()), t(this).hide()
                    })
                }), t("#tribe-events-bar").appendTo(t(".meta-header-inside")).closest("body").addClass("repositioned-tribe-events-bar"), "tribe_ev" in window && t(window.tribe_ev.events).bind("tribe_ev_monthView_ajaxSuccess", function () {
                    t(".meta-header-inside .title").html(t(".tribe-events-page-title").html())
                }), setTimeout(function () {
                    t(".tt_tabs").unbind("tabsbeforeactivate")
                }, 100), navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/)) {
                    var o = /Version\/(\d+)/.exec(navigator.userAgent);
                    o && parseInt(o[1], 10) <= 7 && t("html").addClass("bad-ios")
                }
                e.bind("resize.video load.video", function () {
                    t(".portfolio-image-wrapper,\t\t\t\t\t.boxed-layout .media-inner,\t\t\t\t\t.boxed-layout .loop-wrapper.news .thumbnail,\t\t\t\t\t.boxed-layout .portfolio-image .thumbnail,\t\t\t\t\t.boxed-layout .wpv-video-frame").find("iframe, object, embed, video").each(function () {
                        var e = t(this);
                        "0" === e.prop("width") && "0" === e.prop("height") ? e.css({width: "100%"}).css({height: 9 * e.width() / 16}) : e.css({height: e.prop("height") * e.width() / e.prop("width")}), e.trigger("vamtam-video-resized")
                    }), setTimeout(function () {
                        t(".mejs-time-rail").css("width", "-=1px")
                    }, 100)
                }).triggerHandler("resize.video"), "mediaelementplayer" in t.fn && t(".wpv-background-video").mediaelementplayer({
                    videoWidth: "100%",
                    videoHeight: "100%",
                    loop: !0,
                    enableAutosize: !0,
                    features: []
                }), t(".wpv-grid.has-video-bg").addClass("video-bg-loaded"), function () {
                    var n = t("body"), i = n.hasClass("admin-bar") ? 32 : 0;
                    e.smartresize(function () {
                        if (t("body").trigger("wpv-content-resized"), !n.hasClass("boxed")) {
                            var o = (t(".wpv-grid.extended:first").outerWidth() - t(window).width()) / 2;
                            t(".extended-column-inner > .wpv-video-bg,\t\t\t\t\t\t\t.wpv-grid.extended.grid-1-1.parallax-bg > .wpv-parallax-bg-img,\t\t\t\t\t\t\t.wpv-grid.extended.grid-1-1.parallax-bg-suspended > .wpv-parallax-bg-img").css({
                                left: o,
                                right: o
                            }), t(".extended-column-inner > .wpv-video-bg").each(function () {
                                var e = t(".mejs-mediaelement > *", this), n = e.height(), i = t(this).height(),
                                    o = t(this).width(), r = i / n * o, a = (r - o) / 2;
                                a > 0 && t(this).css({left: "-=" + a, right: "-=" + a})
                            })
                        }
                        var r = e.height() - i;
                        t(".wpv-grid[data-padding-top]").each(function () {
                            var e = t(this);
                            e.css("padding-top", 0), e.css("padding-top", r - e.outerHeight() + parseInt(e.data("padding-top"), 10))
                        }), t(".wpv-grid[data-padding-bottom]:not([data-padding-top])").each(function () {
                            var e = t(this);
                            e.css("padding-bottom", 0), e.css("padding-bottom", r - e.outerHeight() + parseInt(e.data("padding-bottom"), 10))
                        }), t(".wpv-grid[data-padding-top][data-padding-bottom]").each(function () {
                            var e = t(this);
                            e.css("padding-top", 0), e.css("padding-bottom", 0);
                            var n = (r - e.outerHeight() + parseInt(e.data("padding-top"), 10)) / 2;
                            e.css({"padding-top": n, "padding-bottom": n})
                        })
                    })
                }(), t(document).on("mouseover focus click", ".animated.flash, .animated.wiggle", function () {
                    t(this).removeClass("animated")
                }), navigator.userAgent.match(/(iPod|iPhone|iPad)/) && navigator.userAgent.match(/AppleWebKit/) && e.bind("resize.slider-workaround", function () {
                    setTimeout(function () {
                        t(".bxslider-container").data("bxslider").reloadSlider()
                    }, 300)
                });
                var r = 250;
                t(".shortcode-tooltip").hover(function () {
                    var e = t(this).find(".tooltip").fadeIn(r).animate({bottom: 25}, r);
                    e.css({marginLeft: -e.width() / 2})
                }, function () {
                    t(this).find(".tooltip").animate({bottom: 35}, r).fadeOut(r)
                }), t(".sitemap li:not(:has(.children))").addClass("single"), t(window).bind("resize scroll", function () {
                    t("#scroll-to-top").toggleClass("visible", window.pageYOffset > 0)
                }), t("#scroll-to-top, .wpv-scroll-to-top").click(function (e) {
                    t("html,body").animate({scrollTop: 0}, 300), e.preventDefault()
                })
            }), t("#feedback.slideout").click(function (e) {
                t(this).parent().toggleClass("expanded"), e.preventDefault()
            }), function () {
                var n = [];
                t(".row:has(> div.has-background)").each(function (e, i) {
                    var o = t(i), r = o.find("> div");
                    r.length > 1 && (o.addClass("has-nomargin-column"), n.push(r))
                }), t(".row:has(> div > .linkarea)").each(function (e, i) {
                    var o = t(i), r = o.find("> div > .linkarea");
                    r.length > 1 && n.push(r)
                }), t(".row:has(> div > .services.has-more)").each(function (e, i) {
                    var o = t(i), r = o.find("> div > .services.has-more > .closed");
                    r.length > 1 && n.push(r)
                }), t("#footer-sidebars .row").each(function () {
                    n.push(t(this).find("aside"))
                }), e.resize(_.throttle(function () {
                        var e;
                        if (t.WPV.MEDIA.layout["layout-below-max"]) for (e = 0; e < n.length; ++e) n[e].css('height', '');/*n[e].matchHeight("remove")*/ else for (e = 0; e < n.length; ++e) n[e].css('height', 'auto')/*n[e].matchHeight(!1)*/
                    }
                    , 600))
            }(), t(document).on("mouseenter", ".linkarea[data-hoverclass]", function () {
                t(this).addClass(this.getAttribute("data-hoverclass"))
            }).on("mouseleave", ".linkarea[data-hoverclass]", function () {
                t(this).removeClass(this.getAttribute("data-hoverclass"))
            }).on("mousedown", ".linkarea[data-activeclass]", function () {
                t(this).addClass(this.getAttribute("data-activeclass"))
            }).on("mouseup", ".linkarea[data-activeclass]", function () {
                t(this).removeClass(this.getAttribute("data-activeclass"))
            }).on("click", ".linkarea[data-href]", function (t) {
                if (t.isDefaultPrevented()) return !1;
                var e = this.getAttribute("data-href");
                if (e) {
                    t.preventDefault(), t.stopImmediatePropagation();
                    try {
                        var n = String(this.getAttribute("data-target") || "self").replace(/^_/, "");
                        "blank" === n || "new" === n ? window.open(e) : window[n].location = e
                    } catch (t) {
                    }
                }
            }), e.triggerHandler("resize.sizeClass"), t(window).bind("load", function () {
                setTimeout(function () {
                    t(window).trigger("resize")
                }, 1)
            })
        }(jQuery)
    }(), function (t) {
        "use strict";
        t(function () {
            var e = t(".fixed-header-box .cart-dropdown"), n = t(".vamtam-cart-dropdown-link"), i = t(".products", n),
                o = t(".widget", e), r = !1;
            t("body").bind("added_to_cart wc_fragments_refreshed wc_fragments_loaded", function () {
                var n = parseInt(t.cookie("woocommerce_items_in_cart") || 0, 10);
                if (n > 0) {
                    var o = 0;
                    t(".widget_shopping_cart:first li .quantity").each(function () {
                        o += parseInt(t(this).clone().children().remove().end().contents().text(), 10)
                    }), i.text(o), i.removeClass("cart-empty"), e.removeClass("hidden"), t(this).addClass("header-cart-visible")
                } else i.addClass("cart-empty"), i.text("0")
            });
            var a = 0, s = function () {
                a = +new Date, e.addClass("state-hover"), o.stop(!0, !0).fadeIn(300, function () {
                    r = !0
                })
            }, l = function () {
                var t = new Date - a;
                t > 1e3 ? (e.removeClass("state-hover"), o.stop(!0, !0).fadeOut(300, function () {
                    r = !1
                })) : setTimeout(function () {
                    e.is(":hover") || l()
                }, 1e3 - t)
            };
            e.bind("mouseenter", function () {
                s()
            }).bind("mouseleave", function () {
                l()
            }), n.not(".no-dropdown").bind("click", function (t) {
                r ? l() : s(), t.preventDefault()
            })
        })
    }(jQuery), function (t) {
        "use strict";
        var e = function () {
            var e = t(this);
            if (!(e.closest(".animated-active:not(.animation-ended)").length > 0 || e.data("closed-at") && +new Date - e.data("closed-at") < 300)) {
                var n = e.clone();
                setTimeout(function () {
                    var i = t.WPV.MEDIA.layout["layout-below-max"] ? e.width() : e.parent().width();
                    if (n.css({
                        width: i,
                        position: "absolute",
                        left: e.parent().position().left + parseFloat(e.parent().css("padding-left"), 10),
                        top: e.parent().position().top,
                        zIndex: 1e10
                    }).addClass("transitionable"), e.attr("id") || e.attr("id", "hover-id-" + Math.round(1e8 * Math.random())), n.attr("id") || n.attr("id", "hover-clone-id-" + Math.round(1e8 * Math.random())), 0 !== t("#" + e.attr("id") + ":hover").length) {
                        e.css({visibility: "hidden"}), n.appendTo(e.closest(".row")).addClass("state-hover"), n.find(".shrinking .icon").transit({"font-size": Math.min(100, i - 15)}, 200, "easeOutQuad");
                        var o = n.find(".services-content").slideDown({duration: 200, easing: "easeOutQuad"}),
                            r = setInterval(function () {
                                Modernizr.touch || 0 !== t("#" + n.attr("id") + ":hover").length || (clearInterval(r), n.trigger("mouseleave"))
                            }, 500), a = function () {
                                t(this).hasClass("state-hover") && (n.removeClass("state-hover"), n.find(".shrinking .icon").transit({"font-size": 60}, 200, "easeOutQuad"), o.slideUp({
                                    duration: 200,
                                    easing: "easeOutQuad",
                                    complete: function () {
                                        n.remove(), e.css({visibility: "visible"}).data("closed-at", +new Date)
                                    }
                                }))
                            };
                        Modernizr.touch ? (n.unbind("click.shrinking_open"), n.find("a").unbind("touchstart.shrinking").bind("touchstart.shrinking", function (e) {
                            t(this).is(".shrinking a") ? e.preventDefault() : e.stopPropagation()
                        }), t("body").bind("touchstart.shrinking_close" + n.attr("id"), function () {
                            t("body").unbind("touchstart.shrinking_close" + n.attr("id")), a.call(n)
                        })) : n.unbind("mouseleave.shrinking").bind("mouseleave.shrinking", a)
                    }
                }, 20)
            }
        };
        t.rawContentHandler(function () {
            var n = t(".services:has(.shrinking)");
            Modernizr.touch ? n.unbind("click.shrinking_open").bind("click.shrinking_open", function (t) {
                e.call(this), t.preventDefault()
            }) : n.unbind("mouseenter.shrinking").bind("mouseenter.shrinking", e)
        });
        var n = function () {
            t(".services:not(.transitionable) .shrinking").each(function () {
                var e = t(this).width();
                t(this).height(e), t(this).find(".icon").css({"line-height": e + "px"}), t(this).closest(".services").prev().css({width: e})
            })
        };
        t(window).bind("resize", n), n()
    }(jQuery), function (t) {
        "use strict";
        var e = /iPad|iPod|iPhone/i.test(navigator.userAgent), n = Modernizr.csstransforms3d && !e,
            i = n ? "transition" : "animate", o = function (t) {
                window.console && window.console.error(t)
            };
        jQuery.easing.wpvsin = function (t, e, n, i) {
            return Math.sin(t * Math.PI / 2) * i + n
        }, jQuery.easing.wpvcos = function (t, e, n, i) {
            return n + i - Math.cos(t * Math.PI / 2) * i
        }, t.WPV.expandable = function (e, o) {
            e = t(e);
            var r = this, a = e.find(">.open"), s = e.find(">.closed");
            r.doOpen = function () {
                var r = t.WPV.MEDIA.layout["layout-below-max"] ? Math.max(o.duration, 400) : o.duration,
                    l = a.outerHeight();
                l || (a.css({height: "auto"}), l = a.outerHeight(), a.css({height: 0})), r = Math.max(r, l / 200 * r), s.queue(s.queue().slice(0, 1)), a.queue(a.queue().slice(0, 1)), s[i]({y: -l}, r, o.easing, function () {
                    e.removeClass("state-closed").addClass("state-open")
                }), n ? a.transition({y: -l, perspective: o.perspective, rotateX: 0}, r, o.easing) : a.animate({
                    y: -l,
                    height: l
                }, r, o.easing)
            }, r.doClose = function () {
                var r = t.WPV.MEDIA.layout["layout-below-max"] ? Math.max(o.duration, 400) : o.duration,
                    l = a.outerHeight();
                l || (a.css({height: "auto"}), l = a.outerHeight(), a.css({height: 0})), r = Math.max(r, l / 200 * r), s.queue(s.queue().slice(0, 1)), a.queue(a.queue().slice(0, 1)), s[i]({y: 0}, r, o.easing, function () {
                    e.removeClass("state-open").addClass("state-closed")
                }), n ? a.transition({y: 0, perspective: o.perspective, rotateX: -90}, r, o.easing) : a.animate({
                    y: 0,
                    height: 0
                }, r, o.easing)
            }, r.init = function () {
                e.addClass("state-closed"), e.addClass(n ? "expandable-animation-3d" : "expandable-animation-2d"), Modernizr.touch ? (e.unbind("click.expandable").bind("click.expandable", function (t) {
                    e.hasClass("state-open") ? (r.doClose(), t.stopPropagation()) : r.doOpen()
                }), t("body").bind("touchstart.expandable_close" + e.attr("id"), function () {
                    t("body").unbind("touchstart.expandable_close" + e.attr("id")), r.doClose()
                })) : e.bind("mouseenter.expandable", r.doOpen).bind("mouseleave.expandable", r.doClose), e.find("a").bind("click", function (t) {
                    e.hasClass("state-closed") && t.preventDefault()
                })
            };
            var l = {duration: 250, perspective: "10000px", easing: "linear"};
            o = t.extend({}, l, o), this.init()
        }, t.fn.wpv_expandable = function (e, n) {
            if ("string" == typeof e) {
                var i = Array.prototype.slice.call(arguments, 1);
                this.each(function () {
                    var n = t.data(this, "wpv_expandable");
                    return n ? t.isFunction(n[e]) && "_" !== e.charAt(0) ? void t.WPV.expandable[e].apply(n, i) : void o("no such method '" + e + "' for expandable instance") : void o("cannot call methods on expandable prior to initialization; attempted to call method '" + e + "'")
                })
            } else this.each(function () {
                var i = t.data(this, "wpv_expandable");
                i ? (i.option(e), i._init(n)) : t.data(this, "wpv_expandable", new t.WPV.expandable(this, e, n))
            });
            return this
        }, t(".services.has-more").wpv_expandable()
    }(jQuery), function (t) {
        "use strict";
        var e = 700, n = t("body"), i = function (t, e, n, i, o) {
            return -i * ((e = e / o - 1) * e * e * e - 1) + n
        }, o = function () {
            t(this).hasClass("state-closed") || (n.unbind("touchstart.portfolio-overlay-close" + t(this).data("id")), t(this).addClass("state-closed").removeClass("state-open"), t(".thumbnail-overlay, .love-count-outer", this).fadeOut({opacity: 0}, {
                duration: e,
                easing: i
            }))
        }, r = function () {
            var i = t(this);
            if (!i.hasClass("state-open")) if (i.addClass("state-open").removeClass("state-closed"), t(".thumbnail-overlay, .love-count-outer", this).stop(!0, !0).fadeIn({
                duration: e,
                easing: "easeOutQuint"
            }), Modernizr.touch) {
                var r = "touchstart.portfolio-overlay-close" + i.data("id");
                n.bind(r, function () {
                    n.unbind(r), o.call(i)
                })
            } else t(this).bind("mouseleave.portfolio-overlay-close", function () {
                t(this).unbind("mouseleave.portfolio-overlay-close"), o.call(this)
            })
        };
        t(function () {
            var e = t(".portfolios");
            Modernizr.touch ? (e.on("click.portfolio-overlay", ".portfolio-items > li", function () {
                r.call(this)
            }), e.on("click", ".portfolio-items > li a", function (e) {
                var n = t(this).closest(".portfolios .portfolio-items > li");
                t(n).hasClass("state-closed") ? e.preventDefault() : e.stopPropagation()
            }), e.on("touchstart", ".portfolio-items > li a", function (e) {
                var n = t(this).closest(".portfolios .portfolio-items > li");
                t(n).hasClass("state-closed") || e.stopPropagation()
            })) : e.on("mouseenter", ".portfolio-items > li", function () {
                r.call(this)
            })
        })
    }(jQuery), function (t) {
        "use strict";
        t(function () {
            var e = t("#header-slider-container.layerslider").find(".layerslider-fixed-wrapper"),
                n = e.find(">div:first");
            if (n.length) {
                var i = !1, o = 0, r = function () {
                    return n.height() > 0 || o++ > 5 ? void e.height("auto") : void (i = setTimeout(r, 500))
                };
                i = setTimeout(r, 0)
            }
        })
    }(jQuery), function (t) {
        "use strict";
        var e = /iPad|iPod|iPhone/i.test(navigator.userAgent);
        t(function () {
            if (t("body").on("click.pagination", ".load-more", function () {
                if (e) return !0;
                var n = t("a.lm-btn", this).attr("href");
                if (!n) return !0;
                if (t(this).is(":animated")) return !1;
                var i = t(this), o = i.prev(),
                    r = o.is("section.portfolios > ul") ? "section.portfolios > ul" : o.is(".loop-wrapper") ? ".loop-wrapper.paginated" : null;
                return r && (t(this).addClass("loading").find("> *").animate({opacity: 0}), t.ajax({
                    url: n, dataType: "text", data: {reduced: 1}, cache: !1, success: function (e) {
                        e = t(t.parseHTML(e, document, !0));
                        var n = e.find("article"), a = t(r, n);
                        if (a.length) {
                            var s = a.children().css("opacity", 0);
                            window.newitems = s;
                            try {
                                o.append(s)
                            } catch (t) {
                                "log" in window.console && console.log("can't append these properly: ", s, t)
                            }
                            o.hasClass("masonry") && (s.removeClass("clearboth"), o.trigger("reload-isotope")), o.trigger("rawContent", s.get()), "mediaelementplayer" in jQuery.fn ? t(".wp-audio-shortcode, .wp-video-shortcode").not(".mejs-container").mediaelementplayer() : (e.filter("#mediaelement-css, #wp-mediaelement-css").appendTo(t("head")), e.filter("script").each(function (e, n) {
                                t(n).prop("src").match("mediaelement-and-player") && jQuery.getScript(t(n).prop("src"), function () {
                                    t(".wp-audio-shortcode, .wp-video-shortcode").mediaelementplayer()
                                })
                            }));
                            var l = o.height();
                            o.is(":not(.masonry)") && (o.height(l), o.css("height", "auto"), o.children().animate({opacity: 1}, 1e3));
                            var c = t(".load-more", n);
                            c.length ? i.html(c.html()).removeClass("loading").find("> *").animate({opacity: 1}, 600, "linear") : i.slideUp().remove(), t(window).trigger("resize").trigger("scroll"), n = a = l = c = null
                        }
                    }
                })), !1
            }), t("body").is(".pagination-infinite-scrolling")) {
                var n = 0;
                t(window).bind("resize scroll", function (e) {
                    var i = t(".lm-btn"), o = e.timeStamp || (new Date).getTime();
                    o - n > 500 && 1 === parseFloat(i.css("opacity"), 10) && t(window).scrollTop() + t(window).height() >= i.offset().top && (n = o, i.click())
                })
            }
        })
    }(jQuery), function (t) {
        "use strict";
        t.rawContentHandler(function (e) {
            var n = 30, i = {
                pager: !1,
                controls: !0,
                minSlides: 1,
                maxSlides: 10,
                slideMargin: n,
                infiniteLoop: !1,
                hideControlOnEnd: !0
            }, o = t(".portfolios.scroll-x, .loop-wrapper.scroll-x, .woocommerce-scrollable.scroll-x", e || document);
            o.find("img.lazy").not(".jail-started, .loaded").addClass("jail-started").jail({speed: 1e3, event: !1});
            var r = function (e) {
                if (!t("body").hasClass("responsive-layout")) return e;
                var n = t(window).width();
                return 958 >= n ? Math.min(e, 2) : n > 958 && 1280 > n ? Math.min(e, 3) : e
            }, a = function (t) {
                var e = r(t);
                return (this.closest(".scrollable-wrapper").width() - n * (e - 1)) / e
            }, s = function (e, n, o) {
                if (e && e.data("bxslider") && e.data("scrollable-loaded")) {
                    e.data("scrollable-loaded", !1);
                    var r = a.call(e, n);
                    return r !== o && (o = r, e.data("bxslider").reloadSlider(t.extend(i, {slideWidth: r}))), o
                }
            };
            o.each(function () {
                var e = t("> ul", this), n = parseInt(e.data("columns"), 10), o = a.call(e, n);
                e.data("bxslider", e.bxSlider(t.extend(i, {
                    slideWidth: o, onSliderLoad: function () {
                        e.data("scrollable-loaded", !0), e.data("wpv-loaded-once") || (e.data("wpv-loaded-once", !0), e.imagesLoaded(function () {
                            "redrawSlider" in e.data("bxslider") && e.data("bxslider").redrawSlider()
                        }), setTimeout(function () {
                            t(window).smartresize(function () {
                                o = s(e, n, o)
                            })
                        }, 1500), e.bind("vamtam-video-resized", function () {
                            "redrawSlider" in e.data("bxslider") && e.data("bxslider").redrawSlider()
                        }))
                    }
                })))
            })
        })
    }(jQuery), $(function () {
        function t(t) {
            var e = t.element, n = $(".moving-light", e), i = $(".window-big-1", e), o = $(".window-small", e),
                r = $(".window-big-2", e), a = $(".window-medium", e), s = 3e3, l = 3e3,
                c = {center: [696, -246], radius: 289, start: 24, end: 332, dir: -1},
                u = {center: [406, -155], radius: 225, start: 43, end: 345, dir: -1};
            img_1 = $(".propeller-1-image", e), img_2 = $(".propeller-2-image", e), img_3 = $(".propeller-3-image", e), this.runAnimation = function () {
                var t = 0, e = 0, d = 0;
                setInterval(function () {
                    t += 3, img_1.rotate(t)
                }, 50), setInterval(function () {
                    e += 6, img_2.rotate(e)
                }, 50), setInterval(function () {
                    d += 10, img_3.rotate(d)
                }, 50);
                var h = $(window).width();
                h < 1001 && (c = {
                    center: [301, -246],
                    radius: 289,
                    start: 24,
                    end: 340,
                    dir: -1
                }, s = 6e3, l = 0), i.animate({opacity: 0}, 0), o.animate({opacity: 0}, 0), r.animate({opacity: 0}, 0), a.animate({opacity: 0}, 0), setInterval(function () {
                    n.queue(function () {
                        $(this).animate({opacity: 1}, 0), $(this).animate({path: new $.path.arc(c)}, s), $(this).animate({path: new $.path.arc(u)}, l), $(this).animate({opacity: 0}, 0, function () {
                            i.animate({opacity: 1}, 500, function () {
                                o.animate({opacity: 1}, 500, function () {
                                    r.animate({opacity: 1}, 500, function () {
                                        a.animate({opacity: 1}, 500, function () {
                                            i.animate({opacity: 0}, 2e3), o.animate({opacity: 0}, 2e3), r.animate({opacity: 0}, 2e3), a.animate({opacity: 0}, 2e3)
                                        })
                                    })
                                })
                            })
                        }), $(this).dequeue()
                    })
                }, 200)
            }, this.runAnimation()
        }

        new t({element: $(".footer-top-bg")})
    }), jQuery(function (t) {
        var e = t("#review-list");
        e.data("bxslider", e.bxSlider({pager: !0, controls: !1, auto: !0, pause: 7e3, autoHover: !0}))
    }), $(document).ready(function () {
        $("#search-input").keyup(function (t) {
            var e = $(this).val();
            13 == t.keyCode && e.length > 0 && (window.location = "/" + window.currentLocal + "/search/?q=" + encodeURIComponent(e))
        });
        var t = !1;
        $("#couners-wrapper").waypoint({
            handler: function (e) {
                console.log("Trigered"), t || (t = !0, $(".animated-counter").emaCounter())
            }, offset: "bottom-in-view"
        });
        var e = $("#slogans");
        $(".s1", e), $(".s2", e), $(".s3", e);
        "", function () {
            var t = $(".wpcf7-form");
            if (t.length > 0) {
                var e = $.extend(!0, {}, window.contactForm);
                e.node = t, e.formData = {}, e.lastError = "", "ru" == currentLocal || "uk" == currentLocal ? t.find('input[name="Phone"]').mask("+38 (099) 99-99-999") : t.find('input[name="Phone"]').mask("+380 (99) 99-99-999"), e.node.find('input[type="text"], textarea').each(function () {
                    $(this).change(function () {
                        $(this).removeClass("invalid")
                    })
                }), e.validate = function () {
                    var t = !1, n = {}, i = /^.*@.*\..*$/;
                    return e.formData = {}, e.lastError = "", e.node.find('input[type="text"], textarea').each(function () {
                        var o = $(this), r = o.attr("name"), a = o.attr("placeholder"), s = o.val(), l = "";
                        switch ("en" == currentLocal && (l = "Your "), r) {
                            case"Name":
                            case"Message":
                                s.length < 3 && (t = !0, e.lastError += l + a + " " + e.localization.lessSymbols + "\n\r", o.addClass("invalid"));
                                break;
                            case"Phone":
                                s.length < 19 && (t = !0, e.lastError += l + a + " " + e.localization.invalid + "\n\r", o.addClass("invalid"));
                                break;
                            case"E-mail":
                                i.test(s) === !1 && (t = !0, e.lastError += l + a + " " + e.localization.invalid + "\n\r", o.addClass("invalid"))
                        }
                        n[r] = s
                    }), t === !1 && (e.formData = n, !0)
                }, e.clean = function () {
                    e.node.find('input[type="text"], textarea').each(function () {
                        $(this).val("").removeClass("invalid")
                    })
                }, e.node.submit(function (t) {
                    if (t.preventDefault(), t.stopPropagation(), e.validate()) {
                        var n = {};
                        n.action = "standardMethod", n.class = "SiteFormNotify", n.method = "sendNotify", n.arguments = e.formData;
                        var i = $.ajax({url: "/ajax/", type: "POST", data: n});
                        i.done(function (t) {
                            var n = $.parseJSON(t);
                            n === !0 ? (e.clean(), alert(e.localization.successText)) : alert(e.localization.errorText)
                        }), i.fail(function (t) {
                            alert(e.localization.errorText)
                        })
                    } else alert(e.lastError)
                }), window.contactForm = e
            }
        }()
    });


    $("#resp-menu").emaRespMenu({
        data: responsiveMenuData,
        activateIconSelector: "#resp-menu-icon",
        maxWidth: 959,
        closeOnOutsideClick: false,
        closeOnResize: false,
        backButtonText: responsiveMenuDataBack
    });
    $("#share").jsSocials({
        showCount: false,
        showLabel: true,
        shareIn: "popup",
        shares: ["twitter", {share: "facebook", label: "Share"}, {share: "googleplus", label: "Share"}, "linkedin"]
    });

});
$(document).ready(function () {
/*    $("#our-client-list").slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });*/
});