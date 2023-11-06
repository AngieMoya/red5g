import ImageLogo from 'next/image';

export default function Disbursement() {
    return (
        <>
            <div className='flex flex-col'>
                <header className='relative flex h-[4.5rem] items-center justify-center'>
                    <div>
                        <ImageLogo src="/assets/images/Grupo_258.svg" height={24} width={83.11} alt='logo' />
                    </div>
                    <div className='absolute right-2'>
                        <p>Cerrar sesión</p>
                    </div>
                </header>
                <div className='px-10'>
                    <div className='flex justify-between'>
                        <h3>Mis desembolsos</h3>
                        <div>
                            <p>Descargar</p>
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