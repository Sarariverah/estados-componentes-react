const Input = ({name, password}) => {
    return (
        <>
            <div clasName="mb-3 ">
                <input type="text" 
                value={name[0]}
                className="form-control"
                onChange={(e) => password[1](e.target.value)}
                placeholder="Ingresa el nombre" />   
            </div>
            <div clasName="mb-3">
                <input type="password" 
                className="form-control"
                onChange={(e) => password[1](e.target.value)}
                placeholder="Ingresa Contraseña"
                /> 
            </div>
            {password[0] === "252525"
            ? <button className="btn btn-primary w-100">Enviar</button>
            : null }
        </>
    )
}

export default Input