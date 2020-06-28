import Vue from 'vue'
import VueWindowSize from 'vue-window-size';
import App from './App'

(function() {
    const id = "talking-slack";
    if(document.body[id]) {
        return;
    }
    const target = document.createElement('div');
    target.id = "talking-slack";
    target.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: ${window.innerWidth}px;
    height: ${window.innerHeight}px;
    background-color: rgba(0,0,0,0);`;
    
    document.body.appendChild(target);
    
    Vue.use(VueWindowSize);
    new Vue({
        el: `#${id}`,
        render: h => h(App)
    });
})();
