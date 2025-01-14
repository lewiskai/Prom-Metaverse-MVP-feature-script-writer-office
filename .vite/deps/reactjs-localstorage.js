import {
  __commonJS
} from "./chunk-WXXH56N5.js";

// node_modules/reactjs-localstorage/react-localstorage.js
var require_react_localstorage = __commonJS({
  "node_modules/reactjs-localstorage/react-localstorage.js"(exports) {
    exports.reactLocalStorage = {
      set: function(key, value2) {
        localStorage[key] = value2;
        return localStorage[key];
      },
      get: function(key, defaultValue = void 0, silent = true) {
        var value2 = localStorage[key] || defaultValue;
        if (!silent && !value2)
          throw key + " not found in localStorage";
        return value2;
      },
      setObject: function(key, value2) {
        localStorage[key] = JSON.stringify(value2);
        return localStorage[key];
      },
      getObject: function(key, defaultValue = {}, silent = true) {
        value = this.get(key, JSON.stringify(defaultValue), silent);
        try {
          return JSON.parse(value);
        } catch (e) {
          if (!silent)
            throw "Error in parsing value";
        }
      },
      clear: function() {
        return localStorage.clear();
      },
      remove: function(key) {
        return localStorage.removeItem(key);
      }
    };
  }
});
export default require_react_localstorage();
//# sourceMappingURL=reactjs-localstorage.js.map
