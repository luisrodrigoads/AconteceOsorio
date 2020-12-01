import React from 'react'
import HeaderPage from './componentsPage/HeaderPage'

export default function UserInitialPage () {
    return (
        <div class="container-fluid">
            <HeaderPage urlPath="/" textButton="Voltar"/>
            <div class="row  align-items-center justify-content-center ">
                <h1>Tela inicial do usuário!!!</h1>
            </div>
        </div>
    );
}

