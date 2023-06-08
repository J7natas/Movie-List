import './index.scss'

const Header = () => {
  return (
    <div className='Header'>
      <div className='Header__Container'>
      <h1>Movie List</h1>
      <input type='text' placeholder='Pesquise um Filme'></input>
      </div>
    </div>
  )
}

export default Header