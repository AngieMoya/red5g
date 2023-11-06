import Image from 'next/image';

export default function Disbursement() {
    return (
        <>
            <div className='flex flex-col'>
                <header className='relative flex h-[4.5rem] items-center justify-center shadow-blue'>
                    <div>
                        <Image src="/assets/images/Grupo_258.svg" height={24} width={83.11} alt='logo' />
                    </div>
                    <div className='flex gap-x-3 absolute right-3 text-sm font-semibold'>
                        <p>Cerrar sesión</p>
                        <Image src="/assets/icons/lnr-exit.svg" height={24} width={24} alt='cerrar sesion' />
                    </div>
                </header>
                <div className='px-[4.5rem]'>
                    <div className='flex justify-between items-center py-8'>
                        <h3 className='text-gray-dark text-xl font-bold'>Mis desembolsos</h3>
                        <div className='flex relative gap-x-3 text-sm font-medium bg-red rounded-3xl py-3.5 min-w-[11rem] justify-center'>
                            <Image className="absolute left-4" src="/assets/icons/lnr-download.svg" height={24} width={24} alt='cerrar sesion' />
                            <p className='text-white'>Descargar</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <select>
                                <option>Tipo doc.</option>
                            </select>
                        </div>
                        <input type="text" name="Numero_documento" placeholder='Número de documento' />
                        <input type="text" name="Numero_desembolso" placeholder='Número de desembolso' />
                        <input type="text" name="desde" />
                        <input type="text" name="hasta" />
                    </div>
                </div>
            </div>
        </>
    )
}