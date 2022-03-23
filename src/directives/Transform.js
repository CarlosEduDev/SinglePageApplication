import Vue from 'vue';

Vue.directive('meu-transform', {
    bind(el, binding, vnode){
       let current = 0;
       el.addEventListener('dblclick', function(){
           let deg = binding.value || 90;
           let effect;

           if(!binding.arg  || binding.arg == 'rotate'){

           if(binding.modifiers.reverse) current-=deg
           else current+=deg;

           effect = `rotate(${current}deg)`;

           }else if(binding.arg == 'scale'){
               effect = `scale(${deg})`
           }
           
           if(binding.modifiers.animate){ 
               el.style.transition = 'transform 0.5s'
           }
           el.style.transform = effect;
       })
    }
})