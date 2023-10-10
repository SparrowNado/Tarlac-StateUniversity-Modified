(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-common"], {
        0: function(t, e, n) {
            t.exports = n("56d7")
        },
        5280: function(t, e, n) {},
        "56d7": function(t, e, n) {
            "use strict";
            n.r(e);
            n("4160"), n("b64b"), n("159b"), n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("5280");
            var s = n("a026"),
                i = n("7bb1"),
                a = n("2593"),
                o = n("4c93"),
                l = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [t.active ? n("div", {
                        staticClass: "amplify-cookie-notification notification margin-bottom-0",
                        class: t.content.bgColor + " " + t.content.textColor
                    }, [n("button", {
                        staticClass: "delete",
                        on: {
                            click: function(e) {
                                return t.closeForm()
                            }
                        }
                    }), n("h4", {
                        staticClass: "is-5 title has-margin-bottom-3"
                    }, [t._v(t._s(t.content.title))]), n("div", {
                        domProps: {
                            innerHTML: t._s(t.content.text)
                        }
                    }), n("div", {
                        staticClass: "buttons has-margin-top-4"
                    }, [n("a", {
                        staticClass: "button is-fullwidth",
                        class: t.content.buttonColor,
                        on: {
                            click: function(e) {
                                return t.closeForm()
                            }
                        }
                    }, [t._v(" " + t._s(t.content.buttonText) + " ")])])]) : t._e()])
                },
                r = [],
                c = n("2b27"),
                u = n.n(c),
                d = {
                    name: "cookie-notification",
                    data: function() {
                        return {
                            active: !1,
                            agreeTerms: !1,
                            content: {}
                        }
                    },
                    methods: {
                        show: function() {
                            this.active = !0
                        },
                        closeForm: function() {
                            u.a.set("AgreeTerms", !0), this.active = !1
                        }
                    },
                    beforeMount: function() {
                        this.content = window.amplify.cookieNotification, this.content.display && (u.a.get("AgreeTerms") || this.show())
                    }
                },
                m = d,
                f = n("2877"),
                v = Object(f["a"])(m, l, r, !1, null, null, null),
                h = v.exports,
                p = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("transition", {
                        attrs: {
                            name: "fade",
                            mode: "out-in"
                        }
                    }, [t.active ? n("div", {
                        staticClass: "amplify-alert-notification notification has-margin-bottom-0",
                        class: t.content.bgColor + " " + t.content.textColor
                    }, [n("button", {
                        staticClass: "delete",
                        on: {
                            click: function(e) {
                                return t.closeForm()
                            }
                        }
                    }), n("div", {
                        staticClass: "container"
                    }, [n("div", {
                        staticClass: "column is-two-thirds-desktop"
                    }, [n("h4", {
                        staticClass: "is-size-5 is-size-4-tablet"
                    }, [t._v(t._s(t.content.title))]), n("div", {
                        domProps: {
                            innerHTML: t._s(t.content.text)
                        }
                    }), t.content.buttons ? n("div", {
                        staticClass: "buttons has-margin-top-4"
                    }, t._l(t.content.buttons, (function(e, s) {
                        return n("a", {
                            key: s,
                            staticClass: "button",
                            class: e.linkClass,
                            attrs: {
                                href: e.url
                            }
                        }, [n("span", [t._v(t._s(e.text))])])
                    })), 0) : t._e()])])]) : t._e()])
                },
                b = [],
                y = {
                    name: "alert-notification",
                    props: {
                        content: Object
                    },
                    data: function() {
                        return {
                            active: !1,
                            agreeTerms: !1
                        }
                    },
                    methods: {
                        show: function() {
                            this.active = !0
                        },
                        closeForm: function() {
                            u.a.set("HideAlert", !0), this.active = !1
                        }
                    },
                    beforeMount: function() {
                        this.content = window.amplify.alert, this.content.display && (u.a.get("HideAlert") || this.show())
                    }
                },
                g = y,
                C = Object(f["a"])(g, p, b, !1, null, null, null),
                k = C.exports,
                w = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("ValidationObserver", {
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(e) {
                                var s = e.handleSubmit;
                                return [n("form", {
                                    staticClass: "tile is-child amplify-signup-form is-light",
                                    attrs: {
                                        novalidate: "novalidate"
                                    },
                                    on: {
                                        submit: function(e) {
                                            return e.preventDefault(), s(t.onSubmit)
                                        }
                                    }
                                }, [n("transition", {
                                    attrs: {
                                        name: "fade",
                                        mode: "out-in"
                                    }
                                }, [t.submitted ? t._e() : n("div", {
                                    key: "form-initial"
                                }, [n("div", {
                                    staticClass: "subtitle is-size-5 is-size-4-tablet"
                                }, [n("p", [t._v(t._s(t.formContent.formTitle))])]), n("div", {
                                    staticClass: "field"
                                }, [n("validation-provider", {
                                    attrs: {
                                        rules: "required|min:3",
                                        mode: "eager"
                                    },
                                    scopedSlots: t._u([{
                                        key: "default",
                                        fn: function(e) {
                                            var s = e.errors;
                                            return [n("div", {
                                                staticClass: "control has-icons-left has-icons-right"
                                            }, [n("input", {
                                                directives: [{
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.newsletterRequest.name,
                                                    expression: "newsletterRequest.name"
                                                }],
                                                staticClass: "input is-medium",
                                                attrs: {
                                                    type: "text",
                                                    placeholder: "Name",
                                                    name: "Name",
                                                    novalidate: "novalidate"
                                                },
                                                domProps: {
                                                    value: t.newsletterRequest.name
                                                },
                                                on: {
                                                    input: function(e) {
                                                        e.target.composing || t.$set(t.newsletterRequest, "name", e.target.value)
                                                    }
                                                }
                                            }), n("span", {
                                                staticClass: "icon is-left"
                                            }, [n("i", {
                                                staticClass: "fas fa-user fa-sm"
                                            })]), n("span", {
                                                staticClass: "icon is-right"
                                            }, [n("i", {
                                                staticClass: "fas fa-check fa-sm"
                                            })])]), n("span", {
                                                staticClass: "field-validation-error"
                                            }, [t._v(t._s(s[0]))])]
                                        }
                                    }], null, !0)
                                })], 1), n("div", {
                                    staticClass: "field"
                                }, [n("validation-provider", {
                                    attrs: {
                                        rules: "required|email",
                                        mode: "eager"
                                    },
                                    scopedSlots: t._u([{
                                        key: "default",
                                        fn: function(e) {
                                            var s = e.errors;
                                            return [n("div", {
                                                staticClass: "control has-icons-left has-icons-right"
                                            }, [n("input", {
                                                directives: [{
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value: t.newsletterRequest.email,
                                                    expression: "newsletterRequest.email"
                                                }],
                                                staticClass: "input is-medium",
                                                attrs: {
                                                    type: "email",
                                                    name: "Email",
                                                    placeholder: "Email",
                                                    novalidate: "novalidate"
                                                },
                                                domProps: {
                                                    value: t.newsletterRequest.email
                                                },
                                                on: {
                                                    input: function(e) {
                                                        e.target.composing || t.$set(t.newsletterRequest, "email", e.target.value)
                                                    }
                                                }
                                            }), n("span", {
                                                staticClass: "icon is-left"
                                            }, [n("i", {
                                                staticClass: "fas fa-envelope fa-sm"
                                            })]), n("span", {
                                                staticClass: "icon is-right"
                                            }, [n("i", {
                                                staticClass: "fas fa-check fa-sm"
                                            })])]), n("span", {
                                                staticClass: "field-validation-error"
                                            }, [t._v(t._s(s[0]))])]
                                        }
                                    }], null, !0)
                                })], 1), n("div", {
                                    staticClass: "field"
                                }, [n("div", {
                                    staticClass: "control"
                                }, [n("button", {
                                    staticClass: "is-link button is-medium",
                                    class: {
                                        "is-loading": t.isLoading
                                    },
                                    attrs: {
                                        type: "submit"
                                    }
                                }, [t._v("Subscribe")])])])]), t.submitted ? n("div", {
                                    key: "form-submitted",
                                    staticClass: "content box has-padding-5"
                                }, [t.formContent.submittedImage ? n("span", {
                                    staticClass: "is-pulled-right image has-margin-bottom-3 has-margin-left-3"
                                }, [n("img", {
                                    staticClass: "is-rounded",
                                    attrs: {
                                        src: t.formContent.submittedImage + "?anchor=center&mode=crop&width=140&height=140"
                                    }
                                })]) : t._e(), n("h4", {
                                    staticClass: "is-size-5"
                                }, [t._v(t._s(t.formContent.submittedTitle))]), n("div", {
                                    domProps: {
                                        innerHTML: t._s(t.formContent.submittedText)
                                    }
                                })]) : t._e()])], 1)]
                            }
                        }])
                    })
                },
                L = [],
                $ = n("bc3a"),
                A = n.n($),
                E = {
                    name: "subscribe-form",
                    data: function() {
                        return {
                            isLoading: !1,
                            submitted: !1,
                            formContent: {},
                            api: "/Umbraco/Api/SignUp/SubmitNewsletterForm",
                            newsletterRequest: {
                                name: "",
                                email: ""
                            }
                        }
                    },
                    methods: {
                        onSubmit: function() {
                            var t = this;
                            t.isLoading = !0, A.a.post(this.api, this.newsletterRequest, {
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            }).then((function() {
                                t.isLoading = !1, t.submittedError = !1, t.submittedForm()
                            })).catch((function(e) {
                                console.log(e), t.isLoading = !1, t.submittedError = !0, t.submittedForm()
                            }))
                        },
                        submittedForm: function() {
                            this.$data.submitted = !0
                        }
                    },
                    beforeMount: function() {
                        this.formContent = window.amplify.form
                    }
                },
                q = E,
                _ = Object(f["a"])(q, w, L, !1, null, null, null),
                O = _.exports,
                S = (n("4de4"), n("fb6a"), n("ac1f"), n("1276"), n("d4ec")),
                T = n("bee2"),
                j = function() {
                    function t(e) {
                        var n = this;
                        Object(S["a"])(this, t);
                        var s = this;
                        if (this.$rootEl = document.documentElement, this.$element = document.querySelector(e), null !== this.$element) {
                            this.navActiveClass = "is-active";
                            var i = this.$element.dataset.initClass.split(" ");
                            this.naviInitClass = i.filter((function(t) {
                                return /\S/.test(t)
                            })), this.naviInitClass, this.clippedClass = "is-clipped", this.$navbarBurgers = Array.prototype.slice.call(this.$element.querySelectorAll(".navbar-burger"), 0), this.$navbarMenu = this.$element.querySelector("#navbarMenu"), this.$dropdownLinks = Array.prototype.slice.call(this.$navbarMenu.querySelectorAll(".has-dropdown"), 0), this.$buttons = Array.prototype.slice.call(this.$element.querySelectorAll(".is-inverted"), 0), document.addEventListener("DOMContentLoaded", (function() {
                                "function" === typeof n.callback && n.callback()
                            })), document.addEventListener("click", (function(t) {
                                t.target.closest(".has-dropdown") || s.resetDropdowns()
                            }))
                        }
                    }
                    return Object(T["a"])(t, [{
                        key: "onReady",
                        value: function(t) {
                            this.callback = t
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t = this;
                            this.$navbarBurgers.length > 0 && this.$navbarBurgers.forEach((function(e) {
                                e.addEventListener("click", (function() {
                                    for (var n = 0; n < t.naviInitClass.length; ++n) t.$element.classList.toggle(t.naviInitClass[n]);
                                    for (var s = 0; s < t.$buttons.length; ++s) t.$buttons[s].classList.toggle("is-inverted");
                                    var i = e.dataset.target,
                                        a = document.getElementById(i);
                                    t.$rootEl.classList.toggle(t.clippedClass), e.classList.toggle(t.navActiveClass), a.classList.toggle(t.navActiveClass)
                                }))
                            })), this.$dropdownLinks.length > 0 && this.$dropdownLinks.forEach((function(e) {
                                e.addEventListener("click", (function(n) {
                                    if (n.target.classList.contains("navbar-link")) {
                                        n.preventDefault();
                                        for (var s = 0; s < t.$dropdownLinks.length; s++) e.id !== t.$dropdownLinks[s].id && t.$dropdownLinks[s].classList.remove(t.navActiveClass);
                                        e.classList.toggle(t.navActiveClass)
                                    }
                                }))
                            })), window.addEventListener("resize", (function() {
                                t.resetNavs()
                            }))
                        }
                    }, {
                        key: "resetDropdowns",
                        value: function() {
                            for (var t = 0; t < this.$dropdownLinks.length; t++) this.$dropdownLinks[t].classList.remove(this.navActiveClass)
                        }
                    }, {
                        key: "resetNavs",
                        value: function() {
                            for (var t = 0; t < this.$navbarBurgers.length; t++) this.$navbarBurgers[t].classList.remove(this.navActiveClass);
                            this.$navbarMenu.classList.remove(this.navActiveClass), this.$rootEl.classList.remove(this.clippedClass);
                            for (var e = 0; e < this.naviInitClass.length; ++e) this.$element.classList.add(this.naviInitClass[e]);
                            for (var n = 0; n < this.$buttons.length; ++n) this.$buttons[n].classList.add("is-inverted");
                            this.resetDropdowns()
                        }
                    }]), t
                }(),
                x = j,
                P = function() {
                    function t(e) {
                        var n = this;
                        Object(S["a"])(this, t), this.activeClass = "is-active", this.$accordionPanes = Array.prototype.slice.call(e.querySelectorAll(".card-header-title"), 0), document.addEventListener("DOMContentLoaded", (function() {
                            "function" === typeof n.callback && n.callback()
                        }))
                    }
                    return Object(T["a"])(t, [{
                        key: "onReady",
                        value: function(t) {
                            this.callback = t
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t = this;
                            this.$accordionPanes.length > 0 && this.$accordionPanes.forEach((function(e) {
                                e.addEventListener("click", (function(e) {
                                    e.target.closest(".card").classList.toggle(t.activeClass)
                                }))
                            }))
                        }
                    }]), t
                }(),
                R = P,
                F = (n("5319"), n("c975"), n("a15b"), n("4d63"), n("25f0"), n("466d"), function() {
                    function t() {
                        Object(S["a"])(this, t)
                    }
                    return Object(T["a"])(t, null, [{
                        key: "hasClass",
                        value: function(t, e) {
                            return t.classList ? t.classList.contains(e) : !!t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)"))
                        }
                    }, {
                        key: "addClass",
                        value: function(e, n) {
                            var s = n.split(" ");
                            e.classList ? e.classList.add(s[0]) : t.hasClass(e, s[0]) || (e.className += " " + s[0]), s.length > 1 && t.addClass(e, s.slice(1).join(" "))
                        }
                    }, {
                        key: "removeClass",
                        value: function(e, n) {
                            var s = n.split(" ");
                            if (e.classList) e.classList.remove(s[0]);
                            else if (t.hasClass(e, s[0])) {
                                var i = new RegExp("(\\s|^)" + s[0] + "(\\s|$)");
                                e.className = e.className.replace(i, " ")
                            }
                            s.length > 1 && t.removeClass(e, s.slice(1).join(" "))
                        }
                    }, {
                        key: "toggleClass",
                        value: function(e, n, s) {
                            s ? t.addClass(e, n) : t.removeClass(e, n)
                        }
                    }, {
                        key: "setAttributes",
                        value: function(t, e) {
                            for (var n in e) t.setAttribute(n, e[n])
                        }
                    }, {
                        key: "getChildrenByClassName",
                        value: function(e, n) {
                            for (var s = [], i = 0; i < e.children.length; i++) t.hasClass(e.children[i], n) && s.push(e.children[i]);
                            return s
                        }
                    }, {
                        key: "setHeight",
                        value: function(t, e, n, s, i) {
                            var a = e - t,
                                o = null,
                                l = function e(l) {
                                    o || (o = l);
                                    var r = l - o,
                                        c = parseInt(r / s * a + t);
                                    n.setAttribute("style", "height:" + c + "px;"), r < s ? window.requestAnimationFrame(e) : i()
                                };
                            n.setAttribute("style", "height:" + t + "px;"), window.requestAnimationFrame(l)
                        }
                    }, {
                        key: "scrollTo",
                        value: function(e, n, s) {
                            var i = window.scrollY || document.documentElement.scrollTop,
                                a = null,
                                o = function o(l) {
                                    a || (a = l);
                                    var r = l - a;
                                    r > n && (r = n);
                                    var c = t.easeInOutQuad(r, i, e - i, n);
                                    window.scrollTo(0, c), r < n ? window.requestAnimationFrame(o) : s && s()
                                };
                            window.requestAnimationFrame(o)
                        }
                    }, {
                        key: "moveFocus",
                        value: function(t) {
                            t || (t = document.getElementsByTagName("body")[0]), t.focus(), document.activeElement !== t && (t.setAttribute("tabindex", "-1"), t.focus())
                        }
                    }, {
                        key: "getIndexInArray",
                        value: function(t, e) {
                            return Array.prototype.indexOf.call(t, e)
                        }
                    }, {
                        key: "cssSupports",
                        value: function(t, e) {
                            if ("CSS" in window) return CSS.supports(t, e);
                            var n = t.replace(/-([a-z])/g, (function(t) {
                                return t[1].toUpperCase()
                            }));
                            return n in document.body.style
                        }
                    }, {
                        key: "easeInOutQuad",
                        value: function(t, e, n, s) {
                            return t /= s / 2, t < 1 ? n / 2 * t * t + e : (t--, -n / 2 * (t * (t - 2) - 1) + e)
                        }
                    }]), t
                }()),
                M = F,
                I = function() {
                    function t(e) {
                        var n = this;
                        Object(S["a"])(this, t), this.element = document.querySelector(e), this.scrollElement = window, this.scrollOffset = parseInt(this.element.offset) || 300, this.scrollDuration = parseInt(this.element.dataset.duration) || 300, this.scrolling = !1, document.addEventListener("DOMContentLoaded", (function() {
                            "function" === typeof n.callback && n.callback()
                        }))
                    }
                    return Object(T["a"])(t, [{
                        key: "init",
                        value: function() {
                            var t = this;
                            t && (this.element.addEventListener("click", (function(e) {
                                e.preventDefault(), window.requestAnimationFrame ? t.element ? M.scrollTo(0, t.scrollDuration, !1, t.scrollElement) : M.scrollTo(0, t.scrollDuration) : t.scrollElement.scrollTo(0, 0), M.moveFocus(document.getElementById(this.element.getAttribute("href").replace("#", "")))
                            })), this.scrollOffset > 0 && this.scrollElement.addEventListener("scroll", (function() {
                                t.scrolling || (t.scrolling = !0, window.requestAnimationFrame ? window.requestAnimationFrame((function() {
                                    return t.checkBackToTop()
                                })) : setTimeout((function() {
                                    t.checkBackToTop()
                                }), 250))
                            })))
                        }
                    }, {
                        key: "checkBackToTop",
                        value: function() {
                            var t = this.scrollElement.scrollTop || document.documentElement.scrollTop;
                            this.element || (t = window.scrollY || document.documentElement.scrollTop), M.toggleClass(this.element, "amplify-top--is-visible", t >= this.scrollOffset), this.scrolling = !1
                        }
                    }, {
                        key: "onReady",
                        value: function(t) {
                            this.callback = t
                        }
                    }]), t
                }(),
                N = I,
                D = function() {
                    function t(e) {
                        var n = this;
                        Object(S["a"])(this, t), this.activeClass = "is-active", this.$menuPanes = Array.prototype.slice.call(e.querySelectorAll(".amplify-menu-header"), 0), document.addEventListener("DOMContentLoaded", (function() {
                            "function" === typeof n.callback && n.callback()
                        }))
                    }
                    return Object(T["a"])(t, [{
                        key: "onReady",
                        value: function(t) {
                            this.callback = t
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t = this;
                            this.$menuPanes.length > 0 && this.$menuPanes.forEach((function(e) {
                                e.addEventListener("click", (function(e) {
                                    e.target.closest(".amplify-menu").classList.toggle(t.activeClass)
                                }))
                            }))
                        }
                    }]), t
                }(),
                B = D,
                H = function() {
                    function t(e) {
                        var n = this;
                        Object(S["a"])(this, t), this.activeClass = "is-active", this.$tabsHeader = e.getElementsByClassName("tabs")[0], this.$tabsPanelContainer = e.getElementsByClassName("tab-panels")[0], this.$tabLinks = Array.prototype.slice.call(this.$tabsHeader.querySelectorAll("a"), 0), this.$tabPanels = Array.prototype.slice.call(this.$tabsPanelContainer.querySelectorAll(".tab-panel"), 0), document.addEventListener("DOMContentLoaded", (function() {
                            "function" === typeof n.callback && n.callback()
                        }))
                    }
                    return Object(T["a"])(t, [{
                        key: "onReady",
                        value: function(t) {
                            this.callback = t
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var t = this;
                            this.$tabLinks.length > 0 && this.$tabLinks.forEach((function(e) {
                                e.addEventListener("click", (function(n) {
                                    for (var s = 0; s < t.$tabLinks.length; s++) e.dataset.tab !== t.$tabLinks[s].dataset.tab ? t.$tabLinks[s].closest("li").classList.remove(t.activeClass) : n.target.closest("li").classList.add(t.activeClass);
                                    for (var i = 0; i < t.$tabPanels.length; i++) e.dataset.tab !== t.$tabPanels[i].id ? t.$tabPanels[i].classList.remove(t.activeClass) : t.$tabPanels[i].classList.add(t.activeClass)
                                }))
                            }))
                        }
                    }]), t
                }(),
                z = H,
                V = n("0346"),
                U = n("7b60"),
                J = n.n(U),
                Q = n("4fb8"),
                Y = n.n(Q),
                G = n("f5af"),
                K = n.n(G);
            s["a"].config.productionTip = !1, Object.keys(o).forEach((function(t) {
                Object(i["c"])(t, o[t])
            })), Object(i["d"])("en", a), s["a"].component("ValidationProvider", i["b"]), s["a"].component("ValidationObserver", i["a"]);
            var W = document.querySelector("#amplify-cookie");
            W && new s["a"]({
                render: function(t) {
                    return t(h)
                },
                components: {
                    ValidationProvider: i["b"]
                }
            }).$mount("#amplify-cookie");
            var X = document.querySelector("#subscribeForm");
            X && new s["a"]({
                render: function(t) {
                    return t(O)
                },
                components: {
                    ValidationProvider: i["b"]
                }
            }).$mount("#subscribeForm");
            var Z = document.querySelector("#amplify-alert");
            Z && new s["a"]({
                render: function(t) {
                    return t(k)
                }
            }).$mount("#amplify-alert");
            var tt = new N("#backToTop");
            tt.onReady((function() {
                tt.init()
            }));
            var et = new x("#navbarMain");
            et.onReady((function() {
                et.init()
            }));
            for (var nt = document.querySelectorAll(".amplify-accordion"), st = function(t) {
                    var e = new R(nt[t]);
                    e.onReady((function() {
                        e.init()
                    }))
                }, it = 0; it < nt.length; it++) st(it);
            for (var at = document.querySelectorAll(".amplify-tabs"), ot = function(t) {
                    var e = new z(at[t]);
                    e.onReady((function() {
                        e.init()
                    }))
                }, lt = 0; lt < at.length; lt++) ot(lt);
            for (var rt = document.querySelectorAll(".glideMini"), ct = 0; ct < rt.length; ct++) {
                var ut = new V["a"](rt[ct], {
                    autoplay: 4e3,
                    type: "carousel"
                });
                ut.mount()
            }
            for (var dt = document.querySelectorAll(".sectionGlide"), mt = 0; mt < dt.length; mt++) {
                var ft = new V["a"](dt[mt], {
                    autoplay: 1e4,
                    type: "carousel"
                });
                ft.mount()
            }
            var vt = document.querySelector(".amplify-gallery");
            vt && J()({
                touchNavigation: !0,
                loop: !0,
                autoplayVideos: !0,
                onOpen: function() {}
            });
            for (var ht = document.querySelectorAll(".amplify-menu"), pt = function(t) {
                    var e = new B(ht[t]);
                    e.onReady((function() {
                        e.init()
                    }))
                }, bt = 0; bt < ht.length; bt++) pt(bt);
            for (var yt = document.querySelectorAll("amplify-video"), gt = 0; gt < yt.length; gt++) var Ct = new Y.a(Ct[gt]);
            K.a.init({
                once: !0
            }), document.addEventListener("DOMContentLoaded", (function() {
                console.log("Amplify - Premium Theme - made with LOVE. => https://jacker.io")
            }))
        }
    }
]);
//# sourceMappingURL=chunk-common.js.map