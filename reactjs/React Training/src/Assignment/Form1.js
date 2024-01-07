import  { useState } from 'react';

const GreetingForm = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('Hello, Anonymous');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== '') {
        console.log(name);
      setGreeting(`Hello, ${name}`);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h2>{greeting}</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter your name: </label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleChange}
        /><br/><br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default GreetingForm;
