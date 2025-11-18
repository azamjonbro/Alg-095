// function Navbar(props) {
function Navbar({name, age}) {
    // destructuring bu objectni keylarini object ichidan chiqarib olish usuli
    // console.log(props.name);
    // let {name} = props
    // console.log(name);
    console.log(name, age);
    

    
    
    return (
        <nav className='nav'>
            <div className="logobox">
                <a href="">
                    <img src="https://picsum.photos/id/100/300/300" alt=" logo" width="100" height="100" />
                </a>
            </div>
            <div>
                {
                    age==20??<p>{name}</p> // ternary operators
                }
            </div>
            <ul className="header-list">
                <li className="header-item">
                    <a href="" className="header-link">Home</a>
                </li>
                <li className="header-item">
                    <a href="" className="header-link">About</a>
                </li>
                <li className="header-item">
                    <a href="" className="header-link">services</a>
                </li>
                <li className="header-item">
                    <a href="" className="header-link">contact</a>
                </li>
            </ul>
            <div className="buttonbox">
                <button className='login'>Login</button>
                <button className='contact'>Contact</button>
            </div>
        </nav>
    )
}

export default Navbar