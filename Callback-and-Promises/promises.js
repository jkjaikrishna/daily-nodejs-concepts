const fetchData = callback => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500);
    });
    return promise;
}

setTimeout(() => {
    console.log('Timer is Done!');
    fetchData().then(text => {
        console.log(text);
    });
}, 2000);

console.log(' I\'m always first');