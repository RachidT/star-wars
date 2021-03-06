/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */ !function(t1, i1, e1, s1) {
    function o1(i, e) {
        var h = this;
        "object" == typeof e && (delete e.refresh, delete e.render, t1.extend(this, e)), this.$element = t1(i), !this.imageSrc && this.$element.is("img") && (this.imageSrc = this.$element.attr("src"));
        var r = (this.position + "").toLowerCase().match(/\S+/g) || [];
        if (r.length < 1 && r.push("center"), 1 == r.length && r.push(r[0]), "top" != r[0] && "bottom" != r[0] && "left" != r[1] && "right" != r[1] || (r = [
            r[1],
            r[0]
        ]), this.positionX !== s1 && (r[0] = this.positionX.toLowerCase()), this.positionY !== s1 && (r[1] = this.positionY.toLowerCase()), h.positionX = r[0], h.positionY = r[1], "left" != this.positionX && "right" != this.positionX && (isNaN(parseInt(this.positionX)) ? this.positionX = "center" : this.positionX = parseInt(this.positionX)), "top" != this.positionY && "bottom" != this.positionY && (isNaN(parseInt(this.positionY)) ? this.positionY = "center" : this.positionY = parseInt(this.positionY)), this.position = this.positionX + (isNaN(this.positionX) ? "" : "px") + " " + this.positionY + (isNaN(this.positionY) ? "" : "px"), navigator.userAgent.match(/(iPod|iPhone|iPad)/)) return this.imageSrc && this.iosFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        if (navigator.userAgent.match(/(Android)/)) return this.imageSrc && this.androidFix && !this.$element.is("img") && this.$element.css({
            backgroundImage: "url(" + this.imageSrc + ")",
            backgroundSize: "cover",
            backgroundPosition: this.position
        }), this;
        this.$mirror = t1("<div />").prependTo(this.mirrorContainer);
        var a = this.$element.find(">.parallax-slider"), n = !1;
        0 == a.length ? this.$slider = t1("<img />").prependTo(this.$mirror) : (this.$slider = a.prependTo(this.$mirror), n = !0), this.$mirror.addClass("parallax-mirror").css({
            visibility: "hidden",
            zIndex: this.zIndex,
            position: "fixed",
            top: 0,
            left: 0,
            overflow: "hidden"
        }), this.$slider.addClass("parallax-slider").one("load", function() {
            h.naturalHeight && h.naturalWidth || (h.naturalHeight = this.naturalHeight || this.height || 1, h.naturalWidth = this.naturalWidth || this.width || 1), h.aspectRatio = h.naturalWidth / h.naturalHeight, o1.isSetup || o1.setup(), o1.sliders.push(h), o1.isFresh = !1, o1.requestRender();
        }), n || (this.$slider[0].src = this.imageSrc), (this.naturalHeight && this.naturalWidth || this.$slider[0].complete || a.length > 0) && this.$slider.trigger("load");
    }
    !function() {
        for(var t2 = 0, e2 = [
            "ms",
            "moz",
            "webkit",
            "o"
        ], s2 = 0; s2 < e2.length && !i1.requestAnimationFrame; ++s2)i1.requestAnimationFrame = i1[e2[s2] + "RequestAnimationFrame"], i1.cancelAnimationFrame = i1[e2[s2] + "CancelAnimationFrame"] || i1[e2[s2] + "CancelRequestAnimationFrame"];
        i1.requestAnimationFrame || (i1.requestAnimationFrame = function(e) {
            var s = (new Date).getTime(), o = Math.max(0, 16 - (s - t2)), h = i1.setTimeout(function() {
                e(s + o);
            }, o);
            return t2 = s + o, h;
        }), i1.cancelAnimationFrame || (i1.cancelAnimationFrame = function(t) {
            clearTimeout(t);
        });
    }(), t1.extend(o1.prototype, {
        speed: 0.2,
        bleed: 0,
        zIndex: -100,
        iosFix: !0,
        androidFix: !0,
        position: "center",
        overScrollFix: !1,
        mirrorContainer: "body",
        refresh: function() {
            this.boxWidth = this.$element.outerWidth(), this.boxHeight = this.$element.outerHeight() + 2 * this.bleed, this.boxOffsetTop = this.$element.offset().top - this.bleed, this.boxOffsetLeft = this.$element.offset().left, this.boxOffsetBottom = this.boxOffsetTop + this.boxHeight;
            var t, i = o1.winHeight, e = o1.docHeight, s = Math.min(this.boxOffsetTop, e - i), h = Math.max(this.boxOffsetTop + this.boxHeight - i, 0), r = this.boxHeight + (s - h) * (1 - this.speed) | 0, a = (this.boxOffsetTop - s) * (1 - this.speed) | 0;
            r * this.aspectRatio >= this.boxWidth ? (this.imageWidth = r * this.aspectRatio | 0, this.imageHeight = r, this.offsetBaseTop = a, t = this.imageWidth - this.boxWidth, "left" == this.positionX ? this.offsetLeft = 0 : "right" == this.positionX ? this.offsetLeft = -t : isNaN(this.positionX) ? this.offsetLeft = -t / 2 | 0 : this.offsetLeft = Math.max(this.positionX, -t)) : (this.imageWidth = this.boxWidth, this.imageHeight = this.boxWidth / this.aspectRatio | 0, this.offsetLeft = 0, t = this.imageHeight - r, "top" == this.positionY ? this.offsetBaseTop = a : "bottom" == this.positionY ? this.offsetBaseTop = a - t : isNaN(this.positionY) ? this.offsetBaseTop = a - t / 2 | 0 : this.offsetBaseTop = a + Math.max(this.positionY, -t));
        },
        render: function() {
            var t = o1.scrollTop, i = o1.scrollLeft, e = this.overScrollFix ? o1.overScroll : 0, s = t + o1.winHeight;
            this.boxOffsetBottom > t && this.boxOffsetTop <= s ? (this.visibility = "visible", this.mirrorTop = this.boxOffsetTop - t, this.mirrorLeft = this.boxOffsetLeft - i, this.offsetTop = this.offsetBaseTop - this.mirrorTop * (1 - this.speed)) : this.visibility = "hidden", this.$mirror.css({
                transform: "translate3d(" + this.mirrorLeft + "px, " + (this.mirrorTop - e) + "px, 0px)",
                visibility: this.visibility,
                height: this.boxHeight,
                width: this.boxWidth
            }), this.$slider.css({
                transform: "translate3d(" + this.offsetLeft + "px, " + this.offsetTop + "px, 0px)",
                position: "absolute",
                height: this.imageHeight,
                width: this.imageWidth,
                maxWidth: "none"
            });
        }
    }), t1.extend(o1, {
        scrollTop: 0,
        scrollLeft: 0,
        winHeight: 0,
        winWidth: 0,
        docHeight: 1073741824,
        docWidth: 1073741824,
        sliders: [],
        isReady: !1,
        isFresh: !1,
        isBusy: !1,
        setup: function() {
            function s() {
                if (p == i1.pageYOffset) return i1.requestAnimationFrame(s), !1;
                p = i1.pageYOffset, h.render(), i1.requestAnimationFrame(s);
            }
            if (!this.isReady) {
                var h = this, r = t1(e1), a = t1(i1), n = function() {
                    o1.winHeight = a.height(), o1.winWidth = a.width(), o1.docHeight = r.height(), o1.docWidth = r.width();
                }, l = function() {
                    var t = a.scrollTop(), i = o1.docHeight - o1.winHeight, e = o1.docWidth - o1.winWidth;
                    o1.scrollTop = Math.max(0, Math.min(i, t)), o1.scrollLeft = Math.max(0, Math.min(e, a.scrollLeft())), o1.overScroll = Math.max(t - i, Math.min(t, 0));
                };
                a.on("resize.px.parallax load.px.parallax", function() {
                    n(), h.refresh(), o1.isFresh = !1, o1.requestRender();
                }).on("scroll.px.parallax load.px.parallax", function() {
                    l(), o1.requestRender();
                }), n(), l(), this.isReady = !0;
                var p = -1;
                s();
            }
        },
        configure: function(i) {
            "object" == typeof i && (delete i.refresh, delete i.render, t1.extend(this.prototype, i));
        },
        refresh: function() {
            t1.each(this.sliders, function() {
                this.refresh();
            }), this.isFresh = !0;
        },
        render: function() {
            this.isFresh || this.refresh(), t1.each(this.sliders, function() {
                this.render();
            });
        },
        requestRender: function() {
            var t = this;
            t.render(), t.isBusy = !1;
        },
        destroy: function(e) {
            var s, h = t1(e).data("px.parallax");
            for(h.$mirror.remove(), s = 0; s < this.sliders.length; s += 1)this.sliders[s] == h && this.sliders.splice(s, 1);
            t1(e).data("px.parallax", !1), 0 === this.sliders.length && (t1(i1).off("scroll.px.parallax resize.px.parallax load.px.parallax"), this.isReady = !1, o1.isSetup = !1);
        }
    });
    var h1 = t1.fn.parallax;
    t1.fn.parallax = function(s) {
        return this.each(function() {
            var h = t1(this), r = "object" == typeof s && s;
            this == i1 || this == e1 || h.is("body") ? o1.configure(r) : h.data("px.parallax") ? "object" == typeof s && t1.extend(h.data("px.parallax"), r) : (r = t1.extend({
            }, h.data(), r), h.data("px.parallax", new o1(this, r))), "string" == typeof s && ("destroy" == s ? o1.destroy(this) : o1[s]());
        });
    }, t1.fn.parallax.Constructor = o1, t1.fn.parallax.noConflict = function() {
        return t1.fn.parallax = h1, this;
    }, t1(function() {
        t1('[data-parallax="scroll"]').parallax();
    });
}(jQuery, window, document);

//# sourceMappingURL=index.2a71af5b.js.map
