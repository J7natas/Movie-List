import './index.scss'

const Header = (props) => {

  function handleSubmite(event) {
      event.preventDefault();
      const searchValue = event.target[0].value;
      props.onSubmit(searchValue);
      event.target[0].value = '';
  }

  return (
    <div className='Header'>
      <div className='Header__Container'>
      <h1>Movie List</h1>
      <form onSubmit={handleSubmite}>
       <input type='text' placeholder='Pesquise um Filme'></input>
      </form>
      </div>
    </div>
  )
}

export default Header