webpackJsonp([1], {
	38: function(n, e, t) {
		t(84);
		var r = t(23)(t(40), t(96), "data-v-bd26cd6c", null);
		n.exports = r.exports
	},
	40: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(24),
			o = t.n(r),
			i = t(45),
			a = t.n(i),
			s = t(44),
			l = t.n(s),
			u = t(93),
			c = t.n(u),
			d = t(92),
			f = t.n(d),
			m = t(81),
			h = (t.n(m), function() {
				for (var n = navigator.userAgent, e = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"], t = !0, r = 0; r < e.length; r++)
					if (n.indexOf(e[r]) > 0) {
						t = !1;
						break
					} return t
			}()),
			g = function(n, e) {
				var t = new Date(Date.parse(n.replace(/-/g, "/")))
					.getTime(),
					r = new Date(Date.parse(e.replace(/-/g, "/")))
					.getTime();
				return Math.abs(t - r) / 864e5
			};
		document.title += g((new Date)
			.getFullYear() + "-" + ((new Date)
				.getMonth() + 1) + "-" + (new Date)
			.getDate(), "2024-04-05") + 1 + "天", e.default = {
			name: "app",
			components: {
				StyleEditor: c.a,
				ResumeEditor: f.a
			},
			data: function() {
				return {
					interval: 27,
					currentStyle: "",
					enableHtml: !1,
					fullStyle: ["/*\n* Hi。小琴！\n* 这么久了。还没和你说详细的介绍过我的工作呢！\n* 我是个软件研发工程师。俗称程序员。电脑软件研发。\n* 这个页面。就是个什么也没有的网页。\n* 虽然在这个空白的网页上添加东西。\n* 不是我的主要工作，但现在看起来也不难，哈哈哈！！！。\n* 嗯。说起来手机和电脑还得区分一下。\n* 你现在用的是。。。" + (h ? "电脑" : "手机") + "\n*/\n\n/* 首先给所有元素加上过渡效果 */\n* {\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/* 白色背景太单调了。来点背景 */\nhtml {\n  color: rgb(222,222,222);\n  background: rgb(0,43,54); \n}\n/* 文字太近了 */\n.styleEditor {\n  padding: .5em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  " + (h ? "width: 48%;height: 96%;" : "width: 96%;height: 50%;") + "\n  font-size: 14px;\n  line-height:1.5;\n}\n/* 这些代码颜色都一样。加点儿高亮区别来 */\n.token.selector{ color: rgb(133,153,0) }\n.token.property{ color: rgb(187,137,0) }\n.token.punctuation{ color: yellow }\n.token.function{ color: rgb(42,161,152) }\n.token.comment{ color: rgb(177,177,177) }\n/* 加个 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n          perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; \n  " + (h ? "left: 0;" : "left:0;right:0;margin:auto;") + "\n  top: 0; \n  -webkit-transition: none; \n  transition: none;   \n  " + (h ? "-webkit-transform: rotateY(10deg) translateZ(-100px) ;transform: rotateY(10deg) translateZ(-100px) ;" : "-webkit-transform: rotateX(-10deg) translateZ(-100px) ;transform: rotateX(-10deg) translateZ(-100px) ;") + "\n  " + (h ? "" : "-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;") + "\n}\n\n/* 再来一张信纸 */\n.resumeEditor{\n  position: fixed; \n  " + (h ? "right: 0;" : "left:0;right:0;margin:auto;") + "\n  " + (h ? "top: 0;" : "bottom:2%;") + "\n  padding: .5em;  \n  " + (h ? "margin: .5em;" : "") + "\n  " + (h ? "width: 48%;height: 96%;" : "width: 96%;height: 50%;") + "\n  border: 1px solid;\n  color: #222;\n  overflow: auto;\n  font-size: 14px;\n  line-height:1.5;\n  " + (h ? "-webkit-transform: rotateY(-10deg) translateZ(-100px) ;transform: rotateY(-10deg) translateZ(-100px) ;" : "-webkit-transform: rotateX(10deg) translateZ(-100px) ;transform: rotateX(10deg) translateZ(-100px) ;") + "\n    " + (h ? "" : "-webkit-transform-origin: 50% 0% 0;transform-origin: 50% 0% 0;") + "\n  }\n/* 我开始写了 */\n\n\n", "\n/* 是不是看着很简陋粗糙？\n * 因为这是 Markdown 格式的\n * 一种程序员用来写文档日志的简易语言\n * 翻译成 网页 就行了\n */\n", '\n/* 再加点样式 */\n.resumeEditor{\n  padding: 2em;\n  line-height:1.8;\n}\n.resumeEditor h2{\n  display: inline-block;\n  border-bottom: 1px solid;\n  margin: 1em 0 .5em;\n  font-size:18px;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;            \n  content: counters(section, ".") " ";  \n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: rgba(221,221,221,.5);\n}\n\n/* OK。完成！ */\n\n'],
					currentMarkdown: "",
					fullMarkdown: "我们的故事\n----\n\n2024年04月05日。奇妙的缘分，让我们遇见。  至今。  \n已有 `" + (g((new Date)
						.getFullYear() + "-" + ((new Date)
							.getMonth() + 1) + "-" + (new Date)
					.getDate(), "2024-04-05") + 1) + "` 天\n\n相遇篇\n----\n\n* 颖：你好，人呢，怎么就没理我了呢？\n* 琴：刚忙完，累死了，不想吃，不饿，晚上去吃夜宵？\n* 颖：跟谁一起去\n* 颖：那么晚了\n* 琴：就同事\n* ………………\n* ………………\n* 颖：到家了吗\n* ………………\n* ………………\n* 颖：你在干嘛\n* 琴：晚上去吃牛蛙，就附近的店\n* 琴：你要不要先睡，不要等我，明天还要上班。\n* 颖：不要喝酒，我怕你喝酒。\n* 琴：我不喝酒\n* 颖：我的号码，有事情打给我，我的号码陌生来电拦截，我给你加白名单\n* 琴：知道啦\n* ………………\n* ………………\n* 琴：刚到店里，下雨了\n* 琴：跑过来的，都没带伞\n* 颖：早点起床你\n* 颖：怎么都那么匆忙\n* 颖：你的小伙伴有伞吗\n* 琴：没有\n* 琴：跟我一起跑\n* 琴：头发都油了\n* 颖：…………\n \n\n相识篇\n----\n\n* 颖：我又呕胃酸了\n* 琴：你吃药了吗？\n* 颖：今天没带，没吃\n* 琴：点个外卖，药\n* 颖：一天都挨过去了\n* 颖：回家就可以吃药了！\n* 琴：也是\n* ………………\n* ………………\n*\n* 琴：妈的\n* 琴：刚醒\n* 琴：这天天的\n* 琴：钱都要扣光了\n* 颖：你怎么会睡到这个时候\n* 颖：小伙伴不喊你的吗 \n* 颖：以后我喊你吧………………\n* ………………\n* 琴：妈的\n* 琴：摔了一跤\n* 琴：好丢人\n* 颖：怎么了，摔哪里了，这么不小心，慢慢走，别着急\n* 琴：崴到脚了，没看台阶，踩空了\n* 颖：拍我看看，有没有肿了\n* 琴：没事\n* 颖：走路会不会痛\n* 琴：有点\n* 颖：走路慢点走\n* 颖：尽量少活动\n …………\n\n相知篇\n----\n\n* 琴：想去吃海底捞\n* 颖：今晚？\n* 琴：对\n* 颖：跟谁？\n* 琴：我想跟你去，你要早点休息吗\n* 颖：状态很差，脖子很酸\n* 颖：我一直给自己按太阳穴\n* 颖：好累，只想去睡觉。\n* 琴：好吧\n* 颖：生气了吗\n* 琴：没\n* ……\n\n相识篇\n----\n\n* 颖：在干嘛\n* 琴：在上网\n* 颖：没上班？\n* 琴：在家\n* 颖：啥？\n* 琴：在家休息一段时间，有点吃不消了\n* 颖：好吧，你回家了。\n* 琴：我过段时间回去啊\n7. ……\n\n> 【写在最后】  \n> 嗨。很幸运可以遇见你，让我可以走进你的世界；芦苇韧如丝，磐石无转移，以后我们一起走！\n\n"
				}
			},
			created: function() {
				this.makeResume()
			},
			methods: {
				makeResume: function() {
					function n() {
						return e.apply(this, arguments)
					}
					var e = l()(a.a.mark(function n() {
						return a.a.wrap(function(n) {
							for (;;) switch (n.prev = n.next) {
								case 0:
									return n.next = 2, this.progressivelyShowStyle(0);
								case 2:
									return n.next = 4, this.progressivelyShowResume();
								case 4:
									return n.next = 6, this.progressivelyShowStyle(1);
								case 6:
									return n.next = 8, this.showHtml();
								case 8:
									return n.next = 10, this.progressivelyShowStyle(2);
								case 10:
								case "end":
									return n.stop()
							}
						}, n, this)
					}));
					return n
				}(),
				showHtml: function() {
					var n = this;
					return new o.a(function(e, t) {
						n.enableHtml = !0, e()
					})
				},
				progressivelyShowStyle: function(n) {
					var e = this;
					return new o.a(function(t, r) {
						var o = e.interval,
							i = l()(a.a.mark(function e() {
								var r, s, l, u, c, d = this;
								return a.a.wrap(function(e) {
									for (;;) switch (e.prev = e.next) {
										case 0:
											if (r = this.fullStyle[n]) {
												e.next = 3;
												break
											}
											return e.abrupt("return");
										case 3:
											s = this.fullStyle.filter(function(e, t) {
													return t <= n
												})
												.map(function(n) {
													return n.length
												})
												.reduce(function(n, e) {
													return n + e
												}, 0), l = s - r.length, this.currentStyle.length < s ? (u = this.currentStyle.length - l, c = r.substring(u, u + 1) || " ", this.currentStyle += c, "\n" === r.substring(u - 1, u) && this.$refs.styleEditor && this.$nextTick(function() {
													d.$refs.styleEditor.goBottom()
												}), setTimeout(i, o)) : t();
										case 6:
										case "end":
											return e.stop()
									}
								}, e, this)
							}))
							.bind(e);
						i()
					})
				},
				progressivelyShowResume: function() {
					var n = this;
					return new o.a(function(e, t) {
						var r = n.fullMarkdown.length,
							o = n.interval;
						! function t() {
							if (n.currentMarkdown.length < r) {
								n.currentMarkdown = n.fullMarkdown.substring(0, n.currentMarkdown.length + 1);
								n.currentMarkdown[n.currentMarkdown.length - 1];
								"\n" === n.currentMarkdown[n.currentMarkdown.length - 2] && n.$refs.resumeEditor && n.$nextTick(function() {
									return n.$refs.resumeEditor.goBottom()
								}), setTimeout(t, o)
							} else e()
						}()
					})
				}
			}
		}
	},
	41: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(85),
			o = t.n(r);
		e.default = {
			props: ["markdown", "enableHtml"],
			name: "ResumeEditor",
			computed: {
				result: function() {
					return this.enableHtml ? o()(this.markdown) : this.markdown
				}
			},
			methods: {
				goBottom: function() {
					this.$refs.container.scrollTop = 1e5
				}
			}
		}
	},
	42: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(86),
			o = t.n(r);
		e.default = {
			name: "Editor",
			props: ["code"],
			computed: {
				highlightedCode: function() {
					return o.a.highlight(this.code, o.a.languages.css)
				},
				codeInStyleTag: function() {
					return "<style>" + this.code + "</style>"
				}
			},
			methods: {
				goBottom: function() {
					this.$refs.container.scrollTop = 1e5
				}
			}
		}
	},
	43: function(n, e, t) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = t(39),
			o = t(38),
			i = t.n(o);
		new r.a({
			el: "#app",
			render: function(n) {
				return n(i.a)
			}
		})
	},
	81: function(n, e) {},
	82: function(n, e) {},
	83: function(n, e) {},
	84: function(n, e) {},
	92: function(n, e, t) {
		t(83);
		var r = t(23)(t(41), t(95), "data-v-3539023c", null);
		n.exports = r.exports
	},
	93: function(n, e, t) {
		t(82);
		var r = t(23)(t(42), t(94), "data-v-23b5cc2c", null);
		n.exports = r.exports
	},
	94: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					ref: "container",
					staticClass: "styleEditor"
				}, [t("div", {
					staticClass: "code",
					domProps: {
						innerHTML: n._s(n.codeInStyleTag)
					}
				}), n._v(" "), t("pre", {
					domProps: {
						innerHTML: n._s(n.highlightedCode)
					}
				})])
			},
			staticRenderFns: []
		}
	},
	95: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					ref: "container",
					staticClass: "resumeEditor",
					class: {
						htmlMode: n.enableHtml
					}
				}, [n.enableHtml ? t("div", {
					domProps: {
						innerHTML: n._s(n.result)
					}
				}) : t("pre", [n._v(n._s(n.result))])])
			},
			staticRenderFns: []
		}
	},
	96: function(n, e) {
		n.exports = {
			render: function() {
				var n = this,
					e = n.$createElement,
					t = n._self._c || e;
				return t("div", {
					attrs: {
						id: "app"
					}
				}, [t("StyleEditor", {
					ref: "styleEditor",
					attrs: {
						code: n.currentStyle
					}
				}), n._v(" "), t("ResumeEditor", {
					ref: "resumeEditor",
					attrs: {
						markdown: n.currentMarkdown,
						enableHtml: n.enableHtml
					}
				})], 1)
			},
			staticRenderFns: []
		}
	}
}, [43]);