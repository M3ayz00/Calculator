import React , {useState} from 'react';
import './App.css';

function App() {
    const [result,setResult]=useState(0);
    const [number,setNumber]=useState('');
    function AddButton(){
        setResult(parseFloat(result)+ parseFloat(number))
        setNumber('');
    }
    function SubButton(){
        setResult((result)- (number))
        setNumber('');
    }
    function MultButton(){
        setResult(parseFloat(result)* parseFloat(number))
        setNumber('');
    }
    function DivButton(){
        if( number ==='0' || number ==='' || number ==='00' || number ==='000' || number ==='0000' || number ==='00000' || number ==='000000' || number ==='0000000'){
            alert('impossible equation')
        }else{
            setResult(parseFloat(result)/ parseFloat(number))
            setNumber('');
        }
        
    }
    function ResButton(){
        setResult(0);
        setNumber('');
    }
    function PutNumber(raqm){
        setNumber(number+ raqm)
    }
    function renderButton(raqm){
        return(
            <button onClick={()=>PutNumber(raqm)}>{raqm}</button>
        );
    }


    return(
        <div className='App'>
            <div className='calculator'>
                <div className='display'>
                    <h3>{result}</h3>
                    <input type="text" value={number} onChange={e=>setNumber(e.target.value)} />
                </div>
                <div className='buttons'>
                    <div className='buttons-row'>
                        {renderButton('1')}
                        {renderButton('2')}
                        {renderButton('3')}
                        <button onClick={AddButton}>+</button>
                    </div>
                    <div className='buttons-row'>
                        {renderButton('4')}
                        {renderButton('5')}
                        {renderButton('6')}
                        <button onClick={SubButton}>-</button>
                    </div>
                    <div className='buttons-row'>
                        {renderButton('7')}
                        {renderButton('8')}
                        {renderButton('9')}
                        <button onClick={MultButton}>*</button>
                    </div>
                    <div className='buttons-row'>
                        {renderButton('0')}
                        <button onClick={ResButton} className='equal'>C</button>
                        <button onClick={DivButton}>/</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;