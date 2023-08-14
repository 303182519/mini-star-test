import { initMiniStar } from 'mini-star';

console.log('appjs');

initMiniStar({
  pluginUrlPrefix: 'http://localhost:3000/plugins/',
  plugins: [
    {
      name: 'test',
      url: 'http://localhost:3000/plugins/test/index.js', // NOTICE: 请确保该地址可以被访问
    },
  ],
}).then(() => {
  console.log('Plugin Load Success');
});

