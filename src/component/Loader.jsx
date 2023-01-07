import '../assets/style/loader.css'

const Loader = (props) => {
    return <div className="loader-wrapper">
        <div className={`loader ${props.class}`} ></div>
    </div>
}

export default Loader;