if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/solvook-utils/sw.js', { scope: '/solvook-utils/' })})}