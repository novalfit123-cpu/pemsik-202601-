// 1 file, 1 function utama

import Menyapa from './Menyapa.jsx'

function Biodata ({nama,nim}){
    //cara untuk beberapa statement
    //dengan <> ... </>
    return <>
    <table border={1}>
        <tr>
            <td>nama</td>
            <td>nim</td>
        </tr>
        <tr>
            <td>{nama}</td>
            <td>A11.2024.15659</td>
        </tr>
    </table>
    </>
}

function App(){
//1. return, 1 statement
// kalo mau lebih dari 1 statetemnt tambahkan tanda <>
// function App(){
//      return <>
//          </> }
     return <>
     <Menyapa />
    <Menyapa />
     <Biodata 
            nama="Noval" 
            nim="A11.2024.15659"
     />
    </>
    
}

//ini perintah jdaikan function utama
export default App;