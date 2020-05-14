const fetchData = callback => {
    setTimeout(() => {
        callback('Done!');
    }, 1500);
}

setTimeout(() => {
    console.log('Timer is Done!');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

console.log(' I\'m always first');