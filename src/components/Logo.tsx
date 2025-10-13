import logo from '../assets/images/logo/logo.png'
const Logo = () => {
    return (
        <div className='flex items-center gap-1'>
            <img src={logo} className='w-[70px] lg:w-[70px]' alt="amar pay logo" />
            <h2 className='font-bold text-xl lg:text-2xl mb-2'>Amar Pay</h2>
        </div>
    )
}

export default Logo
