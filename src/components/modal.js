import { useRef } from "react"
import { useNavigate } from "react-router-dom"


function ModalContent () {
    const form = useRef(null)
    const navigator = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        const fromData = new FormData(form.current)
        navigator(`/${(fromData.get('username'))}`)

    }

    return (
        <form ref={form} action="" onSubmit={handleSubmit}>
            <h2>Busca cualquier usuario</h2>
            <input type="text" name="username" placeholder="Username" />
            <button>
                Buscar
            </button>
        </form>
    )

}

export default ModalContent