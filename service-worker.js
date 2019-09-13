/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "06c1bba945567968d7d53f2b58258416"
  },
  {
    "url": "api/index.html",
    "revision": "34f50afc1d8a99596391edaf614a2819"
  },
  {
    "url": "api/rules.html",
    "revision": "d9644e4bc7310bf4ff128c2b68308cc8"
  },
  {
    "url": "assets/css/0.styles.8509a2e6.css",
    "revision": "d1e42bcba5f5d1c9cc7739756aed1013"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c4bb361a.js",
    "revision": "94b1396d01382515928fa33d2c71fc4a"
  },
  {
    "url": "assets/js/11.e2cc44df.js",
    "revision": "e97bc40ce5e62f2f0da7115b0ea1bdfb"
  },
  {
    "url": "assets/js/12.0940d279.js",
    "revision": "367e4910f88a3955a85a0c09315726ee"
  },
  {
    "url": "assets/js/13.07477cde.js",
    "revision": "1af9586aedf6e2e501cdd1b1c82e9aa5"
  },
  {
    "url": "assets/js/14.730d5c68.js",
    "revision": "a1115c3f703523f2819392f4e513170d"
  },
  {
    "url": "assets/js/15.206f7e4b.js",
    "revision": "db31fca03b724bfec7b85dce4a24e02f"
  },
  {
    "url": "assets/js/16.0040b141.js",
    "revision": "a1b511857b8c6e6241201c184c40efee"
  },
  {
    "url": "assets/js/17.058f9a21.js",
    "revision": "222a946688a909cef4e76808138333d7"
  },
  {
    "url": "assets/js/18.cee95005.js",
    "revision": "a00a481dab1e36b61cb62e16fdbb6d2a"
  },
  {
    "url": "assets/js/19.b1ea6a80.js",
    "revision": "9d7b371cf13bbd850218f224cb79d9ff"
  },
  {
    "url": "assets/js/2.b75ba217.js",
    "revision": "b24a1c07ebd4e5595605fe73ae5bbf87"
  },
  {
    "url": "assets/js/20.3f514523.js",
    "revision": "0a050903a56cd549300712dc87a57c15"
  },
  {
    "url": "assets/js/21.d6796f3e.js",
    "revision": "c3b3323ca90177da1b06e02bdbf2b982"
  },
  {
    "url": "assets/js/22.8dac882b.js",
    "revision": "373ef585c8f318ea1443bef912550bce"
  },
  {
    "url": "assets/js/23.f48127e2.js",
    "revision": "bb5bffd4e330a484a289d4f0a44354a0"
  },
  {
    "url": "assets/js/24.eb35d735.js",
    "revision": "0190641768649ec4a044a2a50f2c166a"
  },
  {
    "url": "assets/js/25.5e2eaeed.js",
    "revision": "2cf7e7c09c6aa290fee1d599af8913d9"
  },
  {
    "url": "assets/js/26.4947da6e.js",
    "revision": "064baa71e73d17f00ca1f0aad844aa2a"
  },
  {
    "url": "assets/js/27.cd26b8ec.js",
    "revision": "288de695af68e8525c0f0f4f92fdd222"
  },
  {
    "url": "assets/js/28.968c634b.js",
    "revision": "35e53a3910f115cb809b7309d96c607f"
  },
  {
    "url": "assets/js/29.de5ef328.js",
    "revision": "13ccf0aefc59b2773d6d6480f7160df4"
  },
  {
    "url": "assets/js/3.3cadfb17.js",
    "revision": "b6cc8f8f6835d978236e9c5810882932"
  },
  {
    "url": "assets/js/30.6a5e4d71.js",
    "revision": "397727116c3131f2ae1ecd0960b6f432"
  },
  {
    "url": "assets/js/31.ed612d56.js",
    "revision": "cb10376f5de7d52a71c9bdf6af80ceb0"
  },
  {
    "url": "assets/js/32.a1b1d55a.js",
    "revision": "2aaa24f986df42ffcc029580b4f71c6a"
  },
  {
    "url": "assets/js/33.476fb0eb.js",
    "revision": "26d0645252c5a3e5e1a24306ee03f299"
  },
  {
    "url": "assets/js/4.e50ac0b2.js",
    "revision": "b8fdad6432bd7a1f48ae66635c62aae9"
  },
  {
    "url": "assets/js/5.c5c6208e.js",
    "revision": "0217580cbcb0c6182fa851e8bac0225c"
  },
  {
    "url": "assets/js/6.e21cdd74.js",
    "revision": "59bb124a1963567b374f5df4a6383b3d"
  },
  {
    "url": "assets/js/7.6e62da8a.js",
    "revision": "6b1980c14863d92db8afc00163bf1f72"
  },
  {
    "url": "assets/js/8.3f2ee14b.js",
    "revision": "f85b2ec02653252bae92ba5165b7bad2"
  },
  {
    "url": "assets/js/9.26119701.js",
    "revision": "83eecddc451c654a0f6ac75704318e7e"
  },
  {
    "url": "assets/js/app.e21e9dcc.js",
    "revision": "9fa2c5e51f2814902109b393decd8803"
  },
  {
    "url": "configuration.html",
    "revision": "8604131c9bc35e2ed913c7f4ad19a7bc"
  },
  {
    "url": "examples/backend.html",
    "revision": "6acb5230647fcd419cafd5132dfcd23f"
  },
  {
    "url": "examples/i18n.html",
    "revision": "80459bb5e79e6e5dcfea9581e2ddd2d8"
  },
  {
    "url": "examples/index.html",
    "revision": "1eac6341ea7de7afd4d2d9e206b571ed"
  },
  {
    "url": "examples/multiple-forms.html",
    "revision": "b0ea9b0b0966d113cf3eeff5f0ff8bc5"
  },
  {
    "url": "examples/nuxt.html",
    "revision": "a2cd7bcb0efd460eb236f9d3bcc6b278"
  },
  {
    "url": "examples/ui-libraries.html",
    "revision": "255a51739c79caafc65ca9cb26973293"
  },
  {
    "url": "guide/a11y.html",
    "revision": "b4bcedead5466bbc33cab8d7437804c5"
  },
  {
    "url": "guide/advanced-validation.html",
    "revision": "161190729f2db4bef101975aafba58c5"
  },
  {
    "url": "guide/applying-rules.html",
    "revision": "f3944084397f9a15cb68b5ec5915c594"
  },
  {
    "url": "guide/basic-validation.html",
    "revision": "4ff89bbc2f41ce28424a7f0abc7d9a7e"
  },
  {
    "url": "guide/displaying-errors.html",
    "revision": "0ccc5be6b12e1bcf4d7bf37c0f858105"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "89262f66fc03424348e552a685a91b1b"
  },
  {
    "url": "guide/html5-validation.html",
    "revision": "623d01546704785365aee7e0925d5eb7"
  },
  {
    "url": "guide/index.html",
    "revision": "862caeb29c32544898e6c1bd9c2debc5"
  },
  {
    "url": "guide/interaction-and-ux.html",
    "revision": "679759fda9aa2a259d88b4e5494638cb"
  },
  {
    "url": "guide/localization.html",
    "revision": "c67a920d43b3c705dae26592d4bca0d6"
  },
  {
    "url": "guide/styling.html",
    "revision": "90ebf327e8373dba961aac05ce488123"
  },
  {
    "url": "guide/testing.html",
    "revision": "b4708e8b9eaacfc22d8fd879262420bb"
  },
  {
    "url": "guide/validation-observer.html",
    "revision": "417b1313883a3caaa9a26810aa5632eb"
  },
  {
    "url": "guide/validation-provider.html",
    "revision": "aedc19ef06fcacf8433bda553f754656"
  },
  {
    "url": "img/android-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/android-icon-192x192.png",
    "revision": "749eb7570911aa13fa7a305f7dfdb042"
  },
  {
    "url": "img/android-icon-36x36.png",
    "revision": "94d70fb19e77b88129a2a4b44d30273f"
  },
  {
    "url": "img/android-icon-48x48.png",
    "revision": "6e039016a0d1721277e863e6400107a9"
  },
  {
    "url": "img/android-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/android-icon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/apple-icon-114x114.png",
    "revision": "a1612722a53e36417890844f4aaca4bd"
  },
  {
    "url": "img/apple-icon-120x120.png",
    "revision": "0fdcdb4e43499467315916e07d5a09e0"
  },
  {
    "url": "img/apple-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/apple-icon-152x152.png",
    "revision": "bdd5fb6d3e9976d4b66199750e7398a0"
  },
  {
    "url": "img/apple-icon-180x180.png",
    "revision": "6e4bfb481a5f5546673674ea2f53a80d"
  },
  {
    "url": "img/apple-icon-57x57.png",
    "revision": "2a3e81c26413d7cfb085132e4d0d78ed"
  },
  {
    "url": "img/apple-icon-60x60.png",
    "revision": "f3f63dae941a269726cecb63d5eb8ae4"
  },
  {
    "url": "img/apple-icon-72x72.png",
    "revision": "cf3bbf6c5c50306cb1d2af34148fd4ad"
  },
  {
    "url": "img/apple-icon-76x76.png",
    "revision": "8df9e1335515138c89abe7489d3331ee"
  },
  {
    "url": "img/apple-icon-precomposed.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/apple-icon.png",
    "revision": "0ae26495c87bea19c3238efac57100db"
  },
  {
    "url": "img/favicon-16x16.png",
    "revision": "50325b55b6decbf164f49e8ab2ef3a82"
  },
  {
    "url": "img/favicon-32x32.png",
    "revision": "7d8244cb1190e5818aaf3b5bc7dbe523"
  },
  {
    "url": "img/favicon-96x96.png",
    "revision": "171c58f6d99812028cdc433f706fab88"
  },
  {
    "url": "img/ms-icon-144x144.png",
    "revision": "6e62ce50be0bcd4880124743b11f42b1"
  },
  {
    "url": "img/ms-icon-150x150.png",
    "revision": "868ea201b8975a3f505a31992da8bf60"
  },
  {
    "url": "img/ms-icon-310x310.png",
    "revision": "635b0545d3369a88a7a3238089a38853"
  },
  {
    "url": "img/ms-icon-70x70.png",
    "revision": "476a4d57938b8a33701124593cb2301b"
  },
  {
    "url": "index.html",
    "revision": "adaaa770eba6a41294829f276c80d054"
  },
  {
    "url": "logo.svg",
    "revision": "851182946aa8e35268efa9a9ccd410d2"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
