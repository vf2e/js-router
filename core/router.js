(function() {
    var Router = {
        _module: null,
        _page: null,
        _stack: [], //页面路径栈
        $container: $("#spa-container"), //装载容器
        MODULE_PATH: "./module/",

        loader: function() {
            var hash = window.location.hash.substr(1);;
            if (hash.indexOf("/") != -1) {
                this._module = hash.split("/")[0];
                this._page = hash.split("/")[1];
            } else {
                this._module = "error";
                this._page = "index";
            }
            if (this._module in MODULE_MAP && ($.inArray(this._page, MODULE_MAP[this._module])) >= 0) {

            } else {
                this._module = "error";
                this._page = "index";
            }
            var pagePath = this.MODULE_PATH + this._module + "/" + this._page + ".html";
            this.$container.html("");
            this.$container.load(pagePath);
            this._stack.push(pagePath);
        },

        back: function() {
            if (this._stack.length == 1) { //已经是最后一页
                return false;
            } else {
                this.$container.html("");
                this._stack.pop();
                this.$container.load(this._stack[this._stack.length - 1]);
                return true;
            }
        },

        refresh: function() {
            this.$container.html("");
            this.$container.load(this._stack[this._stack.length - 1]);
        },

        init: function() {
            var _this = this;
            $(window).on("hashchange", function() {
                _this.loader();
            });
        }
    };

    Router.init();
    window.Router = Router;
})();