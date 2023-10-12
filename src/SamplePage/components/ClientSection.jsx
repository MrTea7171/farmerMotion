import ClientBlock from './ClientBlock'

const ClientSection = () => {
    const clientData = [
        {
            name: 'Verizon',
            year: 2021,
            clientWork:
                'https://images.unsplash.com/photo-1688362809005-e1d27bf427ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            name: 'Verizon',
            year: 2021,
            clientWork:
                'https://images.unsplash.com/photo-1688232543149-5602b136ba11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            name: 'Verizon',
            year: 2021,
            clientWork:
                'https://images.unsplash.com/photo-1688103920333-117afda88518?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
            name: 'Verizon',
            year: 2021,
            clientWork:
                'https://images.unsplash.com/photo-1687913161653-7cddb0ba09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1pYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=736&q=80',
        },
        {
            name: 'Verizon',
            year: 2021,
            clientWork:
                'https://images.unsplash.com/photo-1686904423955-b928225c6488?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgxfGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        },
    ]

    return (
        <div id="clients" className="page">
            <h2 className="clients--title">Mention Clients</h2>
            <div id="clients--container">
                {clientData.map((item) => {
                    return (
                        <ClientBlock
                            key={item.name}
                            clientName={item.name}
                            clientYear={item.year}
                            clientWork={item.clientWork}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ClientSection
