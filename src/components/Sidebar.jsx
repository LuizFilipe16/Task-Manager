const Sidebar = () => {
    return (
        <div className="h-screen w-64 bg-white">
            <div className="space-y-4 px-8 py-6">
                <h1 className="text-xl text-[#00ADB5]">Task Manager</h1>
                <p>
                    Um simples{' '}
                    <span className="text-[#00ADB5]">
                        organizador de tarefas
                    </span>
                </p>
            </div>
            <div className="flex flex-col p-2">
                <a href="/home" className="text-[#35383E]">
                    Ínicio
                </a>
                <a>Minhas tarefas</a>
            </div>
        </div>
    )
}

export default Sidebar
