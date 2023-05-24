import Calculator from './components/Calculator';
import ClickCount from './components/ClickCount';
import Clock from './components/Clock';
import Form from './components/Form';
import HoverCount from './components/HoverCount';
import Counter from './components/Counter';

function App() {
    return (
        <div>
            <Clock />
            <br />
            <Form />
            <br/>
            <Calculator />
            <br/>
            <Counter>
                {(count, incrementCount)=>(<ClickCount count={count} incrementCount={incrementCount} />)}
            </Counter>
            <br />
            <Counter>
                {(count, incrementCount)=>(<HoverCount count={count} incrementCount={incrementCount} />)}
            </Counter>
        </div>
    );
}

export default App;
