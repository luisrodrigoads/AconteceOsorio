import React from 'react'
import HeaderPage from './componentsPage/HeaderPage'

export default function LoginPage() {
    return (
        <div class="container-fluid">
            <HeaderPage urlPath="/" textButton="Voltar"/>
            <div class="row  align-items-center justify-content-center ">
                <div class="card col-lg-3 col-md-5 col-sm-10 m-3 p-3 bg-light">
                    <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email:</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Senha:</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" class="btn btn-secondary">Entrar</button>
                    </form> 
                </div>
            </div>
        </div>
    );
}

