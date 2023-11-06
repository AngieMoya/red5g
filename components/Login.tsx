import Image from 'next/image';
import Input from './Input';


export default function Login() {
    return (
        <>
            <form className='relative'>
                <Image className='absolute bottom-[344px] -left-[126px] max-w-none -z-10'
                    src="assets/images/Grupo_36052.svg"
                    height={22.895}
                    width={60.749}
                    alt="Your background image" />
                <Image className='absolute top-[486px] -right-[120px] max-w-none -z-10'
                    src="assets/images/Grupo_36052.svg"
                    height={22.895}
                    width={60.749}
                    alt="Your background image" />
                <Image className='absolute bottom-[254px] -left-[154px] max-w-none -z-10'
                    src="assets/images/Elipse_216.svg"
                    height={8}
                    width={8}
                    alt="Your background image" />
                <Image className='absolute top-[423px] -right-[132px] max-w-none -z-10'
                    src="assets/images/Elipse_216.svg"
                    height={8}
                    width={8}
                    alt="Your background image" />
                <Image className='fixed -bottom-[324px] -left-[149px] max-w-none -z-20'
                    src="assets/images/Grupo_32966.svg"
                    height={702.382}
                    width={719.265}
                    alt="Your background image" />
                <Image className='fixed -top-[117px] -right-[286px] max-w-none -z-20'
                    src="assets/images/Grupo_32967.svg"
                    height={702.382}
                    width={719.265}
                    alt="Your background image" />
                <div className="flex flex-col items-center">
                    <div className='flex justify-center'><Image src="/assets/images/Grupo_258.svg" height={76} width={263.65} alt='logo' /></div>
                    <h1 className="text-center font-open-sans text-large font-bold text-gray-dark pt-3">Sufipay</h1>
                    <p className="text-center font-open-sans text-base font-light pb-8">Administrador comercial</p>
                    <div className="flex flex-col p-4 rounded-xl shadow-3xl w-400 mb-8 bg-white gap-y-3">
                        <Input label='Usuario' type='text' name='usuario' placeholder='Usuario' />
                        <Input label='Contraseña' type='text' name='contraseña' placeholder='Contraseña' />
                    </div>
                    <input className='p-3.5 rounded-3xl bg-red text-white font-bold text-base mb-6 w-174' type="submit" value="INGRESAR"></input>
                    <a className='text-gray-dark text-xs underline decoration-solid' href="">No recuerdo mi contraseña</a>
                </div>

            </form>
        </>
    )
}