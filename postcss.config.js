const tailwindcss=require ('tailwindcss');
const autoprefixer = require('autoprefixer');
const plugins=[
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
] 

const plugin = autoprefixer({ grid: false });


module.exports = { plugins,plugin }