"use client"
import Image from 'next/image';
import ImageBg1 from 'next/image';
import ImageBg2 from 'next/image';
import ImageBg3 from 'next/image';
import ImageBg4 from 'next/image';
import ImageBg5 from 'next/image';
import ImageBg6 from 'next/image';

export default function Login() {
    return (
        <>
            <form className='relative'>
                <ImageBg1 className='absolute bottom-[344px] -left-[126px] max-w-none -z-10'
                    src="assets/images/Grupo_36052.svg"
                    height={22.895} 
                    width={60.749} 
                    alt="Your background image"/>
                <ImageBg6 className='absolute top-[486px] -right-[120px] max-w-none -z-10'
                    src="assets/images/Grupo_36052.svg"
                    height={22.895} 
                    width={60.749} 
                    alt="Your background image"/>
                <ImageBg2 className='absolute bottom-[254px] -left-[154px] max-w-none -z-10'
                    src="assets/images/Elipse_216.svg"
                    height={8}
                    width={8} 
                    alt="Your background image"/>
                <ImageBg5 className='absolute top-[423px] -right-[132px] max-w-none -z-10'
                    src="assets/images/Elipse_216.svg"
                    height={8}
                    width={8} 
                    alt="Your background image"/>
                <ImageBg3 className='fixed -bottom-[324px] -left-[149px] max-w-none -z-20'
                    src="assets/images/Grupo_32966.svg"
                    height={702.382}
                    width={719.265} 
                    alt="Your background image"/> 
                <ImageBg4 className='fixed -top-[117px] -right-[286px] max-w-none -z-20'
                    src="assets/images/Grupo_32967.svg"
                    height={702.382}
                    width={719.265} 
                    alt="Your background image"/>
                <div className="flex flex-col items-center">
                    <div className='flex justify-center'><Image src="/assets/images/Grupo_258.svg" height={76} width={263.65} alt='logo' /></div>
                    <h1 className="text-center font-open-sans text-large font-bold text-gray-dark pt-3">Sufipay</h1>
                    <p className="text-center font-open-sans text-base font-light pb-8">Administrador comercial</p>
                    <div className="flex flex-col p-4 rounded-xl shadow-3xl w-400 mb-8 bg-white">
                        <div className='flex flex-col border border-gray-light-variant rounded-md mb-3 px-4 py-2'>
                            <label className='text-xs text-gray-variant'>Usuario</label>
                            <input className='text-gray-dark outline-none' type="text" name="Usuario" />
                        </div>
                        <div className='flex flex-col border border-gray-light-variant rounded-md px-4 py-2'>
                            <label className='text-xs text-gray-variant'>Contraseña</label>
                            <input className='text-gray-dark outline-none' type="password" name="Contraseña"></input>
                        </div>
                    </div>
                    <input className='p-3.5 rounded-3xl bg-red text-white font-bold text-base mb-6 w-174' type="submit" value="INGRESAR"></input>
                    <a className='text-gray-dark text-xs underline decoration-solid' href="">No recuerdo mi contraseña</a>
                </div>

            </form>
        </>
    )
}