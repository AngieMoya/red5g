import Image from 'next/image';
import Input from './Input';
import Table from './Table';

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
                <div>
                    <div className='flex justify-between items-center py-8 px-[4.5rem]'>
                        <h3 className='text-gray-dark text-xl font-bold'>Mis desembolsos</h3>
                        <div className='flex relative gap-x-3 text-sm font-medium bg-red rounded-3xl py-3.5 min-w-[11rem] justify-center'>
                            <Image className="absolute left-4" src="/assets/icons/lnr-download.svg" height={24} width={24} alt='cerrar sesion' />
                            <p className='text-white'>Descargar</p>
                        </div>
                    </div>
                    <div className='flex justify-between bg-smoke-white px-[4.5rem] py-4 gap-x-5'>
                        <div className='flex flex-1 items-center border border-gray-light-variant rounded-md px-4 py-2 min-h-[56px] bg-white'>
                            <select className='text-gray-variant flex-1'>
                                <option>Tipo doc.</option>
                            </select>
                        </div>
                        <Input label='Número de documento' type='text' name='numero_doc' placeholder='Número de documento' className='flex-1'/>
                        <Input label='Número de desembolso' type='text' name='numero_desembolso' placeholder='Número de desembolso' className='flex-1'/>
                        <Input label='Desde' type='text' name='desde' placeholder='Desde' rightIcon='/assets/icons/lnr-calendar-full.svg' className='flex-1' />
                        <Input label='Hasta' type='text' name='hasta' placeholder='Hasta' rightIcon='/assets/icons/lnr-calendar-full.svg' className='flex-1'/>
                    </div>
                </div>
                <Table/>
            </div>
        </>
    )
}