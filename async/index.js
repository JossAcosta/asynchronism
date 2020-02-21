const doSomethingAsync = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(()=> resolve('Do something Async'), 3000)
        : reject( new Error ( 'Test Error'))
    });
}

const doSomething = async () => {
    const something = await  doSomethingAsync();
    console.log(something);
}

console.log('Before');
doSomething();
console.log('After');

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    }
    catch (error){
        console.error(error)
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');


//----------------------

const arrayUrl = [
    'https://nodejs.org/api/http.html#http_http_get_options_callback)',
    'http://google.com/',
    'http://google.com/',
    'https://nodejs.org/api/http.html#http_http_get_options_callback)',
    'https://www.youtube.com/watch?v=WgSc1nv_4Gw)',
    'https://nodejs.org/api/fs.html#fs_fs_readfile_path_options_callback)',
    'https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)',
    'https://developers.google.com/v8/)',
    'https://www.proyectobyte.com/windows/simbolo-del-sistema/uso-la-interfaz-linea-comandos)',
    'https://www.ibm.com/developerworks/ssa/opensource/library/os-nodejs/index.html)'
  ];
async function processArray(array) {
    array.forEach(async (item) => {
      await func(item);
    })
    console.log('Done!');
  }

processArray(arrayUrl);