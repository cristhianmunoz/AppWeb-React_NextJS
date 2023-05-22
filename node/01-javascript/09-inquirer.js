//09-inquirer.js
// npm init -> package.json -> dependencias -> scripts
// npm install inquirer -> npm i inquirer
// node_modules -> estan las dependencias

const inquirer = require ('inquirer');
async function main(){
    try{
        const respuesta = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'apellido',
                    message: 'Ingresa tu nombre'
                },
                {
                    type: 'input',
                    name: 'edad',
                    message: 'Ingresa tu edad'
                }
            ]);
        console.log('Respuesta', respuesta);
    } catch (e){
        console.error(e);
    }
}

main();
