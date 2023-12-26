const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)

// function Counter(props) {
//   const {item : {id, number}, hdlUpdate} = props
function Counter({item : {id, number}, hdlUpdate,hdlDelete} ) {
  return (
   <div className='counter'>
      <button onClick = {()=>hdlUpdate(id,-1)}> - </button>
      <h3>{number}</h3>
      <button onClick = {()=>hdlUpdate(id,1)}> + </button>
      <button onClick = {()=>hdlUpdate(id,-number)}> C </button>
      <button onClick = {()=>hdlDelete(id)}> X </button>
   </div>
  //  <div className='counter'>
  //     <button onClick = {()=>props.hdlUpdate(props.item.id,-1)}> - </button>
  //     <h3>{props.item.number}</h3>
  //     <button onClick = {()=>props.hdlUpdate(props.item.id,1)}> + </button>
  //     <button onClick = {()=>props.hdlUpdate(props.item.id,-props.item.number)}> C </button>
  //  </div>
  )
}



function SumInfo({ counters, color, size }) {
  const totalSum = counters.reduce((sum, counter) => sum + counter.number, 0);
  const stTitle = {
    color: color,
    fontSize: size === "big" ? "50px" : "40px",
  };

  return (
    <div className="text-center">
    <div className="sumInfo">
      <h1 style={stTitle}>Sum = {totalSum}</h1>
    </div>
    </div>
  );
}



function App() {
  const [counters, setCounters] = React.useState([{ id: 1, number: 0 }]);
  const hdlUpdate = (id, num) => {
    const cloneCounters = [...counters];
    let idx = cloneCounters.findIndex((el) => el.id === id);
    if (cloneCounters[idx].number + num < 0) {
      return;
    }
    cloneCounters[idx].number += num;
    setCounters(cloneCounters);
  };

  const hdlAddCounter = () => {
    let newId = counters.length === 0 ? 1 : counters.at(-1).id + 1;
    setCounters([...counters, { id: newId, number: 0 }]);
  };

  const hdlDeleteCounter = (id) => {
    setCounters((prevCounters) =>
      prevCounters.filter((el) => el.id !== id)
    );
  };




  return (
    <>
      <h1 className="text-center">Codecamp Academy 01</h1>
      <br />
      <button className="text-centers" onClick={hdlAddCounter}>Add Counter</button>
      <SumInfo counters={counters} color="pink" size="big" />
      {counters.map((el) => (
        <Counter key={el.id}item={el}hdlUpdate={hdlUpdate}hdlDelete={hdlDeleteCounter}
        />
      ))}
    </>
  );
}