// preflight off so the legacy CSS (your original design) is not changed by Tailwind's reset
export default {content:['./index.html','./src/**/*.{js,jsx}'],corePlugins:{preflight:false},theme:{extend:{colors:{brand:'#2563eb','brand-d':'#1d4fd0'}}},plugins:[]};
